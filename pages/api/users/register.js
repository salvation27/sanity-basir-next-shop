import nc from "next-connect";
import bcrypt from "bcryptjs";
import axios from "axios";
// import config from "../../../utils/config";
import { signToken } from "../../../utils/auth";
import {client} from "../../../utils/client";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = "76m17hv5";
  const dataset = "production";
  const tokenWithWriteAccess =
    "skaP21bjKNsJHGaTTD8MsR7fgZOxKqi8kF4nHogsakfL9gYV7Y66HFDdJlUR9bws8TnNw6lfs9iJK0KeIx5IP98StcsAbMoBY9PJax4l8qbmwBrXw9mMRZzxhvsm4oaqYtxGFhNOlLubm4RuI1mWhIgO5bOYEC8YvFqZiM7mHzxqcr0dwiii";
  const createMutations = [
    {
      create: {
        _type: "user",
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        isAdmin: false,
      },
    },
  ];
console.log("test2 вижу", createMutations);
  const existUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    {
      email: req.body.email,
    }
  );
  console.log("вижу!",existUser);
  if (existUser) {
    return res.status(401).send({ message: "Email aleardy exists" });
  }
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );
  const userId = data.results[0].id;
  const user = {
    _id: userId,
    name: req.body.name,
    email: req.body.email,
    isAdmin: false,
  };
  // console.log('+')
  const token = signToken(user);
  res.send({ ...user, token });
    // console.log("+");
});

export default handler;
