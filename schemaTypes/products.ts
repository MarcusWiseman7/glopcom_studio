import { defineType } from 'sanity';
import { CaseIcon } from '@sanity/icons';

export const products = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  icon: CaseIcon,
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'product' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Products',
      };
    },
  },
});
