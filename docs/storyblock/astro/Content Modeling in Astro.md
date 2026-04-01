# Content Modeling in Astro

Learn how to handle different content type and nestable blocks, render rich text, and use story references to manage content globally.

## Setup

[Section titled “Setup”](https://www.storyblok.com/docs/guides/astro/content-modeling#setup)

In the existing space, create a new content type block `article` and an “Articles” folder with content. The article content type block should have the following fields:

- `title`: Text
- `content`: Rich text

Note

Learn more about fields in the [concept](https://www.storyblok.com/docs/concepts/fields).

Create an `article-overview` story as a page type content.

Finally, create a `featured-articles` nestable block with the following field:

- `articles`: References

Add a new `featured-articles` block to the `body` field of the home story and select some articles to be featured.

## Fetch and list all articles

[Section titled “Fetch and list all articles”](https://www.storyblok.com/docs/guides/astro/content-modeling#fetch-and-list-all-articles)

Create a new `src/storyblok/ArticleOverview.astro` file to get all stories from this new content type.

src/storyblok/ArticleOverview.astro

```
---

import { useStoryblokApi } from '@storyblok/astro';

const storyblokApi = useStoryblokApi();

const articles = await storyblokApi.getAll('cdn/stories', {

  version: 'draft',

  starts_with: 'articles',

  content_type: 'article',

});

---

<div>

  <h1>Articles overview</h1>

  <ul>

  {

    articles.map((article) => (

      <li>

        <a href={article.slug}>{article.content.title}</a>

      </li>

    ))

  }

  </ul>

</div>
```

Using the `starts_with` parameter, only stories from the “Articles” folder are fetched. Using the `content_type` parameter, the results are restricted to stories of the content type `article`.

Tip

Learn more about parameters and filter queries in the [Content Delivery API documentation](https://www.storyblok.com/docs/api/content-delivery/v2).

Register this block in the Astro configuration file.

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import { storyblok } from '@storyblok/astro';

import { loadEnv } from 'vite';

const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import mkcert from 'vite-plugin-mkcert';

export default defineConfig({

  integrations: [\
\
    storyblok({\
\
      accessToken: STORYBLOK_DELIVERY_API_TOKEN,\
\
      components: {\
\
        page: 'storyblok/Page',\
\
        grid: 'storyblok/Grid',\
\
        feature: 'storyblok/Feature',\
\
        teaser: 'storyblok/Teaser',\
\
        ['article-overview']: 'storyblok/ArticleOverview',\
\
      },\
\
    }),\
\
  ],

  output: 'server',

  vite: {

    plugins: [mkcert()],

  },

});
```

Now, the article overview page shows a list of links to all articles.

## Create the articles block

[Section titled “Create the articles block”](https://www.storyblok.com/docs/guides/astro/content-modeling#create-the-articles-block)

Add a new `Article.astro` component to render the new article content type.

src/storyblok/Article.astro

```
---

import { storyblokEditable, renderRichText } from '@storyblok/astro';

const { blok } = Astro.props;

const renderedRichText = renderRichText(blok.content);

---

<article {...storyblokEditable(blok)}>

  <h2>{blok.title}</h2>

  <Fragment set:html={renderedRichText} />

</article>
```

To render rich text fields, the `renderRichText` function provided by the `@storyblok/astro` module is used.

Note

Learn more about handling rich text in Storyblok in the [fields concept](https://www.storyblok.com/docs/concepts/fields) and the [@storyblok/richtext reference](https://www.storyblok.com/docs/libraries/js/richtext).

Register this block in the Astro configuration file.

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import { storyblok } from '@storyblok/astro';

import { loadEnv } from 'vite';

const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import mkcert from 'vite-plugin-mkcert';

export default defineConfig({

  integrations: [\
\
    storyblok({\
\
      accessToken: STORYBLOK_DELIVERY_API_TOKEN,\
\
      components: {\
\
        page: 'storyblok/Page',\
\
        grid: 'storyblok/Grid',\
\
        feature: 'storyblok/Feature',\
\
        teaser: 'storyblok/Teaser',\
\
        ['article-overview']: 'storyblok/ArticleOverview',\
\
        article: 'storyblok/Article',\
\
      },\
\
    }),\
\
  ],

  output: 'server',

  vite: {

    plugins: [mkcert()],

  },

});
```

When clicking on links present in the article overview page, an article page renders correctly.

## Handle referenced stories

[Section titled “Handle referenced stories”](https://www.storyblok.com/docs/guides/astro/content-modeling#handle-referenced-stories)

In the `src/pages/[...slug].astro` file, set the `resolve_relations` parameter to get the full object response of referenced stories.

src/pages/\[...slug\].astro

```
---

import { useStoryblokApi } from "@storyblok/astro";

import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";

import Layout from "../layouts/Layout.astro";

const { slug } = Astro.params;

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(`cdn/stories/${slug || "home"}`, {

  version: "draft",

  resolve_relations: 'featured-articles.articles',

});

const story = data.story;

---

<Layout>

  <StoryblokComponent blok={story.content} />

</Layout>
```

Note

Learn more in the [references concept](https://www.storyblok.com/docs/concepts/references) documentation.

Next, create a new `src/storyblok/FeaturedArticles.astro` component.

src/storyblok/FeaturedArticles.astro

```
---

import { storyblokEditable } from '@storyblok/astro';

const { blok } = Astro.props;

const articles = blok.articles;

---

<section {...storyblokEditable(blok)}>

  <h2>Featured articles</h2>

  <ul>

  {

    articles.map((article) => (

      <li>

        <a href={article.full_slug}>{article.content.title}</a>

      </li>

    ))

  }

  </ul>

</section>
```

Register this block in the Astro configuration file.

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import { storyblok } from '@storyblok/astro';

import { loadEnv } from 'vite';

const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import mkcert from 'vite-plugin-mkcert';

export default defineConfig({

  integrations: [\
\
    storyblok({\
\
      accessToken: STORYBLOK_DELIVERY_API_TOKEN,\
\
      // Only required when using the live preview functionality:\
\
      // livePreview: true,\
\
      // bridge: {\
\
          // resolveRelations: ['featured-articles.articles'],\
\
        // },\
\
      components: {\
\
        page: 'storyblok/Page',\
\
        grid: 'storyblok/Grid',\
\
        feature: 'storyblok/Feature',\
\
        teaser: 'storyblok/Teaser',\
\
        ['article-overview']: 'storyblok/ArticleOverview',\
\
        article: 'storyblok/Article',\
\
        ['featured-articles']: 'storyblok/FeaturedArticles',\
\
      },\
\
    }),\
\
  ],

  output: 'server',

  vite: {

    plugins: [mkcert()],

  },

});
```

Now, this component will render links to the featured articles in the home page of the project.

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/guides/astro/content-modeling#related-resources)

[Concept: Fields](https://www.storyblok.com/docs/concepts/fields)

[Concept: References](https://www.storyblok.com/docs/concepts/references)

[@storyblok/richtext Package Reference](https://www.storyblok.com/docs/libraries/js/richtext)

[Previous \\
\\
Dynamic Routing in Astro](https://www.storyblok.com/docs/guides/astro/dynamic-routing) [Next \\
\\
Internationalization in Astro](https://www.storyblok.com/docs/guides/astro/internationalization)

Thanks! We received your feedback.
Send further feedback

An error occurred. Please try again.
Try again

Was this page helpful?

YesLoading...

NoLoading...What went wrong?I found a mistake

Tell us what needs fixing.
Send feedback

Some information is missing

Tell us what's missing.
Send feedback

I could use some help

[Get in touch (opens in a new window)](https://support.storyblok.com/) with our support team or ask our developer community
on [Discord (opens in a new window)](https://www.storyblok.com/join-discord).

It's something else

Tell us more.
Send feedback

This site uses reCAPTCHA and Google's [Privacy Policy (opens in a new window)](https://policies.google.com/privacy).
[Terms of Service (opens in a new window)](https://policies.google.com/terms) apply.

Get in touch with the Storyblok community

[Discord](https://www.storyblok.com/join-discord) [GitHub](https://github.com/storyblok) [YouTube](https://www.youtube.com/c/Storyblok-com) [BlueSky](https://bsky.app/profile/storyblok.com) [X.com](https://www.x.com/storyblok) [LinkedIn](https://www.linkedin.com/company/storyblok)

- [Privacy policy (opens in a new window)](https://www.storyblok.com/legal/privacy-policy)
- [Cookie settings (opens in a new window)](https://www.storyblok.com/cookie-settings)