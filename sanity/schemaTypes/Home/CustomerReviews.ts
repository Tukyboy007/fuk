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
      name: 'titleEn',
      title: 'Гарчиг (En)',
      type: 'string',
    }),
    defineField({
      name: 'lorem',
      title: 'Сэтгэгдэл',
      type: 'string',
    }),
    defineField({
      name: 'loremEn',
      title: 'Сэтгэгдэл (En)',
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
    defineField({
      name: 'professionEn',
      title: 'Мэргэжил (En)',
      type: 'string',
    }),
  ],
})
