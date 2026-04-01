---
url: "https://www.storyblok.com/docs/concepts/access-tokens"
title: "Access Tokens | Storyblok Documentation"
---

# Access Tokens

Storyblok offers a rich set of APIs and services for delivering and managing content and assets. Tokens protect access to these services.

## Read-only access tokens

[Section titled “Read-only access tokens”](https://www.storyblok.com/docs/concepts/access-tokens#read-only-access-tokens)

Use read-only access tokens to view the content and assets in a specific space. To manage per-space tokens and generate new ones, select the space and open **Settings** → **Access Tokens**.

The following types of tokens are available:

- **Public:** access `published` content using the [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2).
- **Preview:** access `draft` and `published` content using the [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2).
- **Asset:** access [private assets](https://www.storyblok.com/docs/concepts/assets) using the [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2).
- **Release:** access content associated with a specific release. Requires the [Releases App](https://www.storyblok.com/docs/api/management/releases/).
- **Theme:** access a theme for use by the Storyblok rendering service. _Note: the Storyblok rendering service is deprecated_.

Tip

To specify how long the CDN caches the content, set a time-to-live (TTL).

The following snippet uses the [@storyblok/js](https://www.storyblok.com/docs/libraries/js/js-sdk) SDK to fetch published stories via the [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-multiple-stories):

```
import { apiPlugin, storyblokInit } from '@storyblok/js';

const { storyblokApi } = storyblokInit({

  accessToken: 'YOUR_ACCESS_TOKEN',

  use: [apiPlugin],

});

// Use a public or preview access token

const { data } = await storyblokApi.get('cdn/stories', {

  version: 'published',

});
```

For other languge-specific snippets, visit the Content Delivery API [authentication](https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/authentication) page.

## Read-write access tokens

[Section titled “Read-write access tokens”](https://www.storyblok.com/docs/concepts/access-tokens#read-write-access-tokens)

Use these tokens to perform CRUD (create, read, update, delete) operations via the [Management API](https://www.storyblok.com/docs/api/management). Learn more about personal and OAuth tokens in the Management API [authentication](https://www.storyblok.com/docs/api/management/getting-started/authentication) page.

### Personal access token

[Section titled “Personal access token”](https://www.storyblok.com/docs/concepts/access-tokens#personal-access-token)

This token is account-specific. To manage existing tokens or generate new ones, open your [**Account settings**](https://app.storyblok.com/#/me/account?tab=token): **My account** → **Account settings** → **Personal access tokens**.

Tip

To help prevent unauthorized access to your Storyblok account, set an expiration date for the token.

### **OAuth access token**

[Section titled “OAuth access token”](https://www.storyblok.com/docs/concepts/access-tokens#oauth-access-token)

This token is tied to a single space. Obtain it via the [OAuth2 authentication flow](https://www.storyblok.com/docs/plugins/oauth-authorization-flow) and is tied to a single space.

[Previous \\
\\
Introduction](https://www.storyblok.com/docs/concepts) [Next \\
\\
Assets](https://www.storyblok.com/docs/concepts/assets)

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