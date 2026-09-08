// Diagrama abstracto de red global (no cartografía real, sin países fijos):
// puntos que aparecen y desaparecen en posiciones distintas alrededor de
// Brasil, sugiriendo conexiones desde cualquier parte del mundo, no una
// lista cerrada de mercados.

const N = 16;
const CENTER = { x: 320, y: 320 };
const BASE_RADIUS = 190;
const RADIUS_VARIANCE = 75;
const CYCLE = 7.2; // segundos por ciclo completo de aparición/desaparición

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function nodePosition(i: number) {
  const jitter = (pseudoRandom(i) - 0.5) * 22;
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

export default function EntryMap({ brLabel }: { brLabel: string }) {
  const nodes = Array.from({ length: N }, (_, i) => ({ i, ...nodePosition(i) }));

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

      {nodes.map(({ i, x, y }) => {
        const d = curvePath({ x, y });
        const delay = `${(i * CYCLE) / N}s`;
        return (
          <g
            key={i}
            className="node-fade"
            style={{ animationDelay: delay, animationDuration: `${CYCLE}s` }}
          >
            <path
              d={d}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.45"
              strokeWidth="1.3"
              className="route-line"
              style={{ animationDelay: delay }}
              markerEnd="url(#arrow-br)"
            />
            <circle r="2.6" fill="#EDE7D8">
              <animateMotion dur="2.6s" repeatCount="indefinite" path={d} begin={delay} />
            </circle>
            <circle cx={x} cy={y} r="3" fill="#EDE7D8" fillOpacity="0.85" />
          </g>
        );
      })}

      {/* halo pulsante detrás de Brasil */}
      <circle cx={CENTER.x} cy={CENTER.y} r="48" fill="url(#br-glow)" />

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
