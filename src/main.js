import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import tile_costco_white from "./assets/tile_costco_white.svg";
import { setupCounter } from "./counter.js";

const html = String.raw;

document.querySelector("#app").innerHTML = html`
  <section class="ui-library p-10">
    <h1>UI Library</h1>

    <div
      class="button-groups flex flex-col justify-center items-center gap-2 border-2 border-gray-500 rounded-md p-4"
    >
      <h1 class="text-2xl font-bold">Buttons</h1>
      <button
        class="bg-green-400 text-black rounded-md py-1 px-2 w-fit hover:bg-green-500 active:scale-95 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 inline-block mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Primary
      </button>
      <button
        class="bg-white text-black rounded-md py-1 px-2 w-fit hover:bg-gray-300 active:scale-95 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 inline-block mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Secondary
      </button>
      <button
        class="text-white rounded-md py-1 px-2 w-fit hover:bg-white hover:text-black active:scale-95 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 inline-block mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Ghost
      </button>
      <button
        class="bg-red-500 text-white rounded-md py-1 px-2 w-fit hover:bg-red-600 active:scale-95 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 inline-block mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Danger
      </button>
    </div>

    <!-- transaction item -->
    <div
      class="transaction-item flex justify-between bg-gray-100 focus:bg-gray-200 border-2 border-gray-300 rounded-md p-4 mb-4 hover:bg-gray-200"
      
    >
      <a href="#" class="flex justify-between w-full">
        <div class="flex items-center gap-2">
          <span>
            <img
              src="${tile_costco_white}"
              alt="Costco Logo"
              class="w-8 h-8 inline-block mr-2"
            />
          </span>
          <div>
            <h2 class="text-xl font-bold text-black">Costco.ca</h2>
            <span class="text-gray-700">Jan 1, 2023</span>
          </div>
        </div>

        <div>
          <p class="text-gray-800 text-2xl">$150.00</p>
          <p class="text-emerald-800 bg-emerald-50 rounded-2xl text-center">
            post
          </p>
        </div>
      </a>
    </div>
  </section>
  <!-- Theme Toggle Button -->
  <button
    id="theme-toggle"
    class="px-4 py-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-lg font-medium hover:opacity-90 active:scale-95 transition-all"
  >
    Toggle Theme
  </button>

  <!-- <nav class="sidebar fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
    <h2 class="text-xl font-bold mb-4">Sidebar</h2>
    <ul>
      <li data-state="active" class="text-(--text) mb-2 hover:scale-120  transition-all duration-300 ease-in-out data-[state=active]:bg-gray-600"><a href="#" class="">Home</a></li>
      <li class="mb-2 hover:scale-120  transition-all duration-300 ease-in-out"><a href="#" class="hover:underline">About</a></li>
      <li class="mb-2 hover:scale-120  transition-all duration-300 ease-in-out"><a href="#" class="hover:underline">Services</a></li>
      <li class="mb-2 hover:scale-120  transition-all duration-300 ease-in-out"><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </nav> -->
`;
setupCounter(document.querySelector("#counter"));
