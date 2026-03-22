import { defineField, defineType } from 'sanity';

export const legacyHtmlPageType = defineType({
  name: 'legacyHtmlPage',
  title: 'Legacy HTML Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'kind',
      title: 'Kind',
      type: 'string',
      options: {
        list: [
          { title: 'Newsletter', value: 'newsletter' },
          { title: 'Legacy page', value: 'page' },
          { title: 'Legacy article', value: 'article' }
        ],
        layout: 'radio'
      },
      initialValue: 'page',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'string',
      options: {
        list: [
          { title: 'German', value: 'de' },
          { title: 'English', value: 'en' }
        ],
        layout: 'radio'
      },
      initialValue: 'de',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'sourceSite',
      title: 'Source site',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'issueLabel',
      title: 'Issue label',
      type: 'string',
      description: 'Optional issue label like 01-2026'
    }),
    defineField({
      name: 'importedAt',
      title: 'Imported at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required()
    }),
    defineField({
      name: 'plainText',
      title: 'Plain text',
      type: 'text',
      rows: 12,
      description: 'Readable text extracted from the imported HTML'
    }),
    defineField({
      name: 'rawHtml',
      title: 'Raw HTML',
      type: 'text',
      rows: 24,
      description: 'Verbatim HTML imported from the legacy website',
      validation: rule => rule.required()
    })
  ],
  orderings: [
    {
      title: 'Imported date, newest',
      name: 'importedAtDesc',
      by: [{ field: 'importedAt', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sourceSite'
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `Imported from ${subtitle}` : 'Imported legacy HTML'
    })
  }
});
