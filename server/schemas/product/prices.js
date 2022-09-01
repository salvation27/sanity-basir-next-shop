import { MdOutlineTune } from "react-icons/md";

export default {
  name: "prices",
  title: "Prices->Product",
  type: "document",
  icon: MdOutlineTune,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
  ],
};
