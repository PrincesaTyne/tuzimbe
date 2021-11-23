import axios from "axios";

export default async function weeklycost() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TUZIMBE_API_URL}/checkouts/weekly_material_cost`
    );
    return response.data;
  } catch (err) {
    return err
  }
}
