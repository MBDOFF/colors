// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  randomHex = `#${randomHex.padStart(6, "0")}`;
  res.status(200).json(randomHex);
}
