<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Matter Supply Coding Challenge - MSCo. Blog SPA
</h1>

## 🚀 Quick start

1.  **Clone the repo.**

    Go to the repo on my github account and clone the repo I've been working on, here:

    ```shell
    #clone using this command in your terminal
    git clone git@github.com:davechurilla/MSCoBlogChallenge.git
    ```

1.  **Install with NPM using the `npm install` command**

    `cd` into the directory you just cloned and use `npm install` for dependencies (you may want to remove the package-lock.json file first).

    ```shell
    cd MSCoBlogChallenge/
    npm install
    ```

1.  **Run the app locally**

    If you have Gatsby installed globally, you can use the `gatsby develop` command.

    ```shell
    gatsby develop
    ```
    or
    ```shell
    npm run dev
    ```
    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying the data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

You should be able to get into the admin to add posts using OAuth with your GitHub account info. Other than that, there are a few posts set up already to check out. I did NOT have time to work on animations and page transitions for this... I do remember that you emphasized  this portion of it as being heavily weighted, so I do aplogize about that (to myself, mostly). Also, the search fucntionality is missing, and the blog post page still is just taking on the plain vanilla styles of Netlify out of the box (and is not responsive). I needed to put more focus on other areas of the app in the interest of time.

You should know that as you make new posts, you will need to pull down from the repo to get the latest as all updates to the blog posts are deplyed through Netlify from Github. Hopefully to won't have any trouble gaining access. Let me know if you do. You can also go to the deployed live build that is hosted on Netlify, here to check out your updates:
https://laughing-pare-85fb34.netlify.app/

It does take a while to update re-deploy changes though. Again, let me know if you need to me to trigger a deploy and I can do that.

#### So here was my approach to the project...

## Install the Gatsby Starter template

- Clone and install [gatsby-starter-template](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default/)
- Clear out default template assets and pages
- Import fonts and images into project
- Set up new fonts.css file, importing fonts for use with @font-face. Output images needed from Sketch layout provided by Matter Supply.

Once I found a good bare bones Gatsby starter template to work with, I installed that locally and follwed all the steps above. This left me with a basic Gatsby site architecture, which contained blank pages, and all the assets in place that I needed from Matter Supply to start setting up the UI for the Single Page Application.

## Register with Netlify and add CMS to Gatsby install

- Add Netlify to my new Gatsby install. Check out [sourcing from Netlify CMS](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-netlify-cms/) for all the info on how to link up Netlify CMS with Gatsby.
- The Netlify plugins are installed, registered in the config file(`gatsby-plugin-netlify-cms`), and the YAML file is set up for the admin page(`static/admin/config.yml) with collections values set for 'blogs'. The admin is ready to test out locally.
- Push the test site up to a Github repo and deploy it to the new Netlify account in the next coming steps.
- Setup to autehticate as OAuth application in [Github settings](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider), added application ID and secret provided by Github to Netlify settings.

After some resarch, I found that Netlify to be a perfect solution to work with for an integration with Gatsby to handle this particular challenge... so I ran with it. I started by first doing the install of the Netlify plugins for Gatsy, as explained in the documentation that I linked to above:

  ```shell
  npm install netlify-cms-app gatsby-plugin-netlify-cms
  ```

After registering the Netlify plugin in the `gatsby-config.js` file, I was able to set up the YAML file per the instructions on the Gatsby site and see the Netlify admin page locally at http://localhost:8000/admin/. Since this was saving all post entries as a test at first, I then needed to connect my new Github project repo to Netlify as an application. At that point, deployment begins, but then I had to also add Netlify to Github as an OAuth application to allow read/write access to the repo through the API.

Then once backend settings were adjusted to change the name, repo and branch values to my Github settings in the admin YAML file, Netlify and Github then started to work togther. All posts published in the site admin are now pushed to the Github repo as .md Markdown files, and now all deployments of the app in Netlify are now pulling the latest from the repo. Continous deploymrent is all set up and running on a periodic basis with Netlify.

## Install and setup plugins to parse Markdown to HTML and display to page

- Install plugin to read and query file system using GraphQL. This will be used to pull content for the blog page.

  ```shell
  npm install gatsby-source-filesystem
  ```

- install plugin that will convert the Markdown files to HTML and meta data (title, date of post).

  ```shell
  npm install gatsby-transformer-remark
  ```

Steps above taken, then blog page template set up with newly installed plugin to query file system using GraphQL. Results from the query are looped through using the Javascript `map` method in another file to create an index page that will be the 'parent' page(src/pages/blog.js) to the blog detail page(src/templates/blog.js), which will pull in the correct blog post using the URL string path to reference which markdown file to pull content from. 

**NOTE**: It should be noted that setting the path for the blog entry is a manual process at this point. In the admin section for a new blog entry, the first field on that page is labeled as 'PATH'. I have been using blog/*name-of-blog-entry*. For example, /blog/austin-new-book. This will create the proper path, write it to the .md file with the rest of the blog entry content and save the .md file to the file system inside that new directory so it can be referencd later when needed.

For the UI, the approach was pretty simple. I used Flexbox for the main 2-column 50%/50% layout desktop and tablet, which breaks down to a 1-column flow in mobile (or portrait on tablet). The background image switches between mobile and desktop responsive views from fixed to the bottom to absolute positioned to the right side, respectively. The image is set to a background-size that scales with the window's viewport for above the mobile breakpoint.  The header elements are handled with floats, which I tend to avoid these days, but seemed to work out just fine in this case. Again, I apoligize for the lack of animations and page transitions! I spent the six hours and forced myself to stop and not go beyond that. I had to stop myself today as well while putting this together, but ended up having to do just a little bit of housecleaning. I swear that was it. Nothing else. No more than 5 minutes.

### ***Things I would do with more time...***

 - Animations and transitions between components would be first order of business
 - Refactor the Netlify admin page so the theme follows the creative design provided by Matter Supply, along with adjusting to make it a fully responsive
 - Search functionality in place and fullly functional as expected
 - I'm noticing now that the background image that belongs on the blog entry detail page is not correct. That would need to be put in place, probably with a prop passed to that component to switch the path for that background-image
 - Refactor the styles a bit for consistency
 - Fix the pathing issue for generating new posts
 - Look into more features for formatting the blog posts themselves with the Netlify interface

Well, that all folks! Again, I appreciate your patience and the extra time given to complete this coding challenge. I hope you can at least get a feel my style of work and the way that I approach a project. Please don't hesitate to get back to me, or Rianne and Kellen at 24/7, with questions and comments. I look forward to you feedback!

Thank you!

Dave Churilla

http://portfolio.davechurilla.com

<!-- AUTO-GENERATED-CONTENT:END -->
