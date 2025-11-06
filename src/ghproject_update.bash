#!/bin/bash

# Calls gh cli to run graphql queries
while read -r query
do
  echo $query
  gh api graphql -f query="$query" -f project=$PROJECT_ID  --silent
done
