import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosInstance";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  const [reels, setReels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/reels")
      .then(res => setReels(res.data))
      .catch(err => console.error("فشل تحميل الريلز", err));
  }, []);

  const handleSwipe = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">ريل فلو 🎥</h1>
      <div className="grid gap-4">
        {reels.map((reel) => (
          <Card key={reel._id} className="overflow-hidden">
            <CardContent>
              <video
                src={reel.videoURL}
                controls
                className="rounded-xl mb-2 w-full"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-xl">{reel.title}</h2>
                  <p className="text-sm text-gray-500">{reel.category}</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSwipe(reel.service._id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
                >
                  ↪️ اسحب لليمين
                </motion.button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
