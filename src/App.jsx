import { useState, useEffect, useRef } from "react";

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const C = {
  crimson:    "#A01830",
  crimsonDim: "#7A1225",
  crimsonGlow:"rgba(160,24,48,0.25)",
  crimsonFaint:"rgba(160,24,48,0.08)",
  bg:         "#080B0F",
  surface:    "#0F1318",
  surface2:   "#161B22",
  border:     "#1E2530",
  borderHi:   "#2A3340",
  text:       "#E8EDF2",
  textMid:    "#8A95A0",
  textDim:    "#404B55",
  orange:     "#C4622A",
  gold:       "#B8962A",
  white:      "#FFFFFF",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CLIENT = {
  name: "Martín Rodríguez",
  plan: "3 días",
  currentWeek: 2,
  daysLeft: 5,
};

const PROGRAM = [
  {
    week: 1, label: "ADAPTACIÓN", tag: "Base", unlocked: true, completed: true,
    days: [
      {
        slot: 1, label: "DÍA A", focus: "TREN SUPERIOR", completed: true,
        warmup: [
          { name: "Rotación de hombros", detail: "2 min", done: true },
          { name: "Movilidad de muñecas", detail: "1 min", done: true },
          { name: "Trote suave", detail: "5 min", done: true },
        ],
        exercises: [
          { name: "Press de banca", muscle: "Pectoral", sets: 3, reps: "12", rest: 60, done: true },
          { name: "Remo con mancuerna", muscle: "Dorsal", sets: 3, reps: "12", rest: 60, done: true },
          { name: "Press militar", muscle: "Hombros", sets: 3, reps: "10", rest: 60, done: true },
          { name: "Curl de bíceps", muscle: "Bíceps", sets: 3, reps: "12", rest: 45, done: true },
          { name: "Extensión tríceps", muscle: "Tríceps", sets: 3, reps: "12", rest: 45, done: true },
          { name: "Plancha abdominal", muscle: "Core", sets: 3, reps: "30s", rest: 30, done: true },
        ],
      },
      {
        slot: 2, label: "DÍA B", focus: "TREN INFERIOR", completed: true,
        warmup: [
          { name: "Movilidad de cadera", detail: "2 min", done: true },
          { name: "Sentadilla sin peso", detail: "15 reps", done: true },
          { name: "Saltos en el lugar", detail: "2 min", done: true },
        ],
        exercises: [
          { name: "Sentadilla con barra", muscle: "Cuádriceps", sets: 3, reps: "12", rest: 90, done: true },
          { name: "Peso muerto rumano", muscle: "Isquios", sets: 3, reps: "10", rest: 90, done: true },
          { name: "Prensa de piernas", muscle: "Cuádriceps", sets: 3, reps: "15", rest: 60, done: true },
          { name: "Zancadas con mancuernas", muscle: "Glúteos", sets: 3, reps: "10 c/lado", rest: 60, done: true },
          { name: "Elevación de talones", muscle: "Gemelos", sets: 4, reps: "20", rest: 30, done: true },
          { name: "Abducción de cadera", muscle: "Glúteos", sets: 3, reps: "15", rest: 30, done: true },
        ],
      },
      {
        slot: 3, label: "DÍA C", focus: "FULL BODY", completed: true,
        warmup: [
          { name: "Jumping jacks", detail: "2 min", done: true },
          { name: "Movilidad de columna", detail: "2 min", done: true },
          { name: "Estiramiento dinámico", detail: "3 min", done: true },
        ],
        exercises: [
          { name: "Sentadilla + press", muscle: "Full body", sets: 3, reps: "10", rest: 60, done: true },
          { name: "Remo en polea baja", muscle: "Espalda", sets: 3, reps: "12", rest: 60, done: true },
          { name: "Fondos en paralelas", muscle: "Tríceps/Pecho", sets: 3, reps: "10", rest: 60, done: true },
          { name: "Peso muerto mancuernas", muscle: "Posterior", sets: 3, reps: "12", rest: 75, done: true },
          { name: "Face pull en polea", muscle: "Hombros", sets: 3, reps: "15", rest: 45, done: true },
          { name: "Crunch en polea", muscle: "Abdomen", sets: 3, reps: "15", rest: 30, done: true },
        ],
      },
    ],
  },
  {
    week: 2, label: "PROGRESIÓN", tag: "Actual", unlocked: true, completed: false,
    days: [
      {
        slot: 1, label: "DÍA A", focus: "TREN SUPERIOR", completed: false,
        warmup: [
          { name: "Movilidad escapular", detail: "2 min", done: false },
          { name: "Band pull-apart", detail: "15 reps", done: false },
          { name: "Cardio moderado", detail: "5 min", done: false },
        ],
        exercises: [
          { name: "Press banca inclinado", muscle: "Pectoral alto", sets: 4, reps: "10", rest: 75, done: false },
          { name: "Dominadas asistidas", muscle: "Dorsal", sets: 3, reps: "8", rest: 90, done: false },
          { name: "Elevaciones laterales", muscle: "Hombros", sets: 4, reps: "12", rest: 45, done: false },
          { name: "Curl martillo", muscle: "Bíceps", sets: 3, reps: "12", rest: 45, done: false },
          { name: "Press francés", muscle: "Tríceps", sets: 3, reps: "10", rest: 60, done: false },
          { name: "Elevación piernas colgado", muscle: "Core", sets: 3, reps: "12", rest: 45, done: false },
        ],
      },
      {
        slot: 2, label: "DÍA B", focus: "TREN INFERIOR", completed: false,
        warmup: [
          { name: "Foam roller piernas", detail: "3 min", done: false },
          { name: "Hip thrust sin peso", detail: "12 reps", done: false },
          { name: "Movilidad de tobillo", detail: "2 min", done: false },
        ],
        exercises: [
          { name: "Sentadilla frontal", muscle: "Cuádriceps", sets: 4, reps: "8", rest: 90, done: false },
          { name: "Hip thrust con barra", muscle: "Glúteos", sets: 4, reps: "12", rest: 75, done: false },
          { name: "Extensión de cuádriceps", muscle: "Cuádriceps", sets: 3, reps: "15", rest: 45, done: false },
          { name: "Curl femoral acostado", muscle: "Isquios", sets: 3, reps: "12", rest: 45, done: false },
          { name: "Step up con mancuernas", muscle: "Glúteos/Cuád", sets: 3, reps: "10 c/lado", rest: 60, done: false },
          { name: "Plancha lateral", muscle: "Oblicuos", sets: 3, reps: "30s c/lado", rest: 30, done: false },
        ],
      },
      {
        slot: 3, label: "DÍA C", focus: "POTENCIA + CORE", completed: false,
        warmup: [
          { name: "Remo o cuerda (cardio)", detail: "5 min", done: false },
          { name: "Rotaciones de tronco", detail: "2 min", done: false },
          { name: "Activación glútea", detail: "15 reps", done: false },
        ],
        exercises: [
          { name: "Clean & press mancuernas", muscle: "Full body", sets: 3, reps: "8", rest: 90, done: false },
          { name: "Remo Yates con barra", muscle: "Espalda media", sets: 4, reps: "10", rest: 75, done: false },
          { name: "Press Arnold", muscle: "Hombros", sets: 3, reps: "12", rest: 60, done: false },
          { name: "Sentadilla búlgara", muscle: "Cuádriceps", sets: 3, reps: "8 c/lado", rest: 75, done: false },
          { name: "Jalón al pecho", muscle: "Dorsal ancho", sets: 3, reps: "12", rest: 60, done: false },
          { name: "Rueda abdominal", muscle: "Core total", sets: 3, reps: "10", rest: 45, done: false },
        ],
      },
    ],
  },
  { week: 3, label: "INTENSIDAD", tag: "Próxima", unlocked: false, completed: false, days: [] },
  { week: 4, label: "PEAK", tag: "Próxima", unlocked: false, completed: false, days: [] },
];

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const Ico = ({ d, size = 20, stroke = C.text, fill = "none", sw = 1.75 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);

const Icons = {
  back:     (s) => <Ico size={s} d="M19 12H5M12 5l-7 7 7 7"/>,
  check:    (s,c) => <Ico size={s} stroke={c||C.white} sw={2.5} d="M20 6L9 17l-5-5"/>,
  lock:     (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  bell:     (s,c) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c||C.text} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  chevron:  (s) => <Ico size={s} stroke={C.textDim} d="M9 18l6-6-6-6"/>,
  fire:     (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill={C.orange}><path d="M12 2s-5 5-5 10a5 5 0 0 0 10 0c0-5-5-10-5-10zm0 15a3 3 0 0 1-3-3c0-2 2-4.5 3-6 1 1.5 3 4 3 6a3 3 0 0 1-3 3z"/></svg>,
  trophy:   (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="8,21 12,21 16,21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 4H4v3a3 3 0 0 0 3 3"/><path d="M17 4h3v3a3 3 0 0 1-3 3"/><path d="M7 4h10v6a5 5 0 0 1-10 0V4z"/></svg>,
  timer:    (s,c) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c||C.textMid} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 3h6M12 3v2"/></svg>,
  dumbbell: (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 9.5v5M21 9.5v5"/><rect x="1" y="8.5" width="4" height="7" rx="1"/><rect x="19" y="8.5" width="4" height="7" rx="1"/><rect x="5" y="11" width="14" height="2" rx="1"/></svg>,
  user:     (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.textMid} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  eye:      (s) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
};

// ─── REST TIMER ───────────────────────────────────────────────────────────────
const RestTimer = ({ seconds, onDone }) => {
  const [left, setLeft] = useState(seconds);
  const ref = useRef(null);
  useEffect(() => {
    ref.current = setInterval(() => {
      setLeft(p => { if (p <= 1) { clearInterval(ref.current); onDone(); return 0; } return p - 1; });
    }, 1000);
    return () => clearInterval(ref.current);
  }, []);
  const pct = (left / seconds) * 100;
  const r = 28; const circ = 2 * Math.PI * r;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"16px 0 8px" }}>
      <div style={{ position:"relative", width:72, height:72, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <svg width="72" height="72" style={{ position:"absolute", transform:"rotate(-90deg)" }}>
          <circle cx="36" cy="36" r={r} fill="none" stroke={C.border} strokeWidth="4"/>
          <circle cx="36" cy="36" r={r} fill="none" stroke={C.crimson} strokeWidth="4"
            strokeDasharray={circ} strokeDashoffset={circ - (pct/100)*circ}
            strokeLinecap="round" style={{ transition:"stroke-dashoffset 1s linear" }}/>
        </svg>
        <span style={{ fontSize:20, fontWeight:700, color:C.text, fontFamily:"'Oswald',sans-serif" }}>{left}s</span>
      </div>
      <span style={{ fontSize:11, color:C.textDim, letterSpacing:"0.12em", marginTop:6 }}>DESCANSO</span>
      <button onClick={onDone} style={{ marginTop:8, background:"none", border:`1px solid ${C.border}`, borderRadius:6, padding:"4px 14px", color:C.textDim, fontSize:11, cursor:"pointer", letterSpacing:"0.08em" }}>SALTAR</button>
    </div>
  );
};

// ─── PROGRESS RING ────────────────────────────────────────────────────────────
const Ring = ({ pct, size=80, sw=5, color=C.crimson, children }) => {
  const r = (size - sw*2)/2;
  const circ = 2*Math.PI*r;
  return (
    <div style={{ position:"relative", width:size, height:size, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <svg width={size} height={size} style={{ position:"absolute", transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={sw}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={sw}
          strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ} strokeLinecap="round"
          style={{ transition:"stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)" }}/>
      </svg>
      <div style={{ position:"relative", zIndex:1 }}>{children}</div>
    </div>
  );
};

// ─── GYM MARK ────────────────────────────────────────────────────────────────
const GymMark = ({ size="md" }) => {
  const sz = size==="lg" ? 52 : size==="sm" ? 30 : 40;
  const f1 = size==="lg" ? 13 : size==="sm" ? 8 : 10;
  const f2 = size==="lg" ? 9 : size==="sm" ? 6 : 7;
  return (
    <div style={{ display:"flex", alignItems:"center", gap: size==="sm"?8:10 }}>
      <div style={{
        width:sz, height:sz, borderRadius:"50%", background:C.white,
        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
        boxShadow:`0 0 0 1px ${C.border}, 0 4px 20px ${C.crimsonGlow}`,
      }}>
        <svg width={sz*0.72} height={sz*0.72} viewBox="0 0 60 60">
          <ellipse cx="30" cy="38" rx="10" ry="8" fill="#111"/>
          <rect x="8" y="18" width="44" height="6" rx="3" fill="#111"/>
          <circle cx="10" cy="21" r="6" fill="#111"/>
          <circle cx="50" cy="21" r="6" fill="#111"/>
          <circle cx="10" cy="21" r="3.5" fill="#666"/>
          <circle cx="50" cy="21" r="3.5" fill="#666"/>
          <rect x="4" y="19" width="12" height="4" rx="2" fill={C.crimson}/>
          <rect x="44" y="19" width="12" height="4" rx="2" fill={C.crimson}/>
          <rect x="22" y="33" width="4" height="7" rx="2" fill="#222"/>
          <rect x="27" y="32" width="4" height="8" rx="2" fill="#222"/>
          <rect x="32" y="32" width="4" height="8" rx="2" fill="#222"/>
          <rect x="37" y="33" width="4" height="7" rx="2" fill="#222"/>
          <rect x="14" y="44" width="32" height="9" rx="1.5" fill={C.crimson}/>
          <text x="30" y="51.5" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="800" fontFamily="Arial Black">GYM</text>
        </svg>
      </div>
      <div>
        <div style={{ fontFamily:"'Oswald','Arial Black',sans-serif", fontSize:f1, fontWeight:700, color:C.text, letterSpacing:"0.12em", lineHeight:1.1 }}>REVOLUCIÓN</div>
        <div style={{ fontFamily:"'Oswald','Arial Black',sans-serif", fontSize:f2, fontWeight:500, color:C.crimson, letterSpacing:"0.35em", lineHeight:1.2 }}>· GYM ·</div>
      </div>
    </div>
  );
};

// ─── TOPBAR ───────────────────────────────────────────────────────────────────
const TopBar = ({ onBack, right, title, sub }) => (
  <div style={{
    background:C.surface, borderBottom:`1px solid ${C.border}`,
    padding:"14px 18px", display:"flex", alignItems:"center", gap:12,
    position:"sticky", top:0, zIndex:10,
  }}>
    {onBack
      ? <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px", display:"flex", borderRadius:8, color:C.text }}>{Icons.back(20)}</button>
      : <GymMark size="sm"/>
    }
    {title && (
      <div style={{ flex:1 }}>
        {sub && <div style={{ fontSize:10, color:C.crimson, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:2 }}>{sub}</div>}
        <div style={{ fontSize:15, fontWeight:600, color:C.text, fontFamily:"'Oswald',sans-serif", letterSpacing:"0.04em" }}>{title}</div>
      </div>
    )}
    {!title && <div style={{ flex:1 }}/>}
    {right}
  </div>
);

// ─── LOGIN ────────────────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [vis, setVis] = useState(false);
  const [showPw, setShowPw] = useState(false);
  useEffect(() => { setTimeout(()=>setVis(true),80); }, []);
  return (
    <div style={{ minHeight:"100vh", background:C.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 24px", position:"relative", overflow:"hidden" }}>
      {/* subtle grid bg */}
      <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`, backgroundSize:"32px 32px", opacity:0.4 }}/>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg, transparent, ${C.crimson}, transparent)` }}/>
      <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:"60%", height:"200px", background:C.crimsonGlow, filter:"blur(60px)", borderRadius:"50%" }}/>

      <div style={{ width:"100%", maxWidth:360, position:"relative", opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(24px)", transition:"all 0.7s cubic-bezier(.4,0,.2,1)" }}>
        {/* Logo */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:44 }}>
          <div style={{
            width:92, height:92, borderRadius:"50%", background:C.white,
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:`0 0 0 1px ${C.borderHi}, 0 8px 40px ${C.crimsonGlow}, 0 0 80px rgba(160,24,48,0.12)`,
            marginBottom:18,
          }}>
            <svg width="66" height="66" viewBox="0 0 60 60">
              <ellipse cx="30" cy="38" rx="10" ry="8" fill="#111"/>
              <rect x="8" y="18" width="44" height="6" rx="3" fill="#111"/>
              <circle cx="10" cy="21" r="6" fill="#111"/>
              <circle cx="50" cy="21" r="6" fill="#111"/>
              <circle cx="10" cy="21" r="3.5" fill="#666"/>
              <circle cx="50" cy="21" r="3.5" fill="#666"/>
              <rect x="4" y="19" width="12" height="4" rx="2" fill={C.crimson}/>
              <rect x="44" y="19" width="12" height="4" rx="2" fill={C.crimson}/>
              <rect x="22" y="33" width="4" height="7" rx="2" fill="#222"/>
              <rect x="27" y="32" width="4" height="8" rx="2" fill="#222"/>
              <rect x="32" y="32" width="4" height="8" rx="2" fill="#222"/>
              <rect x="37" y="33" width="4" height="7" rx="2" fill="#222"/>
              <rect x="14" y="44" width="32" height="9" rx="1.5" fill={C.crimson}/>
              <text x="30" y="51.5" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="800" fontFamily="Arial Black">GYM</text>
            </svg>
          </div>
          <div style={{ fontFamily:"'Oswald','Arial Black',sans-serif", fontSize:30, fontWeight:700, color:C.text, letterSpacing:"0.1em", lineHeight:1 }}>REVOLUCIÓN</div>
          <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:12, fontWeight:400, color:C.crimson, letterSpacing:"0.45em", marginTop:3 }}>· GYM ·</div>
        </div>

        {/* Form */}
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:16 }}>
          {[
            { placeholder:"Email", type:"email", default:"martin@gmail.com" },
          ].map((f,i) => (
            <div key={i} style={{ position:"relative" }}>
              <div style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)" }}>{Icons.user(16)}</div>
              <input defaultValue={f.default} type={f.type} placeholder={f.placeholder} style={{
                width:"100%", background:C.surface, border:`1px solid ${C.border}`,
                borderRadius:10, padding:"13px 14px 13px 40px", color:C.text, fontSize:14,
                outline:"none", fontFamily:"'Barlow',sans-serif",
                boxSizing:"border-box",
              }}/>
            </div>
          ))}
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)" }}>{Icons.lock(16)}</div>
            <input defaultValue="••••••••" type={showPw?"text":"password"} style={{
              width:"100%", background:C.surface, border:`1px solid ${C.border}`,
              borderRadius:10, padding:"13px 40px 13px 40px", color:C.text, fontSize:14,
              outline:"none", fontFamily:"'Barlow',sans-serif", boxSizing:"border-box",
            }}/>
            <button onClick={()=>setShowPw(!showPw)} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", padding:0 }}>{Icons.eye(16)}</button>
          </div>
        </div>

        <button onClick={onLogin} style={{
          width:"100%", padding:"14px",
          background:`linear-gradient(135deg, ${C.crimson}, ${C.crimsonDim})`,
          border:"none", borderRadius:10, color:C.white,
          fontSize:14, fontWeight:700, letterSpacing:"0.12em",
          fontFamily:"'Oswald',sans-serif",
          cursor:"pointer", textTransform:"uppercase",
          boxShadow:`0 4px 20px ${C.crimsonGlow}`,
          transition:"opacity 0.15s, transform 0.15s",
        }}
          onMouseDown={e=>{e.currentTarget.style.transform="scale(0.98)";e.currentTarget.style.opacity="0.9"}}
          onMouseUp={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.opacity="1"}}
        >INGRESAR</button>

        <p style={{ color:C.textDim, textAlign:"center", marginTop:18, fontSize:12, lineHeight:1.5 }}>
          ¿Primera vez?<br/>
          <span style={{ color:C.crimson }}>Contactá a tu entrenador para activar tu cuenta</span>
        </p>
      </div>
    </div>
  );
};

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
const DashboardScreen = ({ onSelectWeek, onPayment }) => {
  const [vis, setVis] = useState(false);
  useEffect(()=>{ setTimeout(()=>setVis(true),80); },[]);
  const completedWeeks = PROGRAM.filter(w=>w.completed).length;
  const pct = Math.round((completedWeeks/PROGRAM.length)*100);

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:32 }}>
      <TopBar right={
        <button onClick={onPayment} style={{ background:"none", border:"none", cursor:"pointer", position:"relative", padding:4 }}>
          {Icons.bell(20, C.crimson)}
          <div style={{ position:"absolute", top:2, right:2, width:7, height:7, background:C.crimson, borderRadius:"50%", border:`2px solid ${C.bg}` }}/>
        </button>
      }/>

      <div style={{ padding:"20px 18px", opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(16px)", transition:"all 0.6s cubic-bezier(.4,0,.2,1)" }}>

        {/* Greeting */}
        <div style={{ marginBottom:20 }}>
          <p style={{ color:C.textDim, fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>Bienvenido de nuevo</p>
          <h1 style={{ fontFamily:"'Oswald',sans-serif", fontSize:26, fontWeight:700, color:C.text, letterSpacing:"0.04em", lineHeight:1 }}>
            {CLIENT.name.split(" ")[0]} <span style={{ color:C.crimson }}>{CLIENT.name.split(" ")[1]}</span>
          </h1>
        </div>

        {/* Payment alert */}
        <div onClick={onPayment} style={{
          background:`linear-gradient(135deg, #120508, #1A070C)`,
          border:`1px solid ${C.crimsonDim}`,
          borderRadius:12, padding:"13px 15px", marginBottom:18,
          cursor:"pointer", display:"flex", alignItems:"center", gap:12,
        }}>
          <div style={{ width:34, height:34, borderRadius:8, background:C.crimsonFaint, border:`1px solid ${C.crimsonDim}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:16 }}>⚠️</div>
          <div style={{ flex:1 }}>
            <div style={{ color:C.text, fontSize:13, fontWeight:600 }}>Membresía vence en {CLIENT.daysLeft} días</div>
            <div style={{ color:C.crimson, fontSize:11, marginTop:2, letterSpacing:"0.04em" }}>Tocá para renovar →</div>
          </div>
        </div>

        {/* Progress card */}
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"18px", marginBottom:16, display:"flex", alignItems:"center", gap:18 }}>
          <Ring pct={pct} size={76} sw={5}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:20, fontWeight:700, color:C.text, lineHeight:1 }}>{pct}%</div>
            </div>
          </Ring>
          <div style={{ flex:1 }}>
            <div style={{ color:C.text, fontSize:15, fontWeight:600, marginBottom:3, fontFamily:"'Oswald',sans-serif", letterSpacing:"0.03em" }}>Programa Iniciación</div>
            <div style={{ color:C.textDim, fontSize:12, marginBottom:10 }}>Plan {CLIENT.plan} · 4 semanas</div>
            <div style={{ display:"flex", gap:6 }}>
              {PROGRAM.map(w=>(
                <div key={w.week} style={{ flex:1, display:"flex", flexDirection:"column", gap:3, alignItems:"center" }}>
                  <div style={{ width:"100%", height:5, borderRadius:3, background: w.completed?C.crimson : w.unlocked?C.crimsonFaint : C.border, transition:"background 0.3s" }}/>
                  <span style={{ fontSize:9, color: w.week===CLIENT.currentWeek?C.crimson:C.textDim, letterSpacing:"0.05em" }}>S{w.week}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:"flex", gap:10, marginBottom:22 }}>
          {[
            { label:"Racha", value:"6", unit:"días", icon:"fire" },
            { label:"Sesiones", value:"9", unit:"total", icon:"trophy" },
            { label:"Asistencia", value:"100%", unit:"este mes", icon:"timer" },
          ].map(s=>(
            <div key={s.label} style={{ flex:1, background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 8px", textAlign:"center" }}>
              {Icons[s.icon]?.(16)}
              <div style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:17, fontWeight:700, marginTop:5, lineHeight:1 }}>{s.value}</div>
              <div style={{ color:C.textDim, fontSize:10, marginTop:3, letterSpacing:"0.04em" }}>{s.unit}</div>
            </div>
          ))}
        </div>

        {/* Program */}
        <p style={{ color:C.textDim, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Tu programa</p>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {PROGRAM.map((week,i)=>{
            const isActive = week.week === CLIENT.currentWeek;
            return (
              <div key={week.week} onClick={()=>week.unlocked&&onSelectWeek(week)} style={{
                background: isActive ? `linear-gradient(135deg, #120508, ${C.surface})` : C.surface,
                border:`1px solid ${isActive?C.crimsonDim:C.border}`,
                borderRadius:12, padding:"15px 16px",
                display:"flex", alignItems:"center", gap:14,
                cursor:week.unlocked?"pointer":"default",
                opacity:week.unlocked?1:0.45,
                transition:"border-color 0.2s, background 0.2s",
                animationDelay:`${i*0.07}s`,
              }}>
                <div style={{
                  width:42, height:42, borderRadius:10, flexShrink:0,
                  background: week.completed ? C.crimson : week.unlocked ? C.crimsonFaint : C.border,
                  border:`1px solid ${week.completed?C.crimson:week.unlocked?C.crimsonDim:C.border}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  {week.completed
                    ? Icons.check(18)
                    : week.unlocked
                      ? <span style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:17, fontWeight:700 }}>{week.week}</span>
                      : Icons.lock(16)}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3 }}>
                    <span style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:14, fontWeight:600, letterSpacing:"0.04em" }}>SEMANA {week.week} — {week.label}</span>
                    {isActive && <span style={{ fontSize:9, background:C.crimson, color:"#fff", padding:"2px 7px", borderRadius:4, letterSpacing:"0.08em", fontWeight:700 }}>ACTUAL</span>}
                  </div>
                  <div style={{ color:C.textDim, fontSize:11 }}>
                    {week.completed ? "✓ Completada"
                     : week.unlocked ? `${week.days.filter(d=>d.completed).length}/${week.days.length} sesiones completadas`
                     : "Completá la semana anterior para desbloquear"}
                  </div>
                </div>
                {week.unlocked && Icons.chevron(15)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── WEEK ─────────────────────────────────────────────────────────────────────
const WeekScreen = ({ week, onSelectDay, onBack }) => {
  const done = week.days.filter(d=>d.completed).length;
  const pct = Math.round((done/week.days.length)*100);
  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:32 }}>
      <TopBar onBack={onBack} title={`SEMANA ${week.week} — ${week.label}`} sub={`${done}/${week.days.length} sesiones`}/>
      <div style={{ padding:"20px 18px" }}>
        {/* Week progress */}
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"16px", marginBottom:22 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <span style={{ color:C.textMid, fontSize:13 }}>Progreso semanal</span>
            <span style={{ fontFamily:"'Oswald',sans-serif", color:C.crimson, fontSize:15, fontWeight:700 }}>{pct}%</span>
          </div>
          <div style={{ background:C.border, borderRadius:4, height:6, overflow:"hidden" }}>
            <div style={{ width:`${pct}%`, height:"100%", background:C.crimson, borderRadius:4, transition:"width 1s cubic-bezier(.4,0,.2,1)" }}/>
          </div>
        </div>

        <p style={{ color:C.textDim, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Seleccioná tu sesión</p>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {week.days.map(day=>(
            <div key={day.slot} onClick={()=>onSelectDay(day)} style={{
              background: day.completed ? `linear-gradient(135deg, #0E0509, ${C.surface})` : C.surface,
              border:`1px solid ${day.completed?C.crimsonDim:C.border}`,
              borderRadius:13, padding:"16px",
              cursor:"pointer", display:"flex", alignItems:"center", gap:14,
              transition:"border-color 0.2s",
            }}>
              <div style={{
                width:50, height:50, borderRadius:12, flexShrink:0,
                background: day.completed ? C.crimsonFaint : C.surface2,
                border:`1px solid ${day.completed?C.crimsonDim:C.borderHi}`,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                {day.completed ? Icons.check(22,C.crimson) : Icons.dumbbell(22)}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:15, fontWeight:600, letterSpacing:"0.04em" }}>{day.label}</div>
                <div style={{ color:C.crimson, fontSize:12, fontWeight:500, marginTop:2 }}>{day.focus}</div>
                <div style={{ color:C.textDim, fontSize:11, marginTop:4 }}>
                  Calentamiento · {day.exercises.length} ejercicios
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
                <span style={{ fontSize:10, color: day.completed?C.crimson:C.textDim, fontWeight:600, letterSpacing:"0.08em" }}>
                  {day.completed?"COMPLETADO":"PENDIENTE"}
                </span>
                {Icons.chevron(14)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── DAY ──────────────────────────────────────────────────────────────────────
const DayScreen = ({ day, onBack, onComplete }) => {
  const [warmup, setWarmup] = useState(day.warmup.map(w=>({...w})));
  const [exs, setExs] = useState(day.exercises.map(e=>({...e})));
  const [timer, setTimer] = useState(null); // { seconds, label }
  const [celebration, setCelebration] = useState(false);

  const totalItems = warmup.length + exs.length;
  const doneItems = warmup.filter(w=>w.done).length + exs.filter(e=>e.done).length;
  const pct = Math.round((doneItems/totalItems)*100);
  const allDone = doneItems === totalItems;

  const toggleWarmup = (i) => {
    setWarmup(prev=>prev.map((w,idx)=>idx===i?{...w,done:!w.done}:w));
  };
  const toggleEx = (i) => {
    const ex = exs[i];
    if (!ex.done) {
      setTimer({ seconds: ex.rest, label: ex.name });
    }
    setExs(prev=>prev.map((e,idx)=>idx===i?{...e,done:!e.done}:e));
  };

  useEffect(()=>{
    if (allDone && !day.completed) { setCelebration(true); setTimeout(()=>setCelebration(false),3200); }
  },[allDone]);

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:40 }}>
      {celebration && (
        <div style={{ position:"fixed", inset:0, background:"rgba(160,24,48,0.12)", backdropFilter:"blur(2px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50, pointerEvents:"none" }}>
          <div style={{ textAlign:"center", animation:"popIn 0.4s cubic-bezier(.4,0,.2,1)" }}>
            <div style={{ fontSize:56, marginBottom:12 }}>🏆</div>
            <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:26, color:C.text, letterSpacing:"0.06em", fontWeight:700 }}>¡SESIÓN COMPLETA!</div>
            <div style={{ color:C.crimson, fontSize:13, marginTop:6, letterSpacing:"0.1em" }}>SEGUÍS AVANZANDO</div>
          </div>
        </div>
      )}

      <TopBar onBack={onBack} title={day.focus} sub={day.label} right={
        <span style={{ fontFamily:"'Oswald',sans-serif", color:C.crimson, fontSize:16, fontWeight:700 }}>{pct}%</span>
      }/>
      <div style={{ height:3, background:C.border }}>
        <div style={{ width:`${pct}%`, height:"100%", background:C.crimson, transition:"width 0.4s ease" }}/>
      </div>

      {/* Rest timer */}
      {timer && (
        <div style={{ margin:"12px 18px 0", background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"8px 16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
            {Icons.timer(14, C.crimson)}
            <span style={{ color:C.textDim, fontSize:11, letterSpacing:"0.08em" }}>DESCANSO — {timer.label}</span>
          </div>
          <RestTimer seconds={timer.seconds} onDone={()=>setTimer(null)}/>
        </div>
      )}

      <div style={{ padding:"18px 18px" }}>
        {/* Warmup */}
        <div style={{ marginBottom:22 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:11 }}>
            <div style={{ width:3, height:14, background:C.orange, borderRadius:2 }}/>
            <span style={{ color:C.orange, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:700 }}>Calentamiento</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {warmup.map((w,i)=>(
              <div key={i} style={{
                background:C.surface, border:`1px solid ${w.done?C.crimsonDim:C.border}`,
                borderRadius:10, padding:"12px 14px",
                display:"flex", alignItems:"center", gap:12,
                transition:"border-color 0.25s",
              }}>
                <button onClick={()=>toggleWarmup(i)} style={{
                  width:26, height:26, borderRadius:7, flexShrink:0,
                  background:w.done?C.crimson:"transparent",
                  border:`1.5px solid ${w.done?C.crimson:C.borderHi}`,
                  cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"all 0.2s",
                }}>
                  {w.done && Icons.check(13)}
                </button>
                <div style={{ flex:1 }}>
                  <div style={{ color:w.done?C.textDim:C.text, fontSize:13, fontWeight:500, textDecoration:w.done?"line-through":"none", transition:"color 0.2s" }}>{w.name}</div>
                  <div style={{ color:C.textDim, fontSize:11, marginTop:2 }}>{w.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main block */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:11 }}>
            <div style={{ width:3, height:14, background:C.crimson, borderRadius:2 }}/>
            <span style={{ color:C.crimson, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:700 }}>Bloque principal</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {exs.map((ex,i)=>(
              <div key={i} style={{
                background:C.surface, border:`1px solid ${ex.done?C.crimsonDim:C.border}`,
                borderRadius:10, padding:"13px 14px",
                display:"flex", alignItems:"center", gap:12,
                transition:"border-color 0.25s, background 0.25s",
              }}>
                <button onClick={()=>toggleEx(i)} style={{
                  width:28, height:28, borderRadius:7, flexShrink:0,
                  background:ex.done?C.crimson:"transparent",
                  border:`1.5px solid ${ex.done?C.crimson:C.borderHi}`,
                  cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"all 0.2s",
                }}>
                  {ex.done && Icons.check(14)}
                </button>
                <div style={{ flex:1 }}>
                  <div style={{ color:ex.done?C.textDim:C.text, fontSize:13, fontWeight:600, textDecoration:ex.done?"line-through":"none", transition:"color 0.2s" }}>{ex.name}</div>
                  <div style={{ display:"flex", gap:10, marginTop:4, flexWrap:"wrap" }}>
                    <span style={{ color:C.crimson, fontSize:11, fontWeight:600 }}>{ex.sets} series</span>
                    <span style={{ color:C.textDim, fontSize:11 }}>×</span>
                    <span style={{ color:C.textMid, fontSize:11 }}>{ex.reps} reps</span>
                    <span style={{ color:C.textDim, fontSize:11 }}>· {ex.rest}s descanso</span>
                  </div>
                </div>
                <div style={{ background:C.surface2, border:`1px solid ${C.border}`, borderRadius:7, padding:"5px 8px", flexShrink:0 }}>
                  <div style={{ color:C.textDim, fontSize:9, letterSpacing:"0.06em", textAlign:"center" }}>MÚSCULO</div>
                  <div style={{ color:C.textMid, fontSize:9, textAlign:"center", marginTop:1, maxWidth:50, lineHeight:1.2 }}>{ex.muscle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {allDone && (
          <button onClick={()=>onComplete(day)} style={{
            width:"100%", marginTop:22, padding:"15px",
            background:`linear-gradient(135deg, ${C.crimson}, ${C.crimsonDim})`,
            border:"none", borderRadius:11, color:C.white,
            fontSize:14, fontWeight:700, letterSpacing:"0.12em",
            fontFamily:"'Oswald',sans-serif", cursor:"pointer",
            boxShadow:`0 4px 24px ${C.crimsonGlow}`,
            transition:"transform 0.15s, box-shadow 0.15s",
          }}
            onMouseDown={e=>{e.currentTarget.style.transform="scale(0.98)"}}
            onMouseUp={e=>{e.currentTarget.style.transform="scale(1)"}}
          >✓ CONFIRMAR SESIÓN</button>
        )}
      </div>
    </div>
  );
};

// ─── PAYMENT ──────────────────────────────────────────────────────────────────
const PaymentScreen = ({ onBack, onPaid }) => {
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const handlePay = () => {
    setLoading(true);
    setTimeout(()=>{ setLoading(false); setPaid(true); setTimeout(onPaid,2800); },1600);
  };
  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:40 }}>
      <TopBar onBack={!paid?onBack:undefined} title="Renovar membresía"/>
      {paid ? (
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"70vh", padding:32, textAlign:"center" }}>
          <div style={{ width:72, height:72, borderRadius:"50%", background:"#061A0E", border:"1px solid #1A5C30", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, fontSize:34 }}>✅</div>
          <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:22, color:C.text, letterSpacing:"0.06em", fontWeight:700, marginBottom:8 }}>¡PAGO CONFIRMADO!</div>
          <div style={{ color:C.textMid, fontSize:14, marginBottom:6 }}>Acceso renovado por 30 días</div>
          <div style={{ color:C.textDim, fontSize:12 }}>El gimnasio fue notificado automáticamente</div>
        </div>
      ) : (
        <div style={{ padding:"22px 18px" }}>
          <div style={{
            background:"#0E0408", border:`1px solid ${C.crimsonDim}`,
            borderRadius:12, padding:"14px 15px", marginBottom:22,
            display:"flex", gap:12, alignItems:"flex-start",
          }}>
            <span style={{ fontSize:18, flexShrink:0 }}>⚠️</span>
            <div>
              <div style={{ color:C.text, fontWeight:600, fontSize:13, marginBottom:4 }}>Tu membresía vence en 5 días</div>
              <div style={{ color:C.textDim, fontSize:12, lineHeight:1.5 }}>Renová ahora para mantener el acceso a tus rutinas y tu progreso.</div>
            </div>
          </div>

          <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:13, padding:"18px", marginBottom:18 }}>
            {[
              { label:"Plan", value:"3 días / semana" },
              { label:"Período", value:"1 mes" },
              { label:"Vencimiento actual", value:"01/12/2024" },
            ].map((r,i,arr)=>(
              <div key={i} style={{ display:"flex", justifyContent:"space-between", paddingBottom:i<arr.length-1?14:0, marginBottom:i<arr.length-1?14:0, borderBottom:i<arr.length-1?`1px solid ${C.border}`:"none" }}>
                <span style={{ color:C.textDim, fontSize:13 }}>{r.label}</span>
                <span style={{ color:C.text, fontSize:13, fontWeight:600 }}>{r.value}</span>
              </div>
            ))}
            <div style={{ borderTop:`1px solid ${C.border}`, marginTop:14, paddingTop:14, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ color:C.textMid, fontSize:14 }}>Total</span>
              <span style={{ fontFamily:"'Oswald',sans-serif", color:C.crimson, fontSize:26, fontWeight:700 }}>$15.000</span>
            </div>
          </div>

          <button onClick={handlePay} disabled={loading} style={{
            width:"100%", padding:"15px",
            background:loading?"#006A9B":"#009EE3",
            border:"none", borderRadius:11,
            display:"flex", alignItems:"center", justifyContent:"center", gap:10,
            cursor:loading?"not-allowed":"pointer",
            transition:"background 0.2s",
          }}>
            <svg width="26" height="26" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="white"/><text x="20" y="26" textAnchor="middle" fontSize="13" fill="#009EE3" fontWeight="900">MP</text></svg>
            <span style={{ color:"#fff", fontSize:14, fontWeight:700, letterSpacing:"0.06em" }}>
              {loading?"PROCESANDO...":"PAGAR CON MERCADO PAGO"}
            </span>
          </button>
          <p style={{ color:C.textDim, textAlign:"center", marginTop:14, fontSize:11, lineHeight:1.6 }}>
            Pago seguro · Tu progreso no se pierde
          </p>
        </div>
      )}
    </div>
  );
};

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("login");
  const [week, setWeek] = useState(null);
  const [day, setDay] = useState(null);

  return (
    <div style={{ maxWidth:390, margin:"0 auto", minHeight:"100vh", background:C.bg, fontFamily:"'Barlow','Helvetica Neue',sans-serif", position:"relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:0;}
        input::placeholder{color:#404B55;}
        @keyframes popIn{0%{transform:scale(.7);opacity:0}100%{transform:scale(1);opacity:1}}
      `}</style>

      {screen==="login"   && <LoginScreen onLogin={()=>setScreen("dashboard")}/>}
      {screen==="dashboard" && <DashboardScreen onSelectWeek={w=>{setWeek(w);setScreen("week");}} onPayment={()=>setScreen("payment")}/>}
      {screen==="week"    && week && <WeekScreen week={week} onSelectDay={d=>{setDay(d);setScreen("day");}} onBack={()=>setScreen("dashboard")}/>}
      {screen==="day"     && day  && <DayScreen day={day} onBack={()=>setScreen("week")} onComplete={()=>setScreen("week")}/>}
      {screen==="payment" && <PaymentScreen onBack={()=>setScreen("dashboard")} onPaid={()=>setScreen("dashboard")}/>}
    </div>
  );
}
