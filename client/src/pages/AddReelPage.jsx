import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function AddReelPage() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "رياضة",
    videoURL: "",
    serviceId: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/services").then(res => setServices(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("/reels", form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("تم إضافة الريل بنجاح!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("حدث خطأ في الإضافة.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">إضافة ريل جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="عنوان الريل"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <select
          className="w-full border p-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option>رياضة</option>
          <option>دراسة</option>
          <option>ترفيه</option>
          <option>دين</option>
          <option>موسيقى</option>
          <option>ألعاب</option>
        </select>
        <input
          type="text"
          placeholder="رابط الفيديو (mp4)"
          className="w-full border p-2 rounded"
          value={form.videoURL}
          onChange={(e) => setForm({ ...form, videoURL: e.target.value })}
          required
        />
        <select
          className="w-full border p-2 rounded"
          value={form.serviceId}
          onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
          required
        >
          <option value="">اختر الخدمة المرتبطة</option>
          {services.map((s) => (
            <option key={s._id} value={s._id}>
              {s.label}
            </option>
          ))}
        </select>
        <button className="w-full bg-green-600 text-white py-2 rounded">
          إضافة الريل
        </button>
      </form>
    </div>
  );
}
