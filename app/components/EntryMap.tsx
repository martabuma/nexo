// Diagrama abstracto de red global (no cartografía real, sin países fijos):
// una esfera estilizada de fondo, anillos tipo instrumento, una malla de
// constelación entre puntos cercanos, y una red de conexiones animadas que
// aparecen y desaparecen convergiendo en Brasil.

const N = 34;
const CENTER = { x: 320, y: 320 };
const BASE_RADIUS = 190;
const RADIUS_VARIANCE = 90;
const CYCLE = 10;
const RING_RADII = [110, 180, 250, 310];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function nodePosition(i: number) {
  const jitter = (pseudoRandom(i) - 0.5) * 20;
  const angle = (-90 + (360 * i) / N + jitter) * (Math.PI / 180);
  const radius = BASE_RADIUS + pseudoRandom(i + 100) * RADIUS_VARIANCE;
  return { x: CENTER.x + radius * Math.cos(angle), y: CENTER.y + radius * Math.sin(angle) };
}

function curvePath(node: { x: number; y: number }) {
  const mid = { x: (node.x + CENTER.x) / 2, y: (node.y + CENTER.y) / 2 };
  const dx = CENTER.x - node.x;
  const dy = CENTER.y - node.y;
  const len = Math.hypot(dx, dy) || 1;
  const perp = { x: (-dy / len) * 16, y: (dx / len) * 16 };
  const ctrl = { x: mid.x + perp.x, y: mid.y + perp.y };
  return `M${node.x},${node.y} Q${ctrl.x},${ctrl.y} ${CENTER.x},${CENTER.y}`;
}

const NODES = Array.from({ length: N }, (_, i) => ({ i, ...nodePosition(i) }));

const TICKS = Array.from({ length: 48 }, (_, t) => {
  const ang = ((t * 360) / 48) * (Math.PI / 180);
  const r1 = 310;
  const r2 = t % 4 === 0 ? 300 : 305;
  return {
    x1: CENTER.x + r1 * Math.cos(ang),
    y1: CENTER.y + r1 * Math.sin(ang),
    x2: CENTER.x + r2 * Math.cos(ang),
    y2: CENTER.y + r2 * Math.sin(ang),
    major: t % 4 === 0,
  };
});

const MESH_LINES: { x1: number; y1: number; x2: number; y2: number }[] = [];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const dx = NODES[i].x - NODES[j].x;
    const dy = NODES[i].y - NODES[j].y;
    const dist = Math.hypot(dx, dy);
    if (dist < 95 && pseudoRandom(i * 7 + j * 13) > 0.45) {
      MESH_LINES.push({ x1: NODES[i].x, y1: NODES[i].y, x2: NODES[j].x, y2: NODES[j].y });
    }
  }
}

const DUST = Array.from({ length: 130 }, (_, i) => {
  const a = pseudoRandom(i * 3.1) * 360 * (Math.PI / 180);
  const r = 30 + pseudoRandom(i * 5.7) * 300;
  return {
    x: CENTER.x + r * Math.cos(a),
    y: CENTER.y + r * Math.sin(a),
    radius: 0.6 + pseudoRandom(i * 2.2) * 1.3,
    opacity: 0.05 + pseudoRandom(i * 7.3) * 0.12,
  };
});

export default function EntryMap({ brLabel }: { brLabel: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      className="h-auto w-full text-ouro"
      role="img"
      aria-label="Diagrama animado de conexiones globales convergiendo en Brasil"
    >
      <title>Red global conectando con Brasil</title>
      <defs>
        <marker id="arrow-br" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M1 1L9 5L1 9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <radialGradient id="br-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C7A45B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C7A45B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Globo estilizado de fondo: esfera con líneas de latitud/longitud */}
      <g stroke="#EDE7D8" strokeOpacity="0.09" fill="none" strokeWidth="1">
        <circle cx={CENTER.x} cy={CENTER.y} r="270" />
        <ellipse cx={CENTER.x} cy={CENTER.y} rx="270" ry="80" />
        <ellipse cx={CENTER.x} cy={CENTER.y} rx="270" ry="160" />
        <ellipse cx={CENTER.x} cy={CENTER.y} rx="80" ry="270" />
        <ellipse cx={CENTER.x} cy={CENTER.y} rx="160" ry="270" />
      </g>

      {/* Anillos concéntricos */}
      <g>
        {RING_RADII.map((r) => (
          <circle key={r} cx={CENTER.x} cy={CENTER.y} r={r} fill="none" stroke="#EDE7D8" strokeOpacity="0.06" strokeWidth="1" />
        ))}
      </g>

      {/* Marcas tipo instrumento en el anillo exterior */}
      <g stroke="#EDE7D8" strokeOpacity="0.14">
        {TICKS.map((t, idx) => (
          <line key={idx} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth={t.major ? 1.2 : 0.6} />
        ))}
      </g>

      {/* Malla de constelación entre puntos cercanos */}
      <g stroke="#C7A45B" fill="none">
        {MESH_LINES.map((m, idx) => (
          <line key={idx} x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2} strokeOpacity="0.12" strokeWidth="0.7" />
        ))}
      </g>

      {/* Polvo de fondo */}
      <g>
        {DUST.map((d, idx) => (
          <circle key={idx} cx={d.x} cy={d.y} r={d.radius} fill="#EDE7D8" fillOpacity={d.opacity} />
        ))}
      </g>

      {/* Red de nodos animados: aparecen y desaparecen convergiendo en Brasil */}
      <g style={{ color: "#C7A45B" }}>
        {NODES.map(({ i, x, y }) => {
          const d = curvePath({ x, y });
          const delay = `${(i * CYCLE) / N}s`;
          const hasHalo = pseudoRandom(i * 3.3) > 0.6;
          return (
            <g key={i} className="node-fade" style={{ animationDelay: delay, animationDuration: `${CYCLE}s` }}>
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="1.2"
                className="route-line"
                style={{ animationDelay: delay }}
                markerEnd="url(#arrow-br)"
              />
              <circle r="2.4" fill="#EDE7D8">
                <animateMotion dur="2.6s" repeatCount="indefinite" path={d} begin={delay} />
              </circle>
              <circle cx={x} cy={y} r="2.8" fill="#EDE7D8" fillOpacity="0.85" />
              {hasHalo && <circle cx={x} cy={y} r="7" fill="none" stroke="#EDE7D8" strokeOpacity="0.35" strokeWidth="0.7" />}
            </g>
          );
        })}
      </g>

      {/* halo pulsante detrás de Brasil */}
      <circle cx={CENTER.x} cy={CENTER.y} r="52" fill="url(#br-glow)" />

      {/* nodo central: Brasil */}
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r="10"
        fill="#C7A45B"
        className="map-node-pulse"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle cx={CENTER.x} cy={CENTER.y} r="17" fill="none" stroke="#C7A45B" strokeOpacity="0.5" strokeWidth="1.3" />
      <text
        x={CENTER.x}
        y={CENTER.y + 36}
        textAnchor="middle"
        className="fill-textlight font-mono text-[14px] font-medium tracking-widest"
      >
        {brLabel}
      </text>
    </svg>
  );
}
