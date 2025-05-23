export default function LifeLine() {
  return (
    <svg
      width="100%"
      height="120"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      <polyline
        fill="none"
        stroke="#5f663b"
        strokeWidth="3"
        points={
          // Baseline
          `0,60 50,60 ` +
          // QRS-Variante 1
          `105,60 108,25 112,95 116,60 ` +
          // kurze Pause
          `120,60 130,60 ` +
          // QRS-Variante 2 (spitzer)
          `135,60 138,15 142,100 146,60 ` +
          // kurze Baseline
          `150,60 160,60 ` +
          // QRS-Variante 3 (breiter)
          `165,60 168,35 172,85 176,30 180,60 ` +
          // Baseline vor finalem QRS
          `190,60 200,60 ` +
          // QRS-Variante 4 (kleine Serie)
          `205,60 207,45 209,75 211,50 213,65 215,60 ` +
          // Ausklang und lange Baseline
          `220,60 1200,60`
        }
      />
    </svg>
  );
}