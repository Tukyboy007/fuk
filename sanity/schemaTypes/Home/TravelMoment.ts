import {defineField, defineType} from 'sanity'

export const TravelMoment = defineType({
  name: 'TravelMomen',
  title: 'Аялалын Мөчүүд',
  type: 'document',
  fields: [
    defineField({
      name: 'TravelMomen',
      title: 'Аялалын мөчүүд',
      type: 'image',
    }),
  ],
})
