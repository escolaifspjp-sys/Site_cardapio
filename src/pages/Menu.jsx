import { Refeicaos } from "../data/menu";

function getCurrentDate() {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  }).format(new Date());
}

function RefeicaoSection({ refeicao }) {
  return (
    <section className="mt-7">
      <div className="mb-4 flex items-center gap-2 border-b border-white pb-2">
        <h2 className="text-[14px] font-bold">
          {refeicao.name} — {refeicao.time}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {refeicao.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[8px] border border-amber-50 bg-white shadow-[0_5px_12px_rgba(8,125,62,0.08)] transition hover:shadow-[0_5px_12px_rgba(8,125,62,0.22)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="block h-[100px] w-full object-fill"
            />

            <div className="px-3 py-2.5">
              <h3 className="text-[11px] font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-1 text-[9px] text-gray-400">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Menu() {
  return (
    <main className="mx-auto w-[900px] pb-12 pt-[48px]">
      <div>
        <h1 className="text-[30px] font-extrabold tracking-[-1px]">Cardápio</h1>

        <p className="mt-1 text-[10px] text-[#99948b]">{getCurrentDate()}</p>
      </div>

      {Refeicaos.map((refeicao) => (
        <RefeicaoSection key={refeicao.name} refeicao={refeicao} />
      ))}
    </main>
  );
}
