export default {
    name: "ingredient",
    title: "Ingredient",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Ingredient",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
    ],
    preview: {
      select: {
        title: "title",
        media: "image",
      },
    },
  };