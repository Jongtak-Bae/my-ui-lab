import { useState } from "react";
import { createRoot } from "react-dom/client";
import costcoLogo from "./assets/tile_costco_white.svg";
import "./style.css";
import { TransactionCard } from "./Components/TransactionCard";
import { Button } from "./Components/Button";
import { ToggleSwitch } from "./Components/ToggleSwitch";
import { AccordionItem } from "./Components/AccordionItem";
import { motion } from "motion/react";
import Dialog from "./stories/Dialog";
import { SegmentedControl } from "./Components/SegmentedControl";
import { SlideOverDrawer } from "./Components/SlideOverDrawer";
import { EnterpriseCard } from "./Components/EnterpriseCard";
import {Input} from "./Components/Input";
import { User, Eye } from "lucide-react";

import { TransactionTable } from "./Components/TransactionTable";

function App() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const[isOpen, setIsOpen] = useState(false);

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
  }
  return (
    <main
      className={`${dark ? "dark" : ""} min-h-screen bg-bg-neutral-primary text-gray-900 transition-colors`}
    >
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <header className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-text-brand text-3xl font-bold tracking-tight">TD Bank UI Library</h1>
          <ToggleSwitch
            label={dark ? "Dark Mode" : "Light Mode"}
            onChange={() => setDark(!dark)}
          />
        </header>

        <section
          aria-labelledby="buttons-heading"
          className="rounded-xl border border-gray-300 p-6 dark:border-slate-700"
        >
          <h2 className="text-text-primary mb-5 text-2xl font-bold" id="buttons-heading">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {["Primary", "Secondary", "Tertiary", "Danger"].map(
              (label, index) => (
                <Button
                  key={label}
                  label={label}
                  variant={label.toLowerCase()}
                  index={index}
                />
              ),
            )}
          </div>
        </section>

        <TransactionCard
          logo={costcoLogo}
          merchant="Costco.ca"
          date="Jan 1, 2023"
          amount="$150.00"
          status="post"
        />
        <AccordionItem
          title="Accodition Panel Heading"
          content="
           simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also
        "
        />
        <Button 
        handleClick={()=> setIsOpen(true)} 
        label="Open Action Modal"/>
        <div className="bg-black grid place-items-center h-128">
          <Dialog 
          isOpen={isOpen}
          onClose={()=>setIsOpen(false)}
          widthClass="w-80" 
          title="Confirm Account Action"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups."
          confirmLabel="Confirm Action"
          onConfirm={handleConfirm}
          />
        </div>
        <SegmentedControl
          options={["Overview", "Analytics", "Settings"]}
          defaultSelected="Overview"
          onChange={(tab) => setActiveTab(tab)}
        />
        {/* Dynamic Content Preview Card */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-slate-300">
          <h2 className="text-lg font-medium text-white mb-2">
            Active View: <span className="text-emerald-400">{activeTab}</span>
          </h2>
          <p className="text-sm text-slate-400">
            Switching tabs smoothly animates the background pill using spring
            physics, replicating native iOS segmented navigation patterns.
          </p>
        </div>

        <SlideOverDrawer />
        <EnterpriseCard />
        <div className="grid gap-3 max-w-3xs">
            <Input label="Username" error leadingIcon={User}/>
        <Input label="Username" placeholder="Hint Text goes here" />
        <Input label="Username" type="number"/>
        <Input label="Phone Number" type="tel"/>
        <Input label="Username" disabled helperText="this is disabled"/>
        <Input label="Password" type="password" helperText="this is disabled" />
         <Input label="Username" readOnly value="John" helperText="this is disabled"/>
        </div>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">3. Tokenized Transaction Ledger</h2>

          <TransactionTable transactions={tableData}/>
        </section>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
