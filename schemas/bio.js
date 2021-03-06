export default {
  name: 'bio',
  title: 'Biography',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main Image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
