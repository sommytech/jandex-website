// Hero drawing: a line elevation of a residential block and a house that draws
// itself once, then its windows switch on — the building is cared for.
const floors = 7;
const cols = 4;

export default function Elevation() {
  const windows = [];
  for (let f = 0; f < floors; f++) {
    for (let c = 0; c < cols; c++) {
      const lit = (f * 3 + c * 5) % 4 !== 0;
      windows.push(
        <rect key={`${f}-${c}`} className={`win ${lit ? 'win--lit' : ''}`}
          x={196 + c * 44} y={92 + f * 50} width="26" height="30" rx="1"
          style={{ animationDelay: `${1.6 + (floors - f) * 0.12 + c * 0.05}s` }} />
      );
    }
  }
  return (
    <svg className="elevation" viewBox="0 0 520 520" role="img" aria-label="Line drawing of an apartment block and a house">
      <g className="draw">
        {/* ground */}
        <line x1="10" y1="470" x2="510" y2="470" />
        {/* tower */}
        <path d="M176 470 V70 H384 V470" />
        <path d="M168 70 H392 M176 58 H384 V70" />
        <path d="M262 470 V430 a18 18 0 0 1 36 0 V470" />
        {/* balconies */}
        {Array.from({ length: floors - 1 }, (_, i) => (
          <line key={i} x1="384" y1={150 + i * 50} x2="404" y2={150 + i * 50} />
        ))}
        {/* house */}
        <path d="M30 470 V352 L100 296 L170 352 V470" />
        <path d="M20 360 L100 288 L176 352" />
        <rect x="52" y="380" width="30" height="34" />
        <path d="M112 470 V404 H146 V470" />
        {/* tree */}
        <path d="M450 470 V400" />
        <circle cx="450" cy="378" r="30" />
        <circle cx="430" cy="400" r="18" />
        {/* dimension line */}
        <path className="dim" d="M150 70 V470 M144 70 H156 M144 470 H156" />
      </g>
      <g className="windows">{windows}</g>
      <circle className="sun" cx="96" cy="140" r="34" />
    </svg>
  );
}
