import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Game, PLATFORM_LABELS } from "@/lib/games-data";
import { cn } from "@/lib/utils";

const PLATFORM_CLASSES: Record<Game["platform"], string> = {
  steam: "platform-steam",
  playstation: "platform-playstation",
  xbox: "platform-xbox",
};

const brl = (n: number) =>
  n === 0
    ? "Grátis"
    : n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function GameCard({ game }: { game: Game }) {
  const savings = game.originalPrice - game.currentPrice;
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur transition-shadow hover:border-primary/40 hover:shadow-[0_10px_40px_-15px_oklch(0.62_0.19_256/0.5)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-90" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span
            className={cn(
              "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white",
              PLATFORM_CLASSES[game.platform],
            )}
          >
            {PLATFORM_LABELS[game.platform]}
          </span>
          {game.isNew && (
            <Badge variant="secondary" className="bg-chart-4/20 text-chart-4">
              Novo
            </Badge>
          )}
          {game.isBestseller && (
            <Badge variant="secondary" className="bg-warning/20 text-warning">
              Top vendas
            </Badge>
          )}
        </div>

        <button
          aria-label="Favoritar"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/70 text-muted-foreground backdrop-blur transition-colors hover:text-destructive"
        >
          <Heart className="h-4 w-4" />
        </button>

        {game.discount > 0 && (
          <div className="absolute bottom-3 left-3 rounded-lg bg-success px-2 py-1 text-sm font-bold text-background shadow-lg">
            -{game.discount}%
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold" title={game.title}>
            {game.title}
          </h3>
          <p className="truncate text-xs text-muted-foreground">
            {game.publisher} · {game.genres.slice(0, 2).join(" · ")}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="font-medium text-foreground">{game.rating.toFixed(1)}</span>
          <span>·</span>
          <span>{new Date(game.releaseDate).getFullYear()}</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="min-w-0">
            {game.discount > 0 && game.originalPrice > 0 && (
              <div className="text-xs text-muted-foreground line-through">
                {brl(game.originalPrice)}
              </div>
            )}
            <div
              className={cn(
                "text-lg font-black",
                game.isFree ? "text-success" : "text-foreground",
              )}
            >
              {brl(game.currentPrice)}
            </div>
            {savings > 0 && !game.isFree && (
              <div className="text-[11px] text-success">
                economize {brl(savings)}
              </div>
            )}
          </div>
          <Button size="sm" className="shrink-0">
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Comprar</span>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
