import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export const hero = defineType({
  name: 'hero',
  title: 'Hero Image',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the hero image',
      type: 'translation',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Subtitle of the hero image',
      type: 'translation',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'seoImage',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Hero',
    }),
  },
});
