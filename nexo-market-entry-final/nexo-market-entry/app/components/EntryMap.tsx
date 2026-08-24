// Diagrama esquemático (no cartografía real): cada país se ubica en una
// posición aproximada que insinúa su dirección real respecto a Brasil,
// sin ser un círculo perfecto ni un mapa geográfico literal.

type NodeCfg = { code: string; x: number; y: number; dx: number; dy: number; anchor: "start" | "end" | "middle" };

const BR = { x: 400, y: 300 };

const NODES: NodeCfg[] = [
  { code: "US", x: 190, y: 90, dx: -12, dy: 4, anchor: "end" },
  { code: "MX", x: 210, y: 155, dx: -12, dy: 2, anchor: "end" },
  { code: "CA", x: 240, y: 195, dx: -12, dy: 2, anchor: "end" },
  { code: "VE", x: 300, y: 200, dx: 0, dy: -12, anchor: "middle" },
  { code: "CO", x: 220, y: 225, dx: -12, dy: 4, anchor: "end" },
  { code: "EC", x: 235, y: 265, dx: -14, dy: 2, anchor: "end" },
  { code: "PE", x: 250, y: 300, dx: -14, dy: 2, anchor: "end" },
  { code: "BO", x: 300, y: 305, dx: 0, dy: -14, anchor: "middle" },
  { code: "PY", x: 330, y: 355, dx: 14, dy: 2, anchor: "start" },
  { code: "CL", x: 245, y: 360, dx: -14, dy: 2, anchor: "end" },
  { code: "AR", x: 300, y: 405, dx: -6, dy: 16, anchor: "middle" },
  { code: "UY", x: 350, y: 425, dx: 12, dy: 10, anchor: "start" },
  { code: "PT", x: 480, y: 130, dx: -12, dy: -6, anchor: "end" },
  { code: "ES", x: 535, y: 105, dx: 12, dy: 4, anchor: "start" },
];

function curvePath(node: { x: number; y: number }) {
  const mid = { x: (node.x + BR.x) / 2, y: (node.y + BR.y) / 2 };
  const dx = BR.x - node.x;
  const dy = BR.y - node.y;
  const len = Math.hypot(dx, dy) || 1;
  const perp = { x: (-dy / len) * 15, y: (dx / len) * 15 };
  const ctrl = { x: mid.x + perp.x, y: mid.y + perp.y };
  return `M${node.x},${node.y} Q${ctrl.x},${ctrl.y} ${BR.x},${BR.y}`;
}

export default function EntryMap({ brLabel }: { brLabel: string }) {
  const total = NODES.length;

  return (
    <svg
      viewBox="140 40 520 440"
      className="h-auto w-full text-ouro"
      role="img"
      aria-label={`Diagrama animado de rutas de ${total} países hacia Brasil`}
    >
      <title>Mapa de entrada al mercado brasileño</title>
      <defs>
        <marker id="arrow-br" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M1 1L9 5L1 9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <radialGradient id="br-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C7A45B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C7A45B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {NODES.map((n, i) => {
        const d = curvePath(n);
        const delay = `${(i * 2.6) / total}s`;
        return (
          <g key={n.code} className="group">
            <path
              d={d}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.42"
              strokeWidth="1.4"
              className="route-line transition-opacity duration-300 group-hover:stroke-opacity-100"
              style={{ animationDelay: delay }}
              markerEnd="url(#arrow-br)"
            />
            <circle r="3" fill="#EDE7D8" className="transition-opacity duration-300">
              <animateMotion dur="2.8s" repeatCount="indefinite" path={d} begin={delay} />
            </circle>
            <circle cx={n.x} cy={n.y} r="3.6" fill="#EDE7D8" fillOpacity="0.9" />
            <text
              x={n.x + n.dx}
              y={n.y + n.dy}
              textAnchor={n.anchor}
              dominantBaseline="middle"
              className="fill-textlight/60 font-mono text-[12px] tracking-wide transition-colors duration-300 group-hover:fill-textlight"
            >
              {n.code}
            </text>
          </g>
        );
      })}

      {/* halo pulsante detrás de Brasil */}
      <circle cx={BR.x} cy={BR.y} r="48" fill="url(#br-glow)" />

      {/* nodo central: Brasil */}
      <circle cx={BR.x} cy={BR.y} r="10" fill="#C7A45B" className="map-node-pulse" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <circle cx={BR.x} cy={BR.y} r="17" fill="none" stroke="#C7A45B" strokeOpacity="0.5" strokeWidth="1.3" />
      <text
        x={BR.x}
        y={BR.y + 36}
        textAnchor="middle"
        className="fill-textlight font-mono text-[14px] font-medium tracking-widest"
      >
        {brLabel}
      </text>
    </svg>
  );
}
