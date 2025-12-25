#!/bin/bash

# Calls gh cli to add a project item
while read -r line
do
  echo $line
  item_id="$(gh api graphql -f query='
    mutation ( $project: ID! $title: String! ) {
      addProjectV2DraftIssue(
        input: {
          projectId: $project
          title: $title
        }
      ) { projectItem { id } }
    }' -f project=$PROJECT_ID -f title="$line" --jq '.data.addProjectV2DraftIssue.projectItem.id')"
  gh api graphql -f query='
    mutation (
      $project: ID!
      $item: ID!
      $field: ID!
    ) {
      set_tool_id: updateProjectV2ItemFieldValue(input: {
        projectId: $project
        itemId: $item
        fieldId: $tool_field
        value: {
          text: $tool_value
        }
      }) { projectV2Item { id } }
    }' -f project=$PROJECT_ID -f item=$item_id -f tool_field=$TOOLID_FIELD_ID -f tool_value=$line --silent
done
