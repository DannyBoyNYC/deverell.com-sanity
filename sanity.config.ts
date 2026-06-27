import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Deverell',

  projectId: 'g2f5nmlg',
  dataset: 'production',

  plugins: [
    structureTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
