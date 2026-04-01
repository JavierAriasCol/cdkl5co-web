---
url: "https://www.storyblok.com/docs/concepts/datasources"
title: "Datasources | Storyblok Documentation"
---

# Datasources

A datasource is a collection of key-value pairs that can be used throughout your space (for example, as the choices in an options field or fetched directly through the API for general-purpose usage). It's ideal for storing data that is reused by various components but requires centralized management.

For example, if your website has multiple widgets that support various background color options, `Colors` could be a datasource that holds values such as `red`, `green`, and `blue`.

## Setup

[Section titled “Setup”](https://www.storyblok.com/docs/concepts/datasources#setup)

To create a datasource, open **Datasources** → **New Datasource**. Provide a name and a slug for the datasource. The ID is used to access the datasource via the Content Delivery API.

Once created, provide a name and value for each entry in the datasource.

[![](https://a.storyblok.com/f/212319/2880x1680/d474508de1/datasource-concept-entries.png/m/720x0/)](https://a.storyblok.com/f/212319/2880x1680/d474508de1/datasource-concept-entries.png)

A Datasource with various entries.

## Datasource dimensions

[Section titled “Datasource dimensions”](https://www.storyblok.com/docs/concepts/datasources#datasource-dimensions)

A datasource dimension in Storyblok allows you to store multiple values under a specific key.

In a basic implementation, each datasource key has one value. However, in some cases, a key needs to store multiple values. An example of this would be internationalization. Each key requires language-specific values. Each supported language would be a dimension of the datasource.

To create datasource dimensions, open the datasource settings, enter a name and a value, and save.

Once created, the new dimension is available in a separate tab. Now, use dimension-specific values for each key.

[![](https://a.storyblok.com/f/212319/1440x840/34ac7d50af/datasource-with-dimensions.png/m/720x0/)](https://a.storyblok.com/f/212319/1440x840/34ac7d50af/datasource-with-dimensions.png)

Dimension specific tab and values

## Import and export

[Section titled “Import and export”](https://www.storyblok.com/docs/concepts/datasources#import-and-export)

You can export and import datasources as `.csv` files. This can be useful if you want to edit the entries in an external editor or if you want to move datasources across spaces.

To import or export a datasource, open the datasource settings, and import or export each dimension individually.

## Example usage

[Section titled “Example usage”](https://www.storyblok.com/docs/concepts/datasources#example-usage)

### Store properties for an options field

[Section titled “Store properties for an options field”](https://www.storyblok.com/docs/concepts/datasources#store-properties-for-an-options-field)

One of the main use of datasources is that they can be used as input data for a `Single-Option` or `Multi-Options` [field](https://www.storyblok.com/docs/concepts/fields). In the field settings, define `Datasource` as the **Source** and select an existing datasource under **Internal datasource**.

Once completed, choose from the options in your datasource while authoring content. This can be done across a space. This has the advantage of using one source of data across multiple components without having to redefine it for each component.

### Fetch directly in your frontend

[Section titled “Fetch directly in your frontend”](https://www.storyblok.com/docs/concepts/datasources#fetch-directly-in-your-frontend)

You can fetch the contents of a datasource directly in your frontend code using the Content Delivery API. The API response can be used for navigation menus, footer menus, etc.

### Manage configuration options for a field plugin

[Section titled “Manage configuration options for a field plugin”](https://www.storyblok.com/docs/concepts/datasources#manage-configuration-options-for-a-field-plugin)

Datasources can be used to store information relevant for field plugins or tools, such as API endpoints, account names, and more.

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/concepts/datasources#related-resources)

[Datasources in the Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2/datasources/retrieve-a-single-datasource)

[Datasources in the Management API](https://www.storyblok.com/docs/api/management/datasources)

[Previous \\
\\
Content Modeling](https://www.storyblok.com/docs/concepts/content-modeling) [Next \\
\\
E-commerce](https://www.storyblok.com/docs/concepts/e-commerce)

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