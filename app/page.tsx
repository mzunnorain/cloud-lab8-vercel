import Image from "next/image";

export default function Home() { 
  return ( 
    <main 
      style={{
        textAlign: "center", 
        marginTop: "10%",
        background: "linear-gradient(135deg, #cbced7 0%, #2dda27 50%, #000000 100%)",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    > 
      <h1 style={{
        color: "#fff",
        fontSize: "3rem",
        fontWeight: "700",
        marginBottom: "20px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        letterSpacing: "1px"
      }}>
        Lab 8 — Vercel Deployment
      </h1> 
      <p style={{
        color: "#fff",
        fontSize: "1.3rem",
        margin: "15px 0",
        fontWeight: "500",
        textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
      }}>
        Name: M.Zunnorain Ali
      </p> 
      <p style={{
        color: "#fff",
        fontSize: "1.3rem",
        margin: "15px 0",
        fontWeight: "500",
        textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
      }}>
        Roll: 01-131232-072
      </p> 
    </main> 
  );
}