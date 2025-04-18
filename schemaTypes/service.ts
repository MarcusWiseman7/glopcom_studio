import { defineField, defineType } from 'sanity';
import { RobotIcon } from '@sanity/icons';

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: RobotIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'seoImage',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'points',
      title: 'Bullet points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
  ],
});
