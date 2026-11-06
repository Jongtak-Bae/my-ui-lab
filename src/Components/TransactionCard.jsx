export function TransactionCard({logo, merchant, date, amount, status}) {
  return (
      <section aria-label="Recent transactions" className="mt-6">
        <a>
            <article className="flex items-center justify-between gap-4 rounded-xl bg-bg-neutral-secondary hover:bg-bg-neutral-primary p-4 transition">
            <div className="flex min-w-0 items-center gap-3">
              <img
                alt="Costco"
                className="size-10 shrink-0 rounded-md object-contain"
                src={logo}
              />
              <div>
                <h2 className="text-text-primary font-bold">{merchant}</h2>
                <p className="text-sm text-text-secondary">{date}</p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-text-primary text-xl font-semibold">{amount}</p>
              <p className="mt-1 rounded-full text-center bg-bg-success-subtle px-3 py-0.5 text-sm text-text-brand">
                {status}
              </p>
            </div>
          </article>

        </a>
          
        </section>

  )
}