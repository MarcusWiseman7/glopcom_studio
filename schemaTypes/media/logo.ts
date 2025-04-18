import { defineField, defineType } from 'sanity';
import { SparklesIcon } from '@sanity/icons';

export const logo = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'seoImage',
    }),
  ],
  preview: {
    select: {
      title: 'image.alt',
    },
  },
});
