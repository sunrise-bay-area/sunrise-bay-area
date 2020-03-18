# Sunrise Bay Area's hub website

[![Build Status](https://travis-ci.com/sunrise-bay-area/sunrise-bay-area.svg?branch=master)](https://travis-ci.com/sunrise-bay-area/sunrise-bay-area)

[See the hub website live!](https://sfbay.sunrisemovement.org/)


## Contributing

We are excited to welcome new contributors to this project! Please see [the contribution guidelines](./CONTRIBUTING.md) for more info on how to contribute.

## Local Development

This project uses [Hugo and Netlify CMS](https://www.netlifycms.org/docs/hugo/) for development and content management.

[Hugo](https://gohugo.io/) is a static site generator. For Mac users, it can be installed from your command line with:

```
brew install hugo
```

For other operating systems, check out the installation instructions [here](https://gohugo.io/getting-started/installing).

Once Hugo is installed, run this command to start the project locally:

```
hugo server
```

Visit the site at http://localhost:1313.

## Content Management

Content management is currently a work in progress. We eventually hope to manage content and copy via [Netlify CMS](https://www.netlifycms.org/), which will allow developers and non-developers alike to manage content in a simple and version-controlled way.

Locally, you can explore Netlify CMS by running the project and visiting /admin.

## Deployment

We currently host the Sunrise Bay Area site via [Github Pages](https://pages.github.com/).

Changes to this repo are automatically deployed to Github Pages upon merging to master using [Travis](https://travis-ci.org/).
See the [travis config](./.travis.yml) for more info.
