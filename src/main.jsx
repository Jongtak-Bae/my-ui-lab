import { useState } from "react";
import { createRoot } from "react-dom/client";
import costcoLogo from "./assets/tile_costco_white.svg";
import "./style.css";
import { TransactionCard } from "./Components/TransactionCard";
import { Button } from "./Components/Button";
import { ToggleSwitch } from "./Components/ToggleSwitch";
import { AccordionItem } from "./Components/AccordionItem";
import { motion } from "motion/react";
import { Dialog } from "./Components/Dialog";
import { SegmentedControl } from "./Components/SegmentedControl";
import { SlideOverDrawer } from "./Components/SlideOverDrawer";
import { EnterpriseCard } from "./Components/EnterpriseCard";
import { Input } from "./Components/Input";
import { User, Eye } from "lucide-react";
import { TransactionTable } from "./Components/TransactionTable";
import { DesignSystemSandbox } from "./DesignSystemSandbox";
function App() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState(null);

  const tableData = [
    {
      id: "TXN-8492",
      date: "Nov 18, 2026",
      merchant: "Direct Deposit - Payroll",
      category: "Income",
      status: "Completed",
      amount: 123.045,
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

  const handleConfirm = () => {
    setIsOpen(false);
  };
  return (
    <main
      className={`${dark ? "dark" : ""} min-h-screen bg-bg-neutral-primary transition-colors`}
    >
      <header className="flex items-center justify-between p-8 gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-text-brand">
          Design System Sandbox
        </h1>
        <ToggleSwitch
          label={dark ? "Dark Mode" : "Light Mode"}
          onChange={() => setDark(!dark)}
        />
      </header>

      <DesignSystemSandbox />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
