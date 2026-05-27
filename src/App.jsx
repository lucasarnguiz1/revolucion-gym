import { useState, useEffect, useRef } from "react";

const C = {
  crimson:     "#A01830",
  crimsonDim:  "#7A1225",
  crimsonGlow: "rgba(160,24,48,0.25)",
  crimsonFaint:"rgba(160,24,48,0.08)",
  bg:          "#080B0F",
  surface:     "#0F1318",
  surface2:    "#161B22",
  border:      "#1E2530",
  borderHi:    "#2A3340",
  text:        "#E8EDF2",
  textMid:     "#8A95A0",
  textDim:     "#404B55",
  orange:      "#C4622A",
  gold:        "#B8962A",
  white:       "#FFFFFF",
  muscle:      "#A01830",
  muscleGlow:  "rgba(160,24,48,0.5)",
  body:        "#2A3340",
  bodyLight:   "#3A4555",
};

// ─── EXERCISE ILLUSTRATIONS ──────────────────────────────────────────────────
const ExerciseIllustration = ({ name }) => {
  const illustrations = {
    "Press de banca": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Banco */}
        <rect x="30" y="100" width="140" height="12" rx="4" fill={C.body}/>
        <rect x="40" y="112" width="10" height="25" rx="2" fill={C.bodyLight}/>
        <rect x="150" y="112" width="10" height="25" rx="2" fill={C.bodyLight}/>
        {/* Barra */}
        <rect x="20" y="62" width="160" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="20" cy="65" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="180" cy="65" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        {/* Cuerpo acostado */}
        {/* Torso */}
        <ellipse cx="100" cy="95" rx="28" ry="10" fill={C.muscle} opacity="0.9"/>
        {/* Cabeza */}
        <circle cx="155" cy="90" r="12" fill={C.bodyLight}/>
        {/* Brazos extendidos */}
        <line x1="80" y1="90" x2="40" y2="65" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="120" y1="90" x2="160" y2="65" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        {/* Manos en barra */}
        <circle cx="40" cy="65" r="5" fill={C.body}/>
        <circle cx="160" cy="65" r="5" fill={C.body}/>
        {/* Piernas */}
        <line x1="75" y1="100" x2="55" y2="135" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="85" y1="100" x2="65" y2="135" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        {/* Músculo destacado label */}
        <ellipse cx="100" cy="93" rx="22" ry="8" fill="none" stroke={C.muscle} strokeWidth="2" strokeDasharray="4,2" opacity="0.8"/>
        <text x="100" y="140" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">PECTORAL</text>
      </svg>
    ),
    "Press banca inclinado": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="30" y="95" width="120" height="12" rx="4" fill={C.body} transform="rotate(-20,90,101)"/>
        <rect x="20" y="55" width="160" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="20" cy="58" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="180" cy="58" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <ellipse cx="95" cy="88" rx="25" ry="10" fill={C.muscle} opacity="0.9" transform="rotate(-20,95,88)"/>
        <circle cx="148" cy="78" r="12" fill={C.bodyLight}/>
        <line x1="78" y1="83" x2="40" y2="58" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="112" y1="83" x2="160" y2="58" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="40" cy="58" r="5" fill={C.body}/>
        <circle cx="160" cy="58" r="5" fill={C.body}/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">PECTORAL ALTO</text>
      </svg>
    ),
    "Sentadilla con barra": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Barra en hombros */}
        <rect x="30" y="42" width="140" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="30" cy="45" r="8" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="170" cy="45" r="8" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        {/* Torso inclinado */}
        <line x1="100" y1="48" x2="95" y2="95" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        {/* Cabeza */}
        <circle cx="102" cy="36" r="13" fill={C.bodyLight}/>
        {/* Brazos en barra */}
        <line x1="100" y1="55" x2="55" y2="48" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="100" y1="55" x2="145" y2="48" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Piernas en sentadilla */}
        <line x1="95" y1="95" x2="70" y2="130" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        <line x1="95" y1="95" x2="122" y2="130" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        {/* Pies */}
        <ellipse cx="68" cy="134" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="124" cy="134" rx="10" ry="5" fill={C.body}/>
        {/* Ángulo de rodilla */}
        <path d="M70,130 Q65,118 75,110" fill="none" stroke={C.crimson} strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="100" y="152" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CUÁDRICEPS</text>
      </svg>
    ),
    "Sentadilla frontal": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="40" y="50" width="120" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="40" cy="53" r="8" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="160" cy="53" r="8" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <line x1="100" y1="56" x2="100" y2="95" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="42" r="13" fill={C.bodyLight}/>
        <line x1="100" y1="63" x2="60" y2="53" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="100" y1="63" x2="140" y2="53" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="100" y1="95" x2="72" y2="132" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        <line x1="100" y1="95" x2="128" y2="132" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        <ellipse cx="70" cy="136" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="130" cy="136" rx="10" ry="5" fill={C.body}/>
        <text x="100" y="152" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CUÁDRICEPS</text>
      </svg>
    ),
    "Sentadilla búlgara": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Banco trasero */}
        <rect x="130" y="95" width="50" height="8" rx="3" fill={C.body}/>
        <rect x="140" y="103" width="8" height="20" rx="2" fill={C.bodyLight}/>
        <rect x="162" y="103" width="8" height="20" rx="2" fill={C.bodyLight}/>
        {/* Pie trasero en banco */}
        <ellipse cx="155" cy="95" rx="12" ry="5" fill={C.bodyLight}/>
        {/* Cuerpo */}
        <line x1="90" y1="50" x2="88" y2="100" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="92" cy="38" r="13" fill={C.bodyLight}/>
        {/* Mancuernas */}
        <rect x="55" y="80" width="20" height="6" rx="3" fill={C.bodyLight}/>
        <rect x="108" y="80" width="20" height="6" rx="3" fill={C.bodyLight}/>
        {/* Pierna delantera */}
        <line x1="88" y1="100" x2="72" y2="140" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        <ellipse cx="70" cy="144" rx="12" ry="5" fill={C.body}/>
        {/* Pierna trasera */}
        <line x1="92" y1="100" x2="140" y2="95" stroke={C.bodyLight} strokeWidth="10" strokeLinecap="round"/>
        <text x="100" y="158" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">GLÚTEOS / CUÁD</text>
      </svg>
    ),
    "Peso muerto rumano": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="30" y="118" width="140" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="30" cy="121" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="170" cy="121" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        {/* Cuerpo inclinado */}
        <line x1="100" y1="50" x2="100" y2="95" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="38" r="13" fill={C.bodyLight}/>
        {/* Espalda / isquios destacados */}
        <line x1="100" y1="95" x2="92" y2="140" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        <line x1="100" y1="95" x2="108" y2="140" stroke={C.muscle} strokeWidth="12" strokeLinecap="round"/>
        {/* Brazos hacia abajo */}
        <line x1="92" y1="70" x2="78" y2="118" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="108" y1="70" x2="122" y2="118" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <circle cx="78" cy="118" r="5" fill={C.body}/>
        <circle cx="122" cy="118" r="5" fill={C.body}/>
        {/* Pies */}
        <ellipse cx="90" cy="144" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="110" cy="144" rx="10" ry="5" fill={C.body}/>
        <text x="100" y="158" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">ISQUIOTIBIALES</text>
      </svg>
    ),
    "Hip thrust con barra": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Banco */}
        <rect x="20" y="78" width="70" height="14" rx="4" fill={C.body}/>
        <rect x="25" y="92" width="10" height="30" rx="2" fill={C.bodyLight}/>
        <rect x="75" y="92" width="10" height="30" rx="2" fill={C.bodyLight}/>
        {/* Barra */}
        <rect x="50" y="65" width="110" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="155" cy="68" r="10" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        {/* Torso inclinado apoyado en banco */}
        <line x1="55" y1="82" x2="100" y2="68" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        {/* Cabeza */}
        <circle cx="42" cy="78" r="12" fill={C.bodyLight}/>
        {/* Glúteos destacados */}
        <ellipse cx="100" cy="70" rx="18" ry="10" fill={C.muscle} opacity="0.85"/>
        {/* Piernas */}
        <line x1="100" y1="72" x2="120" y2="115" stroke={C.bodyLight} strokeWidth="10" strokeLinecap="round"/>
        <line x1="108" y1="72" x2="130" y2="115" stroke={C.bodyLight} strokeWidth="10" strokeLinecap="round"/>
        <ellipse cx="122" cy="119" rx="12" ry="5" fill={C.body}/>
        <ellipse cx="132" cy="119" rx="12" ry="5" fill={C.body}/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">GLÚTEOS</text>
      </svg>
    ),
    "Press militar": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="30" y="32" width="140" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="30" cy="35" r="9" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="170" cy="35" r="9" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        {/* Torso parado */}
        <line x1="100" y1="65" x2="100" y2="115" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="53" r="13" fill={C.bodyLight}/>
        {/* Brazos extendidos arriba */}
        <line x1="92" y1="75" x2="45" y2="35" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="108" y1="75" x2="155" y2="35" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="45" cy="35" r="5" fill={C.body}/>
        <circle cx="155" cy="35" r="5" fill={C.body}/>
        {/* Piernas */}
        <line x1="96" y1="115" x2="85" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="115" x2="115" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="83" cy="150" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="117" cy="150" rx="10" ry="5" fill={C.body}/>
        <text x="100" y="142" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">DELTOIDES</text>
      </svg>
    ),
    "Press Arnold": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="62" x2="100" y2="115" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="50" r="13" fill={C.bodyLight}/>
        <line x1="92" y1="72" x2="55" y2="45" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="108" y1="72" x2="145" y2="45" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="42" y="40" width="20" height="7" rx="3" fill={C.bodyLight}/>
        <rect x="138" y="40" width="20" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="96" y1="115" x2="85" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="115" x2="115" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="83" cy="150" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="117" cy="150" rx="10" ry="5" fill={C.body}/>
        <text x="100" y="142" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">DELTOIDES 360°</text>
      </svg>
    ),
    "Elevaciones laterales": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="62" x2="100" y2="118" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="50" r="13" fill={C.bodyLight}/>
        {/* Brazos laterales */}
        <line x1="88" y1="80" x2="35" y2="75" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="112" y1="80" x2="165" y2="75" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="20" y="70" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <rect x="162" y="70" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="96" y1="118" x2="85" y2="150" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="118" x2="115" y2="150" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="83" cy="152" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="117" cy="152" rx="10" ry="5" fill={C.body}/>
        {/* Arco de movimiento */}
        <path d="M40,75 Q50,55 65,72" fill="none" stroke={C.crimson} strokeWidth="1.5" strokeDasharray="3,2"/>
        <path d="M160,75 Q150,55 135,72" fill="none" stroke={C.crimson} strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="100" y="145" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">DELTOIDES LAT.</text>
      </svg>
    ),
    "Remo con mancuerna": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Banco */}
        <rect x="110" y="85" width="60" height="10" rx="3" fill={C.body}/>
        <rect x="118" y="95" width="8" height="20" rx="2" fill={C.bodyLight}/>
        <rect x="154" y="95" width="8" height="20" rx="2" fill={C.bodyLight}/>
        {/* Brazo apoyado */}
        <line x1="130" y1="85" x2="138" y2="55" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Torso horizontal */}
        <line x1="100" y1="70" x2="145" y2="68" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="155" cy="65" r="12" fill={C.bodyLight}/>
        {/* Brazo con mancuerna jalando */}
        <line x1="88" y1="75" x2="75" y2="58" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="60" y="53" width="20" height="7" rx="3" fill={C.bodyLight}/>
        {/* Pierna */}
        <line x1="100" y1="75" x2="88" y2="118" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="86" cy="122" rx="12" ry="5" fill={C.body}/>
        {/* Músculo */}
        <ellipse cx="92" cy="68" rx="15" ry="7" fill="none" stroke={C.crimson} strokeWidth="1.5" strokeDasharray="3,2" transform="rotate(-10,92,68)"/>
        <text x="80" y="145" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">DORSAL</text>
      </svg>
    ),
    "Dominadas asistidas": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Barra */}
        <rect x="30" y="20" width="140" height="8" rx="4" fill={C.body}/>
        <rect x="35" y="10" width="8" height="12" rx="2" fill={C.bodyLight}/>
        <rect x="157" y="10" width="8" height="12" rx="2" fill={C.bodyLight}/>
        {/* Brazos agarrando barra */}
        <line x1="75" y1="28" x2="88" y2="58" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="125" y1="28" x2="112" y2="58" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="75" cy="26" r="5" fill={C.body}/>
        <circle cx="125" cy="26" r="5" fill={C.body}/>
        {/* Torso */}
        <line x1="100" y1="58" x2="100" y2="108" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="46" r="13" fill={C.bodyLight}/>
        {/* Piernas */}
        <line x1="96" y1="108" x2="88" y2="145" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="108" x2="112" y2="145" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        {/* Banda elástica asistencia */}
        <path d="M88,145 Q100,152 112,145" fill="none" stroke={C.orange} strokeWidth="4" strokeDasharray="5,3"/>
        <line x1="88" y1="145" x2="75" y2="28" stroke={C.orange} strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
        <line x1="112" y1="145" x2="125" y2="28" stroke={C.orange} strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
        <text x="100" y="158" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">DORSAL ANCHO</text>
      </svg>
    ),
    "Jalón al pecho": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Máquina - polea arriba */}
        <rect x="70" y="8" width="60" height="8" rx="3" fill={C.body}/>
        <circle cx="100" cy="16" r="6" fill={C.bodyLight}/>
        {/* Cable */}
        <line x1="72" y1="16" x2="58" y2="45" stroke={C.bodyLight} strokeWidth="2" strokeDasharray="3,2"/>
        <line x1="128" y1="16" x2="142" y2="45" stroke={C.bodyLight} strokeWidth="2" strokeDasharray="3,2"/>
        {/* Barra jalón */}
        <rect x="50" y="43" width="100" height="5" rx="2" fill={C.bodyLight}/>
        {/* Persona sentada jalando */}
        <circle cx="100" cy="65" r="13" fill={C.bodyLight}/>
        <line x1="100" y1="78" x2="100" y2="118" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        {/* Brazos jalando */}
        <line x1="88" y1="82" x2="55" y2="48" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="112" y1="82" x2="145" y2="48" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="55" cy="46" r="4" fill={C.body}/>
        <circle cx="145" cy="46" r="4" fill={C.body}/>
        {/* Piernas en asiento */}
        <line x1="95" y1="118" x2="75" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="105" y1="118" x2="125" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <text x="100" y="156" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">DORSAL ANCHO</text>
      </svg>
    ),
    "Curl de bíceps": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="62" x2="100" y2="115" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="50" r="13" fill={C.bodyLight}/>
        {/* Brazo izquierdo flexionado */}
        <line x1="88" y1="75" x2="68" y2="95" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="68" y1="95" x2="62" y2="72" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="48" y="67" width="18" height="7" rx="3" fill={C.bodyLight}/>
        {/* Brazo derecho */}
        <line x1="112" y1="75" x2="132" y2="115" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <rect x="128" y="110" width="18" height="7" rx="3" fill={C.bodyLight}/>
        {/* Bíceps destacado */}
        <ellipse cx="65" cy="83" rx="8" ry="12" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2" transform="rotate(-30,65,83)"/>
        <line x1="96" y1="115" x2="85" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="115" x2="115" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="83" cy="150" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="117" cy="150" rx="10" ry="5" fill={C.body}/>
        <text x="100" y="145" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">BÍCEPS</text>
      </svg>
    ),
    "Curl martillo": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="62" x2="100" y2="115" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="50" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="75" x2="68" y2="92" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="68" y1="92" x2="65" y2="68" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        {/* Mancuerna vertical */}
        <rect x="58" y="57" width="8" height="22" rx="3" fill={C.bodyLight}/>
        <line x1="112" y1="75" x2="132" y2="115" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <rect x="128" y="108" width="8" height="22" rx="3" fill={C.bodyLight}/>
        <ellipse cx="65" cy="80" rx="8" ry="12" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2" transform="rotate(-30,65,80)"/>
        <line x1="96" y1="115" x2="85" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="115" x2="115" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <text x="100" y="145" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">BÍCEPS BRAQUIAL</text>
      </svg>
    ),
    "Extensión tríceps": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="62" x2="100" y2="115" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="50" r="13" fill={C.bodyLight}/>
        {/* Brazo arriba extendido */}
        <line x1="92" y1="70" x2="88" y2="38" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="88" y1="38" x2="75" y2="62" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="68" y="57" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="108" y1="75" x2="128" y2="115" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <rect x="124" y="110" width="18" height="7" rx="3" fill={C.bodyLight}/>
        {/* Tríceps destacado */}
        <ellipse cx="83" cy="52" rx="7" ry="12" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2" transform="rotate(20,83,52)"/>
        <line x1="96" y1="115" x2="85" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="115" x2="115" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <text x="100" y="145" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">TRÍCEPS</text>
      </svg>
    ),
    "Press francés": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="30" y="100" width="140" height="12" rx="4" fill={C.body}/>
        <rect x="40" y="112" width="10" height="25" rx="2" fill={C.bodyLight}/>
        <rect x="150" y="112" width="10" height="25" rx="2" fill={C.bodyLight}/>
        <line x1="100" y1="100" x2="155" y2="92" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="162" cy="88" r="12" fill={C.bodyLight}/>
        {/* Brazos doblados */}
        <line x1="88" y1="88" x2="92" y2="62" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="92" y1="62" x2="75" y2="50" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="112" y1="88" x2="108" y2="62" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="108" y1="62" x2="125" y2="50" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="68" y="45" width="62" height="7" rx="3" fill={C.bodyLight}/>
        <circle cx="68" cy="48" r="7" fill={C.body}/>
        <circle cx="130" cy="48" r="7" fill={C.body}/>
        <text x="85" y="140" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">TRÍCEPS</text>
      </svg>
    ),
    "Plancha abdominal": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        {/* Suelo */}
        <rect x="20" y="125" width="160" height="4" rx="2" fill={C.body}/>
        {/* Cuerpo en plancha */}
        <line x1="55" y1="110" x2="155" y2="108" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        {/* Cabeza */}
        <circle cx="162" cy="104" r="12" fill={C.bodyLight}/>
        {/* Brazos (codos en suelo) */}
        <line x1="138" y1="110" x2="138" y2="125" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="158" y1="108" x2="158" y2="125" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        {/* Pies en suelo */}
        <line x1="55" y1="110" x2="48" y2="125" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="65" y1="110" x2="58" y2="125" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        {/* Core destacado */}
        <ellipse cx="105" cy="108" rx="25" ry="7" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2"/>
        {/* Línea de alineación */}
        <line x1="48" y1="108" x2="162" y2="104" stroke={C.orange} strokeWidth="1" strokeDasharray="5,3" opacity="0.6"/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CORE / ABDOMEN</text>
      </svg>
    ),
    "Plancha lateral": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="20" y="128" width="160" height="4" rx="2" fill={C.body}/>
        <line x1="45" y1="115" x2="155" y2="75" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="158" cy="65" r="12" fill={C.bodyLight}/>
        <line x1="45" y1="115" x2="45" y2="128" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="55" y1="110" x2="55" y2="128" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="148" y1="78" x2="148" y2="58" stroke={C.muscle} strokeWidth="7" strokeLinecap="round"/>
        <ellipse cx="95" cy="95" rx="22" ry="7" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2" transform="rotate(-20,95,95)"/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">OBLICUOS</text>
      </svg>
    ),
    "Zancadas con mancuernas": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="52" x2="98" y2="95" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="40" r="13" fill={C.bodyLight}/>
        <rect x="62" y="80" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <rect x="120" y="80" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="88" y1="72" x2="68" y2="84" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="108" y1="72" x2="128" y2="84" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Pierna delantera */}
        <line x1="98" y1="95" x2="80" y2="135" stroke={C.muscle} strokeWidth="11" strokeLinecap="round"/>
        <ellipse cx="78" cy="140" rx="14" ry="5" fill={C.body}/>
        {/* Pierna trasera */}
        <line x1="100" y1="95" x2="128" y2="118" stroke={C.bodyLight} strokeWidth="11" strokeLinecap="round"/>
        <line x1="128" y1="118" x2="132" y2="148" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="130" cy="150" rx="12" ry="5" fill={C.body}/>
        <text x="100" y="158" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">GLÚTEOS / CUÁD</text>
      </svg>
    ),
    "Elevación de talones": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="60" y="118" width="80" height="10" rx="3" fill={C.body}/>
        <line x1="100" y1="52" x2="100" y2="108" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="40" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="72" x2="68" y2="92" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="112" y1="72" x2="132" y2="92" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <rect x="58" y="88" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <rect x="124" y="88" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="96" y1="108" x2="88" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="108" x2="112" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        {/* Talones elevados */}
        <ellipse cx="88" cy="128" rx="10" ry="5" fill={C.muscle} opacity="0.9"/>
        <ellipse cx="112" cy="128" rx="10" ry="5" fill={C.muscle} opacity="0.9"/>
        {/* Flecha hacia arriba */}
        <line x1="88" y1="135" x2="88" y2="120" stroke={C.crimson} strokeWidth="2"/>
        <polygon points="88,116 84,122 92,122" fill={C.crimson}/>
        <line x1="112" y1="135" x2="112" y2="120" stroke={C.crimson} strokeWidth="2"/>
        <polygon points="112,116 108,122 116,122" fill={C.crimson}/>
        <text x="100" y="155" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">GEMELOS</text>
      </svg>
    ),
    "Remo Yates con barra": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="55" y="115" width="100" height="6" rx="3" fill={C.bodyLight}/>
        <circle cx="55" cy="118" r="9" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="155" cy="118" r="9" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <line x1="100" y1="52" x2="100" y2="95" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="40" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="70" x2="68" y2="115" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="112" y1="70" x2="132" y2="115" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <circle cx="68" cy="115" r="4" fill={C.body}/>
        <circle cx="132" cy="115" r="4" fill={C.body}/>
        <line x1="96" y1="95" x2="85" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="95" x2="115" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="100" cy="72" rx="18" ry="8" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2"/>
        <text x="100" y="156" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">ESPALDA MEDIA</text>
      </svg>
    ),
    "Clean & press mancuernas": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="100" y1="55" x2="100" y2="108" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="43" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="68" x2="52" y2="48" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="112" y1="68" x2="148" y2="48" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <rect x="38" y="42" width="20" height="8" rx="3" fill={C.bodyLight}/>
        <rect x="142" y="42" width="20" height="8" rx="3" fill={C.bodyLight}/>
        <line x1="96" y1="108" x2="85" y2="145" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="108" x2="115" y2="145" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="83" cy="148" rx="10" ry="5" fill={C.body}/>
        <ellipse cx="117" cy="148" rx="10" ry="5" fill={C.body}/>
        <path d="M52,48 Q50,30 70,25" fill="none" stroke={C.orange} strokeWidth="1.5" strokeDasharray="3,2"/>
        <path d="M148,48 Q150,30 130,25" fill="none" stroke={C.orange} strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="100" y="142" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CUERPO COMPLETO</text>
      </svg>
    ),
    "Extensión de cuádriceps": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="50" y="72" width="100" height="12" rx="4" fill={C.body}/>
        <rect x="60" y="84" width="10" height="30" rx="2" fill={C.bodyLight}/>
        <rect x="130" y="84" width="10" height="30" rx="2" fill={C.bodyLight}/>
        <line x1="100" y1="72" x2="100" y2="38" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="26" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="55" x2="70" y2="72" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="112" y1="55" x2="130" y2="72" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Pierna extendida */}
        <line x1="95" y1="72" x2="72" y2="115" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="72" y1="115" x2="50" y2="115" stroke={C.muscle} strokeWidth="9" strokeLinecap="round"/>
        {/* Pierna doblada */}
        <line x1="105" y1="72" x2="128" y2="115" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="128" y1="115" x2="128" y2="135" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <path d="M50,115 Q45,105 55,100" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="3,2"/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CUÁDRICEPS</text>
      </svg>
    ),
    "Curl femoral acostado": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="30" y="85" width="140" height="12" rx="4" fill={C.body}/>
        <rect x="40" y="97" width="10" height="25" rx="2" fill={C.bodyLight}/>
        <rect x="150" y="97" width="10" height="25" rx="2" fill={C.bodyLight}/>
        <line x1="60" y1="85" x2="155" y2="83" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="160" cy="80" r="12" fill={C.bodyLight}/>
        <line x1="88" y1="82" x2="68" y2="65" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Piernas - una doblada */}
        <line x1="60" y1="85" x2="45" y2="118" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="70" y1="85" x2="55" y2="118" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        {/* Pierna levantada (isquios) */}
        <line x1="70" y1="83" x2="85" y2="55" stroke={C.muscle} strokeWidth="9" strokeLinecap="round"/>
        <ellipse cx="50" cy="120" rx="12" ry="5" fill={C.body}/>
        <path d="M85,55 Q95,48 90,62" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="3,2"/>
        <text x="90" y="140" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">ISQUIOTIBIALES</text>
      </svg>
    ),
    "Step up con mancuernas": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="90" y="108" width="80" height="16" rx="4" fill={C.body}/>
        <rect x="90" y="124" width="80" height="10" rx="2" fill={C.bodyLight}/>
        <line x1="108" y1="40" x2="106" y2="108" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="108" cy="28" r="13" fill={C.bodyLight}/>
        <rect x="68" y="75" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <rect x="122" y="75" width="18" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="96" y1="65" x2="72" y2="80" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="118" y1="65" x2="132" y2="80" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Pierna en el step */}
        <line x1="106" y1="108" x2="120" y2="108" stroke={C.muscle} strokeWidth="11" strokeLinecap="round"/>
        {/* Pierna abajo */}
        <line x1="108" y1="108" x2="72" y2="140" stroke={C.bodyLight} strokeWidth="11" strokeLinecap="round"/>
        <ellipse cx="70" cy="144" rx="12" ry="5" fill={C.body}/>
        <text x="100" y="152" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">GLÚTEOS</text>
      </svg>
    ),
    "Elevación piernas colgado": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="30" y="12" width="140" height="8" rx="4" fill={C.body}/>
        <rect x="35" y="5" width="8" height="9" rx="2" fill={C.bodyLight}/>
        <rect x="157" y="5" width="8" height="9" rx="2" fill={C.bodyLight}/>
        <line x1="75" y1="20" x2="88" y2="48" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="125" y1="20" x2="112" y2="48" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="75" cy="18" r="5" fill={C.body}/>
        <circle cx="125" cy="18" r="5" fill={C.body}/>
        <line x1="100" y1="48" x2="100" y2="95" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="36" r="13" fill={C.bodyLight}/>
        {/* Piernas levantadas */}
        <line x1="96" y1="95" x2="78" y2="128" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="96" y1="95" x2="72" y2="120" stroke={C.bodyLight} strokeWidth="2" strokeDasharray="4,3" opacity="0.4"/>
        <line x1="104" y1="95" x2="122" y2="128" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        {/* Piernas elevadas */}
        <line x1="96" y1="95" x2="75" y2="75" stroke={C.muscle} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="95" x2="125" y2="75" stroke={C.muscle} strokeWidth="9" strokeLinecap="round"/>
        <path d="M78,128 Q68,112 75,95" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="3,2"/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">ABDOMEN / CORE</text>
      </svg>
    ),
    "Rueda abdominal": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="20" y="128" width="160" height="4" rx="2" fill={C.body}/>
        {/* Rueda */}
        <circle cx="100" cy="118" r="12" fill="none" stroke={C.bodyLight} strokeWidth="3"/>
        <rect x="70" y="115" width="60" height="6" rx="3" fill={C.bodyLight}/>
        {/* Cuerpo extendido */}
        <line x1="60" y1="112" x2="140" y2="110" stroke={C.muscle} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="148" cy="106" r="12" fill={C.bodyLight}/>
        {/* Brazos */}
        <line x1="130" y1="108" x2="120" y2="118" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        <line x1="145" y1="106" x2="155" y2="118" stroke={C.bodyLight} strokeWidth="7" strokeLinecap="round"/>
        {/* Rodillas */}
        <line x1="62" y1="112" x2="52" y2="128" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <line x1="72" y1="112" x2="62" y2="128" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
        <ellipse cx="95" cy="108" rx="28" ry="6" fill="none" stroke={C.crimson} strokeWidth="2" strokeDasharray="4,2"/>
        <text x="100" y="148" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CORE TOTAL</text>
      </svg>
    ),
    "Prensa de piernas": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <rect x="20" y="60" width="160" height="10" rx="4" fill={C.body}/>
        <rect x="25" y="70" width="12" height="55" rx="3" fill={C.bodyLight}/>
        <rect x="163" y="70" width="12" height="55" rx="3" fill={C.bodyLight}/>
        <rect x="50" y="40" width="100" height="8" rx="3" fill={C.bodyLight}/>
        <circle cx="50" cy="44" r="7" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <circle cx="150" cy="44" r="7" fill={C.body} stroke={C.bodyLight} strokeWidth="2"/>
        <line x1="100" y1="70" x2="100" y2="110" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="82" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="98" x2="68" y2="45" stroke={C.muscle} strokeWidth="9" strokeLinecap="round"/>
        <line x1="112" y1="98" x2="132" y2="45" stroke={C.muscle} strokeWidth="9" strokeLinecap="round"/>
        <circle cx="68" cy="45" r="5" fill={C.body}/>
        <circle cx="132" cy="45" r="5" fill={C.body}/>
        <text x="100" y="130" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">CUÁDRICEPS</text>
      </svg>
    ),
    "Fondos en paralelas": (
      <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
        <line x1="40" y1="55" x2="40" y2="145" stroke={C.body} strokeWidth="6" strokeLinecap="round"/>
        <line x1="160" y1="55" x2="160" y2="145" stroke={C.body} strokeWidth="6" strokeLinecap="round"/>
        <rect x="25" y="50" width="30" height="7" rx="3" fill={C.bodyLight}/>
        <rect x="145" y="50" width="30" height="7" rx="3" fill={C.bodyLight}/>
        <line x1="100" y1="60" x2="100" y2="105" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
        <circle cx="100" cy="48" r="13" fill={C.bodyLight}/>
        <line x1="88" y1="72" x2="42" y2="55" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <line x1="112" y1="72" x2="158" y2="55" stroke={C.muscle} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="42" cy="54" r="5" fill={C.body}/>
        <circle cx="158" cy="54" r="5" fill={C.body}/>
        <line x1="96" y1="105" x2="90" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <line x1="104" y1="105" x2="110" y2="140" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
        <text x="100" y="155" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">TRÍCEPS / PECHO</text>
      </svg>
    ),
  };

  const fallback = (
    <svg viewBox="0 0 200 160" style={{width:"100%",height:"100%"}}>
      <circle cx="100" cy="60" r="18" fill={C.bodyLight}/>
      <line x1="100" y1="78" x2="100" y2="120" stroke={C.bodyLight} strokeWidth="14" strokeLinecap="round"/>
      <line x1="85" y1="90" x2="62" y2="80" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
      <line x1="115" y1="90" x2="138" y2="80" stroke={C.bodyLight} strokeWidth="8" strokeLinecap="round"/>
      <line x1="96" y1="120" x2="85" y2="150" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
      <line x1="104" y1="120" x2="115" y2="150" stroke={C.bodyLight} strokeWidth="9" strokeLinecap="round"/>
      <text x="100" y="145" textAnchor="middle" fill={C.crimson} fontSize="10" fontFamily="Arial" fontWeight="bold">EJERCICIO</text>
    </svg>
  );

  return illustrations[name] || fallback;
};

// ─── EXERCISE STEPS ───────────────────────────────────────────────────────────
const STEPS = {
  "Press de banca":           ["Acostado en el banco, agarra la barra con agarre ligeramente más ancho que los hombros","Bajá la barra lentamente hasta tocar el pecho (codos a 45°)","Empujá explosivamente hasta extender los brazos completamente","Mantené los pies apoyados en el suelo y la espalda baja contra el banco"],
  "Press banca inclinado":    ["Ajustá el banco entre 30-45 grados de inclinación","Agarra la barra con agarre amplio, pies apoyados en el suelo","Bajá la barra hacia la parte alta del pecho de forma controlada","Empujá hacia arriba y levemente hacia atrás siguiendo el arco natural"],
  "Sentadilla con barra":     ["Ubicate debajo de la barra con ella sobre los trapecios","Pies a la altura de los hombros, puntas ligeramente hacia afuera","Bajá flexionando rodillas y caderas como si te sentaras hacia atrás","Rodillas alineadas con los pies, mantené el pecho arriba durante todo el movimiento"],
  "Sentadilla frontal":       ["Barra apoyada en los hombros delanteros, codos altos","Pies un poco más abiertos que en sentadilla trasera","Bajá manteniendo el torso muy erguido y los codos arriba","Mayor activación de cuádriceps por la posición vertical del torso"],
  "Sentadilla búlgara":       ["Pie trasero apoyado en el banco detrás de vos","Pie delantero adelantado para una zancada amplia","Bajá flexionando la rodilla delantera sin que supere la punta del pie","Empujá con el talón delantero para subir, manteniendo el torso erguido"],
  "Peso muerto rumano":       ["Parado, barra o mancuernas al frente con agarre prono","Manteniendo las piernas casi extendidas, empujá la cadera hacia atrás","Bajá el peso pegado a las piernas hasta sentir tirón en isquios","Contraé glúteos al volver a la posición inicial"],
  "Hip thrust con barra":     ["Espalda alta apoyada en el banco, barra sobre las caderas","Pies apoyados en el suelo, rodillas a 90 grados","Empujá la cadera hacia arriba contrayendo fuerte los glúteos","En la parte superior formá una línea recta de hombros a rodillas"],
  "Press militar":            ["Parado con barra a la altura del pecho, agarre al ancho de hombros","Tensá el core y empujá la barra verticalmente por encima de la cabeza","Pasá la cabeza levemente hacia adelante cuando la barra supera el mentón","Bajá de forma controlada hasta la posición inicial"],
  "Press Arnold":             ["Sentado con mancuernas al frente de la cara, palmas hacia vos","Al empujar hacia arriba, rotá las palmas hacia afuera","Extendé completamente los brazos en la parte superior","Bajá revirtiendo la rotación para activar los tres haces del deltoides"],
  "Elevaciones laterales":    ["Parado con mancuernas a los costados","Con codos levemente flexionados, elevá los brazos hacia los lados","Llegá hasta la altura de los hombros formando una T con el cuerpo","Bajá lentamente resistiendo la gravedad para mayor trabajo excéntrico"],
  "Remo con mancuerna":       ["Apoyá la rodilla y mano del mismo lado en el banco","Con la espalda paralela al suelo, tomá la mancuerna con el otro brazo","Jalá la mancuerna hacia la cadera manteniendo el codo pegado al cuerpo","Bajá lentamente para maximizar el estiramiento del dorsal"],
  "Dominadas asistidas":      ["Agarrá la barra con agarre supino o prono, manos al ancho de hombros","Si usás banda, apoyá las rodillas o pies en ella para asistencia","Jalá hacia arriba hasta que el mentón supere la barra","Bajá completamente para aprovechar el rango completo de movimiento"],
  "Jalón al pecho":           ["Sentado en la máquina, agarrá la barra con agarre amplio","Tirá la barra hacia el pecho inclinando levemente el torso hacia atrás","Tocá el pecho superior o la clavícula con la barra","Subí lentamente resistiendo hasta extender completamente los brazos"],
  "Curl de bíceps":           ["Parado con mancuernas o barra, codos pegados al cuerpo","Flexioná los codos levantando el peso hacia los hombros","Contraé el bíceps fuerte en la posición alta","Bajá lentamente sin soltar la tensión en todo el recorrido"],
  "Curl martillo":            ["Agarre neutro (pulgares hacia arriba) con mancuernas","Mismo movimiento que el curl clásico pero sin rotar las muñecas","Activa bíceps braquial y braquiorradial más que el curl estándar","Podés hacerlo alternado o simultáneo"],
  "Extensión tríceps":        ["Parado, sostené la mancuerna con ambas manos sobre la cabeza","Codos apuntando al frente y pegados a la cabeza","Bajá la mancuerna detrás de la cabeza flexionando los codos","Extendé completamente los brazos contrayendo el tríceps en la parte alta"],
  "Press francés":            ["Acostado, barra EZ o mancuernas extendidas sobre el pecho","Codos fijos apuntando al techo, sólo se mueven los antebrazos","Bajá el peso hacia la frente o detrás de la cabeza","Extendé los codos completamente sin moverlos de lugar"],
  "Plancha abdominal":        ["Apoyá los codos directamente debajo de los hombros","Cuerpo en línea recta de cabeza a talones, glúteos activos","No dejes que las caderas suban ni bajen","Respirá normalmente manteniendo el core contraído todo el tiempo"],
  "Plancha lateral":          ["Apoyá el codo debajo del hombro en línea recta","Elevá las caderas formando una diagonal con el cuerpo","Apilá los pies o ponelos uno delante del otro para más estabilidad","Mantenés el core activado y no dejés caer la cadera"],
  "Zancadas con mancuernas":  ["Parado con mancuernas a los costados","Dá un paso largo hacia adelante bajando la rodilla trasera casi al suelo","La rodilla delantera no debe superar la punta del pie","Empujá con el talón delantero para volver y repetí con la otra pierna"],
  "Elevación de talones":     ["Parado con la punta de los pies en el borde de un escalón o plataforma","Bajá los talones lo más posible para estirar el gemelo","Subí en puntillas lo más alto posible","Mantené la contracción en la parte alta un segundo antes de bajar"],
  "Prensa de piernas":        ["Sentado en la máquina, pies a la altura de los hombros en la plataforma","Bajá la plataforma hasta que las rodillas formen 90 grados","Empujá con los talones hasta casi extender completamente las piernas","No bloquees completamente las rodillas en la parte alta"],
  "Fondos en paralelas":      ["Agarra las barras paralelas y elevate con los brazos extendidos","Incliná levemente el torso hacia adelante para más pecho","Bajá flexionando los codos hasta 90 grados o un poco más","Empujá hacia arriba contrayendo pecho y tríceps"],
  "Remo Yates con barra":     ["Parado, inclinado unos 70 grados hacia adelante (más erguido que el remo convencional)","Agarre supino (palmas hacia arriba) con barra","Jalá la barra hacia el ombligo apretando la espalda media","Bajá lentamente manteniendo la tensión en el dorsal"],
  "Clean & press mancuernas": ["Empezá con mancuernas a los costados, pies al ancho de caderas","Hacé un movimiento explosivo de jalón llevando las mancuernas a los hombros","Desde los hombros, presioná las mancuernas sobre la cabeza","Bajá controlado a la posición inicial para la siguiente repetición"],
  "Extensión de cuádriceps":  ["Sentado en la máquina de extensión, espalda apoyada","Agarre los manubrios laterales para estabilidad","Extendé las piernas completamente contrayendo los cuádriceps","Bajá lentamente sin dejar que el peso baje de golpe"],
  "Curl femoral acostado":    ["Acostado boca abajo en la máquina, rodillos sobre los tobillos","Flexioná las rodillas llevando los talones hacia los glúteos","Contrae los isquiotibiales fuerte en la parte alta","Bajá lentamente resistiendo la extensión para más trabajo excéntrico"],
  "Step up con mancuernas":   ["Parado frente a un banco o cajón con mancuernas en manos","Subí un pie a la plataforma y empujá con ese talón para elevar el cuerpo","Subí el otro pie al banco en la parte alta","Bajá controlado y repetí con la misma pierna o alternando"],
  "Elevación piernas colgado":["Colgado de la barra con agarre prono, brazos extendidos","Con el core activado, levantá las piernas manteniendo las rodillas extendidas","Llegá al menos a la horizontal, intentando llegar a la barra","Bajá lentamente controlando el descenso sin balancear el cuerpo"],
  "Rueda abdominal":          ["Arrodillado con la rueda frente a vos, manos en los manubrios","Empujá la rueda hacia adelante extendiendo el cuerpo hacia el suelo","Llegá lo más lejos que puedas manteniendo control","Contraé el core fuertemente para volver a la posición inicial"],
};

// ─── EXERCISE MODAL ───────────────────────────────────────────────────────────
const ExerciseModal = ({ exercise, onClose }) => {
  const steps = STEPS[exercise.name] || ["Ejecutá el movimiento de forma controlada", "Mantené la forma correcta durante toda la serie", "Respirá de manera coordinada con el esfuerzo"];
  return (
    <div style={{ position:"fixed", inset:0, zIndex:100, background:"rgba(0,0,0,0.9)", backdropFilter:"blur(6px)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"16px" }} onClick={onClose}>
      <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:18, width:"100%", maxWidth:360, overflow:"hidden", maxHeight:"90vh", overflowY:"auto" }} onClick={e=>e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:`1px solid ${C.border}` }}>
          <div>
            <div style={{ color:C.text, fontSize:15, fontWeight:700, fontFamily:"'Oswald',sans-serif", letterSpacing:"0.04em" }}>{exercise.name}</div>
            <div style={{ color:C.crimson, fontSize:11, marginTop:2, letterSpacing:"0.08em" }}>{exercise.muscle?.toUpperCase()}</div>
          </div>
          <button onClick={onClose} style={{ width:30, height:30, borderRadius:8, background:C.surface2, border:`1px solid ${C.border}`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.textMid} strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Illustration */}
        <div style={{ background:`linear-gradient(135deg, #0A0E14, #111820)`, padding:"20px", display:"flex", alignItems:"center", justifyContent:"center", borderBottom:`1px solid ${C.border}` }}>
          <div style={{ width:200, height:160 }}>
            <ExerciseIllustration name={exercise.name}/>
          </div>
        </div>

        {/* Stats */}
        <div style={{ padding:"14px 16px", borderBottom:`1px solid ${C.border}` }}>
          <div style={{ display:"flex", gap:8 }}>
            {[
              { label:"SERIES", value: exercise.sets },
              { label:"REPS", value: exercise.reps },
              { label:"DESCANSO", value:`${exercise.rest}s` },
            ].map(s=>(
              <div key={s.label} style={{ flex:1, background:C.surface2, border:`1px solid ${C.border}`, borderRadius:10, padding:"10px 8px", textAlign:"center" }}>
                <div style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:18, fontWeight:700, lineHeight:1 }}>{s.value}</div>
                <div style={{ color:C.textDim, fontSize:9, marginTop:3, letterSpacing:"0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div style={{ padding:"14px 16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            <div style={{ width:3, height:14, background:C.crimson, borderRadius:2 }}/>
            <span style={{ color:C.crimson, fontSize:10, letterSpacing:"0.15em", fontWeight:700 }}>EJECUCIÓN</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <div style={{ width:22, height:22, borderRadius:6, background:C.crimsonFaint, border:`1px solid ${C.crimsonDim}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                  <span style={{ fontFamily:"'Oswald',sans-serif", color:C.crimson, fontSize:11, fontWeight:700 }}>{i+1}</span>
                </div>
                <div style={{ color:C.textMid, fontSize:12, lineHeight:1.55, flex:1 }}>{step}</div>
              </div>
            ))}
          </div>

          <button onClick={onClose} style={{ width:"100%", marginTop:16, padding:"13px", background:`linear-gradient(135deg, ${C.crimson}, ${C.crimsonDim})`, border:"none", borderRadius:10, color:C.white, fontSize:13, fontWeight:700, letterSpacing:"0.1em", fontFamily:"'Oswald',sans-serif", cursor:"pointer" }}>ENTENDIDO</button>
        </div>
      </div>
    </div>
  );
};

// ─── REST TIMER ───────────────────────────────────────────────────────────────
const RestTimer = ({ seconds, onDone }) => {
  const [left, setLeft] = useState(seconds);
  const ref = useRef(null);
  useEffect(() => {
    ref.current = setInterval(() => {
      setLeft(p => { if (p<=1){clearInterval(ref.current);onDone();return 0;} return p-1; });
    }, 1000);
    return () => clearInterval(ref.current);
  }, []);
  const pct=(left/seconds)*100; const r=28; const circ=2*Math.PI*r;
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"10px 0 4px" }}>
      <div style={{ position:"relative", width:72, height:72, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <svg width="72" height="72" style={{ position:"absolute", transform:"rotate(-90deg)" }}>
          <circle cx="36" cy="36" r={r} fill="none" stroke={C.border} strokeWidth="4"/>
          <circle cx="36" cy="36" r={r} fill="none" stroke={C.crimson} strokeWidth="4" strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ} strokeLinecap="round" style={{ transition:"stroke-dashoffset 1s linear" }}/>
        </svg>
        <span style={{ fontSize:20, fontWeight:700, color:C.text, fontFamily:"'Oswald',sans-serif" }}>{left}s</span>
      </div>
      <span style={{ fontSize:10, color:C.textDim, letterSpacing:"0.12em", marginTop:4 }}>DESCANSO</span>
      <button onClick={onDone} style={{ marginTop:5, background:"none", border:`1px solid ${C.border}`, borderRadius:6, padding:"3px 12px", color:C.textDim, fontSize:10, cursor:"pointer" }}>SALTAR</button>
    </div>
  );
};

// ─── RING ─────────────────────────────────────────────────────────────────────
const Ring = ({ pct, size=80, sw=5, color=C.crimson, children }) => {
  const r=(size-sw*2)/2; const circ=2*Math.PI*r;
  return (
    <div style={{ position:"relative", width:size, height:size, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <svg width={size} height={size} style={{ position:"absolute", transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={sw}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeDasharray={circ} strokeDashoffset={circ-(pct/100)*circ} strokeLinecap="round" style={{ transition:"stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)" }}/>
      </svg>
      <div style={{ position:"relative", zIndex:1 }}>{children}</div>
    </div>
  );
};

// ─── GYM MARK ─────────────────────────────────────────────────────────────────
const GymMark = ({ size="md" }) => {
  const sz=size==="lg"?52:size==="sm"?30:40;
  const f1=size==="lg"?13:size==="sm"?8:10;
  const f2=size==="lg"?9:size==="sm"?6:7;
  return (
    <div style={{ display:"flex", alignItems:"center", gap:size==="sm"?8:10 }}>
      <div style={{ width:sz, height:sz, borderRadius:"50%", background:C.white, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:`0 0 0 1px ${C.border}, 0 4px 20px ${C.crimsonGlow}` }}>
        <svg width={sz*0.72} height={sz*0.72} viewBox="0 0 60 60">
          <ellipse cx="30" cy="38" rx="10" ry="8" fill="#111"/>
          <rect x="8" y="18" width="44" height="6" rx="3" fill="#111"/>
          <circle cx="10" cy="21" r="6" fill="#111"/><circle cx="50" cy="21" r="6" fill="#111"/>
          <circle cx="10" cy="21" r="3.5" fill="#666"/><circle cx="50" cy="21" r="3.5" fill="#666"/>
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

const TopBar = ({ onBack, right, title, sub }) => (
  <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"14px 18px", display:"flex", alignItems:"center", gap:12, position:"sticky", top:0, zIndex:10 }}>
    {onBack ? <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px", display:"flex", borderRadius:8, color:C.text }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
    </button> : <GymMark size="sm"/>}
    {title && <div style={{ flex:1 }}>
      {sub && <div style={{ fontSize:10, color:C.crimson, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:2 }}>{sub}</div>}
      <div style={{ fontSize:15, fontWeight:600, color:C.text, fontFamily:"'Oswald',sans-serif", letterSpacing:"0.04em" }}>{title}</div>
    </div>}
    {!title && <div style={{ flex:1 }}/>}
    {right}
  </div>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CLIENT = { name: "Martín Rodríguez", plan: "3 días", currentWeek: 2, daysLeft: 5 };
const PROGRAM = [
  { week:1, label:"ADAPTACIÓN", unlocked:true, completed:true,
    days:[
      { slot:1, label:"DÍA A", focus:"TREN SUPERIOR", completed:true,
        warmup:[{name:"Rotación de hombros",detail:"2 min",done:true},{name:"Movilidad de muñecas",detail:"1 min",done:true},{name:"Trote suave",detail:"5 min",done:true}],
        exercises:[{name:"Press de banca",muscle:"Pectoral",sets:3,reps:"12",rest:60,done:true},{name:"Remo con mancuerna",muscle:"Dorsal",sets:3,reps:"12",rest:60,done:true},{name:"Press militar",muscle:"Hombros",sets:3,reps:"10",rest:60,done:true},{name:"Curl de bíceps",muscle:"Bíceps",sets:3,reps:"12",rest:45,done:true},{name:"Extensión tríceps",muscle:"Tríceps",sets:3,reps:"12",rest:45,done:true},{name:"Plancha abdominal",muscle:"Core",sets:3,reps:"30s",rest:30,done:true}]},
      { slot:2, label:"DÍA B", focus:"TREN INFERIOR", completed:true,
        warmup:[{name:"Movilidad de cadera",detail:"2 min",done:true},{name:"Sentadilla sin peso",detail:"15 reps",done:true},{name:"Saltos en el lugar",detail:"2 min",done:true}],
        exercises:[{name:"Sentadilla con barra",muscle:"Cuádriceps",sets:3,reps:"12",rest:90,done:true},{name:"Peso muerto rumano",muscle:"Isquios",sets:3,reps:"10",rest:90,done:true},{name:"Prensa de piernas",muscle:"Cuádriceps",sets:3,reps:"15",rest:60,done:true},{name:"Zancadas con mancuernas",muscle:"Glúteos",sets:3,reps:"10 c/lado",rest:60,done:true},{name:"Elevación de talones",muscle:"Gemelos",sets:4,reps:"20",rest:30,done:true},{name:"Plancha lateral",muscle:"Oblicuos",sets:3,reps:"30s c/lado",rest:30,done:true}]},
      { slot:3, label:"DÍA C", focus:"FULL BODY", completed:true,
        warmup:[{name:"Jumping jacks",detail:"2 min",done:true},{name:"Movilidad de columna",detail:"2 min",done:true},{name:"Estiramiento dinámico",detail:"3 min",done:true}],
        exercises:[{name:"Sentadilla + press",muscle:"Full body",sets:3,reps:"10",rest:60,done:true},{name:"Remo en polea baja",muscle:"Espalda",sets:3,reps:"12",rest:60,done:true},{name:"Fondos en paralelas",muscle:"Tríceps/Pecho",sets:3,reps:"10",rest:60,done:true},{name:"Peso muerto rumano",muscle:"Posterior",sets:3,reps:"12",rest:75,done:true},{name:"Elevaciones laterales",muscle:"Hombros",sets:3,reps:"15",rest:45,done:true},{name:"Plancha abdominal",muscle:"Abdomen",sets:3,reps:"15",rest:30,done:true}]}
    ]},
  { week:2, label:"PROGRESIÓN", unlocked:true, completed:false,
    days:[
      { slot:1, label:"DÍA A", focus:"TREN SUPERIOR", completed:false,
        warmup:[{name:"Movilidad escapular",detail:"2 min",done:false},{name:"Band pull-apart",detail:"15 reps",done:false},{name:"Cardio moderado",detail:"5 min",done:false}],
        exercises:[{name:"Press banca inclinado",muscle:"Pectoral alto",sets:4,reps:"10",rest:75,done:false},{name:"Dominadas asistidas",muscle:"Dorsal",sets:3,reps:"8",rest:90,done:false},{name:"Elevaciones laterales",muscle:"Hombros",sets:4,reps:"12",rest:45,done:false},{name:"Curl martillo",muscle:"Bíceps",sets:3,reps:"12",rest:45,done:false},{name:"Press francés",muscle:"Tríceps",sets:3,reps:"10",rest:60,done:false},{name:"Elevación piernas colgado",muscle:"Core",sets:3,reps:"12",rest:45,done:false}]},
      { slot:2, label:"DÍA B", focus:"TREN INFERIOR", completed:false,
        warmup:[{name:"Foam roller piernas",detail:"3 min",done:false},{name:"Hip thrust sin peso",detail:"12 reps",done:false},{name:"Movilidad de tobillo",detail:"2 min",done:false}],
        exercises:[{name:"Sentadilla frontal",muscle:"Cuádriceps",sets:4,reps:"8",rest:90,done:false},{name:"Hip thrust con barra",muscle:"Glúteos",sets:4,reps:"12",rest:75,done:false},{name:"Extensión de cuádriceps",muscle:"Cuádriceps",sets:3,reps:"15",rest:45,done:false},{name:"Curl femoral acostado",muscle:"Isquios",sets:3,reps:"12",rest:45,done:false},{name:"Step up con mancuernas",muscle:"Glúteos/Cuád",sets:3,reps:"10 c/lado",rest:60,done:false},{name:"Plancha lateral",muscle:"Oblicuos",sets:3,reps:"30s c/lado",rest:30,done:false}]},
      { slot:3, label:"DÍA C", focus:"POTENCIA + CORE", completed:false,
        warmup:[{name:"Remo o cuerda (cardio)",detail:"5 min",done:false},{name:"Rotaciones de tronco",detail:"2 min",done:false},{name:"Activación glútea",detail:"15 reps",done:false}],
        exercises:[{name:"Clean & press mancuernas",muscle:"Full body",sets:3,reps:"8",rest:90,done:false},{name:"Remo Yates con barra",muscle:"Espalda media",sets:4,reps:"10",rest:75,done:false},{name:"Press Arnold",muscle:"Hombros",sets:3,reps:"12",rest:60,done:false},{name:"Sentadilla búlgara",muscle:"Cuádriceps",sets:3,reps:"8 c/lado",rest:75,done:false},{name:"Jalón al pecho",muscle:"Dorsal ancho",sets:3,reps:"12",rest:60,done:false},{name:"Rueda abdominal",muscle:"Core total",sets:3,reps:"10",rest:45,done:false}]}
    ]},
  { week:3, label:"INTENSIDAD", unlocked:false, completed:false, days:[] },
  { week:4, label:"PEAK", unlocked:false, completed:false, days:[] },
];

// ─── SCREENS ──────────────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [vis, setVis] = useState(false);
  const [showPw, setShowPw] = useState(false);
  useEffect(()=>{ setTimeout(()=>setVis(true),80); },[]);
  return (
    <div style={{ minHeight:"100vh", background:C.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 24px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`, backgroundSize:"32px 32px", opacity:0.4 }}/>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg, transparent, ${C.crimson}, transparent)` }}/>
      <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:"60%", height:"200px", background:C.crimsonGlow, filter:"blur(60px)", borderRadius:"50%" }}/>
      <div style={{ width:"100%", maxWidth:360, position:"relative", opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(24px)", transition:"all 0.7s cubic-bezier(.4,0,.2,1)" }}>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:44 }}>
          <div style={{ width:92, height:92, borderRadius:"50%", background:C.white, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 0 1px ${C.borderHi}, 0 8px 40px ${C.crimsonGlow}`, marginBottom:18 }}>
            <svg width="66" height="66" viewBox="0 0 60 60">
              <ellipse cx="30" cy="38" rx="10" ry="8" fill="#111"/>
              <rect x="8" y="18" width="44" height="6" rx="3" fill="#111"/>
              <circle cx="10" cy="21" r="6" fill="#111"/><circle cx="50" cy="21" r="6" fill="#111"/>
              <circle cx="10" cy="21" r="3.5" fill="#666"/><circle cx="50" cy="21" r="3.5" fill="#666"/>
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
          <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:30, fontWeight:700, color:C.text, letterSpacing:"0.1em" }}>REVOLUCIÓN</div>
          <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:12, color:C.crimson, letterSpacing:"0.45em", marginTop:3 }}>· GYM ·</div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:16 }}>
          <div style={{ position:"relative" }}>
            <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.textMid} strokeWidth="1.75" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <input defaultValue="martin@gmail.com" type="email" style={{ width:"100%", background:C.surface, border:`1px solid ${C.border}`, borderRadius:10, padding:"13px 14px 13px 40px", color:C.text, fontSize:14, outline:"none", fontFamily:"'Barlow',sans-serif", boxSizing:"border-box" }}/>
          </div>
          <div style={{ position:"relative" }}>
            <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input defaultValue="••••••••" type={showPw?"text":"password"} style={{ width:"100%", background:C.surface, border:`1px solid ${C.border}`, borderRadius:10, padding:"13px 40px", color:C.text, fontSize:14, outline:"none", fontFamily:"'Barlow',sans-serif", boxSizing:"border-box" }}/>
            <button onClick={()=>setShowPw(!showPw)} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
        <button onClick={onLogin} style={{ width:"100%", padding:"14px", background:`linear-gradient(135deg, ${C.crimson}, ${C.crimsonDim})`, border:"none", borderRadius:10, color:C.white, fontSize:14, fontWeight:700, letterSpacing:"0.12em", fontFamily:"'Oswald',sans-serif", cursor:"pointer", boxShadow:`0 4px 20px ${C.crimsonGlow}` }}
          onMouseDown={e=>e.currentTarget.style.transform="scale(0.98)"}
          onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}>INGRESAR</button>
        <p style={{ color:C.textDim, textAlign:"center", marginTop:18, fontSize:12, lineHeight:1.5 }}>¿Primera vez?<br/><span style={{ color:C.crimson }}>Contactá a tu entrenador para activar tu cuenta</span></p>
      </div>
    </div>
  );
};

const DashboardScreen = ({ onSelectWeek, onPayment }) => {
  const [vis, setVis] = useState(false);
  useEffect(()=>{ setTimeout(()=>setVis(true),80); },[]);
  const completedWeeks = PROGRAM.filter(w=>w.completed).length;
  const pct = Math.round((completedWeeks/PROGRAM.length)*100);
  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:32 }}>
      <TopBar right={
        <button onClick={onPayment} style={{ background:"none", border:"none", cursor:"pointer", position:"relative", padding:4 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.crimson} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <div style={{ position:"absolute", top:2, right:2, width:7, height:7, background:C.crimson, borderRadius:"50%", border:`2px solid ${C.bg}` }}/>
        </button>
      }/>
      <div style={{ padding:"20px 18px", opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(16px)", transition:"all 0.6s cubic-bezier(.4,0,.2,1)" }}>
        <div style={{ marginBottom:20 }}>
          <p style={{ color:C.textDim, fontSize:12, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:4 }}>Bienvenido de nuevo</p>
          <h1 style={{ fontFamily:"'Oswald',sans-serif", fontSize:26, fontWeight:700, color:C.text, lineHeight:1 }}>
            {CLIENT.name.split(" ")[0]} <span style={{ color:C.crimson }}>{CLIENT.name.split(" ")[1]}</span>
          </h1>
        </div>
        <div onClick={onPayment} style={{ background:`linear-gradient(135deg, #120508, #1A070C)`, border:`1px solid ${C.crimsonDim}`, borderRadius:12, padding:"13px 15px", marginBottom:18, cursor:"pointer", display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:34, height:34, borderRadius:8, background:C.crimsonFaint, border:`1px solid ${C.crimsonDim}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:16 }}>⚠️</div>
          <div style={{ flex:1 }}>
            <div style={{ color:C.text, fontSize:13, fontWeight:600 }}>Membresía vence en {CLIENT.daysLeft} días</div>
            <div style={{ color:C.crimson, fontSize:11, marginTop:2 }}>Tocá para renovar →</div>
          </div>
        </div>
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"18px", marginBottom:16, display:"flex", alignItems:"center", gap:18 }}>
          <Ring pct={pct} size={76} sw={5}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:20, fontWeight:700, color:C.text, lineHeight:1 }}>{pct}%</div>
            </div>
          </Ring>
          <div style={{ flex:1 }}>
            <div style={{ color:C.text, fontSize:15, fontWeight:600, marginBottom:3, fontFamily:"'Oswald',sans-serif" }}>Programa Iniciación</div>
            <div style={{ color:C.textDim, fontSize:12, marginBottom:10 }}>Plan {CLIENT.plan} · 4 semanas</div>
            <div style={{ display:"flex", gap:6 }}>
              {PROGRAM.map(w=>(
                <div key={w.week} style={{ flex:1, display:"flex", flexDirection:"column", gap:3, alignItems:"center" }}>
                  <div style={{ width:"100%", height:5, borderRadius:3, background:w.completed?C.crimson:w.unlocked?C.crimsonFaint:C.border }}/>
                  <span style={{ fontSize:9, color:w.week===CLIENT.currentWeek?C.crimson:C.textDim }}>S{w.week}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display:"flex", gap:10, marginBottom:22 }}>
          {[
            { label:"Racha", value:"6", unit:"días", color:C.orange },
            { label:"Sesiones", value:"9", unit:"total", color:C.gold },
            { label:"Asistencia", value:"100%", unit:"este mes", color:C.crimson },
          ].map(s=>(
            <div key={s.label} style={{ flex:1, background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"13px 8px", textAlign:"center" }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:s.color, margin:"0 auto 6px" }}/>
              <div style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:17, fontWeight:700, lineHeight:1 }}>{s.value}</div>
              <div style={{ color:C.textDim, fontSize:10, marginTop:3 }}>{s.unit}</div>
            </div>
          ))}
        </div>
        <p style={{ color:C.textDim, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Tu programa</p>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {PROGRAM.map(week=>{
            const isActive = week.week===CLIENT.currentWeek;
            return (
              <div key={week.week} onClick={()=>week.unlocked&&onSelectWeek(week)} style={{ background:isActive?`linear-gradient(135deg, #120508, ${C.surface})`:C.surface, border:`1px solid ${isActive?C.crimsonDim:C.border}`, borderRadius:12, padding:"15px 16px", display:"flex", alignItems:"center", gap:14, cursor:week.unlocked?"pointer":"default", opacity:week.unlocked?1:0.45 }}>
                <div style={{ width:42, height:42, borderRadius:10, flexShrink:0, background:week.completed?C.crimson:week.unlocked?C.crimsonFaint:C.border, border:`1px solid ${week.completed?C.crimson:week.unlocked?C.crimsonDim:C.border}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {week.completed ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>
                   : week.unlocked ? <span style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:17, fontWeight:700 }}>{week.week}</span>
                   : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3 }}>
                    <span style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:14, fontWeight:600 }}>SEM {week.week} — {week.label}</span>
                    {isActive && <span style={{ fontSize:9, background:C.crimson, color:"#fff", padding:"2px 7px", borderRadius:4, fontWeight:700 }}>ACTUAL</span>}
                  </div>
                  <div style={{ color:C.textDim, fontSize:11 }}>
                    {week.completed?"✓ Completada":week.unlocked?`${week.days.filter(d=>d.completed).length}/${week.days.length} sesiones`:"Completá la semana anterior"}
                  </div>
                </div>
                {week.unlocked && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,18 15,12 9,6"/></svg>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const WeekScreen = ({ week, onSelectDay, onBack }) => {
  const done = week.days.filter(d=>d.completed).length;
  const pct = Math.round((done/week.days.length)*100);
  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:32 }}>
      <TopBar onBack={onBack} title={`SEMANA ${week.week} — ${week.label}`} sub={`${done}/${week.days.length} sesiones`}/>
      <div style={{ padding:"20px 18px" }}>
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"16px", marginBottom:22 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <span style={{ color:C.textMid, fontSize:13 }}>Progreso semanal</span>
            <span style={{ fontFamily:"'Oswald',sans-serif", color:C.crimson, fontSize:15, fontWeight:700 }}>{pct}%</span>
          </div>
          <div style={{ background:C.border, borderRadius:4, height:6, overflow:"hidden" }}>
            <div style={{ width:`${pct}%`, height:"100%", background:C.crimson, borderRadius:4, transition:"width 1s ease" }}/>
          </div>
        </div>
        <p style={{ color:C.textDim, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Seleccioná tu sesión</p>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {week.days.map(day=>(
            <div key={day.slot} onClick={()=>onSelectDay(day)} style={{ background:day.completed?`linear-gradient(135deg, #0E0509, ${C.surface})`:C.surface, border:`1px solid ${day.completed?C.crimsonDim:C.border}`, borderRadius:13, padding:"16px", cursor:"pointer", display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:50, height:50, borderRadius:12, flexShrink:0, background:day.completed?C.crimsonFaint:C.surface2, border:`1px solid ${day.completed?C.crimsonDim:C.borderHi}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                {day.completed
                  ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.crimson} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>
                  : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 9.5v5M21 9.5v5"/><rect x="1" y="8.5" width="4" height="7" rx="1"/><rect x="19" y="8.5" width="4" height="7" rx="1"/><rect x="5" y="11" width="14" height="2" rx="1"/></svg>}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Oswald',sans-serif", color:C.text, fontSize:15, fontWeight:600 }}>{day.label}</div>
                <div style={{ color:C.crimson, fontSize:12, fontWeight:500, marginTop:2 }}>{day.focus}</div>
                <div style={{ color:C.textDim, fontSize:11, marginTop:4 }}>Calentamiento · {day.exercises.length} ejercicios</div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
                <span style={{ fontSize:10, color:day.completed?C.crimson:C.textDim, fontWeight:600 }}>{day.completed?"COMPLETADO":"PENDIENTE"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.textDim} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,18 15,12 9,6"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DayScreen = ({ day, onBack, onComplete }) => {
  const [warmup, setWarmup] = useState(day.warmup.map(w=>({...w})));
  const [exs, setExs] = useState(day.exercises.map(e=>({...e})));
  const [timer, setTimer] = useState(null);
  const [celebration, setCelebration] = useState(false);
  const [modalEx, setModalEx] = useState(null);

  const totalItems = warmup.length + exs.length;
  const doneItems = warmup.filter(w=>w.done).length + exs.filter(e=>e.done).length;
  const pct = Math.round((doneItems/totalItems)*100);
  const allDone = doneItems===totalItems;

  const toggleWarmup = (i) => setWarmup(prev=>prev.map((w,idx)=>idx===i?{...w,done:!w.done}:w));
  const toggleEx = (i) => {
    if (!exs[i].done) setTimer({ seconds:exs[i].rest, label:exs[i].name });
    setExs(prev=>prev.map((e,idx)=>idx===i?{...e,done:!e.done}:e));
  };

  useEffect(()=>{
    if (allDone && !day.completed) { setCelebration(true); setTimeout(()=>setCelebration(false),3200); }
  },[allDone]);

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:40 }}>
      {celebration && (
        <div style={{ position:"fixed", inset:0, background:"rgba(160,24,48,0.12)", backdropFilter:"blur(2px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50, pointerEvents:"none" }}>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:56, marginBottom:12 }}>🏆</div>
            <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:26, color:C.text, letterSpacing:"0.06em", fontWeight:700 }}>¡SESIÓN COMPLETA!</div>
            <div style={{ color:C.crimson, fontSize:13, marginTop:6 }}>SEGUÍS AVANZANDO</div>
          </div>
        </div>
      )}

      {modalEx && <ExerciseModal exercise={modalEx} onClose={()=>setModalEx(null)}/>}

      <TopBar onBack={onBack} title={day.focus} sub={day.label} right={
        <span style={{ fontFamily:"'Oswald',sans-serif", color:C.crimson, fontSize:16, fontWeight:700 }}>{pct}%</span>
      }/>
      <div style={{ height:3, background:C.border }}>
        <div style={{ width:`${pct}%`, height:"100%", background:C.crimson, transition:"width 0.4s ease" }}/>
      </div>

      {timer && (
        <div style={{ margin:"12px 18px 0", background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"8px 16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.crimson} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 3h6M12 3v2"/></svg>
            <span style={{ color:C.textDim, fontSize:11 }}>DESCANSO — {timer.label}</span>
          </div>
          <RestTimer seconds={timer.seconds} onDone={()=>setTimer(null)}/>
        </div>
      )}

      <div style={{ padding:"18px" }}>
        {/* Warmup */}
        <div style={{ marginBottom:22 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:11 }}>
            <div style={{ width:3, height:14, background:C.orange, borderRadius:2 }}/>
            <span style={{ color:C.orange, fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:700 }}>Calentamiento</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {warmup.map((w,i)=>(
              <div key={i} style={{ background:C.surface, border:`1px solid ${w.done?C.crimsonDim:C.border}`, borderRadius:10, padding:"12px 14px", display:"flex", alignItems:"center", gap:12 }}>
                <button onClick={()=>toggleWarmup(i)} style={{ width:26, height:26, borderRadius:7, flexShrink:0, background:w.done?C.crimson:"transparent", border:`1.5px solid ${w.done?C.crimson:C.borderHi}`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}>
                  {w.done && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>}
                </button>
                <div style={{ flex:1 }}>
                  <div style={{ color:w.done?C.textDim:C.text, fontSize:13, fontWeight:500, textDecoration:w.done?"line-through":"none" }}>{w.name}</div>
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
            <span style={{ color:C.textDim, fontSize:9, marginLeft:"auto" }}>▶ tocá el nombre</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {exs.map((ex,i)=>(
              <div key={i} style={{ background:C.surface, border:`1px solid ${ex.done?C.crimsonDim:C.border}`, borderRadius:10, padding:"13px 14px", display:"flex", alignItems:"center", gap:12 }}>
                <button onClick={()=>toggleEx(i)} style={{ width:28, height:28, borderRadius:7, flexShrink:0, background:ex.done?C.crimson:"transparent", border:`1.5px solid ${ex.done?C.crimson:C.borderHi}`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}>
                  {ex.done && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>}
                </button>
                <div style={{ flex:1 }}>
                  <div onClick={()=>setModalEx(ex)} style={{ display:"flex", alignItems:"center", gap:6, cursor:"pointer" }}>
                    <span style={{ color:ex.done?C.textDim:C.text, fontSize:13, fontWeight:600, textDecoration:ex.done?"line-through":"none" }}>{ex.name}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill={C.crimson} stroke="none" style={{ flexShrink:0, opacity:ex.done?0.3:1 }}><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                  <div style={{ display:"flex", gap:10, marginTop:4, flexWrap:"wrap" }}>
                    <span style={{ color:C.crimson, fontSize:11, fontWeight:600 }}>{ex.sets} series</span>
                    <span style={{ color:C.textDim, fontSize:11 }}>×</span>
                    <span style={{ color:C.textMid, fontSize:11 }}>{ex.reps} reps</span>
                    <span style={{ color:C.textDim, fontSize:11 }}>· {ex.rest}s</span>
                  </div>
                </div>
                <div style={{ background:C.surface2, border:`1px solid ${C.border}`, borderRadius:7, padding:"5px 8px", flexShrink:0 }}>
                  <div style={{ color:C.textDim, fontSize:9, textAlign:"center" }}>MÚSCULO</div>
                  <div style={{ color:C.textMid, fontSize:9, textAlign:"center", marginTop:1, maxWidth:50, lineHeight:1.2 }}>{ex.muscle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {allDone && (
          <button onClick={()=>onComplete(day)} style={{ width:"100%", marginTop:22, padding:"15px", background:`linear-gradient(135deg, ${C.crimson}, ${C.crimsonDim})`, border:"none", borderRadius:11, color:C.white, fontSize:14, fontWeight:700, letterSpacing:"0.12em", fontFamily:"'Oswald',sans-serif", cursor:"pointer", boxShadow:`0 4px 24px ${C.crimsonGlow}` }}
            onMouseDown={e=>e.currentTarget.style.transform="scale(0.98)"}
            onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}>✓ CONFIRMAR SESIÓN</button>
        )}
      </div>
    </div>
  );
};

const PaymentScreen = ({ onBack, onPaid }) => {
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const handlePay = () => { setLoading(true); setTimeout(()=>{ setLoading(false); setPaid(true); setTimeout(onPaid,2800); },1600); };
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
          <div style={{ background:"#0E0408", border:`1px solid ${C.crimsonDim}`, borderRadius:12, padding:"14px 15px", marginBottom:22, display:"flex", gap:12, alignItems:"flex-start" }}>
            <span style={{ fontSize:18, flexShrink:0 }}>⚠️</span>
            <div>
              <div style={{ color:C.text, fontWeight:600, fontSize:13, marginBottom:4 }}>Tu membresía vence en 5 días</div>
              <div style={{ color:C.textDim, fontSize:12, lineHeight:1.5 }}>Renová ahora para mantener el acceso a tus rutinas.</div>
            </div>
          </div>
          <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:13, padding:"18px", marginBottom:18 }}>
            {[{label:"Plan",value:"3 días / semana"},{label:"Período",value:"1 mes"},{label:"Vencimiento actual",value:"01/12/2024"}].map((r,i,arr)=>(
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
          <button onClick={handlePay} disabled={loading} style={{ width:"100%", padding:"15px", background:loading?"#006A9B":"#009EE3", border:"none", borderRadius:11, display:"flex", alignItems:"center", justifyContent:"center", gap:10, cursor:loading?"not-allowed":"pointer" }}>
            <svg width="26" height="26" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="white"/><text x="20" y="26" textAnchor="middle" fontSize="13" fill="#009EE3" fontWeight="900">MP</text></svg>
            <span style={{ color:"#fff", fontSize:14, fontWeight:700, letterSpacing:"0.06em" }}>{loading?"PROCESANDO...":"PAGAR CON MERCADO PAGO"}</span>
          </button>
          <p style={{ color:C.textDim, textAlign:"center", marginTop:14, fontSize:11 }}>Pago seguro · Tu progreso no se pierde</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [screen, setScreen] = useState("login");
  const [week, setWeek] = useState(null);
  const [day, setDay] = useState(null);
  return (
    <div style={{ maxWidth:390, margin:"0 auto", minHeight:"100vh", background:C.bg, fontFamily:"'Barlow','Helvetica Neue',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:0;}
        input::placeholder{color:#404B55;}
      `}</style>
      {screen==="login"     && <LoginScreen onLogin={()=>setScreen("dashboard")}/>}
      {screen==="dashboard" && <DashboardScreen onSelectWeek={w=>{setWeek(w);setScreen("week");}} onPayment={()=>setScreen("payment")}/>}
      {screen==="week"      && week && <WeekScreen week={week} onSelectDay={d=>{setDay(d);setScreen("day");}} onBack={()=>setScreen("dashboard")}/>}
      {screen==="day"       && day  && <DayScreen day={day} onBack={()=>setScreen("week")} onComplete={()=>setScreen("week")}/>}
      {screen==="payment"   && <PaymentScreen onBack={()=>setScreen("dashboard")} onPaid={()=>setScreen("dashboard")}/>}
    </div>
  );
}
