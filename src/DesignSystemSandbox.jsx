import { useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { TransactionTable } from "./Components/TransactionTable";
import { Dialog } from "./Components/Dialog";

const CASE_STUDY_SECTIONS = [
  {
    step: "01. Enterprise Problem & Tokens",
    detail:
      "Replaced hardcoded color values with a 3-tier token taxonomy (Primitive -> Semantic -> Component-Specific) mapped to CSS variables and Tailwind theme tokens for light/dark parity.",
  },
  {
    step: "02. Component Contracts & A11y",
    detail:
      "Built TokenizedButton, TokenizedInput, TokenizedModal, and TokenizedTransactionTable with semantic roles, Escape/backdrop dismissal, focus rings, and tabular-nums alignment.",
  },
  {
    step: "03. Sandbox & Live Defense",
    detail:
      "Verified multi-theme behavior interactively in DesignSystemSandbox and prepared live code walkthroughs covering token trade-offs and future scale.",
  },
];

export function DesignSystemSandbox() {
  const [selectedTxn, setSelectedTxn] = useState(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-canvas text-main min-h-screen p-8 transition-colors duration-200">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Ledger Section */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                1. Interactive Tokenized Ledger
              </h2>
              <span className="text-slate-muted text-xs">
                Click or press Enter on a row to inspect
              </span>
            </div>
            <TransactionTable onSelectRow={(txn) => setSelectedTxn(txn)} />
          </section>

          {/* Week 3 Case Study Outline */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">
              2. Week 3 Case Study Outline
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {CASE_STUDY_SECTIONS.map((item) => (
                <div
                  key={item.step}
                  className="bg-surface border-subtle space-y-2 rounded-xl border p-5 shadow-sm"
                >
                  <h3 className="text-brand text-sm font-semibold">
                    {item.step}
                  </h3>
                  <p className="text-slate-muted text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Row Inspection Modal */}
          <Dialog
            isOpen={Boolean(selectedTxn)}
            onClose={() => setSelectedTxn(null)}
            title={
              selectedTxn ? selectedTxn.description : "Transaction Details"
            }
            description={
              selectedTxn
                ? `Reference ${selectedTxn.id} · Recorded on ${selectedTxn.date}`
                : ""
            }
            confirmLabel="Done"
            onConfirm={() => setSelectedTxn(null)}
          >
            {selectedTxn && (
              <div className="space-y-3 text-sm">
                <div className="border-subtle flex justify-between border-b pb-2">
                  <span className="text-slate-muted">Status</span>
                  <span className="text-main font-medium">
                    {selectedTxn.status}
                  </span>
                </div>
                <div className="border-subtle flex justify-between border-b pb-2">
                  <span className="text-slate-muted">Category</span>
                  <span className="text-main font-medium">
                    {selectedTxn.category}
                  </span>
                </div>
                <div className="border-subtle flex justify-between border-b pb-2">
                  <span className="text-slate-muted">Amount</span>
                  <span className="text-main font-semibold tabular-nums">
                    {selectedTxn.amount < 0
                      ? `-$${Math.abs(selectedTxn.amount).toFixed(2)}`
                      : `+$${selectedTxn.amount.toFixed(2)}`}
                  </span>
                </div>
                <div>
                  <span className="text-slate-muted mb-1 block text-xs">
                    Memo
                  </span>
                  <p className="bg-canvas border-subtle text-main rounded-lg border p-3">
                    {selectedTxn.memo}
                  </p>
                </div>
              </div>
            )}
          </Dialog>
        </div>
      </div>
    </MotionConfig>
  );
}
