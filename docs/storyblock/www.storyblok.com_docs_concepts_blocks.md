---
url: "https://www.storyblok.com/docs/concepts/blocks"
title: "Blocks | Storyblok Documentation"
---

# Blocks

In Storyblok, a block is a piece of content. A block can be an entire entry (a story), or it can be just one piece of an entry.

There are three categories of blocks:

- Content type
- Nestable
- Universal

**Content type blocks** are stories. An example of a content type block would be a post, article, or page. Every blank Storyblok space comes with a page content type.

**Nestable blocks** are children of other blocks. An example of a nestable block would be text, image, or hero. They are dynamic building blocks used to create rich content layouts.

**Universal blocks** can be used as both content type blocks and nestable blocks. An example of a universal block is a CTA, which can be used as a standalone story and an element on a page.

Tip

To learn how to create and manage content, edit blocks, and add presets with pre-filled content, check the [Visual Editor manual](https://www.storyblok.com/docs/manuals/visual-editor#blocks).

All blocks in a space are listed in the **Block Library**. Use folders and tags to organize blocks or control access within the editor.

To create a new block, open the **Block Library**, select **\+ New Block**, and choose the type.

## Add fields

[Section titled “Add fields”](https://www.storyblok.com/docs/concepts/blocks#add-fields)

To add blocks to any content type, open **Fields** and add a `Blocks` field.

Storyblok supports many other fields you can use to compose blocks. To learn more, check the [Fields documentation](https://www.storyblok.com/docs/concepts/fields).

## Set name

[Section titled “Set name”](https://www.storyblok.com/docs/concepts/blocks#set-name)

The **Technical name** is listed as the value of the `component` (block) key in the API response.

Danger

The word “content” is a reserved keyword. Only use it as a block's technical name when combined with other characters.

The **Technical name** also serves as the **Display name** if one isn't provided.

Caution

Changes to the **Technical name** may take a few minutes to propagate. Notify editors before making the change. When using branches, the updated name first appears only in the preview branch.

The **Display name** is visible in the editor. To help users quickly recognize it, pick a short and descriptive name.

The **Description** provides additional information about the block. A brief, clear description lets users understand the block's use case.

## Create previews

[Section titled “Create previews”](https://www.storyblok.com/docs/concepts/blocks#create-previews)

Blocks support a preview field that appears in the overview, and a screenshot that appears when editors select the block in the editor.

Blocks can include preview templates based on the [Squirrelly 8](https://squirrelly.js.org/) templating language. Below is an example snippet:

```
<div>{{it.text}}</div>

{{@image(it.image.filename)/}}
```

All block fields are available on the `it` object. The preview template support `div`, `span`, `strong`, `ul`, `li`, and `p` HTML tags, as well as `class` attributes.

```
<div class="text-red">{{it.error}}</div>
```

The following [Squirrelly helpers](https://squirrelly.js.org/docs/syntax/builtin-helpers) are available:

- `@image()`
- `@it()`
- `@each()`
- `@foreach()`

Data from linked stories isn't available in preview templates.

## View history

[Section titled “View history”](https://www.storyblok.com/docs/concepts/blocks#view-history)

Every block has a version history, which records the changes made to it over time. View and restore previous versions in the **Block Library**.

## Related resources

[Section titled “Related resources”](https://www.storyblok.com/docs/concepts/blocks#related-resources)

[Components in the Management API](https://www.storyblok.com/docs/api/management/components)

[Component Folders in the Management API](https://www.storyblok.com/docs/api/management/component-folders)

[Previous \\
\\
Backups](https://www.storyblok.com/docs/concepts/backups) [Next \\
\\
Blueprints](https://www.storyblok.com/docs/concepts/blueprints)

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