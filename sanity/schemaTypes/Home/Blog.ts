import {defineField, defineType} from 'sanity'

export const Blog = defineType({
  name: 'Blog',
  title: 'Мэдээ мэдээлэл',
  type: 'document',
  fields: [
    defineField({
      name: 'productImage',
      title: 'Үндсэн',
      type: 'image',
    }),
    defineField({
      name: 'subImages',
      title: 'Нэмэлт зургууд',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'title',
      title: 'Гарчиг',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Дэд Гарчиг',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Нийтлэлийг бичсэн',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'productImage',
        maxLength: 4,
      },
    }),
  ],
})
