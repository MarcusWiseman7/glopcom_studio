import { defineField, defineType } from 'sanity';
import { AddUserIcon } from '@sanity/icons';

export const partner = defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  icon: AddUserIcon,
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
      name: 'points',
      title: 'Bullet points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
});
