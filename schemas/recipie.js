// schemas/pet.js
export default {
    name: 'recipie',
    type: 'document',
      title: 'Recipie',
    fields: [
      {
        name: 'recipieTitle',
        type: 'string',
        title: 'Recipie Title'
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "recipieTitle",
          maxLength: 96,
        },
      },
      {
        name: 'recipieDescription',
        type: 'string',
        title: 'Recipie Description'
      },
      {
        name: 'coverimage',
        title: 'Coverimage',
        type: 'image',
        options: {
            hotspot: true
        }
      },
      {
        name: 'ingredientImage',
        title: 'Ingredient Image',
        type: 'image',
        options: {
            hotspot: true
        }
      },
      {
        name: 'level',
        title: 'Level',
        type: 'string',
      },
      {
        name: 'total',
        title: 'Total',
        type: 'string',
      },
      {
        name: 'active',
        title: 'Active',
        type: 'string',
      },
      {
        name: 'portions',
        title: 'Portions',
        type: 'number',
      },
      {
        name: "ingredients",
        title: "Ingredients",
        type: "array",
        of: [{ type: "ingredient" }],
      },
      {
        name: "instructions",
        title: "Instructions",
        type: "array",
        of: [{ type: "instruction" }],
      },
    ]
  }