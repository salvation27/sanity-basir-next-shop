import nc from "next-connect";
// import { client } from "../../../utils/client";

const handler = nc();

handler.get(async (req, res) => {
  // const categ = await client.fetch(`*[_type == "category"]`);
  const categories = ["Shirts", "Pants"];
  res.send(categories);
});
export default handler;
