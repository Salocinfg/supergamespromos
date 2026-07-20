import { motion } from "framer-motion";
import { type Game } from "@/lib/games-data";
import { GameCard } from "./GameCard";

export function DealsRow({
  title,
  subtitle,
  icon,
  games,
  id,
  accent,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  games: Game[];
  id?: string;
  accent?: string;
}) {
  if (games.length === 0) return null;
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            {icon && (
              <span
                className={
                  "grid h-8 w-8 place-items-center rounded-lg " +
                  (accent ?? "bg-primary/15 text-primary")
                }
              >
                {icon}
              </span>
            )}
            <h2 className="truncate text-xl font-black tracking-tight sm:text-2xl">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <a href="#" className="shrink-0 text-sm font-medium text-primary hover:underline">
          Ver tudo →
        </a>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {games.map((g) => (
          <motion.div
            key={g.id}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
          >
            <GameCard game={g} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
