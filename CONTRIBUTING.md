# Contributing

Thank you so much for your interest in contributing!. All types of contributions are encouraged and valued.
Please read the [CODE of CONDUCT](CODE_OF_CONDUCT.md).

## Setting Up Your Code

First, fork the repository to your own account and run the following command:

- Clone your repo: `git clone https://github.com/<your_github_username>/BlogHive`
- Change directory to the working dir: `cd BlogHive`
- Install the dependencies: `pnpm install`

## Issue

If you see an open issue you would like to work on, just ask the maintainers to assign it to you.
Issues that are not assigned are assumed open, and to avoid conflicts, please wait for the issue to be assigned to you before starting working on it.

Next, use `git checkout -b <your_branch_name>` to create a new branch for your work. It's always a good idea to avoid committing changes directly to your `master/main` branch - this keeps it clean and avoid some weird issues.

Branch names should be a brief description of your changes, such as `[issue-number]-fix-typo` for fixing a typo.

> [!Important]
> In order to make git commit messages easier to read and faster to reason about, we follow some guidelines on most commits to keep the format predictable. Check [Conventional Commits specification](https://www.conventionalcommits.org/) for more information about our guidelines.

## Pull Request

Push your changes to your forked repository by using `git push -u origin <your_branch_name>`.

- `-u` tells `git` to set the upstream, it's the same as `--set-upstream`
- `origin` tells `git` to push to your fork
- `your_branch_name` tells `git` to push to a branch - this MUST match the name of the branch you created locally.

Make sure to change the PR title in something like: `fix: correct typo` or `feat: add node latest`

## License​

By contributing to this project, you agree that your contributions will be licensed under its [Apache-2.0 LICENSE](LICENSE).
