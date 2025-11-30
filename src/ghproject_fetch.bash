#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <PROJECT_ID>"
  exit 1
fi

PROJECT_ID=$1

# Calls gh cli to download project items using cursor-based pagination
while [[ "$HAS_NEXT_PAGE" != false ]]; do
  result=$(gh api graphql -f query='
    query (
      $project: ID!
      $after: String!
    ) {
      node(id: $project) {
          ... on ProjectV2 {
            items(first: 100, after: $after) {
              nodes {
                id
                fieldValues(first: 100) {
                  nodes{
                    ... on ProjectV2ItemFieldTextValue {
                      text
                      field {
                        ... on ProjectV2FieldCommon {
                          name
                        }
                      }
                    }
                    ... on ProjectV2ItemFieldDateValue {
                      date
                      field {
                        ... on ProjectV2FieldCommon {
                          name
                        }
                      }
                    }
                    ... on ProjectV2ItemFieldSingleSelectValue {
                      name
                      field {
                        ... on ProjectV2FieldCommon {
                          name
                        }
                      }
                    }
                  }
                }
                content{
                  ... on DraftIssue {
                    title
                  }
                }
              }
              pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
              }
            }
          }
        }
      }' -f project=$PROJECT_ID -f after=$END_CURSOR)
      export 'END_CURSOR='$(echo $result | jq -r '.data.node.items.pageInfo.endCursor')
      export 'HAS_NEXT_PAGE='$(echo $result | jq '.data.node.items.pageInfo.hasNextPage')
      if [[ "$END_CURSOR" != "null" ]]; then
        echo $result | jq '.data.node.items.nodes' > nodes_$END_CURSOR.json
      fi
done

jq -s '[.[]] | flatten' nodes_*.json
