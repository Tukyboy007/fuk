import {defineField, defineType} from 'sanity'

export const NumberInformation = defineType({
  name: 'NumberInformation',
  title: 'Нийт мэдээлэл',
  type: 'document',
  fields: [
    defineField({
      title: 'Аялалын хөтөлбөр',
      name: 'products',
      type: 'number',
    }),
    defineField({
      name: 'users',
      title: 'Аялагчдын тоо',
      type: 'number',
    }),
    defineField({
      name: 'routes',
      title: 'Маршрутын тоо',
      type: 'number',
    }),
  ],
})
