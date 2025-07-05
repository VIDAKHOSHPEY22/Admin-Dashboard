// src/pages/Logout.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // پاک کردن اطلاعات لاگین
    localStorage.removeItem("authToken");
    // ریدایرکت به صفحه ورود
    navigate("/login", { replace: true });
  }, [navigate]);

  return null;
}