import axios from "axios";

export default async function dailycost() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TUZIMBE_API_URL}/checkouts/daily_material_cost`
    );
    return response.data;
  } catch (e) {
    return e
  }
}
