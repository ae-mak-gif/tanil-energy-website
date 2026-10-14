/** Simple inline SVG icons (decorative, no external assets). */
export default function Icon({ id }: { id: string }) {
  const S = {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (id) {
    case 'residential':
      return (<svg {...S}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-5h6v5" /></svg>)
    case 'commercial-industrial':
      return (<svg {...S}><path d="M3 21h18" /><path d="M5 21V7l6 4V7l6 4v10" /></svg>)
    case 'agricultural':
      return (<svg {...S}><path d="M12 21V9" /><path d="M12 13c-4 0-6-3-6-6 4 0 6 2 6 6z" /><path d="M12 11c0-4 2-6 6-6 0 4-2 6-6 6z" /></svg>)
    case 'solar-pumps':
      return (<svg {...S}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg>)
    case 'equipment-sales':
      return (<svg {...S}><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>)
    case 'electrical-engineering':
      return (<svg {...S}><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg>)
    case 'maintenance-repairs':
      return (<svg {...S}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3 2.7-2.7z" /></svg>)
    default:
      return (<svg {...S}><circle cx="12" cy="12" r="9" /></svg>)
  }
}
