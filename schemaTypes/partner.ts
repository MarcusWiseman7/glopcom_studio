import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const partner = defineType({
  name: 'partner',
  title: 'Partners',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'seoImage',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'translation',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
