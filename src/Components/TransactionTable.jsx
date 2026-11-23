import { useState } from "react";
import { Button } from "./Button";

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

export function TransactionTable({ transactions = DEFAULT_TRANSACTIONS }) {
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredRows =
    statusFilter === "All"
      ? transactions
      : transactions.filter((item) => item.status === statusFilter);

  const formatCurrency = (value) => {
    const absFormatted = Math.abs(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return value >= 0 ? `+$${absFormatted}` : `-$${absFormatted}`;
  };

  return (
    <div>
      {/* Filter Bar */}
      <div>
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

      <span>
        Showing {filteredRows.length} of {transactions.length} records
      </span>
      {/* Table Container */}
      <div className="overflow-x-auto bg-surface border border-subtle rounded-xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-subtle text-xs font-semibold uppercase tracking-wider text-slate-muted">
              {["Date", "Activity", "Status", "Amount"].map((label) => (
                <th key={label} className="py-3 px-4">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-subtle text-sm">
            {filteredRows.map((txn) => {
              const isPositive = txn.amount > 0;
              const isPending = txn.status === "Pending";
              return (
                <tr
                  key={txn.id}
                  className="hover:bg-slate-muted/5 transition-colors duration-150"
                >
                  <td className="py-3.5 px-4 text-slate-muted whitespace-nowrap">
                    {txn.date}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-main">{txn.merchant}</div>
                    <div className="text-xs text-slate-muted">
                      {txn.id} · {txn.category}
                    </div>
                  </td >
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                    isPending
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                    : "bg-bg-brand/10 text-text-brand border-border-brand/20"
                    }`}>
 {txn.status}
                    </span>
                   
                    
                    </td>
                  <td
                    className={`py-3.5 px-4 text-right font-semibold tabular-nums whitespace-nowrap ${
                        isPositive
                        ? "text-text-brand"
                        : "text-text-primary"
                    }`}
                  >{formatCurrency(txn.amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
