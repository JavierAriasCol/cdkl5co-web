# Internationalization in Astro

Learn how to create a basic implementation of field-level translation in an Astro project.

## Setup

[Section titled “Setup”](https://www.storyblok.com/docs/guides/astro/internationalization#setup)

In your space, open **Settings** → **Internationalization** → **Languages** and add `es` (Spanish).

- In the article content type block schema, set the `title` and `content` fields as translatable.
- Go to each article, select the Spanish language, and provide translated content. You can also use [AI Translations](https://www.storyblok.com/docs/editor-guides/ai-translations).

Note

Learn more in the [internationalization concept](https://www.storyblok.com/docs/concepts/internationalization).

## Use the language parameter

[Section titled “Use the language parameter”](https://www.storyblok.com/docs/guides/astro/internationalization#use-the-language-parameter)

Update the `src/pages/[...slug].astro` file to support language paths.

src/pages/\[...slug\].astro

```
---

import { useStoryblokApi } from '@storyblok/astro';

import StoryblokComponent from '@storyblok/astro/StoryblokComponent.astro';

import Layout from '../layouts/Layout.astro';

const slug = Astro.params.slug?.split('/') ?? [];

const availableLanguages = ['es'];

const language = availableLanguages.includes(slug[0]) ? slug[0] : undefined;

if (language) {

  slug.shift();

}

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(

  `cdn/stories/${slug && slug.length > 0 ? slug.join('/') : 'home'}`,

  {

    version: 'draft',

    resolve_relations: 'featured-articles.articles',

    language,

  },

);

const story = data.story;

---

<Layout>

  <StoryblokComponent blok={story.content} />

</Layout>
```

First, an array with all language codes configured in the space is defined.

The language code is the first part of the `full_slug` of each language-specific story version, and the Visual Editor is configured to request that path. For example, the Spanish version of `articles/example-article` would be `es/articles/example-article`.

In the example code, if the first array element of the `slug` is included in the `languages` array, it is set as the language parameter for the API request. Moreover, the first array element is subsequently removed so that the slug used for the API request does not contain any language-specific information. The language is exclusively handled via the `language` parameter.

Note

Note that this approach works for all stories except the home story, if it is defined as the root. Internationalization is highly implementation-specific, and how to handle the home story as well as other aspects is dependent on the exact project requirements. In Astro, you may, for example, want to create a static route `pages/es/index.vue` that takes precedence over the dynamic route `pages/[…slug].astro`. This static route can be configured to fetch the home story in Spanish, rendering it when `https://localhost/es` is visited.

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/guides/astro/internationalization#related-resources)

[Concept: Internationalization](https://www.storyblok.com/docs/concepts/internationalization)

[Internationalization in Astro](https://docs.astro.build/en/guides/internationalization/)

[Previous \\
\\
Content Modeling in Astro](https://www.storyblok.com/docs/guides/astro/content-modeling)

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