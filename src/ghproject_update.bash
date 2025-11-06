#!/bin/bash

# Calls gh cli to run graphql queries
count=0
while read -r query
do
  ((count++))
  gh api graphql -f query="$query" -f project=$PROJECT_ID  --silent
done
echo "Ran $count queries"
