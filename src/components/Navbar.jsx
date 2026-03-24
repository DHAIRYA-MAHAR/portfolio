import { useEffect, useState } from 'react';

const links = [
  'home',
  'about',
  'skills',
  'projects',
  'training',
  'certificates',
  'resume',
  'contact',
];

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur transition-colors dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          type="button"
          className="cursor-pointer text-left text-lg font-semibold tracking-tight"
          onClick={() => handleScroll('home')}
        >
          <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
            Dhairya&nbsp;Mahar
          </span>
          <span className="block text-[11px] font-normal text-slate-500 dark:text-slate-400">
            Data Science & ML Enthusiast
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`text-sm font-medium capitalize transition-colors ${
                active === link
                  ? 'text-blue-600 dark:text-indigo-400'
                  : 'text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-indigo-300'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            onClick={() => setOpen((p) => !p)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100"
          >
            <span className="sr-only">Open navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-slate-600 dark:bg-slate-200" />
              <span className="block h-0.5 w-4 bg-slate-500 dark:bg-slate-300" />
              <span className="block h-0.5 w-6 bg-slate-600 dark:bg-slate-200" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  handleScroll(link);
                  setOpen(false);
                }}
                className={`rounded-md px-3 py-2 text-left text-sm capitalize transition-colors ${
                  active === link
                    ? 'bg-blue-600/10 text-blue-600 dark:bg-indigo-500/10 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

