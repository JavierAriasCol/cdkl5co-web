# Dynamic Routing in Astro

Set up a catch-all route in the Astro project to render new stories dynamically.

## Fetch and render a story dynamically

[Section titled “Fetch and render a story dynamically”](https://www.storyblok.com/docs/guides/astro/dynamic-routing#fetch-and-render-a-story-dynamically)

Create a `src/pages/[…slug].astro` file to fetch all stories in the space.

src/pages/\[…slug\].astro

```
---

import { useStoryblokApi } from "@storyblok/astro";

import StoryblokComponent from "@storyblok/astro/StoryblokComponent.astro";

import Layout from "../layouts/Layout.astro";

const { slug } = Astro.params;

const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get(`cdn/stories/${slug || "home"}`, {

  version: "draft",

});

const story = data.story;

---

<Layout>

  <StoryblokComponent blok={story.content} />

</Layout>
```

Get the `slug` from the current route parameters, making an exception for the home story to be `/`.

With this approach, your project can automatically handle new stories you add to your space.

Tip

Remove the `index.astro` file from the project.

Note

To deploy in SSG mode, dynamic routes need to be manually defined. Use the [links endpoint](https://www.storyblok.com/docs/api/content-delivery/v2/links/) of the Content Delivery API and Astro’s `getStaticPaths()` to provide all routes. Learn more about [dynamic routes in the Astro documentation](https://docs.astro.build/en/guides/routing/#dynamic-routes).

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/guides/astro/dynamic-routing#related-resources)

[Dynamic Routes in Astro](https://docs.astro.build/en/guides/routing/#dynamic-routes)

[Content Delivery API: Retrieve a Single Story](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-a-single-story)

[Content Delivery API: Retrieve Multiple Stories](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-multiple-stories)

[Previous \\
\\
Visual Preview in Astro](https://www.storyblok.com/docs/guides/astro/visual-preview) [Next \\
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