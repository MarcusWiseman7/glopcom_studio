import { defineType } from 'sanity';
import { CommentIcon } from '@sanity/icons';
import { ThumbsUpIcon } from '@sanity/icons';

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: CommentIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street',
          type: 'string',
        },
        {
          name: 'zipcode',
          title: 'Zipcode',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
      ],
    },
    {
      name: 'vat',
      title: 'VAT',
      type: 'string',
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{ type: 'social' }],
    },
  ],
});

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'object',
  icon: ThumbsUpIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
});
