import { useEffect, useState } from 'react';
import cvImage from '../assets/resume/resume.pdf';
import profilePhoto from '../assets/images/profile_photo.png';

const typingItems = [
  'Data Science Enthusiast',
  'Machine Learning',
  'Problem Solver',
  'B.Tech CSE @ LPU',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingItems[index % typingItems.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (subIndex < current.length) {
          setSubIndex((s) => s + 1);
          setText(current.slice(0, subIndex + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
          setText(current.slice(0, subIndex - 1));
        } else {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, deleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvImage;
    link.download = 'Dhairya_Mahar_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.1),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.1),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="animate-pulse-slow absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="animate-pulse-slow absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-500/40">
            Open to Data Science & ML Internships
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              Dhairya&nbsp;Mahar
            </span>
            <span className="block text-2xl font-semibold text-slate-700 dark:text-slate-300 sm:text-3xl">
              Data Science Enthusiast | B.Tech CSE
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            I&apos;m a Computer Science undergraduate at Lovely Professional University
            who loves building data-driven applications and machine learning models.
            I enjoy turning complex data into actionable insights.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300 md:justify-start">
            <span className="font-medium text-slate-800 dark:text-slate-200">I am a</span>
            <span className="rounded-full bg-white px-3 py-1 font-mono text-xs uppercase tracking-wide text-blue-600 ring-1 ring-blue-500/20 dark:bg-slate-900/80 dark:text-sky-300 dark:ring-sky-500/40">
              {text}
              <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-blue-600 dark:bg-sky-300 align-middle" />
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              onClick={handleScrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.02]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              Download CV
            </button>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 transition hover:ring-blue-500/50 dark:bg-slate-900/70 dark:text-slate-100 dark:ring-slate-700/80 dark:hover:ring-indigo-500/80"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-1 justify-center md:mt-0">
          <div className="relative h-64 w-64 max-w-xs rounded-3xl border border-slate-100 bg-white p-[1px] shadow-xl shadow-blue-500/10 dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 dark:shadow-2xl dark:shadow-indigo-900/30 sm:h-72 sm:w-72">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_10%_0,_rgba(56,189,248,0.1),transparent_55%),radial-gradient(circle_at_90%_100%,_rgba(37,99,235,0.15),transparent_55%)] opacity-70" />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-white/90 px-6 text-center dark:bg-slate-950/90">
              <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 ring-2 ring-blue-500/20 dark:bg-slate-900/90 dark:ring-indigo-500/40">
                <img
                  src={profilePhoto}
                  alt="Dhairya Mahar"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  B.Tech CSE
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Lovely Professional University
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Data & Model Builder</p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-left text-[11px] text-slate-600 dark:text-slate-300">
                <div className="rounded-xl bg-slate-50 p-2 ring-1 ring-slate-100 dark:bg-slate-900/70 dark:ring-slate-800">
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Focus</p>
                  <p>Python, ML, Data</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-2 ring-1 ring-slate-100 dark:bg-slate-900/70 dark:ring-slate-800">
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Location</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

