import { useState } from "react";
import { createRoot } from "react-dom/client";
import costcoLogo from "./assets/tile_costco_white.svg";
import "./style.css";
import { TransactionCard } from "./Components/TransactionCard";
import { Button } from "./Components/Button";
import { ToggleSwitch } from "./Components/ToggleSwitch";
import { AccordionItem } from "./Components/AccordionItem";
import { motion } from "framer-motion"; 
import Dialog from "./Components/Dialog";
import { SegmentedControl } from "./Components/SegmentedControl";
function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mr-1 inline-block size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function App() {
  const [dark, setDark] = useState(false);
const [activeTab, setActiveTab] = useState('Overview');
  return (
    <main
      className={`${dark ? "dark" : ""} min-h-screen bg-white text-gray-900 transition-colors dark:bg-slate-950 dark:text-slate-100`}
    >
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <header className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">UI Library</h1>
          <ToggleSwitch
            label={dark ? "Dark Mode" : "Light Mode"}
            onChange={() => setDark(!dark)}
          />
        </header>

        <section
          aria-labelledby="buttons-heading"
          className="rounded-xl border border-gray-300 p-6 dark:border-slate-700"
        >
          <h2 className="mb-5 text-2xl font-bold" id="buttons-heading">
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
 <div className="bg-black grid place-items-center h-128">

  <Dialog widthClass="w-80" />
 </div>
<SegmentedControl 
options={['Overview','Analytics','Settings']}
defaultSelected = "Overview"
onChange={(tab)=> setActiveTab(tab)}

/>
{/* Dynamic Content Preview Card */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl text-slate-300">
          <h2 className="text-lg font-medium text-white mb-2">
            Active View: <span className="text-emerald-400">{activeTab}</span>
          </h2>
          <p className="text-sm text-slate-400">
            Switching tabs smoothly animates the background pill using spring physics, replicating native iOS segmented navigation patterns.
          </p>
        </div>

      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
