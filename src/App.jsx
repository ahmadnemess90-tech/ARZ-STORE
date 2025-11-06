export default function App() {
  return (
    <div style={{ color: "#fff", textAlign: "center", paddingTop: "80px" }}>
     <img src="/arz-logo.png" alt="Arz Store Logo" width="96" height="96" />
      <h1 style={{ fontSize: 36, marginTop: 16 }}>Arz Store</h1>
      <p style={{ opacity: 0.8, marginTop: 8 }}>
        متجر إلكترونيات — توصيل سريع + دفع عند الاستلام
      </p>
      <a
        href="https://wa.me/96170216062"
        style={{
          display: "inline-block",
          marginTop: 24,
          padding: "12px 20px",
          borderRadius: 12,
          background: "#3AA6E9",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600
        }}
      >
        اطلب عبر واتساب
      </a>
    </div>
  );
}
