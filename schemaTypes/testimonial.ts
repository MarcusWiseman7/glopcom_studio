import { defineField, defineType } from 'sanity';
import { BlockquoteIcon } from '@sanity/icons';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
          name: 'position',
          title: 'Position',
          type: 'translation',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'seoImage',
        }),
      ],
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'translation',
    }),
  ],
  preview: {
    select: {
      title: 'author.name',
    },
  },
});
