import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';

export default defineConfig({
  name: 'default',
  title: 'glopcom',
  projectId: 'alvfsq58',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'de', title: 'Deutsch' },
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
