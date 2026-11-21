/* 24px grid, 1.8 stroke, round caps. Five strokes or fewer per glyph so they
   stay legible at the 18px most of them are drawn at. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Svg = ({ size = 24, children, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>{children}</svg>
);

/* ---------- the four naturals ---------- */

export const IconRice = (p) => (
  <Svg {...p}>
    <path d="M12 21V8.5" />
    <path d="M12 12.5c0-3 1.8-5.4 5-6.2-.2 3.4-2 5.6-5 6.2Z" />
    <path d="M12 9c0-3-1.8-5.4-5-6.2.2 3.4 2 5.6 5 6.2Z" />
    <path d="M12 16.5c0-2.8 1.7-4.9 4.6-5.6-.2 3.1-1.9 5.1-4.6 5.6Z" />
  </Svg>
);

export const IconOil = (p) => (
  <Svg {...p}>
    <path d="M12 2.8c3.4 4 6 7.1 6 10.2a6 6 0 0 1-12 0c0-3.1 2.6-6.2 6-10.2Z" />
    <path d="M9.2 13.8a2.9 2.9 0 0 0 2.9 2.9" />
  </Svg>
);

export const IconAloe = (p) => (
  <Svg {...p}>
    <path d="M12 21.2v-7.6" />
    <path d="M12 13.6 7.3 3.2c3.4 1.4 4.9 4.9 4.7 10.4Z" />
    <path d="m12 13.6 4.7-10.4c-3.4 1.4-4.9 4.9-4.7 10.4Z" />
    <path d="M12 13.6 2.9 9.4c1.5 3.4 4.6 4.8 9.1 4.2Z" />
    <path d="m12 13.6 9.1-4.2c-1.5 3.4-4.6 4.8-9.1 4.2Z" />
  </Svg>
);

export const IconMilk = (p) => (
  <Svg {...p}>
    <path d="M9 2.8h6" />
    <path d="M9.4 2.8v3.1L7.2 9.4A3 3 0 0 0 6.7 11v7.3a2.9 2.9 0 0 0 2.9 2.9h4.8a2.9 2.9 0 0 0 2.9-2.9V11a3 3 0 0 0-.5-1.6l-2.2-3.5V2.8" />
    <path d="M6.7 13.2h10.6" />
  </Svg>
);

/* ---------- process ---------- */

export const IconBasket = (p) => (
  <Svg {...p}>
    <path d="M3 9.5h18l-1.8 9.1a2.4 2.4 0 0 1-2.4 1.9H7.2a2.4 2.4 0 0 1-2.4-1.9Z" />
    <path d="m7.5 9.5 3-6" />
    <path d="m16.5 9.5-3-6" />
  </Svg>
);

export const IconFlask = (p) => (
  <Svg {...p}>
    <path d="M9.5 2.8h5" />
    <path d="M10.3 2.8v6.1L5.1 18a2.5 2.5 0 0 0 2.2 3.7h9.4a2.5 2.5 0 0 0 2.2-3.7l-5.2-9.1V2.8" />
    <path d="M7.4 14.6h9.2" />
  </Svg>
);

export const IconHeat = (p) => (
  <Svg {...p}>
    <path d="M8 3.2c-1.6 2 0 3.3 0 5s-1.6 3-1.6 3" />
    <path d="M16 3.2c-1.6 2 0 3.3 0 5s-1.6 3-1.6 3" />
    <path d="M3 15.5h18" />
    <path d="M4.8 20h14.4" />
  </Svg>
);

export const IconBlend = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.4 13.6c3-2.4 5.6-2.4 8.6 0s5.6 2.4 8.6 0" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.2 12.2 2.6 2.6 5-5.6" />
  </Svg>
);

export const IconBox = (p) => (
  <Svg {...p}>
    <path d="m12 2.8 8.3 4.3v9.8L12 21.2 3.7 16.9V7.1Z" />
    <path d="M3.7 7.1 12 11.4l8.3-4.3" />
    <path d="M12 11.4v9.8" />
  </Svg>
);

export const IconFace = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.6 14.4a4.4 4.4 0 0 0 6.8 0" />
    <path d="M9 9.4h.01" />
    <path d="M15 9.4h.01" />
  </Svg>
);

/* ---------- ritual + care ---------- */

export const IconSun = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.6v2.6" />
    <path d="M12 18.8v2.6" />
    <path d="M2.6 12h2.6" />
    <path d="M18.8 12h2.6" />
  </Svg>
);

export const IconMoon = (p) => (
  <Svg {...p}>
    <path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 4.5 6v6c0 4.3 3.1 7.8 7.5 9.2 4.4-1.4 7.5-4.9 7.5-9.2V6Z" />
    <path d="m8.9 11.9 2.2 2.2 4.1-4.4" />
  </Svg>
);

export const IconThermo = (p) => (
  <Svg {...p}>
    <path d="M14.5 14.2V5.2a2.5 2.5 0 0 0-5 0v9a4.4 4.4 0 1 0 5 0Z" />
    <path d="M12 17.5v-6" />
  </Svg>
);

export const IconDrop = (p) => (
  <Svg {...p}>
    <path d="M12 2.8c3.4 4 6 7.1 6 10.2a6 6 0 0 1-12 0c0-3.1 2.6-6.2 6-10.2Z" />
  </Svg>
);

export const IconLeafTag = (p) => (
  <Svg {...p}>
    <path d="M4.5 19.5C3 14 6.5 5.5 19.5 4.5c1 13-7.5 16.5-13 15Z" />
    <path d="M9 15c2.2-3.6 4.8-6 7.8-7.3" />
  </Svg>
);

/* ---------- UI ---------- */

export const IconArrow = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M4.5 12h14" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </Svg>
);

export const IconArrowDown = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 4.5v14" />
    <path d="m6.5 13 5.5 5.5L17.5 13" />
  </Svg>
);

export const IconPlus = ({ size = 18, ...p }) => (
  <Svg size={size} {...p}>
    <path d="M12 5.2v13.6" />
    <path d="M5.2 12h13.6" />
  </Svg>
);

export const IconMenu = ({ size = 20, ...p }) => (
  <Svg size={size} strokeWidth={2} {...p}>
    <path d="M3.8 8.5h16.4" />
    <path d="M3.8 15.5h16.4" />
  </Svg>
);

export const IconClose = ({ size = 20, ...p }) => (
  <Svg size={size} strokeWidth={2} {...p}>
    <path d="m6.2 6.2 11.6 11.6" />
    <path d="M17.8 6.2 6.2 17.8" />
  </Svg>
);
