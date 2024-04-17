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
      name: 'titleEn',
      title: 'Гарчиг (En)',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Дэд гарчиг',
      type: 'string',
    }),
    defineField({
      name: 'subTitleEn',
      title: 'Дэд гарчиг (En)',
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
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'routeEn',
      title: 'Маршрут (En)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'routeExtend',
      title: 'Маршрут Дэлгэрэнгүй',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'routeExtendEn',
      title: 'Маршрут Дэлгэрэнгүй (En)',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'category',
      title: 'Төрөл',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Хугацаа',
      type: 'string',
    }),
    defineField({
      name: 'durationEn',
      title: 'Хугацаа (En)',
      type: 'string',
    }),
    defineField({
      name: 'datestart',
      title: 'Эхлэх хугацаа',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'dateend',
      title: 'Дуусах хугацаа',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'price',
      title: 'Төлбөр',
      type: 'number',
    }),
    defineField({
      name: 'priceEn',
      title: 'Төлбөр (En)',
      type: 'number',
    }),
    defineField({
      name: 'groupSize',
      title: 'Аялагчдын хязгаар',
      type: 'number',
    }),
    defineField({
      name: 'age',
      title: 'Насны хязгаар',
      type: 'number',
    }),
    defineField({
      name: 'language',
      title: 'Үйлчилгээ үзүүлэх хэл',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Аялалын тухай',
      type: 'text',
    }),
    defineField({
      name: 'overviewEn',
      title: 'Аялалын тухай (En)',
      type: 'text',
    }),
    defineField({
      name: 'highlights',
      title: 'Аялалын Онцлог зүйлс',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'highlightsEn',
      title: 'Аялалын Онцлог зүйлс (En)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'included',
      title: 'Аялалд багтсан зүйлс',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'includedEn',
      title: 'Аялалд багтсан зүйлс (En)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notincluded',
      title: 'Аялалд багтаагүй зүйлс',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notincludedEn',
      title: 'Аялалд багтаагүй зүйлс (En)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'askQuestion',
      title: 'Түгээмэл асуулт ',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'askQuestionEn',
      title: 'Түгээмэл асуулт (En)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'askQuestionEx',
      title: 'Түгээмэл асуултын хариулт',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'askQuestionExEn',
      title: 'Түгээмэл асуултын хариулт (En)',
      type: 'array',
      of: [{type: 'text'}],
    }),
  ],
})
