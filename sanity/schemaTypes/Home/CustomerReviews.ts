import {defineField, defineType} from 'sanity'

export const CustomerReviews = defineType({
  name: 'Reviews',
  title: 'Сэтгэгдэл',
  type: 'document',
  fields: [
    defineField({
      title: 'Аялагчийн зураг',
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Гарчиг',
      type: 'string',
    }),
    defineField({
      name: 'lorem',
      title: 'Сэтгэгдэл',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Нэр',
      type: 'string',
    }),
    defineField({
      name: 'profession',
      title: 'Мэргэжил',
      type: 'string',
    }),
  ],
})
