import { useState } from 'react';
import aiFoundationsImg from '../assets/certificates/oracle_ai_foundations.png';
import dataScienceImg from '../assets/certificates/oracle_data_science.png';
import lpuMlImg from '../assets/certificates/lpu_ml_training.png';
import nptelSocialImg from '../assets/certificates/nptel_social_media.png';

const certificates = [
  {
    id: 1,
    name: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    organization: 'Oracle',
    file: aiFoundationsImg,
  },
  {
    id: 2,
    name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    organization: 'Oracle',
    file: dataScienceImg,
  },
  {
    id: 3,
    name: 'Machine Learning Made Easy: From Basics to AI Applications',
    organization: 'LPU',
    file: lpuMlImg,
  },
  {
    id: 4,
    name: 'Privacy and Security in Online Social Media',
    organization: 'NPTEL',
    file: nptelSocialImg,
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-slate-50 px-4 py-20 transition-colors dark:bg-slate-950/70 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-indigo-300">
            Certificates
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Certifications           </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            A gallery of training certificates.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelected(cert)}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-500/80 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/80 dark:hover:border-indigo-500/80 dark:hover:shadow-glow"
            >
              <div className="relative h-40 overflow-hidden rounded-t-2xl bg-slate-900">
                <img
                  src={cert.file}
                  alt={cert.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex flex-1 flex-col justify-between rounded-b-2xl p-4">
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                    {cert.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    {cert.organization}
                  </p>
                </div>
                <p className="mt-3 text-[11px] font-medium text-blue-600 dark:text-indigo-300">
                  Click to preview
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 dark:bg-slate-950/80">
          <div className="relative w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl transition-colors dark:border-slate-800 dark:bg-slate-900/90">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500"
            >
              Close
            </button>
            <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {selected.name}
            </h3>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
              {selected.organization}
            </p>
            <div className="max-h-[70vh] overflow-auto rounded-xl border border-slate-800 bg-slate-950">
              <img
                src={selected.file}
                alt={selected.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

