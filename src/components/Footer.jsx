export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-8 text-center text-[11px] text-slate-500 transition-colors dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} Dhairya&nbsp;Mahar · B.Tech CSE · Data Science & ML Enthusiast
      </p>
    </footer>
  );
}

