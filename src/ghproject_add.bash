#!/bin/bash

# Calls gh cli to add a project item
while read -r line
do
  echo $line
  gh api graphql -f query='
    mutation ( $project: ID! $title: String! ) {
      addProjectV2DraftIssue(
        input: {
          projectId: $project
          title: $title
        }
      ) { projectItem { id } }
    }' -f project=$PROJECT_ID -f title="$line" --silent
done
