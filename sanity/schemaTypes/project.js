import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'allOrder',
        title: 'Order',
        type: 'number',
        description: 'Order of the project in the list'
    }),
    defineField({
      name: 'showInAll',
      title: 'Show in All',
      type: 'boolean',
      description: 'Show in the "All" category on the home page'
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'details',
      title: 'Project Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'value', type: 'array', title: 'Value', of: [{type: 'string'}]},
            {name: 'valueString', type: 'string', title: 'Value (Single String)'} 
          ]
        }
      ]
    }),
    defineField({
      name: 'figmaUrl',
      title: 'Figma URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'detailedContent',
      title: 'Detailed Content (Fun Projects)',
      type: 'object',
      fields: [
        {name: 'about', type: 'text', title: 'About'},
        {name: 'howItWorks', type: 'text', title: 'How It Works'},
        {name: 'features', type: 'array', title: 'Features', of: [{type: 'string'}]},
        {name: 'technicalDetails', type: 'text', title: 'Technical Details'},
        {name: 'whatILearned', type: 'text', title: 'What I Learned'},
        {name: 'challenges', type: 'text', title: 'Challenges'},
        {name: 'futurePlans', type: 'text', title: 'Future Plans'}
      ]
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {name: 'title', type: 'string', title: 'Section Title'},
            {name: 'content', type: 'array', title: 'Content', of: [{type: 'block'}, {type: 'image'}]}, 
            // Note: The original data has content as string or array of strings. 
            // In Sanity, we should use Portable Text (block) for rich text.
            {name: 'image', type: 'image', title: 'Section Image'},
            {name: 'imagePosition', type: 'string', title: 'Image Position', options: {list: ['before', 'after']}},
            {name: 'images', type: 'array', title: 'Images Gallery', of: [{type: 'image'}]}
          ]
        }
      ]
    }),
  ],
})
