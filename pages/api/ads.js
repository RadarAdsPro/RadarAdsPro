import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await client.connect();
      const db = client.db('radarDB');
      const ads = await db.collection('ads').find().toArray();
      res.status(200).json(ads);
    } catch (err) {
      res.status(500).json({ error: 'فشل في جلب البيانات' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
