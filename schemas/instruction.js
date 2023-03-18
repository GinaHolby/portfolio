export default {
    name: "instruction",
    title: "Instruction",
    type: "object",
    fields: [
      {
        name: "step",
        title: "Step",
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