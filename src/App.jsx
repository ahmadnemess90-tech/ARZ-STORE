export default function App() {
  return (
    <div style={{
      color: "#fff",
      textAlign: "center",
      paddingTop: "80px",
      backgroundColor: "#0a0a0a",
      minHeight: "100vh"
    }}>
      <img src="/arz-logo.png" alt="Arz Store Logo" width="100" height="100" />
      <h1 style={{ fontSize: "36px", marginTop: "16px" }}>Arz Store</h1>
      <p style={{ opacity: 0.8 }}>متجر إلكترونيات — توصيل سريع + دفع عند الاستلام</p>
      <a
        href="https://wa.me/96170216062"
        style={{
          display: "inline-block",
          marginTop: "24px",
          padding: "12px 20px",
          borderRadius: "12px",
          background: "#3AA6E9",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600
        }}
      >
        تواصل عبر واتساب
      </a>
    </div>
  );
}
