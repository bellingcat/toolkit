#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <ORGANIZATION> <PROJECT_NUMBER>"
  exit 1
fi

ORGANIZATION=$1
PROJECT_NUMBER=$2

gh api graphql -f query='
  query($org: String!, $number: Int!) {
    organization(login: $org){
      projectV2(number: $number) {
        id
        fields(first:100) {
          nodes {
            ... on ProjectV2Field {
              id
              name
            }
            ... on ProjectV2SingleSelectField {
              id
              name
              options {
                id
                name
              }
            }
          }
        }
      }
    }
  }' -f org=$ORGANIZATION -F number=$PROJECT_NUMBER
