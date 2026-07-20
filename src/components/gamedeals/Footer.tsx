import { Gamepad2, Github, Twitter, Youtube, Twitch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                <Gamepad2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-black">
                GameDeals<span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              O portal definitivo para encontrar as melhores promoções em jogos digitais na
              Steam, PlayStation Store e Xbox Store — atualizado diariamente.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-md gap-2"
            >
              <Input
                type="email"
                required
                placeholder="seu@email.com"
                className="bg-secondary/50"
                aria-label="Email para newsletter"
              />
              <Button type="submit">Inscrever</Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">
              Alertas de promoções relâmpago direto no seu e-mail.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Explorar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#steam" className="hover:text-foreground">Steam</a></li>
              <li><a href="#playstation" className="hover:text-foreground">PlayStation</a></li>
              <li><a href="#xbox" className="hover:text-foreground">Xbox</a></li>
              <li><a href="#free" className="hover:text-foreground">Jogos gratuitos</a></li>
              <li><a href="#new" className="hover:text-foreground">Lançamentos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Sobre</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Contato</a></li>
              <li><a href="#" className="hover:text-foreground">Termos de uso</a></li>
              <li><a href="#" className="hover:text-foreground">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GameDeals Hub. Todos os direitos reservados.
          </p>
          <div className="flex gap-1">
            {[Twitter, Youtube, Twitch, Github].map((Icon, i) => (
              <Button key={i} variant="ghost" size="icon" aria-label="Rede social">
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
