import clientPromise from '../../lib/mongodb';
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('RadarAdsDB');
    const adsCollection = db.collection('ads');

    const result = await adsCollection.insertMany([
      {
        title: 'عرض الصيف إلى تركيا 🇹🇷',
        description: 'رحلة 7 أيام إلى أنطاليا بفندق 5 نجوم شاملة الطيران.'
      },
      {
        title: 'عرض دبي الفاخر 🇦🇪',
        description: '5 أيام في دبي + تذكرة دخول لأكسبو و3 وجبات.'
      },
      {
        title: 'رحلة استجمام في البحر الميت 🇯🇴',
        description: 'يوم كامل مع بوفيه مفتوح ومسبح ومواصلات.'
      }
    ]);

    res.status(200).json({ message: '✅ تم إدخال الإعلانات بنجاح', insertedCount: result.insertedCount });
  } catch (error) {
    res.status(500).json({ error: '❌ حدث خطأ أثناء الإدخال', details: error.message });
  }
}
