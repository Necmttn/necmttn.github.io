


## TODO: 
  * [ ] Create a blog post about Plop generators.
  * [ ] Collect Gif Images for use in front page.
  * [ ] Make a decision about front page navigation.
  * [ ] Make a decision about color pallette. 
  * [ ] Fix Image size issue. (BUG) all the images converted to link to somewhere.
  * [ ] add gatsby-styled-components plugin for styling
## WORKING:
  * [ ] Blog post about how use generators.
## DONE:
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
