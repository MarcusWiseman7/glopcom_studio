import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Image',
  type: 'document',
  icon: ImageIcon,
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
