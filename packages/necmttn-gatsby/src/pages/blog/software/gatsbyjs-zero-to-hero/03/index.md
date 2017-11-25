---
title: Gatsby.JS Zero-to-Hero - Styling
date: '2017-10-26'
layout: post
draft: false
tags: gatsby
---

When it's about styling in react community has bunch of alternatives.. and also I'm kind a relatively following this
topic pretty close and sofar. my favorite is [styled-components](https://github.com/styled-components/styled-components)
it's awesome project started by [Max Stoiber](https://github.com/mxstbr). He is also starter of [React-Boilerplate](https://github.com/react-boilerplate/react-boilerplate) one of the most famous react boilerplate project. which has over 15K star. 

He is one of the rockstar of the JS community.anyway that's enough of promoting Max , let's get start adding
`styled-components` like many other things gatsby also has a drop-in plugin for this. and you can install like this;

```
npm install --dev gatsby-plugin-styled-components
```
and add don't forget to add your `gatsby-config.js` following;
```
plugins: [
  `gatsby-plugin-styled-components`,
]

```

currently my front page code look like this,

<script src="https://gist.github.com/accdd0ac80b7bf4b6ca793619dbfe533.js"></script>

let's start adding some styling ha, gatsby uses layout structure for rendering regular pages in default structure.
that's why currently have a header. but it's not really my style tough so..

src/layouts/index.js
<script src="https://gist.github.com/f5948301bfcf9d87f523ffc4fda2395f.js"></script>

let's start removing old style, css-in-javascript styled div.
