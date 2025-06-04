#!/bin/bash

cd /e/GitHub/courses/goit-react

declare -A repos=(
  ["01-components-styling"]="https://github.com/brzozanet/goit-react-hw-01-components.git"
  ["02.1-forms"]="https://github.com/brzozanet/goit-react-hw-02-phonebook.git"
  ["02.2-state-events"]="https://github.com/brzozanet/goit-react-hw-02-feedback.git"
  ["03.1-live-cycle"]="https://github.com/brzozanet/goit-react-hw-03-phonebook.git"
  ["03.2-http-queries"]="https://github.com/brzozanet/goit-react-hw-03-image-finder.git"
  ["04.1-hooks-context"]="https://github.com/brzozanet/goit-react-hw-04-phonebook.git"
  ["04.2-hooks-context"]="https://github.com/brzozanet/goit-react-hw-04-feedback.git"
  ["05-navigation-movies"]="https://github.com/brzozanet/goit-react-hw-05-movies.git"
  ["06.1-redux-toolkit"]="https://github.com/brzozanet/goit-react-hw-06-phonebook-redux.git"
  ["06.2-redux-toolkit"]="https://github.com/brzozanet/goit-react-hw-06-phonebook.git"
  ["07-async-redux-middleware"]="https://github.com/brzozanet/goit-react-hw-07-phonebook.git"
)

for folder in "${!repos[@]}"; do
  remote_alias="gh-${folder//./-}" # alias bez kropek

  echo "🔄 Importuję $folder z ${repos[$folder]}"
  git remote add "$remote_alias" "${repos[$folder]}"
  git fetch "$remote_alias"

  echo "📁 Dodaję jako folder: $folder"
  git subtree add --prefix="$folder" "$remote_alias" main

  echo "🧹 Usuwam remote: $remote_alias"
  git remote remove "$remote_alias"

  echo "✅ Gotowe: $folder"
  echo "----------------------------------------"
done

echo "🚀 Wszystkie podrepozytoria zostały scalone!"
