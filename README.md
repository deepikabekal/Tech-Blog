# Tech-Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A CMS-style blog site where developers can publish their blog posts and comment on other developersâ€™ posts as well.

## Table of Contents
* [Deployed App](#deployedapp)
* [Screenshot](#screenshot)
* [Techologies Used](#technologiesused)
* [User Story](#userstory)
* [Acceptance Criteria](#acceptancecriteria)
* [Contribution](#contribution)

## Deployed App
https://tech-blog-21.herokuapp.com/

## Screenshot
<img src="public/images/screeshot.png" width=650 height = 500>

## Technologies Used
### Front-end
* CSS / Bootstrap
* Javascript
* Express-Handlebars

### Back-end
* NodeJS
* ExpressJS
* MySQL2
* Sequelize ORM
* Connect-session-sequelize
* Bcrypt
* Express Session
* dotenv

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creatorâ€™s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creatorâ€™s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```

## Contribution
1. Fork the repo.
2. Add feature or make changes.
3. Make a pull request for review.
