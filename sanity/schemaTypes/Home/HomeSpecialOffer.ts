import {defineField, defineType} from 'sanity'

export const HomeSpecialOffer = defineType({
  name: 'HomeSpecialOffer',
  title: 'HomeSpecialOffer',
  type: 'document',
  fields: [
    defineField({
      name: 'offerImage',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot feature for this image
      },
    }),
    defineField({
      name: 'offerTitle',
      type: 'string',
    }),
    defineField({
      name: 'offerMiniTitle',
      type: 'string',
    }),
  ],
})
