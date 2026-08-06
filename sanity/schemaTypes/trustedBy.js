import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trustedBy',
  title: 'Trusted By Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'logo', type: 'image', title: 'Logo'}
          ]
        }
      ]
    }),
  ],
})
