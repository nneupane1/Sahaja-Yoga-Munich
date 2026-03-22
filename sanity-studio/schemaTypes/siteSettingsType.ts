import {defineField, defineType} from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'blogIntroDe',
      title: 'Blog intro (German)',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'blogIntroEn',
      title: 'Blog intro (English)',
      type: 'text',
      rows: 4
    })
  ],
  preview: {
    prepare: () => ({
      title: 'Site settings'
    })
  }
});
