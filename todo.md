


## TODO: 

#### TIL Page
  * [ ] Work on react helmet for SEO.
  * [ ] - Add a Social Media Meta tags for Picture etc.
  * [ ] - Generate picture of the content each time creates.
  * [ ] - Add twitter share api for make the content shared with popular #hastags and @necmttn .
  * [ ] - Add Disqus in to TIL pages. 
  * [ ] - Add Likes & Comments Count in to TIL index page.
  * [ ] add auto commit after generate #TIL && push
#### Blog Page
  * [ ] Fix Image size issue. (BUG) all the images converted to link to somewhere.
  * [ ] Add Footer. 
  * [ ] - Self Bio
  * [ ] - Share Buttons
  * [ ] - Disqus
  * [ ] - Email Me 
  * [ ] - Counter
#### Analytics.
  * [ ] Facebook Pixel
  * [ ] Google Analytics
#### Testimationals.
  * [ ] Get Reviwed.


## DONE:
  * [ ] Blog post about how use generators.
  * [x] add gatsby-styled-components plugin for styling
  * [x] Create a blog post about Plop generators.
  * [x] Collect Gif Images for use in front page.
  * [x] Make a decision about front page navigation.
  * [x] Write article about how to manage secrets in OpenSourceRepos.
  * [x] Create Trello scrapper. ( it's turn out a plugin )
  * [x] create navigation for blog. 
  * [x] Add link to blog list. 
  * [x] Fix post generator. 
    - Add Category logic. 
  * [X] Add gatsby i18n plugin for multi language.
  * [X] Add remark plugin
  * [x] Setup folder structure.
  * [x] Start empty project.


querying single card by ID

  ```
query ($id: String!){
  allTrelloCard(filter: {
    id: {eq: $id}
  }) {
		edges {
		  node {
		    id
        name
		  }
		}
  }
}

  ```
