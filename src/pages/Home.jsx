import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mx-auto flex h-[calc(100vh-48px)] w-[900px] flex-col items-center pt-[78px]">
      <section className="text-center">
        <h1 className="mx-auto max-w-[300px] text-[34px] font-extrabold  tracking-[-1.5px]">
          Cardápio dos
          <br />
          Brainrots
        </h1>

        <p className="mt-4 text-[12px] text-[#585652]">
          Confira qual brainrot será servido em cada refeição do dia.
        </p>

        <Link
          to="/cardapio"
          className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-[11px] font-bold text-white shadow-[0_5px_12px_rgba(8,125,62,0.22)] transition hover:bg-gray-600"
        >
          Ver cardápio
        </Link>
      </section>
    </main>
  );
}
