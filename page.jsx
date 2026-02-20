"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [url, setUrl] = useState("");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState({ show: false, msg: "" });

  const heroTitleRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroInputRef = useRef(null);
  const statsRef = useRef(null);

  function showToast(msg) {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  }

  function simulateProcessing(callback) {
    setProcessing(true);
    setProgress(0);
    let w = 0;
    const interval = setInterval(() => {
      w += Math.random() * 15;
      if (w >= 95) {
        w = 95;
        clearInterval(interval);
        setTimeout(() => {
          setProcessing(false);
          setProgress(0);
          callback();
        }, 500);
      }
      setProgress(w);
    }, 200);
  }

  function handleDownload() {
    if (!url.trim()) { showToast("⚠️ Please paste a YouTube URL first"); return; }
    showToast("⚡ Analyzing video...");
    simulateProcessing(() => showToast("✅ Ready to download! Check your backend."));
  }

  function handleTranscribe() {
    if (!url.trim()) { showToast("⚠️ Please paste a YouTube URL first"); return; }
    showToast("🧠 AI Transcription started...");
    simulateProcessing(() => showToast("✅ Transcript ready!"));
  }

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(heroBadgeRef.current, { opacity: 0, y: 20, duration: 0.8, delay: 0.3 })
      .from(".hero-word", { y: 120, opacity: 0, duration: 1, stagger: 0.15 }, 0.5)
      .from(heroSubRef.current, { opacity: 0, y: 20, duration: 0.8 }, 1.2)
      .from(heroInputRef.current, { opacity: 0, y: 20, duration: 0.8 }, 1.4)
      .from(statsRef.current, { opacity: 0, y: 20, duration: 0.8 }, 1.6);

    // Scroll animations
    gsap.from(".feature-card", {
      scrollTrigger: { trigger: ".features-grid", start: "top 80%" },
      y: 60, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
    });
    gsap.from(".step-item", {
      scrollTrigger: { trigger: ".steps-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
    });
    gsap.from(".price-card", {
      scrollTrigger: { trigger: ".pricing-grid", start: "top 80%" },
      y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* Toast */}
      <div style={{
        position: "fixed", bottom: 40, right: 40,
        background: "#111118", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12, padding: "16px 24px", fontSize: 14, zIndex: 1000,
        transform: toast.show ? "translateY(0)" : "translateY(100px)",
        opacity: toast.show ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        color: "#f0f0f8",
      }}>
        {toast.msg}
      </div>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 48px", backdropFilter: "blur(20px)",
        background: "rgba(5,5,7,0.7)", borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <a href="#" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 3, color: "#e8ff47", textDecoration: "none" }}>
          YT<span style={{ color: "#f0f0f8" }}>FLOW</span>
        </a>
        <ul style={{ display: "flex", gap: 40, listStyle: "none", margin: 0, padding: 0 }}>
          {["Features", "How it works", "Pricing"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                style={{ fontSize: 13, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase", color: "#6b6b80", textDecoration: "none" }}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#" style={{
              fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
              color: "#000", textDecoration: "none", background: "#e8ff47",
              padding: "10px 24px", borderRadius: 40,
            }}>Start Free</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "120px 48px 80px", position: "relative", overflow: "hidden",
        background: `
          radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,255,71,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 60%, rgba(85,153,255,0.06) 0%, transparent 70%),
          #050507
        `,
      }}>
        <div ref={heroBadgeRef} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(232,255,71,0.1)", border: "1px solid rgba(232,255,71,0.2)",
          borderRadius: 40, padding: "8px 18px", fontSize: 12, fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase", color: "#e8ff47", marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, background: "#e8ff47", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          Now with AI Transcription
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 12vw, 160px)", lineHeight: 0.9, textAlign: "center", letterSpacing: 2, marginBottom: 24 }}>
          {["DOWNLOAD", "TRANSCRIBE", "DOMINATE"].map((word, i) => (
            <span key={word} className="hero-word" style={{
              display: "block",
              color: i === 1 ? "transparent" : i === 2 ? "#e8ff47" : "#f0f0f8",
              WebkitTextStroke: i === 1 ? "1px rgba(255,255,255,0.3)" : "none",
              overflow: "hidden",
            }}>{word}</span>
          ))}
        </h1>

        <p ref={heroSubRef} style={{ fontSize: 17, color: "#6b6b80", maxWidth: 480, textAlign: "center", lineHeight: 1.7, marginBottom: 56 }}>
          The fastest way to download YouTube videos and generate AI-powered transcriptions. Any format, any language, zero hassle.
        </p>

        <div ref={heroInputRef} style={{ width: "100%", maxWidth: 720 }}>
          <div style={{
            display: "flex", background: "#111118", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16, padding: "8px 8px 8px 24px", alignItems: "center",
            transition: "box-shadow 0.3s",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b6b80" strokeWidth="2" style={{ marginRight: 12, flexShrink: 0 }}>
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste a YouTube URL to get started..."
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                fontFamily: "'Syne Mono', monospace", fontSize: 14, color: "#f0f0f8",
                padding: "12px 0",
              }}
            />
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button onClick={handleTranscribe} style={{
                padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700,
                cursor: "pointer", background: "rgba(255,255,255,0.06)", color: "#f0f0f8",
                border: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Cabinet Grotesk', sans-serif",
              }}>Transcribe</button>
              <button onClick={handleDownload} style={{
                padding: "12px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700,
                cursor: "pointer", background: "#e8ff47", color: "#000", border: "none",
                fontFamily: "'Cabinet Grotesk', sans-serif",
              }}>Download ↓</button>
            </div>
          </div>
          {processing && (
            <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 3, marginTop: 16, overflow: "hidden" }}>
              <div style={{
                height: "100%", background: "linear-gradient(90deg, #e8ff47, #5599ff)",
                borderRadius: 3, width: `${progress}%`, transition: "width 0.3s ease",
              }} />
            </div>
          )}
        </div>

        <div ref={statsRef} style={{ display: "flex", gap: 64, marginTop: 80 }}>
          {[
            { num: "2.4M+", label: "Videos Processed" },
            { num: "140+", label: "Languages Supported" },
            { num: "98.7%", label: "Accuracy Rate" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: 2, color: "#e8ff47", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#6b6b80", marginTop: 4, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cabinet+Grotesk:wght@300;400;500;700;800&family=Syne+Mono&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #050507; color: #f0f0f8; font-family: 'Cabinet Grotesk', sans-serif; overflow-x: hidden; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        .feature-card:hover { background: #0c0c10 !important; }
        .feature-card { transition: background 0.3s; }
        input::placeholder { color: #6b6b80; font-family: 'Cabinet Grotesk', sans-serif; font-size: 15px; }
        a:hover { color: #f0f0f8 !important; }
      `}</style>
    </>
  );
}
