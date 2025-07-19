import { useEffect, useState } from "react";
import "../styles/change_action/ThemeToggle.css"; // You’ll create this CSS file

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
    >
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
