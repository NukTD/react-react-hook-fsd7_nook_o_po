import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


//ลองเขียน
export function useGetdata() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://127.0.0.1:4000/posts/";
  const { id } = useParams(); // ดึง id จาก useParams

  async function fetchData() {
    try {
      const result = await axios.get(`${url}${id}`); // ใช้ id แทน params และรวม url
      setPost(result.data.data); // ตั้งค่า data ให้เป็น result.data.data
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      // ตรวจสอบว่ามี id ก่อน
      fetchData();
    }
  }, [id]); // เพิ่ม id ใน dependency array

  return { post, loading };
}
