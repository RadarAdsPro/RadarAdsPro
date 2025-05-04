import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return res.status(500).json({ error: "MONGODB_URI is not defined" });
  }

  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.db().command({ ping: 1 });
    await client.close();

    res.status(200).json({ message: "✅ Connected to MongoDB successfully!" });
  } catch (error) {
    res.status(500).json({ error: "❌ Connection failed", details: error.message });
  }
}
