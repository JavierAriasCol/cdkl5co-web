---
url: "https://www.storyblok.com/docs/concepts/content-modeling"
title: "Content Modeling | Storyblok Documentation"
---

# Content Modeling

Content modeling is the process of identifying and structuring the various types of content that a project will contain. Building a content model is a crucial step in CMS implementation.

To create a content model, the development team will structure content as reusable types with defined inputs to build a system that keeps teams aligned and maintains a cohesive user experience across all channels.

Storyblok represents content with three basic data types:

- **Fields:** Individual content inputs
- **Blocks:** Configurable content elements
- **Stories:** Complete content entries

Storyblok manages these data types with two schemas:

- **Components:** Block schemas
- **Content types:** Story schemas

Content types are a subset of components, so a single component can potentially model both a part of a story or a whole story. For example, an FAQ component might render each item in a list of FAQs or a dedicated page for one FAQ.

All of these elements work together to create a flexible _and_ structured content ecosystem that offers creative freedom within defined boundaries.

## Stakeholders

[Section titled “Stakeholders”](https://www.storyblok.com/docs/concepts/content-modeling#stakeholders)

Content modeling requires collaboration across disciplines.

Designers, editors, developers, and marketers should all work together to ensure the content model is easy to understand for non-technical stakeholders.

Tip

While this process is a team effort, we recommend appointing a project leader.

The content modeling process usually requires input from four key stakeholders:

- Content editors, to understand what content is needed
- Developers, who will implement the technical structure
- Designers, to ensure the model supports themes, variants and components
- Marketing leads, to confirm content alignment with campaign needs

## Schedule

[Section titled “Schedule”](https://www.storyblok.com/docs/concepts/content-modeling#schedule)

You will probably need to do some content modeling at three key points in a project's lifecycle:

- **In the beginning:** Establishing a solid content structure prevents refactoring later and ensures everyone speaks the same language.
- **During a CMS migration:** Re-mapping schemas from a legacy CMS allows the team to refresh content using new flexible data structures within tight timelines.
- **When the project scales:** A robust content model will grow to accommodate new content and presentation layers with fewer breaking changes and redesigns.

## Considerations

[Section titled “Considerations”](https://www.storyblok.com/docs/concepts/content-modeling#considerations)

A solid implementation plan will save countless worker hours down the road. Before writing any new code, consider how language, organization, and design will play a roll in your implementation.

- **Naming conventions:** Establish clear patterns for content types, field names, and folder structures. Consistent naming helps everyone navigate the system and prevents confusion as your model grows.
- **References:** Use Storyblok's [reference fields](https://www.storyblok.com/docs/concepts/fields#references) to create relationships between content pieces. This prevents repetition of data, ensures consistency, and empowers editors to create complex data schemas. Common uses include taxonomies, categories, and author relationships.
- **Folders:** Organize stories within [folders](https://www.storyblok.com/docs/manuals/stories#folders) based on sections, content types, or team roles. A well-structured folder hierarchy makes content easier to find and manage at scale.
- **Design system:** Consider how the content model maps to the project’s design system. Atomic design principles work particularly well with Storyblok's component-based approach—atoms become basic fields, molecules combine multiple blocks, organisms form complex stories, and content types define page-level templates.
- **Datasources:** Define a “glossary” using [datasources](https://www.storyblok.com/docs/concepts/datasources) to manage common terms, options, and variables that need to remain consistent across the project.

## Execution

[Section titled “Execution”](https://www.storyblok.com/docs/concepts/content-modeling#execution)

Once the planning is complete, it's time to build the content model. At this step, the project leader must make practical decisions about tooling and implementation.

Storyblok offers two approaches for building components:

- The [Block Library GUI](https://www.storyblok.com/docs/concepts/blocks) provides an intuitive interface for creating and modifying components. It's perfect for quick iterations and for team members less comfortable with code.
- The [Management API](https://www.storyblok.com/docs/api/management) and [Storyblok CLI](https://www.storyblok.com/docs/packages/storyblok-cli) are ideal for version-controlling your schema, automating component creation, and maintaining consistency across multiple spaces (development, staging, production).

The Block Library is a great tool for quick drafts and to help non-technical stakeholders understand content models.

Start building your content model with the three basic elements:

- [Content types](https://www.storyblok.com/docs/concepts/blocks) as templates for stand-alone pieces like articles, posts, and pages or reusable pieces like CTAs and menus
- [Fields](https://www.storyblok.com/docs/concepts/fields) for content inputs and configurations, using validation to ensure compliance
- [Nestable blocks](https://www.storyblok.com/docs/concepts/blocks) to define reusable components, multiplying efficiency in design and development

At implementation time, start with core content types and expand gradually. Test each component as it is added by creating sample stories. Use the preview function to see how content renders on the frontend.

Make sure to create artifacts and processes to examine changes in a content model:

- Create test stories and pages for each content type to ensure all fields work as expected
- Verify that nested blocks render correctly and follow the proper hierarchy
- Check that references and relationships resolve properly
- Validate frontend rendering across different devices and scenarios
- Use visual regression testing tools to prevent breaking changes

Once the content model is defined and tested and stakeholders have been trained, content editors can start building stories.

## Documentation

[Section titled “Documentation”](https://www.storyblok.com/docs/concepts/content-modeling#documentation)

A content model is only valuable when all editors, designers and developers understand its parts and feel comfortable using and eventually expanding it. Drafting and documenting it along the way helps with team alignment and new-hire onboarding.

These are some common elements of a content modeling documentation material:

- **Content type inventory:** The Block Library displays all the building blocks the team has created to keep track of the project's growth. Create folders and tags to better organize and filter blocks in the library.
- **Component relationships:** Use diagrams to map how different content types and blocks relate to each other, showing which components can be nested within others and how references connect them.
- **Visual reference:** Include screenshots and design references showing how content in Storyblok maps to the frontend experience when necessary.

Regularly revisit and update the documentation as the content model evolves. A living document that grows with the project is far more valuable than static documentation that quickly becomes outdated.

Keep it short

Avoid creating unnecessary documentation, which might overwhelm your colleagues. Don’t repeat information. Don’t document processes that are already obvious in the interface. Make use of the [Storyblok User Manuals](https://www.storyblok.com/docs/manuals), and avoid documenting concepts already explained in the Storyblok documentation.

## Updates

[Section titled “Updates”](https://www.storyblok.com/docs/concepts/content-modeling#updates)

Eventually, every content model must change. But a component-based structure allows designers and developers to tweak and adjust schemas with minimal disruption as needed.

When planning changes, involve all stakeholders to create awareness:

1. Assess and plan: Identify the requirements and take backward compatibility into account. Consider how existing stories will be affected. Build consensus with all stakeholders about the changes to the model.
2. Test and iterate: Use a preview space to test changes before applying them to production. Update incrementally rather than overhauling everything at once.
3. Communicate and document: Notify stakeholders about the updates, and make sure the documentation, design files, and technical documentation are in sync.

[Previous \\
\\
CMS Migration](https://www.storyblok.com/docs/concepts/cms-migration) [Next \\
\\
Datasources](https://www.storyblok.com/docs/concepts/datasources)

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