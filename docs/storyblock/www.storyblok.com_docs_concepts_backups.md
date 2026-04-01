---
url: "https://www.storyblok.com/docs/concepts/backups"
title: "Backups | Storyblok Documentation"
---

# Backups

Backups ensure that your content is safely stored and can be restored. Safeguard your Storyblok data and components by configuring automatic backups to your AWS S3 bucket.

Depending on your [pricing plan](https://www.storyblok.com/pricing), you can configure daily or weekly backups.

## Included data

[Section titled “Included data”](https://www.storyblok.com/docs/concepts/backups#included-data)

- Stories
- Scheduled content
- Releases
- Translated stories
- Translated slugs
- Discussions
- Branches
- Components
- Component groups
- Assets (references only)
- Asset folders
- Roles
- Collaborators
- Workflows and workflow stages
- Workflow stage changes
- Datasources (including dimensions app data)
- App provisions
- Tasks

Tip

Backups in Storyblok do not include story versions, presets, space settings, or actual assets. Only asset references are stored. Use the [Management API](https://www.storyblok.com/docs/api/management) to back up story versions and space settings and the [Storyblok CLI](https://www.storyblok.com/docs/libraries/storyblok-cli) for presets. To back up assets, consider creating a script with the Management API or refer to the [Storyblok Assets Backup tool](https://github.com/storyblok/tool-examples/tree/main/storyblok-assets-backup) for guidance. Restoring a backup will recover assets only if they still exist in Storyblok.

## Setup

[Section titled “Setup”](https://www.storyblok.com/docs/concepts/backups#setup)

1. **Prerequisites**



   - Create an [Amazon AWS account](https://portal.aws.amazon.com/billing/signup).
   - Choose a suitable plan from Storyblok's [pricing options](https://www.storyblok.com/pricing).

2. **Install the app**



   - Open the **Apps** section.
   - Install the [S3 Backups](https://www.storyblok.com/apps/backups) app.

3. **Configure backups**



   - In your space, open **Settings** → **Backup & Restore** → **Backup**.
   - Enter your S3 bucket name and AWS Role ARN.
   - Enable automatic backups and schedule them as needed.

4. **Create an AWS CloudFormation Stack**



   - Log in to Amazon CloudFormation.
   - [Create a stack](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html) and choose **Amazon S3 URL** under "Specify template."
   - Use this template URL: `https://storyblok-tools.s3.eu-central-1.amazonaws.com/cloudformation/backup.yml`.
   - Enter your stack name, bucket name, and Storyblok space ID.
   - Acknowledge IAM resource creation and create the stack.
   - Copy the Role ARN from the stack’s outputs.

5. **Finalize the backup configuration**



   - Paste the Role ARN and the S3 bucket name into the **AWS ARN** field in Storyblok.
   - Click **Backup Now** to test the setup.

### Restore a backup

[Section titled “Restore a backup”](https://www.storyblok.com/docs/concepts/backups#restore-a-backup)

1. Open the **Restore** tab.
2. Select a backup from **Path to backup file** and click **Restore Now**.
3. Choose whether to restore specific entries, create a new space, or overwrite the existing space.
4. To restore an older backup, browse your S3 bucket and paste the backup file path.

### Restore a specific backup file

[Section titled “Restore a specific backup file”](https://www.storyblok.com/docs/concepts/backups#restore-a-specific-backup-file)

The restore dropdown only displays backups created within the current calendar month. If you need to restore an older backup, you must manually enter the full file path in the following format:

format

```
storyblok-backups/space-<space_id>/backup-<YYYYMMDD>-<id>.zip

//example

storyblok-backups/space-120582/backup-20240304-26-jeb2ka.zip
```

If you use Storyblok’s Managed Backup Service, contact [our support team](https://support.storyblok.com/) to request older versions. Otherwise, if you’ve set up your own S3 backup storage, retrieve the required file directly from there.

### Managed backups

[Section titled “Managed backups”](https://www.storyblok.com/docs/concepts/backups#managed-backups)

When you [contact our support team](https://support.storyblok.com/hc/), provide your Space ID and preferred backup frequency, and we will configure the [S3 Backups app](https://www.storyblok.com/apps/backups) for you. Once set up, you can seamlessly back up and restore your data without having to configure your own AWS S3 bucket.

## Other backup methods

[Section titled “Other backup methods”](https://www.storyblok.com/docs/concepts/backups#other-backup-methods)

While we recommend using the **S3 Backups** app for backing up your Storyblok space, you can also use the following tools and approaches to cover additional use cases or create custom backup strategies.

### Use the Storyblok CLI

[Section titled “Use the Storyblok CLI”](https://www.storyblok.com/docs/concepts/backups#use-the-storyblok-cli)

Install the [Storyblok CLI](https://www.storyblok.com/docs/libraries/storyblok-cli) and run the commands to export and sync any specific elements within your space:

- Languages
- Components
- Presets
- Stories and folders
- Roles
- Datasources
- Fields

Use this method for granular control over backup and synchronization workflows.

### Use the Management API

[Section titled “Use the Management API”](https://www.storyblok.com/docs/concepts/backups#use-the-management-api)

Create custom backup scripts with the [Storyblok Management API](https://www.storyblok.com/docs/api/management). Use API endpoints to fetch and store any part of your space programmatically.

This option is ideal for advanced workflows or full-space automation strategies.

### Use the Storyblok Assets Backup Script

[Section titled “Use the Storyblok Assets Backup Script”](https://www.storyblok.com/docs/concepts/backups#use-the-storyblok-assets-backup-script)

Use the [Assets Backup Script](https://github.com/storyblok/tool-examples/tree/main/storyblok-assets-backup) to export and back up all assets in your space efficiently.

This script is tailored for asset-specific backup workflows and can be integrated into your deployment pipeline or run periodically via cron jobs.

### Use the Storyblok Schema Migration Tool

[Section titled “Use the Storyblok Schema Migration Tool”](https://www.storyblok.com/docs/concepts/backups#use-the-storyblok-schema-migration-tool)

Use the [Schema Migration Tool](https://github.com/maoberlehner/storyblok-migrate), built by Storyblok Ambassador [Markus Oberlehner](https://github.com/maoberlehner), to export and back up your component definitions.

This tool is especially useful for version-controlling schema changes and migrating components across spaces.

[Previous \\
\\
Assets](https://www.storyblok.com/docs/concepts/assets) [Next \\
\\
Blocks](https://www.storyblok.com/docs/concepts/blocks)

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