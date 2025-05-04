import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("RadarAdsDB");
    const ads = await db.collection("ads").find({}).toArray();
    res.status(200).json(ads);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "حدث خطأ في جلب الإعلانات" });
  }
}
