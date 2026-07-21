import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Flame, Gift, Rocket, Trophy, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/gamedeals/Navbar";
import { Hero } from "@/components/gamedeals/Hero";
import { FiltersSidebar, type Filters } from "@/components/gamedeals/FiltersSidebar";
import { DealsRow } from "@/components/gamedeals/DealsRow";
import { GameCard } from "@/components/gamedeals/GameCard";
import { Footer } from "@/components/gamedeals/Footer";
import { GAMES } from "@/lib/games-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GameDeals Hub — Melhores promoções de jogos: Steam, PlayStation e Xbox" },
      {
        name: "description",
        content:
          "Compare preços e encontre os maiores descontos em jogos digitais da Steam, PlayStation Store e Xbox Store. Ofertas atualizadas diariamente.",
      },
      { property: "og:title", content: "GameDeals Hub — Melhores promoções de jogos: Steam, PlayStation e Xbox" },
      {
        property: "og:description",
        content:
          "Compare preços e encontre os maiores descontos em jogos digitais da Steam, PlayStation Store e Xbox Store. Ofertas atualizadas diariamente.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [filters, setFilters] = useState<Filters>({
    platforms: [],
    maxPrice: 500,
    minDiscount: 0,
    genres: [],
  });

  const filtered = useMemo(() => {
    return GAMES.filter((g) => {
      if (filters.platforms.length && !filters.platforms.includes(g.platform)) return false;
      if (g.currentPrice > filters.maxPrice) return false;
      if (g.discount < filters.minDiscount) return false;
      if (filters.genres.length && !g.genres.some((x) => filters.genres.includes(x)))
        return false;
      return true;
    });
  }, [filters]);

  const topDeals = [...GAMES].sort((a, b) => b.discount - a.discount).slice(0, 4);
  const free = GAMES.filter((g) => g.isFree);
  const newReleases = GAMES.filter((g) => g.isNew);
  const bestsellers = GAMES.filter((g) => g.isBestseller);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />

        <DealsRow
          id="top"
          title="Promoções do Dia"
          subtitle="Os maiores descontos ativos agora"
          icon={<Flame className="h-4 w-4" />}
          accent="bg-destructive/15 text-destructive"
          games={topDeals}
        />

        <section className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <FiltersSidebar value={filters} onChange={setFilters} />

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                  Explorar catálogo
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "jogo" : "jogos"}
                </span>
              </div>

              {filtered.length === 0 ? (
                <div className="glass-card grid place-items-center rounded-2xl p-16 text-center">
                  <p className="text-sm text-muted-foreground">
                    Nenhum jogo encontrado com os filtros atuais.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((g) => (
                    <GameCard key={g.id} game={g} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <DealsRow
          id="free"
          title="Jogos Gratuitos"
          subtitle="Aproveite antes que a promoção acabe"
          icon={<Gift className="h-4 w-4" />}
          accent="bg-success/15 text-success"
          games={free}
        />

        <DealsRow
          id="new"
          title="Lançamentos"
          subtitle="Os títulos mais recentes das três lojas"
          icon={<Rocket className="h-4 w-4" />}
          accent="bg-chart-4/15 text-chart-4"
          games={newReleases}
        />

        <DealsRow
          id="best"
          title="Mais Vendidos"
          subtitle="O que a comunidade está jogando"
          icon={<Trophy className="h-4 w-4" />}
          accent="bg-warning/15 text-warning"
          games={bestsellers}
        />

        <DealsRow
          id="trending"
          title="Em Alta"
          subtitle="Ofertas que estão bombando esta semana"
          icon={<TrendingUp className="h-4 w-4" />}
          games={GAMES.slice(0, 4)}
        />
      </main>

      <Footer />
    </div>
  );
}
