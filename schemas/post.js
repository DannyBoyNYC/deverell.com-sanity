// import MarkdownInput from "sanity-plugin-markdown";


// Error: Encountered anonymous inline image "image" for field/type "Post". To use this field with GraphQL you will need to create a top-level schema type for it. See https://docs.sanity.io/help/schema-lift-anonymous-object-type

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      options: {
        dateFormat: "MMMM D YYYY",
      },
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main Image",
    //   options: {
    //     hotspot: true
    //   },
    //   fields: [
    //     {
    //       name: 'caption',
    //       type: 'string',
    //       title: 'Caption',
    //       options: {
    //         isHighlighted: true
    //       }
    //     },
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //       description: 'Important for SEO and accessiblity.',
    //       validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
    //       options: {
    //         isHighlighted: true
    //       }
    //     }
    //   ],
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, and when people share your post in social media.",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  },
};

  //   prepare(selection) {
  //     const { author } = selection;
  //     return { ...selection, subtitle: author && `by ${author}` };
  //   },