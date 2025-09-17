#!/bin/bash

# Calls gh cli to update a project item
# Sets the value of the `Status` field
# Sets the value of the `Date submitted` field.'
# Sets the value of the `URL` field.'
while read -r project_item
do
  echo $project_item
  item_id=$(echo $project_item | jq '.id')
  title=$(echo $project_item | jq '.title')
  date_submitted=$(echo $project_item | jq -r '.date_submitted')
  echo $date_submitted
  url=$(echo $project_item | jq -r '.url')
  status_value=$(echo $project_item | jq -r '.status')
  case $status_value in
    "Published")
      status_value=$PUBLISHED_OPTION_ID
      ;;
    "Review Requested")
      status_value=$REVIEW_OPTION_ID
      ;;
  esac
  gh api graphql -f query='
    mutation (
      $project: ID!
      $item: ID!
      $status_field: ID!
      $status_value: String!
      $date_field: ID!
      $date_value: Date!
      $url_field: ID!
      $url_value: String!
    ) {
      set_status: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: $item
        fieldId: $status_field
        value: {
          singleSelectOptionId: $status_value
          }
      }) {
        projectV2Item {
          id
        }
      }
      set_date_posted: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: $item
        fieldId: $date_field
        value: {
          date: $date_value
        }
      }) {
        projectV2Item {
          id
        }
      }
      set_url: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: $item
        fieldId: $url_field
        value: {
          text: $url_value
        }
      }) {
        projectV2Item {
          id
        }
      }
    }' -f project=$PROJECT_ID -f item=$item_id -f status_field=$STATUS_FIELD_ID -f status_value=$status_value -f date_field=$DATE_FIELD_ID -f date_value=$date_submitted -f url_field=$URL_FIELD_ID -f url_value=$url  --silent
done
