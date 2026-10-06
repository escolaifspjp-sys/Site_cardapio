import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function Header() {
  return (
    <header className="border-b border-[#e8e4dc] bg-white">
      <div className="mx-auto flex h-12 w-[900px] items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-[13px] font-bold text-[#171716]">
          <span className="grid h-6 w-6 place-items-center rounded-[6px] bg-[#2e21e4] text-[11px] text-white">
            R
          </span>
          Refeitório
        </NavLink>

        <nav className="flex items-center gap-7 text-[11px] ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-3 py-1 transition-transform hover:-translate-y-1 transition-colors duration-400 hover:text-[#1b5737] ${
                isActive ? "bg-[#e9f7ee] font-semibold text-[#087d3e]" : "text-[#77736d]"
              }`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/cardapio"
            className={({ isActive }) =>
              `rounded-full px-3 py-1 transition-transform hover:-translate-y-1 transition-colors duration-400 hover:text-[#1b5737] ${
                isActive ? "bg-[#e9f7ee] font-semibold text-[#087d3e]" : "text-[#77736d]"
              }`
            }
          >
            Cardápio
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#171716]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
      </Routes>
    </div>
  );
}
