# Customa Theme Asset Template

This is the official theme asset template which was used for creating the [customa 2022 rewrite's asset repo](https://github.com/customa/customa-misc-beta).
This may be used in conjunction with the [template repository for themes](https://github.com/customa/theme-starter)!

Amongst other things it features:

- [Github Workflows Setup](https://docs.github.com/en/actions/using-workflows) which generates an icon font, including usage documentation and hosts asset files on [Github pages](https://pages.github.com/).
- Shortened [gitignore](https://git-scm.com/docs/gitignore) setup featuring ignores for
  [node](https://nodejs.org/en/)/[npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/),
  [IntelliJ/Jetbrains Tools](https://www.jetbrains.com/idea/) and [VSCode](https://code.visualstudio.com/)
- Linting and formatting setup (using [Prettier](https://prettier.io/) (JS, MD,...) and [editorconfig](https://editorconfig.org/))
- Automatic hooks using [Husky](https://github.com/typicode/husky)/[Lintstaged](https://github.com/okonet/lint-staged)

## Setup

This was a personal setup, so a few things might not be to your liking. As this is only a template, some things might not be perfect for you, however be free to change things locally and open issues!

After you have setup the project to your liking, there are a few things you should do before getting started!

### Make it yours!

In the code there are several variables that you have to set before you can get started. All of those are prefixed with `<CHANGE_ME:[variable_name]>`.

### Install the dependencies

Currently yarn is used as the package manager of my choice in this project. This can obviously be changed; you can even go further and remove the dependencies and node entirely,
be aware that the pipeline requires a few dependencies however!

### Code ahead!

Add your assets to this repository, push the changes and watch as the pipelines build your fonts and assets!
