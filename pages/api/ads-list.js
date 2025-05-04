import { useEffect, useState } from "react";

export default function AdsList() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAds() {
      const res = await fetch("/api/ads");
      const data = await res.json();
      setAds(data);
      setLoading(false);
    }
    fetchAds();
  }, []);

  if (loading) return <p>جاري تحميل الإعلانات...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📢 قائمة الإعلانات</h1>
      <ul>
        {ads.map((ad) => (
          <li key={ad._id}>
            <strong>{ad.title}</strong><br />
            <span>{ad.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
