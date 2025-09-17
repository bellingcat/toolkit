#!/bin/bash

# Calls gh cli to download project items using cursor-based pagination
while [[ "$HAS_NEXT_PAGE" != false ]]; do
  gh api graphql -f query='
    query (
      $project: ID!
      $after: String!
    ) {
      node(id: $project) {
          ... on ProjectV2 {
            items(first: 100, after: $after) {
              nodes {
                id
                fieldValues(first: 20) {
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
      }' -f project=$PROJECT_ID -f after=$END_CURSOR > temp.json
      export 'END_CURSOR='$(jq -r '.data.node.items.pageInfo.endCursor' temp.json)
      export 'HAS_NEXT_PAGE='$(jq '.data.node.items.pageInfo.hasNextPage' temp.json)
      jq '.data.node.items.nodes' temp.json > nodes_$END_CURSOR.json
done

jq -s '[.[]] | flatten' nodes_*.json > project_items.json
