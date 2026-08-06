import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skillSection',
  title: 'Skill Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
        name: 'order',
        title: 'Order',
        type: 'number'
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Skill Name'},
            {name: 'percent', type: 'number', title: 'Percentage'},
            {name: 'years', type: 'string', title: 'Years of Experience'},
            {name: 'duration', type: 'string', title: 'Animation Duration'},
            {name: 'delay', type: 'string', title: 'Animation Delay'}
          ]
        }
      ]
    }),
  ],
})
