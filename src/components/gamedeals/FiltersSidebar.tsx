import { useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { type Platform, PLATFORM_LABELS } from "@/lib/games-data";

export interface Filters {
  platforms: Platform[];
  maxPrice: number;
  minDiscount: number;
  genres: string[];
}

const GENRES = [
  "RPG", "FPS", "Ação", "Corrida", "Indie",
  "Terror", "Sobrevivência", "Estratégia", "Aventura",
];
const PLATFORMS: Platform[] = ["steam", "playstation", "xbox"];

export function FiltersSidebar({
  value,
  onChange,
}: {
  value: Filters;
  onChange: (f: Filters) => void;
}) {
  const toggle = <T,>(list: T[], item: T): T[] =>
    list.includes(item) ? list.filter((x) => x !== item) : [...list, item];

  const activeCount = useMemo(
    () =>
      value.platforms.length +
      value.genres.length +
      (value.maxPrice < 500 ? 1 : 0) +
      (value.minDiscount > 0 ? 1 : 0),
    [value],
  );

  return (
    <aside className="glass-card sticky top-20 flex h-fit flex-col gap-5 rounded-2xl p-5">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-wide">Filtros</h2>
        {activeCount > 0 && (
          <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
            {activeCount}
          </span>
        )}
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Plataforma
        </h3>
        <div className="space-y-2">
          {PLATFORMS.map((p) => (
            <label key={p} className="flex cursor-pointer items-center gap-2">
              <Checkbox
                checked={value.platforms.includes(p)}
                onCheckedChange={() =>
                  onChange({ ...value, platforms: toggle(value.platforms, p) })
                }
              />
              <span className="text-sm">{PLATFORM_LABELS[p]}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Preço máx.
          </h3>
          <span className="text-sm font-semibold">
            {value.maxPrice >= 500 ? "Qualquer" : `R$ ${value.maxPrice}`}
          </span>
        </div>
        <Slider
          value={[value.maxPrice]}
          min={0}
          max={500}
          step={10}
          onValueChange={([v]) => onChange({ ...value, maxPrice: v })}
        />
      </div>

      <Separator />

      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Desconto mín.
          </h3>
          <span className="text-sm font-semibold">{value.minDiscount}%</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {[0, 20, 40, 60, 80].map((d) => (
            <button
              key={d}
              onClick={() => onChange({ ...value, minDiscount: d })}
              className={
                "rounded-md border px-1 py-1 text-xs font-medium transition-colors " +
                (value.minDiscount === d
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border/60 text-muted-foreground hover:bg-accent")
              }
            >
              {d === 0 ? "Todos" : `${d}%+`}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Categorias
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {GENRES.map((g) => {
            const active = value.genres.includes(g);
            return (
              <button
                key={g}
                onClick={() => onChange({ ...value, genres: toggle(value.genres, g) })}
                className={
                  "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors " +
                  (active
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border/60 text-muted-foreground hover:bg-accent")
                }
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {activeCount > 0 && (
        <button
          onClick={() =>
            onChange({ platforms: [], maxPrice: 500, minDiscount: 0, genres: [] })
          }
          className="text-xs font-medium text-primary hover:underline"
        >
          Limpar filtros
        </button>
      )}
    </aside>
  );
}
