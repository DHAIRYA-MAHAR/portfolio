import trainingPreview from '../assets/certificates/lpu_ml_training.png';

export default function Training() {
  return (
    <section
      id="training"
      className="scroll-mt-24 bg-white px-4 py-20 transition-colors dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-indigo-300">
            Training & Courses
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Machine Learning Made Easy: From Basic to Advance
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Completed extensive training in machine learning projects using Python, gaining
            practical experience with libraries like scikit-learn, pandas, and matplotlib at LPU.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr,1.2fr] md:items-center">
          <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/70">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Training Title</p>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Machine Learning Made Easy: From Basic to Advance
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Applied both supervised and unsupervised learning techniques — such as regression,
              classification, and clustering — to analyze real-world datasets. Learned how to
              clean data, engineer features, and evaluate model performance to improve prediction accuracy.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <li>• Python ML libraries: scikit-learn, pandas, matplotlib</li>
              <li>• Supervised & unsupervised learning techniques</li>
              <li>• Regression, classification, and clustering algorithms</li>
              <li>• Data cleaning, feature engineering, and model evaluation</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <figure className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-900/80">
              <img
                src={trainingPreview}
                alt="Machine Learning Training Certificate"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent px-4 py-3 text-xs font-medium text-slate-100">
                Machine Learning Training Certificate
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

