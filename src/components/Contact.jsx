export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-4 py-20 transition-colors dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-indigo-300">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want a project?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Share your idea and I&apos;ll get back to you with how we can build it
            together.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/80"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-600 dark:text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-600 dark:text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue="dhairyamahar33@gmail.com"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                placeholder="dhairyamahar33@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110"
            >
              Let&apos;s Connect
            </button>
            <p className="text-[11px] text-slate-400">
              This is a static form by default. You can later connect it to a
              backend or form service.
            </p>
          </form>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
            <a
              href="https://www.linkedin.com/in/dhairyamahar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-indigo-500 dark:hover:shadow-indigo-500/30"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/DHAIRYA-MAHAR"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100 dark:hover:border-indigo-500 dark:hover:shadow-indigo-500/30"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

