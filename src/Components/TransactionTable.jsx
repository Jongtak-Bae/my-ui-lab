import { useMemo, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const DEFAULT_TRANSACTIONS = [
  {
    id: "TXN-8492",
    date: "Nov 18, 2026",
    merchant: "Direct Deposit - Payroll",
    category: "Income",
    status: "Completed",
    amount: 3450.045,
  },
  {
    id: "TXN-8491",
    date: "Nov 17, 2026",
    merchant: "Cloud Infrastructure Hosting",
    category: "Software",
    status: "Completed",
    amount: -128.5,
  },
  {
    id: "TXN-8490",
    date: "Nov 17, 2026",
    merchant: "Interac e-Transfer — Rent",
    category: "Housing",
    status: "Pending",
    amount: -2100.0,
  },
  {
    id: "TXN-8489",
    date: "Nov 15, 2026",
    merchant: "Fresh Market Groceries",
    category: "Daily Spend",
    status: "Completed",
    amount: -94.25,
  },
];


export function TransactionTable({ transactions = DEFAULT_TRANSACTIONS, onSelectRow }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = useMemo(() => {
    const q = (searchQuery ?? "").trim().toLowerCase();
    return transactions.filter((item) => {
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;
      const matchesQuery =
        !q ||
        (item.description ?? "").toLowerCase().includes(q) ||
        (item.id ?? "").toLowerCase().includes(q) ||
        (item.merchant ?? "").toLowerCase().includes(q) ||
        (item.category ?? "").toLowerCase().includes(q);

      return matchesQuery && matchesStatus;
    });
  }, [transactions, statusFilter, searchQuery]);

  const formatCurrency = (value) => {
    const absFormatted = Math.abs(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return value >= 0 ? `+$${absFormatted}` : `-$${absFormatted}`;
  };

  return (
    <div>
      {/*///////////////////////////////////////*/}
      {/* Toolbar: Search + Status Filter Pills */}
      {/*///////////////////////////////////////*/}
      <div className="p-4 border-b border-subtle flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex gap-4">
          {["All", "Completed", "Pending"].map((status) => (
            <Button
              key={status}
              label={status}
              type="button"
              variant={statusFilter === status ? "primary" : "secondary"}
              handleClick={() => setStatusFilter(status)}
            />
          ))}
        </div>

        <Input
          label="Search Ledger"
          placeholder="Filter by ID, merchant, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <span>
        Showing {filteredRows.length} of {transactions.length} records
      </span>

      {/* Table Container */}
      <div className="overflow-x-auto bg-surface border border-border-neutral rounded-xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-neutral text-xs bg-bg-neutral-secondary font-semibold uppercase tracking-wider text-text-primary">
              {["Date", "Activity", "Status", "Amount"].map((label) => (
                <th key={label} className="py-3 px-4">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          {/* TABLE CONTENT */}
          <tbody className="divide-y divide-subtle text-sm">
            {filteredRows.length > 0 ? (
              filteredRows.map((txn) => {
                const isPositive = txn.amount > 0;
                const isPending = txn.status === "Pending";
                return (
                  <tr
                    key={txn.id}
                    onClick={() => onSelectRow?.(txn)}
                    onKeyDown={(e)=>{
                      if(e.key === "Enter" || e.key === " "){
                        e.preventDefault();// Prevents Spacebar from scrolling the page
                        onSelectRow?.(txn);
                      }
                    }}
                    tabIndex={0} // put each row in the keyboard tab order
                    role="button"
                    aria-label={`Inspect transaction ${txn.id}: ${txn.description}`}
                    className="hover:bg-bg-neutral-secondary focus-visible:outline-border-brand transition-colors duration-150"
                  >
                    <td className="py-3.5 px-4 text-text-secondary whitespace-nowrap">
                      {txn.date}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-medium text-text-primary">
                        {txn.merchant}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {txn.id} · {txn.category}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${isPending
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                            : "bg-bg-brand/10 text-text-brand border-border-brand/20"
                          }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right font-semibold tabular-nums whitespace-nowrap ${isPositive ? "text-text-brand" : "text-text-primary"
                        }`}
                    >
                      {formatCurrency(txn.amount)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="py-8 px-4 text-center">
                  <p className="text-sm text-slate-muted mb-3">
                    No transactions match your current search or filter.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    label="Reset"
                    handleClick={() => {
                      setSearchQuery("");
                      setStatusFilter("All");
                    }}
                  ></Button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
