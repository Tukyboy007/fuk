import {defineField, defineType} from 'sanity'

export const Products = defineType({
  name: 'Product',
  title: 'Aялал',
  type: 'document',
  fields: [
    defineField({
      name: 'productImage',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'title',
      title: 'Гарчиг',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'offerMiniTitle',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Санал болгох',
      type: 'boolean',
    }),
    defineField({
      name: 'special',
      title: 'Онцлох',
      type: 'boolean',
    }),
    defineField({
      name: 'route',
      title: 'Маршрут',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Хугацаа',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Төлбөр',
      type: 'number',
    }),
  ],
})
