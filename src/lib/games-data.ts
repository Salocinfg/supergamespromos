export type Platform = "steam" | "playstation" | "xbox";

export interface Game {
  id: string;
  title: string;
  image: string;
  platform: Platform;
  publisher: string;
  developer: string;
  releaseDate: string;
  genres: string[];
  tags: string[];
  description: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  rating: number;
  isFree?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

const steam = (appid: number) =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;

export const GAMES: Game[] = [
  {
    id: "1",
    title: "Cyberpunk 2077",
    image: steam(1091500),
    platform: "steam",
    publisher: "CD PROJEKT RED",
    developer: "CD PROJEKT RED",
    releaseDate: "2020-12-10",
    genres: ["RPG", "Ação"],
    tags: ["Open World", "Cyberpunk"],
    description:
      "Cyberpunk 2077 é um RPG de ação e aventura em mundo aberto ambientado em Night City, uma megalópole obcecada por poder, glamour e modificações corporais. Você é V, um mercenário fora da lei em busca de um implante único, a chave para a imortalidade.",
    originalPrice: 199.9,
    currentPrice: 59.97,
    discount: 70,
    rating: 4.6,
    isBestseller: true,
  },
  {
    id: "2",
    title: "Elden Ring",
    image: steam(1245620),
    platform: "playstation",
    publisher: "Bandai Namco",
    developer: "FromSoftware",
    releaseDate: "2022-02-25",
    genres: ["RPG", "Ação"],
    tags: ["Souls-like", "Fantasia"],
    description:
      "Um RPG de ação e fantasia épica em um vasto mundo aberto, onde os jogadores exploram as Terras Intermédias para se tornar o Lorde Prístino. Criado em colaboração entre Hidetaka Miyazaki e George R. R. Martin.",
    originalPrice: 249.9,
    currentPrice: 124.95,
    discount: 50,
    rating: 4.9,
    isBestseller: true,
  },
  {
    id: "3",
    title: "Halo Infinite",
    image: steam(1240440),
    platform: "xbox",
    publisher: "Xbox Game Studios",
    developer: "343 Industries",
    releaseDate: "2021-12-08",
    genres: ["FPS", "Ação"],
    tags: ["Sci-Fi", "Coop"],
    description:
      "Quando toda a esperança está perdida e o destino da humanidade está em jogo, o Master Chief está pronto para enfrentar o inimigo mais implacável já visto. Embarque na campanha lendária e no multiplayer free-to-play da série Halo.",
    originalPrice: 199.9,
    currentPrice: 79.96,
    discount: 60,
    rating: 4.4,
    isBestseller: true,
  },
  {
    id: "4",
    title: "Forza Horizon 5",
    image: steam(1551360),
    platform: "xbox",
    publisher: "Xbox Game Studios",
    developer: "Playground Games",
    releaseDate: "2021-11-09",
    genres: ["Corrida"],
    tags: ["Arcade", "Open World"],
    description:
      "Sua maior aventura Horizon te espera! Explore as paisagens vibrantes e em constante evolução do México com uma diversidade sem limites em centenas dos maiores carros do mundo.",
    originalPrice: 249.9,
    currentPrice: 74.97,
    discount: 70,
    rating: 4.7,
  },
  {
    id: "5",
    title: "Counter-Strike 2",
    image: steam(730),
    platform: "steam",
    publisher: "Valve",
    developer: "Valve",
    releaseDate: "2023-09-27",
    genres: ["FPS", "Ação"],
    tags: ["Competitivo", "Multiplayer"],
    description:
      "Por mais de duas décadas, Counter-Strike ofereceu uma experiência de tiro competitiva incomparável. Agora, o próximo capítulo da série CS chegou, marcando o maior salto tecnológico da franquia.",
    originalPrice: 0,
    currentPrice: 0,
    discount: 100,
    rating: 4.5,
    isFree: true,
  },
  {
    id: "6",
    title: "God of War Ragnarök",
    image: steam(2322010),
    platform: "playstation",
    publisher: "Sony Interactive",
    developer: "Santa Monica Studio",
    releaseDate: "2022-11-09",
    genres: ["Ação", "Aventura"],
    tags: ["História", "Mitologia"],
    description:
      "Embarque em uma jornada épica e emocionante enquanto Kratos e Atreus lutam para se manterem juntos ao se prepararem para o Ragnarök, o profetizado fim do mundo dos Nove Reinos da mitologia nórdica.",
    originalPrice: 299.9,
    currentPrice: 149.95,
    discount: 50,
    rating: 4.9,
  },
  {
    id: "7",
    title: "Gears 5",
    image: steam(1097840),
    platform: "xbox",
    publisher: "Xbox Game Studios",
    developer: "The Coalition",
    releaseDate: "2019-09-10",
    genres: ["TPS", "Ação"],
    tags: ["Coop", "Sci-Fi"],
    description:
      "Com o mundo à beira do colapso, Kait Diaz precisa desvendar as origens dos Locust e enfrentar uma ameaça pessoal. Jogue sozinho ou com um amigo em cooperação local e online.",
    originalPrice: 149.9,
    currentPrice: 29.98,
    discount: 80,
    rating: 4.5,
  },
  {
    id: "8",
    title: "Hades",
    image: steam(1145360),
    platform: "steam",
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    releaseDate: "2020-09-17",
    genres: ["Indie", "Roguelike"],
    tags: ["Ação", "Mitologia"],
    description:
      "Desafie o deus dos mortos enquanto luta para sair do Submundo neste roguelike de ação aclamado da Supergiant, criadora de Bastion, Transistor e Pyre.",
    originalPrice: 79.99,
    currentPrice: 23.99,
    discount: 70,
    rating: 4.8,
    isNew: true,
  },
  {
    id: "9",
    title: "The Last of Us Part I",
    image: steam(1888930),
    platform: "playstation",
    publisher: "Sony Interactive",
    developer: "Naughty Dog",
    releaseDate: "2023-03-28",
    genres: ["Ação", "Aventura"],
    tags: ["Narrativo", "Suspense"],
    description:
      "Vivencie a emocionante história e os personagens inesquecíveis em The Last of Us, ganhador de mais de 200 prêmios de Jogo do Ano, agora reconstruído do zero para o PC e o PlayStation 5.",
    originalPrice: 349.9,
    currentPrice: 174.95,
    discount: 50,
    rating: 4.7,
  },
  {
    id: "10",
    title: "Sea of Thieves",
    image: steam(1172620),
    platform: "xbox",
    publisher: "Xbox Game Studios",
    developer: "Rare",
    releaseDate: "2020-06-03",
    genres: ["Aventura", "Ação"],
    tags: ["Multiplayer", "Piratas"],
    description:
      "Sea of Thieves é a definitiva aventura pirata multiplayer, repleta de tesouros incalculáveis, batalhas navais épicas e infinitas histórias para contar sobre suas façanhas nos sete mares.",
    originalPrice: 199.9,
    currentPrice: 139.93,
    discount: 30,
    rating: 4.4,
    isNew: true,
  },
  {
    id: "11",
    title: "Baldur's Gate 3",
    image: steam(1086940),
    platform: "steam",
    publisher: "Larian Studios",
    developer: "Larian Studios",
    releaseDate: "2023-08-03",
    genres: ["RPG", "Estratégia"],
    tags: ["Coop", "Fantasia"],
    description:
      "Reúna seu grupo e volte aos Reinos Esquecidos em uma história de camaradagem e traição, sobrevivência e sacrifício, e a atração do poder absoluto. Baseado no sistema D&D 5e.",
    originalPrice: 199.9,
    currentPrice: 159.92,
    discount: 20,
    rating: 4.9,
    isNew: true,
  },
  {
    id: "12",
    title: "Destiny 2",
    image: steam(1085660),
    platform: "steam",
    publisher: "Bungie",
    developer: "Bungie",
    releaseDate: "2019-10-01",
    genres: ["FPS", "MMO"],
    tags: ["Sci-Fi", "Coop"],
    description:
      "Destiny 2 é um jogo de tiro em primeira pessoa multiplayer online gratuito. Mergulhe nos mundos mitológicos da nossa galáxia, forje amizades e conquiste o Sistema Solar ao lado dos seus amigos.",
    originalPrice: 0,
    currentPrice: 0,
    discount: 100,
    rating: 4.3,
    isFree: true,
  },
];

export const PLATFORM_LABELS: Record<Platform, string> = {
  steam: "Steam",
  playstation: "PlayStation",
  xbox: "Xbox",
};
