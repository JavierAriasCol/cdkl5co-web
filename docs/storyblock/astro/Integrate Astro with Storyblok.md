# Integrate Astro with Storyblok

Use Storyblok to manage the content of your Astro website.

Note

This guide has been tested with the following package versions:

- `astro@5.7.14`
- `storyblok-astro@6.2.0`
- Node.js v22.13.0

## Setup

[Section titled “Setup”](https://www.storyblok.com/docs/guides/astro#setup)

Create a new Astro project following the [official installation](https://docs.astro.build/en/install-and-setup/) page.

If you already have a Storyblok account, go to [app.storyblok.com](http://app.storyblok.com/#/signup) or [log in with GitHub](https://github.com/login?client_id=Iv23liC8pLXD6VcT2EbS&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3DIv23liC8pLXD6VcT2EbS%26redirect_uri%3Dhttps%253A%252F%252Fapp.storyblok.com%252F#/login) to continue.

Create a [new blank space (opens in a new window)](https://app.storyblok.com/#/me/spaces/new?tab=select-plan) to follow the tutorial from scratch, or start from the [core blueprint (opens in a new window)](https://app.storyblok.com/#/spaces/new/blueprint?blueprintReference=starter).

[Create one and start a free Storyblok space](https://app.storyblok.com/#/signup) No Storyblok account yet?

## Installation

[Section titled “Installation”](https://www.storyblok.com/docs/guides/astro#installation)

In the terminal, `cd` into the Astro project and install the `@storyblok/astro` package.

Terminal window

```
npm install @storyblok/astro
```

In the `astro.config.mjs` file, initialize the Storyblok module:

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import { storyblok } from '@storyblok/astro';

import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

const { STORYBLOK_DELIVERY_API_TOKEN } = loadEnv(

  import.meta.env.MODE,

  process.cwd(),

  '',

);

export default defineConfig({

  integrations: [\
\
    storyblok({\
\
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,\
\
      apiOptions: {\
\
        region: 'eu',\
\
      },\
\
    }),\
\
  ],

  output: 'server',

});
```

Caution

Ensure to set the correct `region` value depending on the server location of your Storyblok space. Learn more in the [@storyblok/js package reference](https://www.storyblok.com/docs/libraries/js/js-sdk).

In the root of the project, create a `.env` file to store the Storyblok access token.

.env

```
STORYBLOK_DELIVERY_API_TOKEN=<YOUR-ACCESS-TOKEN>
```

Note

Learn how to get an [access token](https://www.storyblok.com/docs/concepts/access-tokens) for your Storyblok project.

The Storyblok integration will make features like fetching, components registration and bridge available across your project.

## Fetch a single story

[Section titled “Fetch a single story”](https://www.storyblok.com/docs/guides/astro#fetch-a-single-story)

In the `src/pages/index.astro` file, replace Astro's default contents with the following.

src/pages/index.astro

```
---

import { useStoryblokApi } from "@storyblok/astro";

import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";

import Layout from "../layouts/Layout.astro";

const storyblokApi = useStoryblokApi()

const { data } = await storyblokApi.get("cdn/stories/home", {

  version: "draft",

});

const { story } = data;

---

<Layout>

  <StoryblokComponent blok={story.content} />

</Layout>
```

The `StoryblokComponent` dynamically renders content type and nestable blocks. In this case, it looks for the content type block of the home story.

## Create and register blocks

[Section titled “Create and register blocks”](https://www.storyblok.com/docs/guides/astro#create-and-register-blocks)

Create `Page.astro` component to render all stories of the `page` content type, such as the home story.

src/storyblok/Page.astro

```
---

import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";

const { blok } = Astro.props;

---

<main>

  {

    blok.body?.map((blok) => {

      return <StoryblokComponent blok={blok} />;

    })

  }

</main>
```

Using `StoryblokComponent` iterate through the `body` field and render the blocks in it.

Stories might contain a `body` or similar field which consists of an array with several blocks of custom types (for example, Feature, Teaser, Grid) in it.

Create the code for these components as follows.

src/storyblok/Feature.astro

```
---

const { blok } = Astro.props

---

<div class="feature">

  <span>{blok.name}<span>

</div>
```

src/storyblok/Teaser.astro

```
---

const { blok } = Astro.props;

---

<div class="teaser">

  <h2>{blok.headline}</h2>

</div>
```

src/storyblok/Grid.astro

```
---

import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";

const { blok } = Astro.props;

---

<div class="grid">

  {

    blok.columns?.map((nestedBlok) => {

      return <StoryblokComponent blok={nestedBlok} />

    })

  }

</div>
```

Similar to `Page.astro`, `Grid.astro` iterates over the `columns` block field.

Add these components to the `astro.config.mjs` file.

astro.config.mjs

```
import { defineConfig } from "astro/config";

import { storyblok } from "@storyblok/astro";

import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");const { STORYBLOK_DELIVERY_API_TOKEN} = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({

  integrations: [\
\
    storyblok({\
\
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,\
\
      apiOptions: {\
\
        region: "eu", // Optional. Defaults to "eu"\
\
      },\
\
      components: {\
\
      page: "storyblok/Page",\
\
      grid: "storyblok/Grid",\
\
      feature: "storyblok/Feature",\
\
      teaser: "storyblok/Teaser",\
\
    }\
\
    }),\
\
  ],

  output: 'server',

});
```

Run the server and visit the site in your browser.

Terminal window

```
npm run dev
```

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/guides/astro#related-resources)

[Storyblok's Astro Blueprint Repository](https://github.com/storyblok/blueprint-core-astro)

[@storyblok/astro Package Reference](https://www.storyblok.com/docs/libraries/js/astro-sdk)

[Concept: Blocks](https://www.storyblok.com/docs/concepts/blocks)

[Content Delivery API: Retrieve a Single Story](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-a-single-story)

[Astro Docs](https://astro.build/docs)

[Next \\
\\
Visual Preview in Astro](https://www.storyblok.com/docs/guides/astro/visual-preview)

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