import { defineType } from 'sanity';
import { AddUserIcon } from '@sanity/icons';

export const partners = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  icon: AddUserIcon,
  fields: [
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'partner' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Partners',
      };
    },
  },
});
