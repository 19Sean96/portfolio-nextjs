import Link from "next/link";

export default () => (
  <Link as="/" href="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 649.75 95.09"
      className="logo"
    >
      <g>
        <line
          className="logo--line"
          x1="641.14"
          y1="24.95"
          x2="641.14"
          y2="80.18"
        />
        <polyline
          className="logo--line"
          points="641.14 78.47 641.14 91.59 3.88 91.59 3.88 3.5 641.14 3.5 641.14 11.84"
        />
        <rect x="3.56" y="4.77" width="234.06" height="77.93" />
        <text className="logo--firstname" transform="translate(21.08 71.33)">
          SEAN
        </text>
        <text className="logo--lastname" transform="translate(259.93 71.33)">
          ANTHONY
        </text>
      </g>
    </svg>
  </Link>
);
