import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'The main heading (e.g., "I\'m a Sr. Product designer")',
    }),
    defineField({
      name: 'typerStrings',
      title: 'Typer Strings',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'count', type: 'number', title: 'Count'},
            {name: 'suffix', type: 'string', title: 'Suffix'},
            {name: 'text', type: 'string', title: 'Text'},
            {name: 'animationOrder', type: 'number', title: 'Animation Order'}
          ]
        }
      ]
    }),
    defineField({
      name: 'workedWithTitle',
      title: 'Worked With Title',
      type: 'string',
    }),
    defineField({
      name: 'workedWithText',
      title: 'Worked With Text',
      type: 'text',
    }),
    defineField({
      name: 'locationTitle',
      title: 'Location Title',
      type: 'string',
    }),
    defineField({
      name: 'locationText',
      title: 'Location Text',
      type: 'string',
    }),
  ],
})
