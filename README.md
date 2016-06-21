# Open Translators to Things Site
Repo for the http://www.opentranslatorstothings.org site. For general discussions around Open Translations to Things, 
please use the issue list in this repo. Otherwise, use the associated issues list of each repo on GitHub/OpenT2T.

This README will help get you started developing in this repo.

## Install Tools

Get your dev environment set up (PC or Mac):
* [Install node.js and npm](https://nodejs.org/en/download/)
* [Install Git](http://git-scm.com/downloads)
* Install your favorite IDE, e.g. [Visual Studio Code](https://code.visualstudio.com/)

We use Bower as a package manager. Bower is a command line utility. Install it globally with npm. Bower requires node, 
npm and git.

```bash
$ npm install -g bower
```

## Get Source

Next, clone this repo to your local machine to get started. Navigate to the directory where you want to clone the repo
to locally, then run:

```bash
$ git clone https://github.com/opent2t/opent2t.github.io.git
```

## Get Dev Dependencies

You will need to install various dependencies to help in your dev workflow, since these are not in git. The development
process is driven by node, and the following command will install the dev dependencies (e.g. a development server).

```bash
$ npm install
```

## Start Developing

Congratulations, you are now set up for the basic development workflow! Just run:

```bash
$ gulp
```

The browser will launch, with the site hosted locally. As you make changes to the source, the app will live-reload 
in the browser to reflect your changes.

## Common Development Workflows

Here are some workflows you might find useful during development:

1. gulp : runs the dev web server (with live reload)
2. bower install component-name --save : downloads and installs a component, which can be used in the site

## Create a Pull Request
Made any changes we should consider? Send us a pull request! Check out [this article](https://help.github.com/articles/creating-a-pull-request/)
on how to get started.

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
