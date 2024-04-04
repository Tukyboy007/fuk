import {defineField, defineType} from 'sanity'

export const HomeSlider = defineType({
  name: 'HomeSlider',
  title: 'HomeSlider',
  type: 'document',
  fields: [
    defineField({
      name: 'sliderImage',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot feature for this image
      },
    }),
    defineField({
      name: 'sliderTitle',
      type: 'string',
    }),
    defineField({
      name: 'sliderMiniTitle',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
  ],
})
