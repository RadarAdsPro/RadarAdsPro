import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: '✅ MongoDB connected successfully!' });
  } catch (error) {
    res.status(500).json({ error: '❌ Connection failed', details: error.message });
  }
}
