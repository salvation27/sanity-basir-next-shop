import nc from "next-connect";
import bcrypt from "bcryptjs";
import axios from "axios";
// import config from "../../../utils/config";
import { signToken } from "../../../utils/auth";
import {client} from "../../../utils/client";

const handler = nc();

handler.post(async (req, res) => {
  const projectId = "eq2s5m51";
  const dataset = "production";
  const tokenWithWriteAccess =
    "skQvWDZtDdFyFnR147QTtjJPhYULONpv5sEcospjwk2T4SFnhYHezZ9Wz9k0brclpT3C4MVyaJMRtkLwI3ysx14KJgeHNrnzOm7IPUJ5UrQ7AkGSbfrnzW6HPx7mJhL0lVSC4e1Cx9goyQvi5bmgGPZ6NTxFm6tQEeuDgnHyMPDvdj9Ak8y5";
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
  const existUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    {
      email: req.body.email,
    }
  );
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
  const token = signToken(user);
  res.send({ ...user, token });
});

export default handler;
