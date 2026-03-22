import { defineArrayMember, defineField, defineType } from 'sanity';

export const newsletterLinkType = defineType({
  name: 'newsletterLink',
  title: 'Newsletter link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    })
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url'
    }
  }
});

export const newsletterCardType = defineType({
  name: 'newsletterCard',
  title: 'Newsletter card',
  type: 'object',
  fieldsets: [
    {
      name: 'copy',
      title: 'Copy'
    },
    {
      name: 'media',
      title: 'Image',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'actions',
      title: 'Links & extras',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      fieldset: 'copy'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'copy',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      fieldset: 'copy'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 8,
      description: 'Main paragraph for this card.',
      fieldset: 'copy',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      description: 'Optional short bullet-style lines.',
      fieldset: 'actions',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fieldset: 'media',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'imageUrl',
      title: 'External image URL',
      type: 'url',
      description: 'Use this only if you are not uploading an image above.',
      fieldset: 'media'
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      description: 'Optional buttons or supporting links for this card.',
      fieldset: 'actions',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      eyebrow: 'eyebrow',
      media: 'image'
    },
    prepare({ title, subtitle, eyebrow, media }) {
      return {
        title,
        subtitle: subtitle || eyebrow || 'Newsletter card',
        media
      };
    }
  }
});

export const newsletterScheduleItemType = defineType({
  name: 'newsletterScheduleItem',
  title: 'Newsletter schedule item',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Day / Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'day',
      subtitle: 'time'
    }
  }
});

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  groups: [
    { name: 'overview', title: 'Overview', default: true },
    { name: 'intro', title: 'Intro & hero' },
    { name: 'highlights', title: 'Highlights' },
    { name: 'schedule', title: 'Schedule' },
    { name: 'regional', title: 'Regional' },
    { name: 'stories', title: 'Stories' },
    { name: 'links', title: 'Links & footer' },
    { name: 'archive', title: 'Archive & admin' }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title of the newsletter issue.',
      group: 'overview',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used in the website URL.',
      group: 'overview',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'string',
      group: 'overview',
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
      name: 'issueLabel',
      title: 'Issue label',
      type: 'string',
      description: 'Examples: 01-2026, TEST-2026, Spring-2026',
      group: 'overview',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'overview',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required()
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero eyebrow',
      type: 'string',
      description: 'Small label above the intro title.',
      group: 'intro'
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro title',
      type: 'string',
      description: 'Greeting or opening heading.',
      group: 'intro'
    }),
    defineField({
      name: 'introBody',
      title: 'Intro body',
      type: 'text',
      rows: 8,
      description: 'Main opening text for the issue.',
      group: 'intro',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'closing',
      title: 'Closing line',
      type: 'string',
      description: 'Optional sign-off at the end of the intro.',
      group: 'intro'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      description: 'Best option if you want to upload an image directly.',
      group: 'intro',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Hero external image URL',
      type: 'url',
      description: 'Use this only if you are not uploading a hero image above.',
      group: 'intro'
    }),
    defineField({
      name: 'featuredHeading',
      title: 'Featured heading',
      type: 'string',
      description: 'Optional section title for event highlight cards.',
      group: 'highlights'
    }),
    defineField({
      name: 'featuredCards',
      title: 'Featured cards',
      type: 'array',
      description: 'Optional highlight cards. Add only if this issue needs them.',
      group: 'highlights',
      of: [defineArrayMember({ type: 'newsletterCard' })]
    }),
    defineField({
      name: 'scheduleHeading',
      title: 'Schedule heading',
      type: 'string',
      group: 'schedule'
    }),
    defineField({
      name: 'scheduleNote',
      title: 'Schedule note',
      type: 'text',
      rows: 4,
      description: 'Optional short note shown above the Munich schedule.',
      group: 'schedule'
    }),
    defineField({
      name: 'munichSchedule',
      title: 'Munich schedule',
      type: 'array',
      description: 'Add only the local schedule entries you want to show.',
      group: 'schedule',
      of: [defineArrayMember({ type: 'newsletterScheduleItem' })]
    }),
    defineField({
      name: 'regionalHeading',
      title: 'Regional heading',
      type: 'string',
      group: 'regional'
    }),
    defineField({
      name: 'regionalIntro',
      title: 'Regional intro',
      type: 'text',
      rows: 4,
      description: 'Optional short helper text above the city links.',
      group: 'regional'
    }),
    defineField({
      name: 'regionalLinks',
      title: 'Regional links',
      type: 'array',
      description: 'Optional city or region links.',
      group: 'regional',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    }),
    defineField({
      name: 'retrospectiveHeading',
      title: 'Retrospective heading',
      type: 'string',
      group: 'stories'
    }),
    defineField({
      name: 'retrospectiveCards',
      title: 'Retrospective cards',
      type: 'array',
      description: 'Optional retrospective or event-report cards.',
      group: 'stories',
      of: [defineArrayMember({ type: 'newsletterCard' })]
    }),
    defineField({
      name: 'newsHeading',
      title: 'News heading',
      type: 'string',
      group: 'stories'
    }),
    defineField({
      name: 'newsCards',
      title: 'News cards',
      type: 'array',
      description: 'Optional news or announcement cards.',
      group: 'stories',
      of: [defineArrayMember({ type: 'newsletterCard' })]
    }),
    defineField({
      name: 'recommendedHeading',
      title: 'Recommended links heading',
      type: 'string',
      group: 'links'
    }),
    defineField({
      name: 'recommendedLinks',
      title: 'Recommended links',
      type: 'array',
      description: 'Optional external links or resources.',
      group: 'links',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    }),
    defineField({
      name: 'donationHeading',
      title: 'Donation heading',
      type: 'string',
      group: 'links'
    }),
    defineField({
      name: 'donationBody',
      title: 'Donation body',
      type: 'text',
      rows: 8,
      description: 'Optional donation explanation.',
      group: 'links'
    }),
    defineField({
      name: 'donationDetails',
      title: 'Donation details',
      type: 'array',
      description: 'Optional lines such as account details or notes.',
      group: 'links',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact heading',
      type: 'string',
      group: 'links'
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact details',
      type: 'array',
      description: 'Optional address, email, phone, or transport details.',
      group: 'links',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'footerNote',
      title: 'Footer note',
      type: 'string',
      description: 'Optional final note at the bottom of the issue.',
      group: 'links'
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer links',
      type: 'array',
      description: 'Optional links shown in the footer area.',
      group: 'links',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Optional original source URL for archival/reference use.',
      group: 'archive'
    }),
    defineField({
      name: 'legacyImport',
      title: 'Legacy import reference',
      type: 'reference',
      description: 'Only needed when this issue is tied to an archived imported page.',
      group: 'archive',
      to: [{ type: 'legacyHtmlPage' }]
    })
  ],
  orderings: [
    {
      title: 'Published date, newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issueLabel',
      media: 'heroImage',
      locale: 'locale'
    },
    prepare({ title, subtitle, media, locale }) {
      const localeLabel = locale === 'en' ? 'EN' : 'DE';
      return {
        title,
        subtitle: subtitle ? `${subtitle} · ${localeLabel}` : localeLabel,
        media
      };
    }
  }
});
