---
url: "https://www.storyblok.com/docs/concepts/e-commerce"
title: "E-commerce | Storyblok Documentation"
---

# E-commerce

Storyblok’s official e-commerce integrations allow content creators to select products and categories from an existing e-commerce backend directly from the Visual Editor.

The e-commerce integrations are [field plugins](https://www.storyblok.com/docs/plugins) that fetch data directly from the e-commerce platform and access it in the Visual Editor. After one or more products or categories have been selected, a subset of the available data from the e-commerce platform is stored in the story object. The amount of data that is stored is limited deliberately, as the data is only intended as a reference. When fetching stories using Storyblok’s Content Delivery API, the included product and/or category IDs can be used for a subsequent API request, fetching the required data directly from the e-commerce platform. This approach ensures that the most up-to-date data is retrieved.

Note

In an e-commerce context, data can be outdated quickly due to, for example, changes in availability or discounts. As a result, storing such data in Storyblok would be problematic, as every change from the e-commerce side would require a synchronization. Fetching the relevant directly from the e-commerce platform ensures an accurate representation on the frontend.

[![](https://a.storyblok.com/f/212319/1600x977/565b53aeff/e-commerce-logic.png/m/720x0/)](https://a.storyblok.com/f/212319/1600x977/565b53aeff/e-commerce-logic.png)

A visual representation of developers and editors using an e-commerce backend and Storyblok to distribute content across multiple channels through an API layer.

## Official integrations

[Section titled “Official integrations”](https://www.storyblok.com/docs/concepts/e-commerce#official-integrations)

Our official e-commerce integrations are developed, maintained, and supported in-house.

![](https://a.storyblok.com/f/212319/2500x0/08625d5d0c/bigcommerce.svg)![Big Commerce](https://a.storyblok.com/f/212319/2500x0/5ffee89045/bigcommerce-light.svg)

[BigCommerce](https://www.storyblok.com/apps/storyblok-gmbh@bigcommerce-fieldtypes)

![Centra](https://a.storyblok.com/f/212319/300x96/7b810cd9b1/centra.svg)![Centra](https://a.storyblok.com/f/212319/300x96/932a328f14/centra-light.svg)

[Centra](https://www.storyblok.com/apps/storyblok-gmbh@centra)

![](https://a.storyblok.com/f/212319/2825x484/72787749af/commerce-layer.svg)![Commerce Layer](https://a.storyblok.com/f/212319/2825x484/b7d3c7af2f/commerce-layer-light.svg)

[CommerceLayer](https://www.storyblok.com/apps/storyblok-gmbh@commerce-layer)

![Commercetools](https://a.storyblok.com/f/212319/1005x277/9ef7057241/commercetools-logo.svg)![Commercetools](https://a.storyblok.com/f/212319/1005x277/004f9a7983/commercetools-logo-white.svg)

[Commercetools](https://www.storyblok.com/apps/storyblok-gmbh@commercetools-fieldtypes)

![](https://a.storyblok.com/f/212319/98x26/a2a494a6f5/saleor.svg)![Saleor](https://a.storyblok.com/f/212319/98x26/f59e5f476a/saleor-light.svg)

[Saleor](https://www.storyblok.com/apps/storyblok-gmbh@saleor-fieldtypes)

![](https://a.storyblok.com/f/212319/2500x1750/164aa1efe8/salesforce.svg)![](https://a.storyblok.com/f/212319/2500x1750/164aa1efe8/salesforce.svg)

[Salesforce Commerce Cloud](https://www.storyblok.com/apps/storyblok-gmbh@salesforce)

![](https://a.storyblok.com/f/212319/455x225/8973825a76/sap-commerce-cloud.svg)![](https://a.storyblok.com/f/212319/455x225/8973825a76/sap-commerce-cloud.svg)

[SAP Commerce Cloud](https://www.storyblok.com/apps/storyblok-gmbh@sap)

![](https://a.storyblok.com/f/212319/300x86/06638d089b/shopify.svg)![Shopify](https://a.storyblok.com/f/212319/300x86/d954eb8286/shopify_logo_darkbg.svg)

[Shopify](https://www.storyblok.com/apps/storyblok-gmbh@shopify-v2)

![](https://a.storyblok.com/f/212319/2500x537/3e2706d1b8/shopware.svg)![](https://a.storyblok.com/f/212319/2500x537/3e2706d1b8/shopware.svg)

[Shopware](https://www.storyblok.com/apps/storyblok-gmbh@shopware-fieldstypes)

![](https://a.storyblok.com/f/212319/300x122/ac4a354b2d/spryker.svg)![Spryker](https://a.storyblok.com/f/212319/300x122/8fa3775ceb/logo_spryker_horizontal_white_rgb.svg)

[Spryker](https://www.storyblok.com/apps/storyblok-gmbh@spryker-fieldtypes)

![Sylius](https://a.storyblok.com/f/212319/850x256/0ac19401fd/sylius-logo_sylius-logo-light.svg)![Sylius](https://a.storyblok.com/f/212319/850x256/180423b7bf/sylius-logo_sylius-logo-dark.svg)

[Sylius](https://www.storyblok.com/apps/storyblok-gmbh@sylius-fieldtypes)

![](https://a.storyblok.com/f/212319/434x95/d671e0b497/vendure.svg)![](https://a.storyblok.com/f/212319/434x95/d671e0b497/vendure.svg)

[Vendure](https://www.storyblok.com/apps/storyblok-gmbh@vendure-fieldtypes)

Tip

The e-commerce integrations are exclusively available on higher-tier plans. Please refer to the [Pricing](https://www.storyblok.com/pricing) page for further information.

## Community integrations

[Section titled “Community integrations”](https://www.storyblok.com/docs/concepts/e-commerce#community-integrations)

The following e-commerce integrations are created and maintained by our developer community. Support is provided by the creator, not our team.

![Magento](https://a.storyblok.com/f/212319/363x123/ccf06f3cf3/magento.svg)![Magento](https://a.storyblok.com/f/212319/363x123/5ad63af374/magento-light.svg)

[Magento](https://github.com/windandkite/storyblok)

Magento 2 module by Wind & Kite.

## Setup and application

[Section titled “Setup and application”](https://www.storyblok.com/docs/concepts/e-commerce#setup-and-application)

The following steps describe generically how to set up an official e-commerce integration and retrieve data. For more specific setup instructions, please refer to the available integrations linked above.

In the **Block Library**, create a new [nestable block](https://www.storyblok.com/docs/concepts/blocks) with the technical name `featured_products`. Add the following fields to the schema:

- `title`: Text
- `products`: Plugin

In the **Custom** **Type** dropdown of the `products` field, select one of the e-commerce integrations, e.g. `sb-shopify` or `sb-centra`. In the **Source** section, provide the API credentials of your e-commerce platform.

Note

The `limit` option defines a maximum number of entries that can be selected. The `selectOnly` option restricts the available options to either only products (`product`) or only categories (`category`).

The API response from the [single-story endpoint](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-a-single-story) includes the product data in the `items` array of the `featured_products` field of the story.

```
{

  "featured_products": {

    "items": [\
\
      {\
\
        "id": "gid://shopify/Product/7788021645465",\
\
        "sku": "product-001",\
\
        "name": "Product 001",\
\
        "type": "product",\
\
        "image": "https://cdn.shopify.com/s/files/1/0501/4120/0537/files/product-001.jpg",\
\
        "handle": "product-001",\
\
        "variants": false,\
\
        "description": "A description for Product 001."\
\
      },\
\
      // ...\
\
    ],

    "plugin": "sb-shopify"

  }

}
```

The following example in JavaScript illustrates how product data can be fetched on the frontend using subsequent API requests to Storyblok and, in this example, Shopify.

```
import { storyblokInit, apiPlugin } from '@storyblok/js'

import Client from 'shopify-buy'

const { storyblokApi } = storyblokInit({

  accessToken: 'your-storyblok-access-token',

  use: [apiPlugin],

})

const shopifyClient = Client.buildClient({

  domain: 'your-shop-name.myshopify.com',

  storefrontAccessToken: 'your-storefront-access-token',

})

try {

  const { data } = await storyblokApi.get('cdn/stories/home', {

    version: 'draft',

  })

  const { story } = data

  const productId = story.content.body[0].featured_products.items[0].id

  const product = await shopifyClient.product.fetch(productId)

  console.log(product)

} catch (error) {

  console.log(error)

}
```

Note

The specific method of retrieving data from the e-commerce backend depends on the provider and its APIs. Please refer to the documentation of your chosen e-commerce platform.

Moving beyond the fundamentals, several additional approaches with or without using Storyblok’s e-commerce integrations are conceivable, for example:

- Fetch a selection of products from a category ID selected in Storyblok and add filtering methods provided by the e-commerce API to enhance the UX
- Allow content creators to overwrite product metadata, such as the title or description, directly in Storyblok
- Manually map a single product to a dedicated product story
- Fetch products by matching story slugs, circumventing the requirement to manually select a product in a designated field (this approach can be particularly attractive when dealing with large quantities of products)
- Create blocks without designated e-commerce fields that automatically render a selection of products based on metrics (e.g., best-selling, latest, most expensive) or meta attributes (e.g., tags, collections, categories)

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/concepts/e-commerce#related-resources)

[Getting Started with Next.js Commerce and Storyblok](https://www.storyblok.com/tp/getting-started-with-next-js-commerce)

[How to Build a Storefront with Nuxt and BigCommerce](https://www.storyblok.com/tp/how-to-build-a-storefront-with-nuxt-and-bigcommerce)

[Building Headless eCommerce Integrating Storyblok & Swell in Nuxt 3](https://www.storyblok.com/tp/headless-ecommerce-swell-nuxt)

[Previous \\
\\
Datasources](https://www.storyblok.com/docs/concepts/datasources) [Next \\
\\
Fields](https://www.storyblok.com/docs/concepts/fields)

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