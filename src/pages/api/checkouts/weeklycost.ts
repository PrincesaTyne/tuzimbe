import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function (
  request: NextApiRequest,
  response: NextApiResponse & Response
) {
  axios
    .get("http://localhost:3030/checkouts/weekly_material_cost")
    .then((res) => response.status(200).json({ data: res.data.data[0] }))
    .catch((e) => e.message);
}


export const config = {
  api: {
    externalResolver: true,
  },
}