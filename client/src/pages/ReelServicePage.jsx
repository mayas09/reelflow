import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axiosInstance";

export default function ReelServicePage() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios.get(`/services/${id}`)
      .then(res => setService(res.data))
      .catch(err => console.error("خطأ في جلب الخدمة", err));
  }, [id]);

  if (!service) return <p className="text-center mt-20">جاري التحميل...</p>;

  return (
    <div className="max-w-md mx-auto p-4 mt-12">
      <h1 className="text-2xl font-bold mb-2">{service.label}</h1>
      <p className="mb-4">{service.description}</p>
      <a
        href={service.link}
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        ابدأ الآن 🚀
      </a>
    </div>
  );
}
