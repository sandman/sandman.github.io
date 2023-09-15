+++
title = "Customizing and Deploying your Zola blog to GitHub Pages"
date = 2023-09-15
updated = 2023-09-15
description = "How I customized and deployed this blog."

[taxonomies]
tags = ["blog", "Zola", "Github Pages", "deployment"]
+++

# Customizing and Deploying Your Zola Blog to GitHub Pages

If you're a blogger or a developer looking to create and host your blog with minimal fuss, [Zola](https://www.getzola.org/) is an excellent choice. Zola is a fast, simple, and flexible static site generator written in [Rust](https://www.rust-lang.org/). One of the great things about Zola is that it can be easily deployed to GitHub Pages, a **free and reliable hosting service provided by GitHub**. In this tutorial, I'll walk you through the process of customizing and deploying your Zola blog to GitHub Pages step by step.

## Prerequisites

Before we begin, make sure you have the following prerequisites in place:

1. **Zola Installed**: If you haven't already, install Zola on your local machine. You can download it from the [official website](https://www.getzola.org/documentation/getting-started/installation/). You will need Zola 0.17.2 or newer.
2. **A GitHub Account**: You'll need a GitHub account to create a repository for your blog and host it on GitHub Pages.

## Step 1: Set up your Zola blog locally

### Choose a Theme

Zola allows you to use themes to style your blog. You can find a variety of Zola themes on the [Zola themes repository](https://github.com/getzola/themes). I used the clean and flexible theme called [Tabi](https://github.com/welpo/tabi):

```bash
git clone https://github.com/welpo/tabi.git
cd tabi
zola serve
```

You can view your blog by opening your web browser and visiting `http://localhost:1111`.

### Create Content

Start adding your blog content to the `content` directory. Zola uses Markdown for content creation, making it easy to write and format your blog posts.

Customize your content by adding front matter, which is metadata about your blog posts, such as title, date, and tags.

Here's an example of what a blog post might look like:

```markdown
+++
title = "My First Blog Post"
date = 2023-09-15
tags = ["Zola", "GitHub Pages"]
+++

Welcome to my first blog post! This is where I share my thoughts and ideas about Zola and GitHub Pages.
```

### Customize Your Blog's Configuration

Edit the `config.toml` file to customize your blog's settings, such as the title, description, and other site-wide options. For a live preview of the Tabi theme and documentation, head to https://welpo.github.io/tabi/

## Step 2: Deploy Your Blog to GitHub Pages

### Add your blog as a GitHub repository

Now that your blog is ready, it's time to create a GitHub repository to host it. Follow these steps:

1. Log in to your GitHub account.
2. Create a new repository with the name  `<github username>.github.io`. Ensure the repository is public.
3. Add your local git repo to the above repo. There are [many ways](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git) to do this.

### Custom web domains

If you want a custom website domain for your blog, instead of the default https:// `<github_username>.github.io`, you will need to purchase your Domain and update the DNS records to point to Github. [An excellent tutorial ](https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef)that shows how to do this for GoDaddy. Other domain registrars should be similar.  \

### Deploying to GitHub Pages

To deploy your Zola blog to GitHub Pages, you'll need to use [GitHub Actions](https://github.com/features/actions). GitHub Actions are workflows that automate various tasks. We'll set up a GitHub Action to build and deploy your blog whenever you push changes to your repository. The official Zola documentation has an [excellent page](https://www.getzola.org/documentation/deployment/github-pages/#github-actions) on this. However, there are some gotchas:

* The latest (as of 15 Sep. 2023) version v0.17.2 of the shalzz/zola-deploy-action has some issues, so I used the earlier release v0.17.1 in the YAML definition:
```yaml
# On every push this script is executed
on:
  push:
    branches:
    - main
name: Build and deploy GH Pages
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: checkout
        uses: actions/checkout@v3.0.0
      - name: build_and_deploy
        uses: shalzz/zola-deploy-action@v0.17.1
        env:
          # Target branch
          PAGES_BRANCH: gh-pages
          # Provide personal access token (automatic token)
          TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BUILD_THEMES: false
``````

## Step 6: Access Your Blog

After the GitHub Action completes, your Zola blog will be live on GitHub Pages. You can access it by visiting `https://<username>.github.io/<repository-name>`, where `<username>` is your GitHub username, and `<repository-name>` is the name of your GitHub repository.

## Conclusion

Customizing and deploying your Zola blog to GitHub Pages is a straightforward process that allows you to create and share your content with the world. With Zola's simplicity and GitHub Pages' reliability, you can focus on what you do best—writing and sharing your thoughts and ideas. Happy blogging!
