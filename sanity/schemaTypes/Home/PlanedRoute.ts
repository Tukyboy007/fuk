import {defineField, defineType} from 'sanity'

export const PlanedRoutes = defineType({
  name: 'PlanedRoutes',
  title: 'Төлөвлөгдсөн аялалууд',
  type: 'document',
  fields: [
    defineField({
      name: 'productImage',
      type: 'image',
      title: 'Зураг',
    }),

    defineField({
      name: 'location',
      title: 'Аялал зохиогдох газар',
      type: 'string',
    }),
    defineField({
      name: 'locationEn',
      title: 'Аялал зохиогдох газар (En)',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Зохиогдох аялалууд',
      type: 'number',
    }),
  ],
})
