// 年を自動更新
document.getElementById("year").textContent = new Date().getFullYear();

// テーマ切り替え（class/id の復習にも）
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  const pressed = toggle.getAttribute("aria-pressed") === "true";
  toggle.setAttribute("aria-pressed", String(!pressed));
  document.documentElement.toggleAttribute("data-theme", !pressed ? "dark" : "light");
});

// 簡易フォーム送信（JavaScript導入例）
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const obj = Object.fromEntries(data.entries());
  // このまま fetch でAPIへ送ることも可能（学内ではモックでOK）
  document.getElementById("result").textContent = "送信しました（モック）: " + JSON.stringify(obj);
});
