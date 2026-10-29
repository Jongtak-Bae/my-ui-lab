export function TransactionCard({logo, merchant, date, amount, status}) {
  return (
      <section aria-label="Recent transactions" className="mt-6">
        <a>
            <article className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
            <div className="flex min-w-0 items-center gap-3">
              <img
                alt="Costco"
                className="size-10 shrink-0 rounded-md object-contain"
                src={logo}
              />
              <div>
                <h2 className="font-bold">{merchant}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xl font-semibold">{amount}</p>
              <p className="mt-1 rounded-full text-center bg-emerald-50 px-3 py-0.5 text-sm text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {status}
              </p>
            </div>
          </article>

        </a>
          
        </section>

  )
}