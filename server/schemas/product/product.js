import { BsFillFilePostFill } from "react-icons/bs";
export default {
  name: "product",
  title: "Product",
  icon: BsFillFilePostFill,
  type: "document",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 10,
      },
    },
    {
      title: "Отображать на главной?",
      name: "released",
      type: "boolean",
    },
    // {
    //   name: "comment",
    //   title: "Comment",
    //   type: "array",
    //   of: [{ type: "comments" }],
    // },
    // {
    //   name: "rating",
    //   title: "Rating",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "5 Stars", value: "5-stars" },
    //       { title: "4 Stars", value: "4-stars" },
    //       { title: "3 Stars", value: "3-stars" },
    //       { title: "2 Stars", value: "2-stars" },
    //       { title: "1 Stars", value: "1-stars" },
    //     ],
    //     layout: "radio",
    //   },
    // },
    {
      name: "stat",
      title: "Категория мужские или женские",
      type: "string",
      options: {
        list: [
          { title: "Man", value: "man" },
          { title: "Woman", value: "woman" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "brend",
      title: "Brend",
      type: "string",
    },
    // {
    //   name: "category",
    //   title: "Category",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Pants", value: "Pants" },
    //       { title: "Shirts", value: "Shirts" },
    //     ],
    //     layout: "radio",
    //   },
    // },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: {
        type: "category",
        of: "array",
      },
    },
    {
      name: "prices",
      title: "Prices",
      type: "reference",
      to: {
        type: "prices",
        of: "array",
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "numReviews",
      title: "Number Reviews",
      type: "number",
    },
    {
      name: "countInStok",
      title: "Count In Stok",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "social",
    },
  ],
};
