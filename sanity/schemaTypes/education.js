import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Degree / Title',
      type: 'string',
    }),
    defineField({
      name: 'institute',
      title: 'Institute',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
        name: 'order',
        title: 'Order',
        type: 'number'
    })
  ],
})
