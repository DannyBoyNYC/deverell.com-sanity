export default {
  name: 'post',
  title: 'Post',
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM D YYYY',
      },
    },
    {
      title: 'Show on home page?',
      name: 'homepage',
      type: 'boolean',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main Image',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Lead-in',
      description:
        'This ends up on summary pages, on Google, and when people share your post in social media.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
