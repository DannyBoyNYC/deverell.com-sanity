import MarkdownInput from "sanity-plugin-markdown";

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
      name: "image",
      type: "image",
      title: "Main Image",
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

  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return { ...selection, subtitle: author && `by ${author}` };
  //   },
  // },
};
