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
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 8,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
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
      type: 'url'
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
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
      name: 'issueLabel',
      title: 'Issue label',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: rule => rule.required()
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero eyebrow',
      type: 'string'
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro title',
      type: 'string'
    }),
    defineField({
      name: 'introBody',
      title: 'Intro body',
      type: 'text',
      rows: 8,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'closing',
      title: 'Closing line',
      type: 'string'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
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
      type: 'url'
    }),
    defineField({
      name: 'featuredHeading',
      title: 'Featured heading',
      type: 'string'
    }),
    defineField({
      name: 'featuredCards',
      title: 'Featured cards',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterCard' })]
    }),
    defineField({
      name: 'scheduleHeading',
      title: 'Schedule heading',
      type: 'string'
    }),
    defineField({
      name: 'munichSchedule',
      title: 'Munich schedule',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterScheduleItem' })]
    }),
    defineField({
      name: 'regionalHeading',
      title: 'Regional heading',
      type: 'string'
    }),
    defineField({
      name: 'regionalLinks',
      title: 'Regional links',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    }),
    defineField({
      name: 'retrospectiveHeading',
      title: 'Retrospective heading',
      type: 'string'
    }),
    defineField({
      name: 'retrospectiveCards',
      title: 'Retrospective cards',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterCard' })]
    }),
    defineField({
      name: 'newsHeading',
      title: 'News heading',
      type: 'string'
    }),
    defineField({
      name: 'newsCards',
      title: 'News cards',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterCard' })]
    }),
    defineField({
      name: 'recommendedHeading',
      title: 'Recommended links heading',
      type: 'string'
    }),
    defineField({
      name: 'recommendedLinks',
      title: 'Recommended links',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    }),
    defineField({
      name: 'donationHeading',
      title: 'Donation heading',
      type: 'string'
    }),
    defineField({
      name: 'donationBody',
      title: 'Donation body',
      type: 'text',
      rows: 8
    }),
    defineField({
      name: 'donationDetails',
      title: 'Donation details',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact heading',
      type: 'string'
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact details',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'footerNote',
      title: 'Footer note',
      type: 'string'
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer links',
      type: 'array',
      of: [defineArrayMember({ type: 'newsletterLink' })]
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url'
    }),
    defineField({
      name: 'legacyImport',
      title: 'Legacy import reference',
      type: 'reference',
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
      media: 'heroImage'
    }
  }
});
