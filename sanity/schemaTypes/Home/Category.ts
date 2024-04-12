import {defineField, defineType, isTitledListValue} from 'sanity'

export const Category = defineType({
  name: 'category',
  type: 'document',
  title: 'Төрөл',
  fields: [
    defineField({
      name: 'name',
      title: 'Аялалын төрөл',
      type: 'string',
    }),
  ],
})
