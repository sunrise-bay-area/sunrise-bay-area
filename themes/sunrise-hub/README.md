# Sunrise Hub Hugo Theme

This Hugo theme is intended to be a reusable starter for Sunrise Hubs to create their own Hugo sites.

## Configuring Netlify CMS

This CMS manages content and copy via [Netlify CMS](https://www.netlifycms.org/), which allows developers and non-developers alike to manage content in a simple and version-controlled way.

To configure Netlify CMS, you'll need to:
- Copy static/admin/config.yml.example to your Hugo site's repository as static/admin/config.yml. Replace the `repo` and `site_url` with your site's information. For a working example, you can visit the [Sunrise Bay Area's repo](https://github.com/sunrise-bay-area/sunrise-bay-area/blob/master/static/admin/config.yml).
- You'll also need to configure OAuth for the CMS. Unless you're using Netlify for deploys, you'll need to set up an OAuth client and add the `base_url` and `auth_endpoint` to the config. The Bay Area hub uses [Firebase](https://github.com/Herohtar/netlify-cms-oauth-firebase). Otherwise, if you are using Netlify, follow the [documentation here](https://www.netlifycms.org/docs/github-backend/).

Locally, you can explore Netlify CMS by running the project (`hugo server` and visiting `localhost:1313/admin`.
