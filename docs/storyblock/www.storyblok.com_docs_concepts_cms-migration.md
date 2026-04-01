---
url: "https://www.storyblok.com/docs/concepts/cms-migration"
title: "CMS Migration | Storyblok Documentation"
---

# CMS Migration

CMS migration refers to the process of moving content and functionality from one content management system (CMS) to another. This is often also referred to as replatforming. CMS migration can be a complex undertaking — thorough preparation, a solid understanding, and using the right tools are key to success. This concept provides an overview of everything relevant from a developer’s perspective.

## Platform-specific tutorials

[Section titled “Platform-specific tutorials”](https://www.storyblok.com/docs/concepts/cms-migration#platform-specific-tutorials)

Refer to the following hands-on developer tutorials to learn how to migrate to Storyblok from any of the platforms listed below. It is recommended to first read this developer concept on CMS migration to obtain a comprehensive understanding of the topic.

[Migrate from Contentful](https://www.storyblok.com/tp/migrating-from-contentful-to-storyblok)

[Migrate from WordPress](https://www.storyblok.com/tp/migrating-wordpress-articles-to-storyblok)

[Migrate from Adobe Experience Manager (AEM)](https://www.storyblok.com/tp/migrating-aem-content-structures-to-a-flexible-content-model-in-storyblok)

[Migrate from Sitecore](https://www.storyblok.com/tp/migrating-sitecore-content-structures-to-a-flexible-content-model-in-storyblok)

[Migrate from Drupal](https://www.storyblok.com/tp/migrating-drupal-articles-to-storyblok)

## Recommended steps

[Section titled “Recommended steps”](https://www.storyblok.com/docs/concepts/cms-migration#recommended-steps)

Before diving into [platform-specific migration guides](https://www.storyblok.com/docs/concepts/cms-migration#platform-specific-tutorials), consider the following phases when planning a CMS migration project. As every such project has unique requirements, use these steps as a template to plan and customize a project-specific roadmap.

| Phase | Key Activities | Deliverables / Checks |
| --- | --- | --- |
| **Discovery** | Inventory of all content, URLs, assets, embedded media, custom fields, relationships, redirects, and custom integrations | Content inventory spreadsheet, gap analysis, complexity map |
| **Design** | Design Storyblok content model (components, blocks, fields, references); define mapping rules from old model to new | Mapping document, sample mapping code |
| **Export** | Export content (for example, via APIs, database dumps, content export tools, web scraping), including all fields, assets, and metadata | Raw content export, backup copies |
| **Transform** | Clean, convert, transform content (for example, HTML → rich text, fix broken links, normalize data shapes) | Transformation scripts, test outputs |
| **Migrate Assets** | Upload images, files, media into Storyblok assets; maintain mapping from old URL → new asset references | Asset upload scripts, mapping table |
| **Migrate Content** | Use the Management API (or CLI or importer tools) to create stories, folders, references, and set correct metadata | Imported stories in Storyblok, correct folder structure |
| **Validate** | Compare source vs target content, check links, media rendering, relationships, metadata, missing or invalid content | QA reports, issue lists, fixes |
| **SEO** | Set up redirects, canonical URLs, and preserve SEO metadata | Redirect rules, canonical tags, sitemap updates |
| **Rollout** | Deploy migrated content to production, monitor, and rollback if needed | Live site with migrated content, monitoring dashboards |
| **Post-migration** | Fix edge cases, migrate remaining content, and train editors | Final content coverage, stabilization, and post-mortem documentation |

## Discovery

[Section titled “Discovery”](https://www.storyblok.com/docs/concepts/cms-migration#discovery)

First, determine the content structure and content model in the legacy CMS. Evaluate whether there are types of content that follow a repeating, predictable pattern. For example, articles or press releases typically have a consistent content model, in that they are composed of the same set of fields, whereas marketing landing pages may differ significantly from one another.

Content that follows a consistent content model is straightforward to migrate programmatically. Content with an inconsistent model may sometimes be more efficiently migrated manually.

Note

The way content is structured is fundamentally predetermined by whether the legacy CMS is component-based or layout-based.

Next, evaluate carefully whether the current content model actually enables or impedes content editors. Ideally, interviews with content editors and marketers are conducted to get an understanding of their pain points.

Finally, learn how content modeling works in Storyblok by reading the [blocks](https://www.storyblok.com/docs/concepts/blocks), [fields](https://www.storyblok.com/docs/concepts/fields), [datasources](https://www.storyblok.com/docs/concepts/datasources), [references](https://www.storyblok.com/docs/concepts/references), and [internationalization](https://www.storyblok.com/docs/concepts/internationalization) developer concepts. It is highly advisable to create a proof-of-concept to establish the ideal content model before proceeding to migrate any actual content. It is suggested not to rush this process. Instead, refine the approach in multiple iterations and involve key stakeholders from design, marketing, and other relevant teams.

Tip

Consider the migration process to Storyblok as an opportunity to completely rethink the content model. Throw aboard unnecessary complexity and clutter — keep and refine only what has been proven to work.

## Export

[Section titled “Export”](https://www.storyblok.com/docs/concepts/cms-migration#export)

Before performing any migration operations to Storyblok, consider how to extract the source content from the legacy CMS. When migrating from another headless CMS, utilize its REST or GraphQL API endpoints to retrieve all relevant data in JSON format. Some monolithic CMSs also provide such API endpoints.

If the legacy CMS does not provide any API endpoints, it may be possible to access the database directly and export all relevant data. Alternatively, extract data directly from the HTML pages of the production environment using a crawler library such as [CheerioCrawler](https://crawlee.dev/js/docs/guides/cheerio-crawler-guide).

If the source data cannot be obtained in JSON format (for example, it may be in XML or CSV format), use a parser to convert it to JSON before proceeding with any mapping or uploading operations.

Note

When extracting source content, ensure that any referenced content, such as internal links or other content entries, is appropriately resolved.

## Best practices

[Section titled “Best practices”](https://www.storyblok.com/docs/concepts/cms-migration#best-practices)

Consider the following best-practice recommendations for crafting migration scripts.

Start by importing only a limited number of entries and validating the result before proceeding to migrate everything.

Adopt an iterative, test-driven approach:

1. Start with a small slice. Pick a simple content type (such as blog articles, for example) or a subset of content (for example, the latest 10) and run through the complete extraction → transformation → import → validation cycle.
2. Validate thoroughly. Compare source and migrated content by checking text fields, formatting, assets, internal links, missing references, and more.
3. Adapt mapping and transform logic continuously. Adjust scripts and mapping rules as edge cases are identified.
4. Add more complexity gradually. Migrate more content types, nested structures, relationships, old archives.
5. Use migration of incremental sets (for example, by date ranges or folders).
6. Leverage idempotency. Ideally, import scripts can detect if a story already exists (by source ID or slug) and update rather than duplicate. See the next section for further details.
7. Use content migrations in Storyblok. If schema changes are required post-import (for example, renaming or splitting a field), perform migrations using the [Storyblok CLI](https://www.storyblok.com/docs/libraries/storyblok-cli).
8. Create automated tests or content diff tools to highlight differences or missing items.

Conceptualize scripts in an idempotent and incremental fashion, avoiding content duplication when run several times. A safe import typically follows this order:

1. Create a folder structure and hierarchy in Storyblok.
2. Create referenced entities (authors, categories, tags, etc.) first.
3. Migrate and upload assets and store a mapping table (old URL → new asset reference).
4. Create or update main stories (pages, blog posts, etc.).
5. Establish references and internal links after.
6. Optionally, run content migrations or patches post-import.

Create a configuration file that contains mapping rules and transformations. For each field present in the source data, define the following:

- source field key
- target component and field name
- transformation logic to be applied (for example, convert [HTML to Storyblok RichText](https://www.storyblok.com/docs/libraries/js/richtext#html-to-storyblok-rich-text), sanitize HTML tags, split delimited values into array, and similar operations)
- asset mapping (if the field references a file)
- fallbacks and default values for missing data

Tip

It can be very useful to create script logic that interprets the mapping and tansformation rules and applies them to all relevant entities.

Work in a development or staging environment. Decide whether stories should be published automatically upon import or left in draft for manual review. For additional control, leverage Storyblok’s workflow stages to label content that has been programmatically migrated for review before publication. If the legacy CMS has version history and drafts, optionally import only the latest published version. Additionally, capture and preserve timestamps (such as `created_at`, `published_at`) in the new stories.

It is also recommended to communicate and implement a content freeze, which will prevent further content updates in the legacy CMS while preparing the new CMS for production.

## Migrate assets

[Section titled “Migrate assets”](https://www.storyblok.com/docs/concepts/cms-migration#migrate-assets)

Migrating assets refers to the process of moving images, videos, audio files, text files, and other files from one platform to another. Consider the following scenarios.

- **Assets are stored in the legacy CMS:** Assets that are stored and managed in the legacy CMS have to be migrated. Such assets could either be migrated to Storyblok’s built-in digital asset management (DAM) or an external DAM.
- **Assets are stored in an external DAM:** Assets that are already stored and managed in an external DAM may be integrated with Storyblok.

Note

When using external DAMs, consider Storyblok’s official integrations for [Bynder](https://www.storyblok.com/apps/storyblok-gmbh@bynder) and [Cloudinary](https://www.storyblok.com/tpl/cloudinary). Alternatively, create a [field plugin](https://www.storyblok.com/docs/plugins/field-plugins) to connect with any DAM.

### Programmatic asset migration

[Section titled “Programmatic asset migration”](https://www.storyblok.com/docs/concepts/cms-migration#programmatic-asset-migration)

Programmatic asset migration refers to the process of parsing the source data, mapping it to the target content model, downloading the assets via direct URLs, and uploading them to Storyblok.

#### Storyblok CLI

[Section titled “Storyblok CLI”](https://www.storyblok.com/docs/concepts/cms-migration#storyblok-cli)

Use the CLI's `asset push` command to push local stories from a third-party CMS to Storyblok. The CLI automatically maps ID-based references from legacy CMS entries to the new IDs generated by Storyblok, maintaining relational integrity.

1. Map external content to match [the JSON structure of a Storyblok asset object](https://www.storyblok.com/docs/api/content-delivery/v2/assets/the-asset-object).







```
{

     "id": 12345, // legacy ID

     "meta_data": {},

}
```

2. Place assets and accompanying asset sidecar files in the CLI directory for the target space. This defaults to `.storyblok/assets/<target-space-id>/{asset}_{ID}.{ext}` and `.storyblok/assets/<target-space-id>/{asset}_{ID}.json`.

3. Run `storyblok assets push --space <target-space-id>`. Optionally, use the `--dry-run` flag to validate the results first.


Tip

Refer to the [CLI documentation](https://www.storyblok.com/docs/libraries/storyblok-cli) for a complete overview of the `assets push` command.

#### Custom script

[Section titled “Custom script”](https://www.storyblok.com/docs/concepts/cms-migration#custom-script)

Alternatively, write a custom-tailored script to programmatically migrate assets. In a Node.js script, use Storyblok’s [JavaScript client](https://github.com/storyblok/monoblok/tree/main/packages/js-client) to access Storyblok’s [Management API](https://storyblok-docs-platform-preview.netlify.app/docs/api/management) to create or update migrated content in a space.

Consider the minimal code example below.

```
import 'dotenv/config';

import StoryblokClient from 'storyblok-js-client';

import fs from 'fs';

import { writeFile } from 'fs/promises';

import FormData from 'form-data';

import sourceData from './data.json' with { type: 'json' };

if (!process.env.STORYBLOK_SPACE_ID) {

  throw new Error('Missing STORYBLOK_SPACE_ID environment variable.');

}

const spaceId = process.env.STORYBLOK_SPACE_ID;

if (!process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN) {

  throw new Error(

    'Missing STORYBLOK_PERSONAL_ACCESS_TOKEN environment variable.',

  );

}

const StoryblokMAPI = new StoryblokClient({

  oauthToken: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,

});

/* Programmatically generate a list of redirects from old asset URLs to new ones */

const redirects = [];

/* Map fields from source assets to the format expected by Storyblok */

const mapFields = (asset) => {

  return {

    filename: asset.filename,

    title: asset.title || '',

    alt: asset.description || '',

  };

};

/* Download asset from URL to local assets folder */

const downloadAsset = async (url, filename) => {

  const filepath = `./assets/${filename}`;

  if (fs.existsSync(filepath)) {

    console.log(`Skipped download (already exists): ${filepath}`);

    return;

  }

  const response = await fetch(url);

  if (!response.ok) {

    throw new Error(`Failed to download: ${response.statusText}`);

  }

  const buffer = await response.arrayBuffer();

  await writeFile(filepath, Buffer.from(buffer));

  console.log(`Downloaded: ${filepath}`);

};

/* Upload asset to Storyblok */

const uploadAsset = async (assetObject) => {

  try {

    const newAssetEntry = await StoryblokMAPI.post(

      `/spaces/${spaceId}/assets/`,

      assetObject,

    );

    const signedResponse = newAssetEntry.data;

    const form = new FormData();

    for (const key in signedResponse.fields) {

      form.append(key, signedResponse.fields[key]);

    }

    form.append(

      'file',

      fs.createReadStream(`./assets/${assetObject.filename}`),

    );

    form.submit(signedResponse.post_url);

    const { data } = await StoryblokMAPI.get(

      `spaces/${spaceId}/assets/${signedResponse.id}/finish_upload`,

    );

    const url = data.filename;

    const cleanUrl = url.replace('s3.amazonaws.com/', '');

    console.log(`Created asset with URL ${cleanUrl}.`);

    return cleanUrl;

  } catch (err) {

    console.log(err);

    return false;

  }

};

25 collapsed lines

/* Programmatically download assets, map fields, and upload to Storyblok */

const migrateAssets = async () => {

  for (const asset of sourceData.data.assets) {

    if (!asset?.url || asset.url === '') continue;

    if (!asset?.filename || asset.filename === '') continue;

    await downloadAsset(asset.url, asset.filename);

    const assetObject = mapFields(asset);

    const newUrl = await uploadAsset(assetObject);

    redirects.push([asset.url, newUrl]);

  }

};

const run = async () => {

  await migrateAssets();

  console.log('Successfully migrated assets.');

  console.log('Generated redirects:');

  redirects.map((r) => {

    console.log(`${r[0]} > ${r[1]}`);

  });

};

run();
```

Tip

Consider building a list of redirects to be applied post-migration from the old URLs to the new URLs programmatically in the script.

### Handle missing assets

[Section titled “Handle missing assets”](https://www.storyblok.com/docs/concepts/cms-migration#handle-missing-assets)

While programmatically downloading assets, some asset URLs may be broken because the original asset has been moved or deleted. In the context of programmatic asset migration, it is recommended to generate a report of missing assets. For such cases, skip the asset creation step in Storyblok and proceed to the next asset.

### Prevent duplicate assets

[Section titled “Prevent duplicate assets”](https://www.storyblok.com/docs/concepts/cms-migration#prevent-duplicate-assets)

Uploading duplicate assets wastes storage space and creates clutter. Consider creating a content hash of the file's binary (not the file name) and keeping track of the hashes in the migration script. For every instance, check whether the hash is already in use. In that case, the asset already exists and has been successfully uploaded to Storyblok. Therefore, it should not be uploaded again.

The Storyblok CLI automatically creates a `manifest.jsonl` for this purpose.

### Handle resized versions

[Section titled “Handle resized versions”](https://www.storyblok.com/docs/concepts/cms-migration#handle-resized-versions)

Legacy CMSs often store resized versions of the same asset. It is important to understand that this is neither necessary nor desirable in Storyblok. Using the [Image Service](https://www.storyblok.com/docs/api/image-service), relevant image sizes can be generated programmatically in the presentation layer.

Identify the pattern used by the legacy CMS for resized versions, such as `banner-600x400.jpg` or `banner-800x600.jpg`. In the migration script, use regular expressions or available metadata to exclusively use assets with the highest available resolution.

### Organize

[Section titled “Organize ”](https://www.storyblok.com/docs/concepts/cms-migration#organize)

When migrating a large quantity of assets, it is advisable to compartmentalize them into logical chunks. For example, migrate all author profile pictures, hero images, and other relevant content, evaluating each migration task individually. Consider using [asset folders](https://www.storyblok.com/docs/manuals/assets#organize) to group assets thematically and logically.

Caution

Take into account the [rate limit](https://www.storyblok.com/pricing/technical-limits) of Storyblok’s Management API and implement request throttling accordingly.

### Suitable asset types

[Section titled “Suitable asset types”](https://www.storyblok.com/docs/concepts/cms-migration#suitable-asset-types)

Storyblok’s built-in DAM supports a variety of MIME types. See the [asset concept](https://www.storyblok.com/docs/concepts/assets#asset-mime-types) for further reference. However, particularly when dealing with long-form, high-resolution video expected to generate a lot of traffic, consider a dedicated video hosting platform instead.

### SEO considerations

[Section titled “SEO considerations”](https://www.storyblok.com/docs/concepts/cms-migration#seo-considerations)

Note that migrating assets to Storyblok will change all asset URLs. Consider setting up redirects for highly frequented or even all asset URLs to avoid `404` errors once the legacy CMS has been taken out of production.

Alternatively, consider keeping some assets in their existing location to preserve SEO performance. Include a field for old asset URLs in the content model to place these URLs directly, or set up CDN rules to serve such assets from their current URLs while being stored in Storyblok. Setting up a [custom asset domain](https://www.storyblok.com/docs/concepts/assets#custom-assets-domain) for Storyblok-hosted assets provides additional control.

### Resources

[Section titled “Resources”](https://www.storyblok.com/docs/concepts/cms-migration#resources)

[Storyblok CLI](https://www.storyblok.com/docs/libraries/storyblok-cli)

[Assets in the Management API](https://www.storyblok.com/docs/api/management/assets)

[Assets folders in the Management API](https://www.storyblok.com/docs/api/management/assets-folders)

[Upload and replace assets](https://www.storyblok.com/docs/api/management/assets/upload-and-replace-assets)

## Migrate content

[Section titled “Migrate content”](https://www.storyblok.com/docs/concepts/cms-migration#migrate-content)

Migrating content refers to the process of moving content entries, such as articles, landing pages, or author profiles, from the legacy CMS to Storyblok.

### Programmatic content migration

[Section titled “Programmatic content migration”](https://www.storyblok.com/docs/concepts/cms-migration#programmatic-content-migration)

Programmatic migration refers to the process of parsing the source content, mapping it to the target content model, and uploading it to Storyblok.

#### Storyblok CLI

[Section titled “Storyblok CLI”](https://www.storyblok.com/docs/concepts/cms-migration#storyblok-cli)

Use the CLI's `stories push` command to push local stories from a third-party CMS to Storyblok. The CLI automatically maps ID-based references from legacy CMS entries to the new IDs generated by Storyblok, maintaining relational integrity.

1. Map external content to match [the JSON structure of a Storyblok story object](https://www.storyblok.com/docs/api/content-delivery/v2/stories/the-story-object).







```
{

     "id": 12345, // legacy ID

     "uuid": 12345, // legacy ID

     "name": "Article extracted from a legacy CMS",

     "slug": "legacy-cms-article",

     "content": {

       "author": 54321, // legacy author ID

       "content": "Article content extracted from a legacy CMS",

       "component": "article"

     }

}
```

2. Place generated story files in the CLI directory for the target space. This defaults to `.storyblok/stories/<target-space-id>/{slug}_{ID}.json`.

3. Ensure that all required components exist locally by running `storyblok components pull`.

4. Run `storyblok stories push --space <target-space-id>`. Optionally, use the `--dry-run` flag to validate the results first.


Tip

Refer to the [CLI documentation](https://www.storyblok.com/docs/libraries/storyblok-cli) for a complete overview of the `stories push` command.

#### Custom script

[Section titled “Custom script”](https://www.storyblok.com/docs/concepts/cms-migration#custom-script)

Alternatively, write a custom-tailored script to programmatically migrate content. In a Node.js script, use Storyblok’s [JavaScript client](https://github.com/storyblok/monoblok/tree/main/packages/js-client) to access Storyblok’s [Management API](https://www.storyblok.com/docs/api/management) to create or update migrated content in a space.

Consider the minimal code example below.

```
import 'dotenv/config';

import StoryblokClient from 'storyblok-js-client';

import sourceData from './data.json' with { type: 'json' };

if (!process.env.STORYBLOK_SPACE_ID) {

  throw new Error('Missing STORYBLOK_SPACE_ID environment variable.');

}

const spaceId = process.env.STORYBLOK_SPACE_ID;

if (!process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN) {

  throw new Error(

    'Missing STORYBLOK_PERSONAL_ACCESS_TOKEN environment variable.',

  );

}

if (!process.env.STORYBLOK_SPACE_ACCESS_TOKEN) {

  throw new Error('Missing STORYBLOK_SPACE_ACCESS_TOKEN environment variable.');

}

const StoryblokMAPI = new StoryblokClient({

  oauthToken: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,

});

const StoryblokCAPI = new StoryblokClient({

  accessToken: process.env.STORYBLOK_SPACE_ACCESS_TOKEN,

});

/* Map fields from source data to the new content model defined in Storyblok */

const mapFields = (page, existingStoryObject) => {

  const body = [];

  if (page.content.length) {

    page.content.forEach((contentSection) => {

      if (contentSection.type === 'hero') {

        body.push({

          component: 'hero',

          headline: contentSection?.headline || '',

        });

      }

    });

  }

  const content = {

    component: 'page',

    body,

  };

  const newStoryObject = {

    story: {

      name: page?.title || '',

      created_at: page?.created_at || '',

      updated_at: page?.updated_at || '',

      content,

      slug: page?.slug || '',

    },

    publish: 1,

  };

  /* If the story already exists, only update the content */

  if (existingStoryObject) {

    const updatedStoryObject = {

      story: {

        ...existingStoryObject.story,

        content,

      },

      publish: 1,

    };

    return updatedStoryObject;

  }

  return newStoryObject;

};

54 collapsed lines

/* Update an existing story */

const updateStory = async (storyObject) => {

  try {

    console.log(storyObject.story.id);

    await StoryblokMAPI.put(

      `/spaces/${spaceId}/stories/${storyObject.story.id}`,

      storyObject,

    );

    console.log(`Updated story with slug ${storyObject.story.slug}.`);

  } catch (err) {

    console.log(err);

    return false;

  }

};

/* Create a new story */

const createStory = async (storyObject) => {

  try {

    await StoryblokMAPI.post(`/spaces/${spaceId}/stories`, storyObject);

    console.log(`Created story with slug ${storyObject.story.slug}.`);

  } catch (err) {

    console.log(err);

    return false;

  }

};

/* Migrate content from source data to Storyblok by looping through the content entries and creating new stories or updating existing ones */

const migrateStories = async () => {

  for (const page of sourceData.data.pages) {

    if (!page?.slug || page.slug === '') continue;

    const existingStory = await StoryblokCAPI.get(`cdn/stories/${page.slug}`, {

      version: 'published',

    }).catch(() => null);

    const existingStoryID = existingStory?.data.story.id || null;

    const existingStoryResponse = await StoryblokMAPI.get(

      `/spaces/${spaceId}/stories/${existingStoryID}`,

    ).catch(() => null);

    const storyObject = mapFields(page, existingStoryResponse?.data);

    if (existingStoryResponse !== null) {

      console.log(`Story with slug ${page.slug} already exists.`);

      await updateStory(storyObject);

    } else {

      await createStory(storyObject);

    }

  }

};

migrateStories();
```

### **References and relational data**

[Section titled “References and relational data”](https://www.storyblok.com/docs/concepts/cms-migration#references-and-relational-data)

Mapping CMS-relational references, such as authors, categories, tags, internal links, and related posts, is a common challenge when migrating to a new CMS. See the [references](https://www.storyblok.com/docs/concepts/references) and [fields](https://www.storyblok.com/docs/concepts/fields) developer concepts to learn more about how referenced content works with references, single option, multi option, and link fields in Storyblok. The following order of actions is recommended:

1. Migrate referenced assets to Storyblok. For example, consider an `author` content type that has an asset field named `profile`. Migrate all assets before migrating any authors.

2. Migrate referenced content to Storyblok. For example, consider an `article` content type that has a references field named `author`. Migrate all authors before migrating any articles.

3. Create a mapping lookup table to map each legacy entity identifier (for stories and assets) to its new Storyblok ID.

4. When migrating content with referenced entities, use the mapping lookup table to match the referenced legacy entity identifier to the new Storyblok UUID and populate the reference field accordingly.


Tip

The Storyblok CLI automatically maintains relational integrity, allowing for the automatic population of fields that contain a reference (such as asset fields, link fields, references, or option fields).

Caution

Be cautious concerning the execution order. Suppose a content entry is migrated before its referenced entity exists. In that case, it will need to be patched later, as the ID of the referenced entry is unknown at the time of migration. Always migrate assets first, before anything else.

#### Custom script

[Section titled “Custom script”](https://www.storyblok.com/docs/concepts/cms-migration#custom-script)

Consider the minimal code example below.

```
import 'dotenv/config';

import StoryblokClient from 'storyblok-js-client';

import sourceData from './data.json' with { type: 'json' };

 import mappingData from './mapping.json' with { type: 'json' };

// ...

/* Map fields from source data to the new content model defined in Storyblok */

const mapFields = (page, existingStoryObject) => {

  const body = [];

  if (page.content.length) {

    page.content.forEach((contentSection) => {

      if (contentSection.type === 'hero') {

        body.push({

          component: 'hero',

          headline: contentSection?.headline || '',

        });

      }

    });

  }

  const author = [\
\
    mappingData.authors.find((a) => a.old_id === page.author.id)?.new_id,\
\
  ];

  const content = {

    component: 'page',

    body,

    author,

  };

// ...

migrateStories();
```

### Internationalization and localization

[Section titled “Internationalization and localization”](https://www.storyblok.com/docs/concepts/cms-migration#internationalization-and-localization)

Storyblok offers three distinct approaches to content internationalization and localization: [field-level translation](https://www.storyblok.com/docs/concepts/internationalization#field-level-translation), [folder-level translation](https://www.storyblok.com/docs/concepts/internationalization#folder-level-translation), and [space-level translation](https://www.storyblok.com/docs/concepts/internationalization#space-level-translation).

Study the primary use cases and benefits of each approach, and carefully consider which strategy best suits the project requirements, keeping long-term goals and scalability in mind.

### Resources

[Section titled “Resources”](https://www.storyblok.com/docs/concepts/cms-migration#resources)

[Storyblok CLI](https://www.storyblok.com/docs/libraries/storyblok-cli)

[Stories in the Management API](https://www.storyblok.com/docs/api/management/stories)

[Components in the Management API](https://www.storyblok.com/docs/api/management/components)

[Datasources in the Management API](https://www.storyblok.com/docs/api/management/datasources)

[Internationalization in the Management API](https://www.storyblok.com/docs/api/management/stories/internationalization-for-stories)

[AI Translate in the Management API](https://www.storyblok.com/docs/api/management/stories/ai-translate)

## Migrate roles, permissions, and workflows

[Section titled “Migrate roles, permissions, and workflows”](https://www.storyblok.com/docs/concepts/cms-migration#migrate-roles-permissions-and-workflows)

Storyblok provides granular control over [roles and permissions](https://www.storyblok.com/docs/manuals/roles), which work synergistically with [workflows and workflow stages](https://www.storyblok.com/docs/manuals/workflows).

Similar to content, migrating roles, permissions, and workflows should be approached from the perspective of seeing this as an opportunity to assess what has been working well and what has not. Therefore, it is suggested not to try to replicate everything entirely, but adapt it based on the changes to the content model and the possibilities of Storyblok.

Migrating roles, permissions, and workflows should typically not be migrated in a programmatic manner. Instead, it is advisable to carefully implement the initial setup and continuously adapt and refine based on changing requirements throughout the new website’s lifecycle. However, roles, permissions, and workflows should not be treated as an afterthought, but as an integral element of any migration endeavor that also has the potential to inform and shape the content model.

## Migrate integrations

[Section titled “Migrate integrations”](https://www.storyblok.com/docs/concepts/cms-migration#migrate-integrations)

Storyblok can be extended via [field plugins](https://www.storyblok.com/docs/plugins/field-plugins), [tool plugins](https://www.storyblok.com/docs/plugins/tool-plugins), and [space plugins](https://www.storyblok.com/docs/plugins/space-plugins). Any existing integration with an API-based third-party platform can be replicated in Storyblok.

For integrations with an external DAM, PIM, or comparable system, create a field plugin to be used on the story level. For integrations with third-party vendors affecting the entire website or space, such as an analytics platform, create a space plugin. Additionally, some integrations may be required exclusively in the presentation layer and do not necessitate a CMS plugin.

Refer to the [Storyblok App Directory](https://www.storyblok.com/app-store) for an overview of all official, ready-to-use integrations.

## Validate

[Section titled “Validate”](https://www.storyblok.com/docs/concepts/cms-migration#validate)

Run the following checks to ensure that the migration has been performed successfully:

- Compare the sitemaps of the production website and the old website to ensure that no content has gone missing. Remember to take into account desirable and planned structural changes – the sitemaps may not be expected to match perfectly. Account for changed URLs via redirects.
- Use [Storyblok’s Broken Links Checker](https://www.storyblok.com/apps/storyblok-gmbh@broken-links-checker) to find and resolve any broken links within the Storyblok space.
- Validate the component schema, ensuring that there are no deviations.
- Run complete diagnostics on the production website (for example, using [Unlighthouse](https://unlighthouse.dev/)) to identify performance and accessibility issues, as well as other problems such as missing assets.

## Post-migration

[Section titled “Post-migration”](https://www.storyblok.com/docs/concepts/cms-migration#post-migration)

Once the migrated website has entered production, the following is highly recommended:

- Keep running complete diagnostics on the production website to identify potentially unforeseen problems as soon as possible.
- Consider both internal and external feedback.
- Especially in the first weeks and months post-launch, support content creators and ensure that they use the new content model as intended (ideally, they should have already undergone training at this point).
- Keep the old website functional for the first few days post-launch, allowing for a seamless transition back in case of major issues with the production website and preventing any downtime.

## Migrate content from a third-party CMS

[Section titled “Migrate content from a third-party CMS”](https://www.storyblok.com/docs/concepts/cms-migration#migrate-content-from-a-third-party-cms)

The new push commands make it straightforward to push local stories and assets from third-party CMS data to Storyblok, and the CLI handles mapping ID-based references from legacy CMS data structures to the IDs Storyblok generates.

**Example: WordPress migration**

The following example demonstrates how to quickly migrate content from WordPress to Storyblok using the CLI.

1. Map your external content to the [Storyblok story JSON structure](https://www.storyblok.com/docs/api/content-delivery/v2/stories/the-story-object).

```
{
     "id": 12345, // source WordPress ID
     "uuid": 12345, // same as the source ID
     "name": "Hello WordPress",
     "slug": "hello-wordpress",
     "content": {
       "component": "page",
       "headline": "Hello from WP",
       "cta": {
         "fieldtype": "multilink",
         "linktype": "story",
         "id": 12346, // linked WP post ID (same as that story's uuid)
         "url": ""
       }
     }
}
```

2. Place generated story files under `.storyblok/stories/TARGET_SPACE/{slug}_{ID}.json`.
3. Ensure required components exist locally: `storyblok components pull --space TARGET_SPACE`.
4. Run `storyblok stories push --space TARGET_SPACE` (use `-dry-run` first to validate).

This approach allows you to programmatically import legacy data while maintaining relational integrity between your stories.

[Previous \\
\\
Caching](https://www.storyblok.com/docs/concepts/caching) [Next \\
\\
Content Modeling](https://www.storyblok.com/docs/concepts/content-modeling)

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