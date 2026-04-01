---
url: "https://www.storyblok.com/docs/concepts/assets"
title: "Assets | Storyblok Documentation"
---

# Assets

Storyblok includes a native [digital asset manager](https://www.storyblok.com/mp/asset-management-system) (DAM) for asset management and delivery. To upload and manage assets, open the space’s **Asset** library.

To upload and manage assets programmatically, use the Management API’s [assets endpoints](https://www.storyblok.com/docs/api/management/assets/).

Note

Learn how to use Storyblok's asset manager in the [Assets manual](https://www.storyblok.com/docs/manuals/assets).

## Asset CDN

[Section titled “Asset CDN”](https://www.storyblok.com/docs/concepts/assets#asset-cdn)

Storyblok delivers all assets via AWS CloudFront [CDN](https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/cdn). Assets are first served from the origin service, and subsequent calls are cached on the CDN to minimize latency. Learn more in the [caching concept](https://www.storyblok.com/docs/concepts/caching).

Images are served from different domains, depending on the [space's region](https://www.storyblok.com/docs/manuals/spaces).

Tip

To resolve potential CORS-related limitations, use the `a2` domains.

Ensure the project's frontend references the correct domain when handling assets:

| Region | URL |
| --- | --- |
| United States | https://a-us.storyblok.com, https://a2-us.storyblok.com |
| Europe | https://a.storyblok.com, https://a2.storyblok.com |
| Australia | https://a-ap.storyblok.com, https://a2-ap.storyblok.com |
| Canada | https://a-ca.storyblok.com |
| China | https://a.storyblokchina.cn |

## Custom assets domain

[Section titled “Custom assets domain”](https://www.storyblok.com/docs/concepts/assets#custom-assets-domain)

To set up a custom domain for assets, follow the tutorial for your cloud service:

[Set up a Custom Assets Domain Using Amazon CloudFront](https://storyblok.com/tp/set-up-a-custom-assets-domain-using-amazon-cloudfront)

[Set up a Custom Assets Domain Using Microsoft Azure](https://storyblok.com/tp/set-up-a-custom-assets-domain-using-microsoft-azure)

[Set up a Custom Assets Domain Using Google Cloud](https://storyblok.com/tp/set-up-a-custom-assets-domain-using-google-cloud)

## Image Service

[Section titled “Image Service”](https://www.storyblok.com/docs/concepts/assets#image-service)

Use Storyblok's [Image Service](https://www.storyblok.com/docs/api/image-service) to modify files programmatically: change the file format, optimize the quality, resize, set a focal point, or apply various filters.

## Asset MIME types

[Section titled “Asset MIME types”](https://www.storyblok.com/docs/concepts/assets#asset-mime-types)

The asset library supports the following MIME types:

- **Image:**`image/x—png`, `image/png`, `image/gif`, `image/jpeg`, `image/avif`, `image/svg+xml`, `image/webp`
- **Video:**`video/*`, `application/mp4`, `application/x—mpegurl`, `application/vnd.apple.mpegurl`, `audio/webm`
- **Audio:**`audio/*`
- **Text:**`application/msword`, `text/plain`, `application/pdf`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

Caution

Spaces without payment info only accept assets with the `image/*` MIME type.

Unverified spaces accept assets of most MIME types, except `text/*` and `application/*`.

## Metadata fields

[Section titled “Metadata fields”](https://www.storyblok.com/docs/concepts/assets#metadata-fields)

Metadata simplifies asset management and improves the site visitor's experience. Storyblok's DAM includes default fields—namely, alt text, title/caption, copyright, and source. Developers can extend these with custom fields that match the organization's and project's specific needs.

Note

Custom metadata fields and translatable assets metadata may not be available on your plan. Check Storyblok's [pricing](https://www.storyblok.com/pricing).

To manage default metadata fields and create custom fields, open **Settings** → **Assets Library**. Under **Custom metadata fields**, name the new field, choose the asset file type, select **Add**, and **Save**.

Custom metadata fields support regular expression (regex) validation similar to the standard [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern)`pattern` [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/pattern). Like their default counterparts, custom fields can also be set as **Required** and **Translatable**.

Tip

Learn how to work with multiple languages in the [Internationalization concept](https://www.storyblok.com/docs/concepts/internationalization).

Both default and custom metadata fields can be managed programmatically via Storyblok's APIs:

- **Content Delivery API:** to retrieve an array of assets associated with stories in a space, use [the](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-multiple-stories#:~:text=resolve_assets%20number)`resolve_assets` [query parameter](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-multiple-stories#:~:text=resolve_assets%20number) of the `stories` endpoint.
- **Management API:** to retrieve or update metadata fields of assets, use the [assets endpoint](https://www.storyblok.com/docs/api/management/assets). The asset object includes a `meta_data` [object](https://www.storyblok.com/docs/api/management/assets/the-asset-object#:~:text=to%20the%20public-,meta_data%20object,-Includes%20custom%20metadata) that lists all metadata fields of each file, both default and custom ones.

## Obtain image dimensions via the API

[Section titled “Obtain image dimensions via the API”](https://www.storyblok.com/docs/concepts/assets#obtain-image-dimensions-via-the-api)

The example below demonstrates how to extract the width and height of an image from a Storyblok asset URL:

```
const assetUrl = "//a.storyblok.com/f/51376/664x488/f4f9d1769c/visual-editor-features.webp"

const dimensions = {

  width: assetUrl.split('/')[5].split('x')[0],

  height: assetUrl.split('/')[5].split('x')[1]

}

console.log(dimensions)
```

This method only works with unmodified images. The asset URL doesn't reflect changes in the following scenarios:

- if a user resized the image using the [**Image Editor**](https://www.storyblok.com/docs/manuals/image-editor)
- if a user replaced the image with a resized version using the [Replace Asset](https://www.storyblok.com/apps/replace_asset) app

Note

Deleted assets may return a 403 or 404 [error message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#client_error_responses). To recover one or multiple files, follow the [Assets manual](https://www.storyblok.com/docs/manuals/assets#:~:text=The%20Deleted%20assets%20tab).

A more reliable way to track image dimensions is to use the Content Delivery API's [stories endpoint](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-a-single-story#:~:text=relations%20is%20reached.-,resolve_assets,-number). In the request, set `resolve_assets=1` to retrieve all assets associated with the story. The response now includes the `assets` array, where each object contains a  `meta_data` object with a `size` key.

```
"assets": [\
\
    {\
\
      "id": 17075319,\
\
      "content_type": "image/webp",\
\
      "content_length": 6333586,\
\
      "created_at": "2025-08-21T08:17:24.429Z",\
\
      "updated_at": "2025-08-21T08:18:02.522Z",\
\
      "deleted_at": null,\
\
      "alt": "",\
\
      "title": "",\
\
      "copyright": "",\
\
      "focus": "",\
\
      "s3_filename": "f/51376/664x488/f4f9d1769c/visual-editor-features.webp",\
\
      "meta_data": {\
\
        "size": "400x300"\
\
      }\
\
    }\
\
  ]
```

It may take a few minutes for the `size` property to apply the updated image dimensions.

## Private assets

[Section titled “Private assets”](https://www.storyblok.com/docs/concepts/assets#private-assets)

Mark assets as private to temporarily or permanently hide them from the library and restrict access to these files. Private assets are only accessible via the Content Delivery API [with an](https://www.storyblok.com/docs/concepts/access-tokens#read-only-access-tokens) [**Asset**](https://www.storyblok.com/docs/concepts/access-tokens#read-only-access-tokens) [type access token](https://www.storyblok.com/docs/concepts/access-tokens#read-only-access-tokens).

Tip

Learn how to [retrieve a private asset's URL](https://www.storyblok.com/docs/api/content-delivery/v2/assets/get-signed-url) via the Content Delivery API, or follow an extensive tutorial on [how to serve gated content with Storyblok private assets](https://www.storyblok.com/tp/how-to-serve-gated-content-with-storyblok-private-assets).

The following example uses the [@storyblok/js](https://www.storyblok.com/docs/libraries/js/js-sdk) SDK to retrieve a private asset:

```
import { apiPlugin, storyblokInit } from '@storyblok/js';

const { storyblokApi } = storyblokInit({

  accessToken: SPACE_TOKEN,

  use: [apiPlugin],

});

const getSignedUrl = async (filename) => {

  const response = await storyblokApi.get('cdn/assets/me', {

    filename: filename,

    token: ASSET_TOKEN,

  });

  return response.data.asset.signed_url;

};

const assetUrl = await getSignedUrl(

'https://a.storyblok.com/f/184738/2560x1946/d20c274998/earth.jpg'

);

document.querySelector('#app').innerHTML = `

  <img src="${assetUrl}" width="200">

`;
```

Learn how to manipulate private assets using the [Image Service](https://www.storyblok.com/docs/api/image-service/usage-with-protected-images).

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/concepts/assets#related-resources)

[Assets in the Management API](https://www.storyblok.com/docs/api/management/assets)

[Previous \\
\\
Access Tokens](https://www.storyblok.com/docs/concepts/access-tokens) [Next \\
\\
Backups](https://www.storyblok.com/docs/concepts/backups)

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