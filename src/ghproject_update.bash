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
  published=$(echo $project_item | jq -r '.published')
  url=$(echo $project_item | jq -r '.url')
  status_name=$(echo $project_item | jq -r '.status')
  status_value=""
  case $status_name in
    "Published")
      status_value=$PUBLISHED_OPTION_ID
      ;;
    "Review Requested")
      status_value=$REVIEW_OPTION_ID
      ;;
  esac
  # set status
  echo "Set status: $status_value"
  gh api graphql -f query='
    mutation (
      $project: ID!
      $item: ID!
      $status_field: ID!
      $status_value: String!
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
    }' -f project=$PROJECT_ID -f item=$item_id -f status_field=$STATUS_FIELD_ID -f status_value=$status_value --silent
  if [[ "$published" = true ]]; then
    # set published
    echo "Set published: $PUBLISHED_TRUE_OPTION_ID"
    gh api graphql -f query='
      mutation (
        $project: ID!
        $item: ID!
        $status_field: ID!
        $status_value: String!
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
      }' -f project=$PROJECT_ID -f item=$item_id -f status_field=$PUBLISHED_FIELD_ID -f status_value=$PUBLISHED_TRUE_OPTION_ID --silent
	fi
  if [[ "$date_submitted" != "null" ]]; then
    echo "Update item $item_id in project $PROJECT_ID date_field $DATE_FIELD_ID url_field $URL_FIELD_ID"
    gh api graphql -f query='
      mutation (
        $project: ID!
        $item: ID!
        $date_field: ID!
        $date_value: Date!
        $url_field: ID!
        $url_value: String!
      ) {
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
      }' -f project=$PROJECT_ID -f item=$item_id -f date_field=$DATE_FIELD_ID -f date_value=$date_submitted -f url_field=$URL_FIELD_ID -f url_value=$url  --silent
  fi
done
