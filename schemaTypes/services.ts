import { defineType } from 'sanity';
import { RobotIcon } from '@sanity/icons';

export const services = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: RobotIcon,
  fields: [
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'service' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Services' };
    },
  },
});
