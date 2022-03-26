# Setup
`npm i`
`npm run dev`

# Github
## Contribute

1. Make a new branch, where `<BRANCHNAME>` is: `feature/`, `bugfix/` or `chore/` and then what its about
`git checkout -b <BRANCHNAME>`
example: `git checkout -b feature/add-home-page`

2. Save work locally
`git add .` or `git add <FILE>`
`git commit -m "<MESSAGE>"`

3. Ensure you're on the correct branch
`git status` or `git branch`

4. Push changes
`git push`

5. Create a Pull Request (PR) by coming to this repo in github, finding your branch, and pressing the PR button

## Conflicts
In the case of a merge conflict (seen in the PR), it's time to rebase. DO NOT MERGE

1. If local changes haven't been saved stash them
`git stash save`

2. Navigate to the main branch and update your local version to the latest version
`git checkout main`
`git pull`

3. Navigate back to your branch
`git checkout <BRANCHNAME>`

4. Rebase
* start: `git rebase main`
* check editor for conflicts and choose which version, or a combination of both is correct
* add changes: `git add .`
* continue to next step: `git rebase --continue`
* repeat last two steps until rebase is done, commit no necessary here
* If more work stash: `git stash pop`, fix conflicts like before, add them and commit
* push up reabased branch: `git push --force` (Force used here because we reordered history on purpose)

# Notes and ideas

![Screenshot 2022-03-17 175049](https://user-images.githubusercontent.com/69822058/158900785-68948fc8-3f4b-487a-b7d6-6601e8883dea.png)
