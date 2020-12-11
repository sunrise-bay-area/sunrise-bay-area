# Sunrise Bay Area's hub website

[![Build Status](https://travis-ci.com/sunrise-bay-area/sunrise-bay-area.svg?branch=master)](https://travis-ci.com/sunrise-bay-area/sunrise-bay-area)

[See the hub website live!](https://sunrisebayarea.org/)


## Contributing

We are excited to welcome new contributors to this project! Please see [the contribution guidelines](./CONTRIBUTING.md) for more info on how to contribute.

## Local Development

To get started, clone this repo taking care to include submodules.
```commandline
git clone --recurse-submodules git@github.com:sunrise-bay-area/sunrise-bay-area.git # clone over SSH, (recommended).
# git clone --recurse-submodules https://github.com/sunrise-bay-area/sunrise-bay-area.git # clone over HTTPS.
```

<details>
<summary> (I've already cloned, but I need copies of the submodules.) </summary>

No problem! Just run:

```commandline
git submodule init
git submodule update
```
</details>

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

Content management is currently provided by [Netlify CMS](https://www.netlifycms.org/). This allows developers and non-developers alike to manage content in a simple and version-controlled way.

Locally, you can explore Netlify CMS by running the project and visiting `/admin`.

If you have write-access to this organization, you can edit the content to the live site via [sunrisebayarea.org/admin](https://sunrisebayarea.org/admin).

## Deployment

We currently host [sunrisebayarea.org](https//sunrisebayarea.org) and [sfbay.sunrisemovement.org](https://sfbay.sunrisemovement.org) via [Github Pages](https://pages.github.com/).

Using [Travis](https://travis-ci.org/), changes to this repo are automatically released upon merging to `master`. 

See the [travis config](./.travis.yml) for more info.

# Updating Submodule Dependencies

From time to time, the submodules used by this project will need to be updated. 

To update just the theme (recommended):
```commandline
git submodule update --remote themes/sunrise-hub
```

To update everything, run:
```commandline
git submodule update --remote
```

<details>
<summary>(That didn't work).</summary>

Are you using the latest version of `git`? [Downloading](https://git-scm.com/downloads) the most recent version may fix the issue.

</details>

If you're interested in making concurrent changes to this project and a submodule, please (carefully) follow [this guide](https://git-scm.com/book/en/v2/Git-Tools-Submodules#_working_on_a_submodule).
