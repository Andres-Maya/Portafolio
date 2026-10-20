const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M5 21h14" />,
  external: <path d="M14 4h6v6m0-6-9 9M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" />,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.1-.4 3.9 0 3.9 0A5.4 5.4 0 0 0 3.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4.2-2" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  sun: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />,
  previous: <path d="m15 18-6-6 6-6" />,
  next: <path d="m9 18 6-6-6-6" />,
  book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Zm0 0A2.5 2.5 0 0 0 6.5 22H20v-5" />,
  music: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
  pen: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />,
  ball: <><circle cx="12" cy="12" r="9" /><path d="M12 3a15 15 0 0 1 0 18M3.6 9h16.8M3.6 15h16.8" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></>,
  paw: <><circle cx="5.5" cy="10" r="2" /><circle cx="9.5" cy="5.5" r="2" /><circle cx="14.5" cy="5.5" r="2" /><circle cx="18.5" cy="10" r="2" /><path d="M12 12c-3 0-5.5 3.2-5.5 5.6 0 1.6 1.2 2.4 2.6 2.4 1.2 0 1.9-.6 2.9-.6s1.7.6 2.9.6c1.4 0 2.6-.8 2.6-2.4C17.5 15.2 15 12 12 12Z" /></>,
}

export type IconName = keyof typeof paths

export function Icon({ name, className = 'size-[18px]' }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-none stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round] ${className}`}>
      {paths[name]}
    </svg>
  )
}
