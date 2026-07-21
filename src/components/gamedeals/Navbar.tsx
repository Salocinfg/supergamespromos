import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Heart, User, Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Steam", href: "#steam" },
  { label: "PlayStation", href: "#playstation" },
  { label: "Xbox", href: "#xbox" },
  { label: "Grátis", href: "#free" },
  { label: "Lançamentos", href: "#new" },
  { label: "Mais Vendidos", href: "#top" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            <Gamepad2 className="h-5 w-5 text-primary" />
          </div>
          <span className="text-lg font-black tracking-tight text-foreground">
            Super<span className="text-primary">Games</span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar jogos, gêneros, publishers..."
              className="w-72 border-border/70 bg-secondary/50 pl-9"
              aria-label="Buscar jogos"
            />
          </div>
          <Button variant="ghost" size="icon" aria-label="Favoritos">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Perfil">
            <User className="h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            <div className="relative mb-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar..." className="pl-9" />
            </div>
            {NAV_ITEMS.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
