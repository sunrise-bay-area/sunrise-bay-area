window.themeCMSConfig = {
  "media_folder": "static/img",
  "public_folder": "/img",
  "publish_mode": "editorial_workflow",
  "collections": [
    {
      "label": "Sitewide Data",
      "name": "data",
      "files": [
        {
          "label": "Header",
          "name": "header",
          "file": "data/header.yml",
          "fields": [
            {
              "label": "Logo",
              "name": "logo",
              "widget": "image"
            },
            {
              "label": "Hub Name Top Line",
              "name": "navbarNameTop",
              "widget": "string"
            },
            {
              "label": "Hub Name Bottom Line",
              "name": "navbarNameBottom",
              "widget": "string"
            },
            {
              "label": "Additional Menu Items",
              "name": "menuItems",
              "widget": "list",
              "fields": [
                {
                  "label": "Link Text",
                  "name": "text",
                  "widget": "string"
                },
                {
                  "label": "Link Url",
                  "name": "url",
                  "widget": "string"
                }
              ]
            },
            {
              "label": "Banner",
              "name": "banner",
              "widget": "object",
              "collapsed": true,
              "fields": [
                {
                  "label": "Banner URL",
                  "name": "url",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Banner Text",
                  "name": "text",
                  "widget": "string",
                  "required": false
                },
                {
                  "label": "Banner ID (no spaces!)",
                  "name": "id",
                  "widget": "string",
                  "required": false
                }
              ]
            }
          ]
        },
        {
          "label": "Footer",
          "name": "footer",
          "file": "data/footer.yml",
          "fields": [
            {
              "label": "Facebook URL",
              "name": "facebookUrl",
              "widget": "string",
              "required": false
            },
            {
              "label": "Twitter URL",
              "name": "twitterUrl",
              "widget": "string",
              "required": false
            },
            {
              "label": "Instagram URL",
              "name": "instagramUrl",
              "widget": "string",
              "required": false
            },
            {
              "label": "Email",
              "name": "email",
              "widget": "string",
              "required": false
            },
            {
              "label": "Donation URL",
              "name": "donateUrl",
              "widget": "string"
            },
            {
              "label": "Donation Name",
              "name": "donateName",
              "widget": "string"
            },
          ]
        }
      ]
    },
    {
      "label": "Home Page",
      "name": "homepage",
      "files": [
        {
          "label": "Index Page",
          "name": "index",
          "file": "content/_index.md",
          "fields": [
            {
              "label": "Title",
              "name": "title",
              "widget": "string"
            },
            {
              "label": "Masthead Image",
              "name": "mastheadImage",
              "widget": "image"
            },
            {
              "label": "Masthead Welcome",
              "name": "bannerWelcome",
              "widget": "string"
            },
            {
              "label": "Join Button URL",
              "name": "joinUrl",
              "widget": "string"
            },
            {
              "label": "Join Button Text",
              "name": "joinText",
              "widget": "string"
            },
            {
              "label": "Body",
              "name": "body",
              "widget": "markdown"
            }
          ]
        }
      ]
    },
    {
      "label": "Pages",
      "name": "pages",
      "create": true,
      "folder": "content/pages",
      "fields": [
        {
          "label": "Title",
          "name": "title",
          "widget": "string"
        },
        {
          "label": "Url (e.g. /about)",
          "name": "url",
          "widget": "string"
        },
        {
          "label": "Menu",
          "name": "menu",
          "widget": "select",
          "multiple": true,
          "options": ["main"],
          "default": [],
          "required": false
        },
        {
          "label": "Content",
          "name": "body",
          "widget": "markdown"
        }
      ]
    },
    {
      "name": "blog",
      "label": "Blog",
      "folder": "content/blog",
      "create": true,
      "slug": "{{year}}-{{month}}-{{day}}-{{slug}}",
      "preview_path": "blog/{{slug}}",
      "preview_path_date_field": "date",
      "fields": [
        {
          "label": "Title",
          "name": "title",
          "widget": "string"
        },
        {
          "label": "Publish Date",
          "name": "date",
          "widget": "datetime"
        },
        {
          "label": "Description",
          "name": "description",
          "widget": "string"
        },
        {
          "label": "Body",
          "name": "body",
          "widget": "markdown"
        }
      ]
    }
  ]
};
