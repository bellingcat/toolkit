#!/bin/bash

# Calls gh cli to update fields on a project item

# Sets the value of a field
set_field() {
  item_id=$1
  field_id=$2
  field_value=$3 # json, e.g. '{ "text": "value" }'
  gh api graphql -f query='
    mutation (
      $project: ID!
      $item: ID!
      $field: ID!
      $value: String!
    ) {
      set_text: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: $item
        fieldId: $field
        value: $value
      }) {
        projectV2Item {
          id
        }
      }
    }' -f project=$PROJECT_ID -f item=$item_id -f field=$field_id -F value=$field_value --silent
}

# Sets the value of a text field
set_text_field() {
  echo "Set text field $1 $2 $3"
  item_id=$1
  field_id=$2
  field_value=$3
  set_field $item_id $field_id "{ 'text': '$3' }'
}

set_select_field() {
  item_id=$1
  field_id=$2
  field_value=$3
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
    }' -f project=$PROJECT_ID -f item=$item_id -f status_field=$field_id -f status_value=$field_value --silent
}

set_date_field () {
  item_id=$1
  field_id=$2
  field_value=$3
  gh api graphql -f query='
    mutation (
      $project: ID!
      $item: ID!
      $date_field: ID!
      $date_value: Date!
    ) {
      set_date: updateProjectV2ItemFieldValue(input: {
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
    }' -f project=$PROJECT_ID -f item=$item_id -f date_field=$field_id -f date_value=$field_value  --silent
}
while read -r project_item
do
  echo $project_item
  item_id=$(echo $project_item | jq '.id')
  title=$(echo $project_item | jq '.title')
  tool_id=$(echo $project_item | jq -r '.toolId')
  date_submitted=$(echo $project_item | jq -r '.date_submitted')
  date_updated=$(echo $project_item | jq -r '.updatedAt')
  published=$(echo $project_item | jq -r '.published')
  url=$(echo $project_item | jq -r '.url')
  space=$(echo $project_item | jq -r '.space')
  author=$(echo $project_item | jq -r '.changeRequestAuthor')
  reviewers=$(echo $project_item | jq -r '.reviewers')
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
  if [[ "$title" != "null" ]]; then
    echo "Set title: $title"
    set_text_field $item_id "$TITLE_FIELD_ID" $title
  fi
  if [[ "$status_name" != "null" ]]; then
    # set status
    echo "Set status: $status_value"
    set_select_field $item_id "$STATUS_FIELD_ID" $status_value
  fi
  if [[ "$published" = true ]]; then
    # set published
    echo "Set published true"
    set_select_field $item_id "$PUBLISHED_FIELD_ID" $PUBLISHED_TRUE_OPTION_ID
	fi
  if [[ "$space" != "null" ]]; then
    echo "Set space: $space"
    set_text_field $item_id "$SPACE_URL_FIELD_ID" $space
  fi
  if [[ "$author" != "null" ]]; then
    echo "Set author: $author"
    set_text_field $item_id "$AUTHOR_FIELD_ID" $author
  fi
  if [[ "$reviewers" != "null" ]]; then
    echo "Set reviewers: $reviewers"
    set_text_field $item_id "$REVIEWERS_FIELD_ID" $reviewers
  fi
  if [[ "$date_updated" != "null" ]]; then
    echo "Set updated: $date_updated"
    set_date_field $item_id "$UPDATED_DATE_FIELD_ID" $date_updated
  fi
  if [[ "$date_submitted" != "null" ]]; then
    echo "Update date_submitted $date_submitted"
    set_date_field $item_id "$DATE_FIELD_ID" $date_submitted
  fi
  if [[ "$url" != "null" ]]; then
    echo "Update latest change request url $url"
    set_text_field $item_id "$URL_FIELD_ID" $url
  fi
  if [[ "$tool_id" != "null" ]]; then
    echo "Update tool Id $tool_id"
    set_text_field $item_id "$TOOLID_FIELD_ID" $tool_id
  fi
done
