---
title: Gatsby.JS Zero-to-Hero - Schedule
date: '2017-10-08'
layout: post
draft: false
tags: ["javascript", "gatsby"]
---

As i said earlier we gonna build this website from strach which mean we will not use any premade starters nor css frameworks.
in order to keep everything schedule and stady i like to keep **Schedule / TO DO** list which allow me to see,
what needs to be done. I like to keeping it most simple and stupid way in `md` file 🤓 .

<script src="https://gist.github.com/9e846f5e3ce369ff4a54f42e8d1be64c.js"></script>


## Starting empty project.

in order to start gatsby project you need to install Gatsby CLI. 

You can install via: 

`npm install --global gatsby-cli`

Once it's done  when you done that. when you type following into your terminal you should have same or higher version printed out there.

```sh
$ gatsby -V
// 1.1.6
```

then go head `cd` to your project folder
```
cd path/to/your/projects/folder
```
and create your project. 

```
gatsby new gatsby-site
```
once it's done.  It will create holder like this. plus to that i create 2 more folder inside of `src` folder. 
`components` and `data` folder. to keep things clean and stady.

```
├── LICENSE
├── README.md
├── gatsby-config.js
├── package-lock.json
├── package.json
├── src
│   ├── components  
│   ├── data
│   ├── layouts
│   ├── pages
│   └── templates
└── yarn.lock
```
after installing the depencies you can run the project 
```
yarn develop
```
then it will start local server for development at port `8000` and graphql server `___graphql` in the same port.  
```
  Your site is running at http://localhost:8000
  Your graphql debugger is running at http://localhost:8000/___graphql
```
![firstLook](first_run.png)
Yeah it's loook neat. and total empty but we will change it get ready.
![blog](blog_page.png)
i try to open blog page but it's empty because we don't have plugin for creating converting markdown files to page. one of 
coolest feature of gatsby is it has bunch of plugin. whatever you need therese high change that it's already drop-in ready 
as plugin.
let's start adding plugins for give a shape this article. 

first we gonna add 
```
yarn add gatsby-source-filesystem
```
it's Plugin for creating File nodes from the file system. The various "transformer" plugins transform `File` nodes into various other types of data e.g. `gatsby-transformer-json` transforms `JSON` files into `JSON` data nodes and `gatsby-transformer-remark` transforms markdown files into `MarkdownRemark` nodes from which you can query an HTML representation of the markdown. 

after adding npm package. you also need to add it to `gatsby-config.js` as following.

gatsby-config.js
```
 {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    },
  },
```
after adding our new plugin. restart `gatsby dev server` now if we go to our graqhiql we are able to see all our files. 
![First graphql](firs_query.png)

as i said earlier we will we will need a converter for markdown files. that's where `gatsby-transformer-remark` get in to business. and couple more plugin for images.  

as usual 
```
yarn add gatsby-transformer-remark gatsby-remark-responsive-image gatsby-remark-responsive-iframe gatsby-remark-prismjs gatsby-remark-copy-linked-files gatsby-remark-smartypants
```



and to our gatsby-config.js
```
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
```

and now if we go to our graphql we can see our blog pages there 

```
query {
  allMarkdownRemark {
    edges {
      node {
        html
      }
    }
  }
}
``` 
when we query it like this.
![first markdown](first_markdown.png)

now it's time to render our blog post.

let's create one component for list our blog posts

<script src="https://gist.github.com/3e8e4dbf7900c4fccf9ba579aae92a44.js"></script>

![blog list ](blog_list.png)

yeah that's looking neat to me. 

before start styling the page. I wanna create routes for single blog pages as well. but before head to that i wanna add one more plugin for i18n. thanks to [@ocanaangelo](https://twitter.com/ocanaangelo). Which is drop-in solution for gatsby.

in order to make it 
we need to add this to our config.

```
// in gatsby-config.js
plugins: [
  {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                      slug,
                      langKey
                      }
                  }
                  }
              }
          }
          `
        }
      }
    }
]
```
<script src="https://gist.github.com/8a7c59af25ddfebfd15b43d39bbe4b02.js"></script>

and we create our blog post page like below.

<script src="https://gist.github.com/c642d48431f98cec2cfad23f9262dd2c.js"></script>

once we restart dev server gatsby will recognize we have changed a config so it will remap all our markdown data. 


!Yay 😎  already looking good.
![first page render](single_post_first_render.png)



  >  Let's add some generator for keep our blog post structure same. instead of copying paste we can basicly run script for it. 

  >  the tool which i'm gonna use is [Plop](https://github.com/amwmedia/plop) it's awesome well knowing one.

  the last quote i wrote about 2 weeks ago. and didn't had enough time write a blog post. currently i have somehow
  running generator but it's not as good as i wanted. so i would like to postbone it.

  that past 2 weeks on my free times i was working on [Gatsby Source Trello](https://github.com/Necmttn/gatsby-source-trello)
  and just today i deploy working version. Yay ! 
  next will be about styling. because i wanna start styling my home page.


  [next](../03)
