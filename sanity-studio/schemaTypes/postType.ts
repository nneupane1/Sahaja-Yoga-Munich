import {defineArrayMember, defineField, defineType} from 'sanity';

export const blogSectionType = defineType({
  name: 'blogSection',
  title: 'Blog section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'text', rows: 4})],
      validation: rule => rule.required().min(1)
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})]
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
});

export const postType = defineType({
  name: 'post',
  title: 'Post',
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
          {title: 'German', value: 'de'},
          {title: 'English', value: 'en'}
        ],
        layout: 'radio'
      },
      initialValue: 'de',
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
      name: 'featured',
      title: 'Featured post',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Small heading above the article title'
    }),
    defineField({
      name: 'cardTitle',
      title: 'Card title',
      type: 'string',
      description: 'Used on the blog listing card',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'cardDescription',
      title: 'Card description',
      type: 'text',
      rows: 3,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {hotspot: true},
      validation: rule => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: rule => rule.required()
        })
      ]
    }),
    defineField({
      name: 'heroNote',
      title: 'Hero note',
      type: 'text',
      rows: 3,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'blogSection'})],
      validation: rule => rule.required().min(1)
    }),
    defineField({
      name: 'related',
      title: 'Related posts',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'post'}]})]
    })
  ],
  orderings: [
    {
      title: 'Published date, newest',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'locale',
      media: 'heroImage'
    }
  }
});
