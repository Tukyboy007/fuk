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
      title: 'Үндсэн Гарчиг Монгол хэлээр',
      name: 'sliderTitle',
      type: 'string',
    }),
    defineField({
      title: 'Үндсэн Гарчиг Англи хэлээр',
      name: 'sliderTitleEn',
      type: 'string',
    }),
    defineField({
      title: 'Дэд Гарчиг Монгол хэлээр',
      name: 'sliderMiniTitle',
      type: 'string',
    }),
    defineField({
      title: 'Дэд Гарчиг Англи хэлээр',
      name: 'sliderMiniTitleEn',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
  ],
})
