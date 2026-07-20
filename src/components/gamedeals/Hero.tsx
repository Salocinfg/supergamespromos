import { motion } from "framer-motion";
import { Sparkles, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Mais de 12.000 ofertas atualizadas diariamente
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Os melhores{" "}
          <span className="bg-gradient-to-r from-primary via-chart-4 to-chart-5 bg-clip-text text-transparent text-glow">
            descontos em jogos
          </span>{" "}
          todos os dias.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Compare preços entre Steam, PlayStation e Xbox. Encontre promoções relâmpago,
          jogos gratuitos e os maiores descontos do mercado — em um só lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-3"
        >
          <Button size="lg" className="group animate-pulse-glow">
            Ver promoções
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button size="lg" variant="outline" className="border-border/70 bg-card/40 backdrop-blur">
            <Gift className="mr-1 h-4 w-4" />
            Jogos gratuitos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 grid w-full max-w-2xl grid-cols-3 gap-3"
        >
          {[
            { label: "Jogos monitorados", value: "48.320" },
            { label: "Ofertas ativas", value: "12.847" },
            { label: "Economia média", value: "62%" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-xl px-4 py-3"
            >
              <div className="text-xl font-bold sm:text-2xl">{s.value}</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
