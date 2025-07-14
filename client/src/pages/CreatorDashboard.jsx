import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";

export default function CreatorDashboard() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/reels/creator", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setReels(res.data))
      .catch((err) => console.error("فشل تحميل الريلز", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">لوحة التحكم</h1>
      {reels.length === 0 ? (
        <p>لا توجد ريلاز بعد.</p>
      ) : (
        <div className="grid gap-4">
          {reels.map((reel) => (
            <div key={reel._id} className="border p-4 rounded-xl shadow">
              <h2 className="font-semibold text-lg">{reel.title}</h2>
              <p className="text-sm text-gray-600">{reel.category}</p>
              <video src={reel.videoURL} controls className="rounded mt-2" />
              <p className="mt-2 text-sm text-green-700">
                خدمة مرتبطة: {reel.service?.label || "لا شيء"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
      }
