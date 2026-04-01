# Visual Preview in Astro

Enhance your editorial and development experience by connecting your local project with Storyblok’s visual editor.

## Set the default environment

[Section titled “Set the default environment”](https://www.storyblok.com/docs/guides/astro/visual-preview#set-the-default-environment)

Go to **Settings** → **Visual Editor** and set the default environment to the URL of the local development server. Astro’s default is `localhost:4321`, for example.

Caution

The preview area requires an `https` secure connection. Learn more in the [Visual Editor concept](https://www.storyblok.com/docs/concepts/visual-editor).

For Astro, install the `vite-plugin-mkcert` package.

Terminal window

```
npm install vite-plugin-mkcert --save-dev
```

Add the plugin to your Astro config file.

astro.config.mjs

```
import { defineConfig } from "astro/config";

import { storyblok } from "@storyblok/astro";

import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

const { STORYBLOK_DELIVERY_API_TOKEN} = loadEnv(import.meta.env.MODE, process.cwd(), "");

import mkcert from 'vite-plugin-mkcert'

export default defineConfig({

  integrations: [\
\
    storyblok({\
\
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,\
\
      apiOptions: {\
\
        region: "eu", // Choose the correct region from your Space.\
\
      },\
\
    }),\
\
  ],

  output: 'server',

  vite: {

    plugins: [ mkcert() ]

  },

});
```

Restart the dev server if necessary.

To render the home story correctly in the Visual Editor, select the **Config** section and type `/` in the **Real path** field.

You may have to open the URL in a separate browser tab and accept the certificate first.

## **Bridge with the Visual Editor**

[Section titled “Bridge with the Visual Editor”](https://www.storyblok.com/docs/guides/astro/visual-preview#bridge-with-the-visual-editor)

Connect Astro components with their Storyblok counterparts via the `storyblokEditable` module.

src/storyblok/Feature.astro

```
---

const { blok } = Astro.props

---

<div class="feature" {...storyblokEditable(blok)}>

<div class="feature">

 <span>{blok.name}</span>

</div>
```

Now, click on a component and see its corresponding block open up in the editor.

Note

Learn more about the available [Bridge options](https://www.storyblok.com/docs/libraries/js/astro-sdk) for this package.

## Enable live preview in the Visual Editor

[Section titled “Enable live preview in the Visual Editor”](https://www.storyblok.com/docs/guides/astro/visual-preview#enable-live-preview-in-the-visual-editor)

By default, live preview in `@storyblok/astro` is disabled. To enable live preview, set `livePreview` to `true` in the `astro.config.mjs` file.

astro.config.mjs

```
export default defineConfig({

 integrations: [\
\
   storyblok({\
\
     accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,\
\
     livePreview: true,\
\
     // other options\
\
   }),\
\
 ],

});
```

In `src/pages/index.astro` file, replace the existing Astro code with the following.

src/pages/index.astro

```
---

import { useStoryblokApi, getPayload } from "@storyblok/astro";

import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";

import Layout from "../layouts/Layout.astro";

const payload = await getPayload({

  locals: Astro.locals,

});

const storyblokApi = useStoryblokApi();

// Use live preview data or fallback to API

const story =

  payload?.story ??

  (

    await storyblokApi.get("cdn/stories/home", {

      version: "draft",

    })

  ).data.story;

---

<Layout>

  <StoryblokComponent blok={story.content} />

</Layout>
```

The `getPayload` function provides access to live preview story data from `Astro.locals`. If a payload exists, the index page uses the story from the live preview. If a payload does not exist, it falls back to the Content Delivery API and fetches the `home` story in draft version. The `StoryblokComponent` dynamically renders each component defined in the home story.

Note

See the [getPayload](https://www.storyblok.com/docs/libraries/js/astro-sdk#getpayload) section for more information.

## Deploy the preview environment

[Section titled “Deploy the preview environment”](https://www.storyblok.com/docs/guides/astro/visual-preview#deploy-the-preview-environment)

Make sure to fetch the `draft` version of the content and use a preview access token. Deploy in client-side or server-side rendering mode to reflect content updates dynamically upon saving content.

For the production environment, fetch the `published` version of the content and use a public access token.

Note

Learn more about preview and production environments in this [tutorial](https://www.storyblok.com/tp/create-preview-production-environments-and-deploy).

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/guides/astro/visual-preview#related-resources)

[@storyblok/astro Package Reference](https://www.storyblok.com/docs/libraries/js/astro-sdk)

[Concept: Visual Editor](https://www.storyblok.com/docs/concepts/visual-editor)

[mkcert Homebrew Formula](https://formulae.brew.sh/formula/mkcert#default)

[mkcert GitHub Repository](https://github.com/FiloSottile/mkcert)

[Previous \\
\\
Integrate Astro with Storyblok](https://www.storyblok.com/docs/guides/astro) [Next \\
\\
Dynamic Routing in Astro](https://www.storyblok.com/docs/guides/astro/dynamic-routing)

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