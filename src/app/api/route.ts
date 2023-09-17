import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  template: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ template: "bisa kok" });
}
