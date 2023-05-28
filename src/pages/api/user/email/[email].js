// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../../lib/prisma";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      handleGetuserByEmail(req, res);
      break;

    default:
      break;
  }
}

const handleGetuserByEmail = async (req, res) => {
  const { email } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  res.status(200).json(user);
};
