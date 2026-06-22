const WHATSAPP_NUMBER = "5534992831321";
const INSTAGRAM_HANDLE = "vestiariodaghost3";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const PRODUCTS_STORAGE_KEY = "ghost_products_admin";
const ADMIN_SESSION_KEY = "ghost_admin_logged";
const ADMIN_PASSWORD = "ghost123";

const fallbackProducts = [
    {
        "id":  1,
        "slug":  "camisa-brasil-home",
        "name":  "Camisa Brasil Home",
        "category":  "Brasil",
        "description":  "Modelo inspirado na seleção brasileira, ideal para coleção e uso casual.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "BR",
        "image":  "assets/produtos/camisa-brasil-home.jpg"
    },
    {
        "id":  2,
        "slug":  "camisa-argentina-away",
        "name":  "Camisa Argentina Away",
        "category":  "Seleções",
        "description":  "Modelo de seleção com visual forte para quem curte camisa diferente.",
        "sizes":  [
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "AR",
        "image":  "assets/produtos/camisa-argentina-away.jpg"
    },
    {
        "id":  3,
        "slug":  "camisa-real-madrid",
        "name":  "Camisa Real Madrid",
        "category":  "Clubes",
        "description":  "Clássica, limpa e pesada. Uma peça que combina com qualquer coleção.",
        "sizes":  [
                      "P",
                      "M",
                      "G"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  209.9,
        "promo":  true,
        "code":  "RM",
        "image":  "assets/produtos/camisa-real-madrid.jpg"
    },
    {
        "id":  4,
        "slug":  "camisa-psg",
        "name":  "Camisa PSG",
        "category":  "Clubes",
        "description":  "Modelo moderno para quem gosta de futebol com pegada streetwear.",
        "sizes":  [
                      "M",
                      "G",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "PSG",
        "image":  "assets/produtos/camisa-psg.jpg"
    },
    {
        "id":  5,
        "slug":  "camisa-portugal",
        "name":  "Camisa Portugal",
        "category":  "Seleções",
        "description":  "Modelo de seleção europeu com presença forte dentro e fora de campo.",
        "sizes":  [
                      "P",
                      "M",
                      "GG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "PT",
        "image":  "assets/produtos/camisa-portugal.jpg"
    },
    {
        "id":  6,
        "slug":  "meiao-esportivo",
        "name":  "Meião Esportivo",
        "category":  "Acessórios",
        "description":  "Acessório ideal para completar o kit de jogo ou treino.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  39.9,
        "oldPrice":  49.9,
        "promo":  true,
        "code":  "ME",
        "image":  "assets/produtos/meiao-esportivo.jpg"
    },
    {
        "id":  7,
        "slug":  "camisa-flamengo",
        "name":  "Camisa Flamengo",
        "category":  "Clubes",
        "description":  "Modelo rubro-negro para quem carrega o time no peito.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "FLA",
        "image":  "assets/produtos/camisa-flamengo.jpg"
    },
    {
        "id":  8,
        "slug":  "camisa-franca",
        "name":  "Camisa França",
        "category":  "Seleções",
        "description":  "Modelo elegante de seleção, com visual forte e esportivo.",
        "sizes":  [
                      "M",
                      "G"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "FR",
        "image":  "assets/produtos/camisa-franca.jpg"
    },
    {
        "id":  9,
        "slug":  "camisa-corinthians-home",
        "name":  "Camisa Corinthians Home",
        "category":  "Clubes",
        "description":  "Modelo alvinegro clássico para quem vive arquibancada, jogo e coleção.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "SCCP",
        "image":  "assets/produtos/camisa-corinthians-home.jpg"
    },
    {
        "id":  10,
        "slug":  "camisa-palmeiras-home",
        "name":  "Camisa Palmeiras Home",
        "category":  "Clubes",
        "description":  "Camisa verde tradicional com presença forte para uso casual e dia de jogo.",
        "sizes":  [
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "PAL",
        "image":  "assets/produtos/camisa-palmeiras-home.jpg"
    },
    {
        "id":  11,
        "slug":  "camisa-sao-paulo-home",
        "name":  "Camisa São Paulo Home",
        "category":  "Clubes",
        "description":  "Modelo tricolor limpo, versátil e fácil de combinar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SPFC",
        "image":  "assets/produtos/camisa-sao-paulo-home.jpg"
    },
    {
        "id":  12,
        "slug":  "camisa-vasco-home",
        "name":  "Camisa Vasco Home",
        "category":  "Clubes",
        "description":  "Modelo cruz-maltino com visual marcante para torcedor e colecionador.",
        "sizes":  [
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "VAS",
        "image":  "assets/produtos/camisa-vasco-home.jpg"
    },
    {
        "id":  13,
        "slug":  "camisa-alemanha-home",
        "name":  "Camisa Alemanha Home",
        "category":  "Seleções",
        "description":  "Camisa de seleção com estética clássica e acabamento esportivo premium.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Consultar",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "ALE",
        "image":  "assets/produtos/camisa-alemanha-home.jpg"
    },
    {
        "id":  14,
        "slug":  "camisa-inglaterra-away",
        "name":  "Camisa Inglaterra Away",
        "category":  "Seleções",
        "description":  "Modelo alternativo de seleção para quem procura uma peça diferente.",
        "sizes":  [
                      "M",
                      "G",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  209.9,
        "promo":  true,
        "code":  "ING",
        "image":  "assets/produtos/camisa-inglaterra-away.jpg"
    },
    {
        "id":  15,
        "slug":  "camisa-brasil-treino",
        "name":  "Camisa Brasil Treino",
        "category":  "Brasil",
        "description":  "Peça leve para treino, jogo casual e composição esportiva no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  119.9,
        "oldPrice":  149.9,
        "promo":  true,
        "code":  "BRT",
        "image":  "assets/produtos/camisa-brasil-treino.jpg"
    },
    {
        "id":  16,
        "slug":  "short-esportivo-preto",
        "name":  "Short Esportivo Preto",
        "category":  "Acessórios",
        "description":  "Short leve e prático para treino, futebol society e rotina esportiva.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  69.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SH",
        "image":  "assets/produtos/short-esportivo-preto.jpg"
    },
    {
        "id":  17,
        "slug":  "bola-campo-premium",
        "name":  "Bola Campo Premium",
        "category":  "Acessórios",
        "description":  "Bola de campo com visual esportivo para jogo, treino e presente.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Consultar",
        "price":  89.9,
        "oldPrice":  119.9,
        "promo":  true,
        "code":  "BOL",
        "image":  "assets/produtos/bola-campo-premium.jpg"
    },
    {
        "id":  18,
        "slug":  "kit-treino-ghost",
        "name":  "Kit Treino Ghost",
        "category":  "Acessórios",
        "description":  "Kit com pegada esportiva para quem quer completar o visual de treino.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  139.9,
        "oldPrice":  179.9,
        "promo":  true,
        "code":  "KIT",
        "image":  "assets/produtos/kit-treino-ghost.jpg"
    },
    {
        "id":  19,
        "slug":  "barcelona-home",
        "name":  "Barcelona Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BAR",
        "image":  "assets/produtos/barcelona-home.jpg"
    },
    {
        "id":  20,
        "slug":  "barcelona-away",
        "name":  "Barcelona Away",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BAR",
        "image":  "assets/produtos/barcelona-away.jpg"
    },
    {
        "id":  21,
        "slug":  "manchester-city-home",
        "name":  "Manchester City Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  194.9,
        "promo":  true,
        "code":  "MAN",
        "image":  "assets/produtos/manchester-city-home.jpg"
    },
    {
        "id":  22,
        "slug":  "manchester-city-away",
        "name":  "Manchester City Away",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "MAN",
        "image":  "assets/produtos/manchester-city-away.jpg"
    },
    {
        "id":  23,
        "slug":  "liverpool-home",
        "name":  "Liverpool Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "LIV",
        "image":  "assets/produtos/liverpool-home.jpg"
    },
    {
        "id":  24,
        "slug":  "liverpool-away",
        "name":  "Liverpool Away",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  169.9,
        "oldPrice":  209.9,
        "promo":  true,
        "code":  "LIV",
        "image":  "assets/produtos/liverpool-away.jpg"
    },
    {
        "id":  25,
        "slug":  "arsenal-home",
        "name":  "Arsenal Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "ARS",
        "image":  "assets/produtos/arsenal-home.jpg"
    },
    {
        "id":  26,
        "slug":  "arsenal-away",
        "name":  "Arsenal Away",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "ARS",
        "image":  "assets/produtos/arsenal-away.jpg"
    },
    {
        "id":  27,
        "slug":  "chelsea-home",
        "name":  "Chelsea Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "CHE",
        "image":  "assets/produtos/chelsea-home.jpg"
    },
    {
        "id":  28,
        "slug":  "chelsea-away",
        "name":  "Chelsea Away",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CHE",
        "image":  "assets/produtos/chelsea-away.jpg"
    },
    {
        "id":  29,
        "slug":  "tottenham-home",
        "name":  "Tottenham Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "TOT",
        "image":  "assets/produtos/tottenham-home.jpg"
    },
    {
        "id":  30,
        "slug":  "milan-home",
        "name":  "Milan Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "MIL",
        "image":  "assets/produtos/milan-home.jpg"
    },
    {
        "id":  31,
        "slug":  "inter-de-milao-home",
        "name":  "Inter de Milão Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "INT",
        "image":  "assets/produtos/inter-de-milao-home.jpg"
    },
    {
        "id":  32,
        "slug":  "juventus-home",
        "name":  "Juventus Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "JUV",
        "image":  "assets/produtos/juventus-home.jpg"
    },
    {
        "id":  33,
        "slug":  "roma-home",
        "name":  "Roma Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  204.9,
        "promo":  true,
        "code":  "ROM",
        "image":  "assets/produtos/roma-home.jpg"
    },
    {
        "id":  34,
        "slug":  "napoli-home",
        "name":  "Napoli Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "NAP",
        "image":  "assets/produtos/napoli-home.jpg"
    },
    {
        "id":  35,
        "slug":  "bayern-home",
        "name":  "Bayern Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BAY",
        "image":  "assets/produtos/bayern-home.jpg"
    },
    {
        "id":  36,
        "slug":  "borussia-dortmund-home",
        "name":  "Borussia Dortmund Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  154.9,
        "oldPrice":  194.9,
        "promo":  true,
        "code":  "BOR",
        "image":  "assets/produtos/borussia-dortmund-home.jpg"
    },
    {
        "id":  37,
        "slug":  "ajax-home",
        "name":  "Ajax Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "AJA",
        "image":  "assets/produtos/ajax-home.jpg"
    },
    {
        "id":  38,
        "slug":  "porto-home",
        "name":  "Porto Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "POR",
        "image":  "assets/produtos/porto-home.jpg"
    },
    {
        "id":  39,
        "slug":  "benfica-home",
        "name":  "Benfica Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  209.9,
        "promo":  true,
        "code":  "BEN",
        "image":  "assets/produtos/benfica-home.jpg"
    },
    {
        "id":  40,
        "slug":  "sporting-home",
        "name":  "Sporting Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SPO",
        "image":  "assets/produtos/sporting-home.jpg"
    },
    {
        "id":  41,
        "slug":  "atletico-de-madrid-home",
        "name":  "Atlético de Madrid Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "ATL",
        "image":  "assets/produtos/atletico-de-madrid-home.jpg"
    },
    {
        "id":  42,
        "slug":  "sevilla-home",
        "name":  "Sevilla Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "SEV",
        "image":  "assets/produtos/sevilla-home.jpg"
    },
    {
        "id":  43,
        "slug":  "valencia-home",
        "name":  "Valencia Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "VAL",
        "image":  "assets/produtos/valencia-home.jpg"
    },
    {
        "id":  44,
        "slug":  "gremio-home",
        "name":  "Grêmio Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "GRE",
        "image":  "assets/produtos/gremio-home.jpg"
    },
    {
        "id":  45,
        "slug":  "internacional-home",
        "name":  "Internacional Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "INT",
        "image":  "assets/produtos/internacional-home.jpg"
    },
    {
        "id":  46,
        "slug":  "cruzeiro-home",
        "name":  "Cruzeiro Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CRU",
        "image":  "assets/produtos/cruzeiro-home.jpg"
    },
    {
        "id":  47,
        "slug":  "atletico-mineiro-home",
        "name":  "Atlético Mineiro Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "ATL",
        "image":  "assets/produtos/atletico-mineiro-home.jpg"
    },
    {
        "id":  48,
        "slug":  "botafogo-home",
        "name":  "Botafogo Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  164.9,
        "oldPrice":  204.9,
        "promo":  true,
        "code":  "BOT",
        "image":  "assets/produtos/botafogo-home.jpg"
    },
    {
        "id":  49,
        "slug":  "fluminense-home",
        "name":  "Fluminense Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "FLU",
        "image":  "assets/produtos/fluminense-home.jpg"
    },
    {
        "id":  50,
        "slug":  "santos-home",
        "name":  "Santos Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SAN",
        "image":  "assets/produtos/santos-home.jpg"
    },
    {
        "id":  51,
        "slug":  "bahia-home",
        "name":  "Bahia Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  194.9,
        "promo":  true,
        "code":  "BAH",
        "image":  "assets/produtos/bahia-home.jpg"
    },
    {
        "id":  52,
        "slug":  "fortaleza-home",
        "name":  "Fortaleza Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "FOR",
        "image":  "assets/produtos/fortaleza-home.jpg"
    },
    {
        "id":  53,
        "slug":  "ceara-home",
        "name":  "Ceará Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CEA",
        "image":  "assets/produtos/ceara-home.jpg"
    },
    {
        "id":  54,
        "slug":  "athletico-pr-home",
        "name":  "Athletico PR Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  209.9,
        "promo":  true,
        "code":  "ATH",
        "image":  "assets/produtos/athletico-pr-home.jpg"
    },
    {
        "id":  55,
        "slug":  "coritiba-home",
        "name":  "Coritiba Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "COR",
        "image":  "assets/produtos/coritiba-home.jpg"
    },
    {
        "id":  56,
        "slug":  "sport-recife-home",
        "name":  "Sport Recife Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SPO",
        "image":  "assets/produtos/sport-recife-home.jpg"
    },
    {
        "id":  57,
        "slug":  "vitoria-home",
        "name":  "Vitória Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "VIT",
        "image":  "assets/produtos/vitoria-home.jpg"
    },
    {
        "id":  58,
        "slug":  "chapecoense-home",
        "name":  "Chapecoense Home",
        "category":  "Clubes",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CHA",
        "image":  "assets/produtos/chapecoense-home.jpg"
    },
    {
        "id":  59,
        "slug":  "espanha-home",
        "name":  "Espanha Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "ESP",
        "image":  "assets/produtos/espanha-home.jpg"
    },
    {
        "id":  60,
        "slug":  "italia-home",
        "name":  "Itália Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "ITA",
        "image":  "assets/produtos/italia-home.jpg"
    },
    {
        "id":  61,
        "slug":  "holanda-home",
        "name":  "Holanda Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "HOL",
        "image":  "assets/produtos/holanda-home.jpg"
    },
    {
        "id":  62,
        "slug":  "uruguai-home",
        "name":  "Uruguai Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "URU",
        "image":  "assets/produtos/uruguai-home.jpg"
    },
    {
        "id":  63,
        "slug":  "mexico-home",
        "name":  "México Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  204.9,
        "promo":  true,
        "code":  "MEX",
        "image":  "assets/produtos/mexico-home.jpg"
    },
    {
        "id":  64,
        "slug":  "colombia-home",
        "name":  "Colômbia Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "COL",
        "image":  "assets/produtos/colombia-home.jpg"
    },
    {
        "id":  65,
        "slug":  "chile-home",
        "name":  "Chile Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CHI",
        "image":  "assets/produtos/chile-home.jpg"
    },
    {
        "id":  66,
        "slug":  "japao-home",
        "name":  "Japão Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  194.9,
        "promo":  true,
        "code":  "JAP",
        "image":  "assets/produtos/japao-home.jpg"
    },
    {
        "id":  67,
        "slug":  "coreia-do-sul-home",
        "name":  "Coreia do Sul Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "COR",
        "image":  "assets/produtos/coreia-do-sul-home.jpg"
    },
    {
        "id":  68,
        "slug":  "croacia-home",
        "name":  "Croácia Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CRO",
        "image":  "assets/produtos/croacia-home.jpg"
    },
    {
        "id":  69,
        "slug":  "belgica-home",
        "name":  "Bélgica Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  209.9,
        "promo":  true,
        "code":  "BEL",
        "image":  "assets/produtos/belgica-home.jpg"
    },
    {
        "id":  70,
        "slug":  "marrocos-home",
        "name":  "Marrocos Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "MAR",
        "image":  "assets/produtos/marrocos-home.jpg"
    },
    {
        "id":  71,
        "slug":  "senegal-home",
        "name":  "Senegal Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SEN",
        "image":  "assets/produtos/senegal-home.jpg"
    },
    {
        "id":  72,
        "slug":  "estados-unidos-home",
        "name":  "Estados Unidos Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "EST",
        "image":  "assets/produtos/estados-unidos-home.jpg"
    },
    {
        "id":  73,
        "slug":  "suica-home",
        "name":  "Suíça Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SUI",
        "image":  "assets/produtos/suica-home.jpg"
    },
    {
        "id":  74,
        "slug":  "dinamarca-home",
        "name":  "Dinamarca Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "DIN",
        "image":  "assets/produtos/dinamarca-home.jpg"
    },
    {
        "id":  75,
        "slug":  "suecia-home",
        "name":  "Suécia Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "SUE",
        "image":  "assets/produtos/suecia-home.jpg"
    },
    {
        "id":  76,
        "slug":  "noruega-home",
        "name":  "Noruega Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  154.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "NOR",
        "image":  "assets/produtos/noruega-home.jpg"
    },
    {
        "id":  77,
        "slug":  "polonia-home",
        "name":  "Polônia Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "POL",
        "image":  "assets/produtos/polonia-home.jpg"
    },
    {
        "id":  78,
        "slug":  "gana-home",
        "name":  "Gana Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  204.9,
        "promo":  true,
        "code":  "GAN",
        "image":  "assets/produtos/gana-home.jpg"
    },
    {
        "id":  79,
        "slug":  "nigeria-home",
        "name":  "Nigéria Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  169.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "NIG",
        "image":  "assets/produtos/nigeria-home.jpg"
    },
    {
        "id":  80,
        "slug":  "camaroes-home",
        "name":  "Camarões Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camaroes-home.jpg"
    },
    {
        "id":  81,
        "slug":  "equador-home",
        "name":  "Equador Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  154.9,
        "oldPrice":  194.9,
        "promo":  true,
        "code":  "EQU",
        "image":  "assets/produtos/equador-home.jpg"
    },
    {
        "id":  82,
        "slug":  "paraguai-home",
        "name":  "Paraguai Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "PAR",
        "image":  "assets/produtos/paraguai-home.jpg"
    },
    {
        "id":  83,
        "slug":  "peru-home",
        "name":  "Peru Home",
        "category":  "Seleções",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  164.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "PER",
        "image":  "assets/produtos/peru-home.jpg"
    },
    {
        "id":  84,
        "slug":  "camisa-brasil-retro",
        "name":  "Camisa Brasil Retrô",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  129.9,
        "oldPrice":  169.9,
        "promo":  true,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-retro.jpg"
    },
    {
        "id":  85,
        "slug":  "camisa-brasil-away-azul",
        "name":  "Camisa Brasil Away Azul",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  139.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-away-azul.jpg"
    },
    {
        "id":  86,
        "slug":  "camisa-brasil-amarela-premium",
        "name":  "Camisa Brasil Amarela Premium",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-amarela-premium.jpg"
    },
    {
        "id":  87,
        "slug":  "camisa-brasil-infantil",
        "name":  "Camisa Brasil Infantil",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  199.9,
        "promo":  true,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-infantil.jpg"
    },
    {
        "id":  88,
        "slug":  "camisa-brasil-feminina",
        "name":  "Camisa Brasil Feminina",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  129.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-feminina.jpg"
    },
    {
        "id":  89,
        "slug":  "jaqueta-brasil-treino",
        "name":  "Jaqueta Brasil Treino",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  139.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "JAQ",
        "image":  "assets/produtos/jaqueta-brasil-treino.jpg"
    },
    {
        "id":  90,
        "slug":  "regata-brasil-casual",
        "name":  "Regata Brasil Casual",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  149.9,
        "oldPrice":  189.9,
        "promo":  true,
        "code":  "REG",
        "image":  "assets/produtos/regata-brasil-casual.jpg"
    },
    {
        "id":  91,
        "slug":  "camisa-brasil-goleiro",
        "name":  "Camisa Brasil Goleiro",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  159.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-goleiro.jpg"
    },
    {
        "id":  92,
        "slug":  "camisa-brasil-edicao-torcedor",
        "name":  "Camisa Brasil Edição Torcedor",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Consultar",
        "price":  129.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-edicao-torcedor.jpg"
    },
    {
        "id":  93,
        "slug":  "camisa-brasil-verde-treino",
        "name":  "Camisa Brasil Verde Treino",
        "category":  "Brasil",
        "description":  "Modelo esportivo com visual de futebol, ideal para torcer, colecionar e usar no dia a dia.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG",
                      "XG"
                  ],
        "status":  "Pronta entrega",
        "price":  139.9,
        "oldPrice":  179.9,
        "promo":  true,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-brasil-verde-treino.jpg"
    },
    {
        "id":  94,
        "slug":  "short-branco-treino",
        "name":  "Short Branco Treino",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  109.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SHO",
        "image":  "assets/produtos/short-branco-treino.jpg"
    },
    {
        "id":  95,
        "slug":  "short-amarelo-treino",
        "name":  "Short Amarelo Treino",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  119.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "SHO",
        "image":  "assets/produtos/short-amarelo-treino.jpg"
    },
    {
        "id":  96,
        "slug":  "short-azul-treino",
        "name":  "Short Azul Treino",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Consultar",
        "price":  49.9,
        "oldPrice":  89.9,
        "promo":  true,
        "code":  "SHO",
        "image":  "assets/produtos/short-azul-treino.jpg"
    },
    {
        "id":  97,
        "slug":  "bone-esportivo-preto",
        "name":  "Boné Esportivo Preto",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  59.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BON",
        "image":  "assets/produtos/bone-esportivo-preto.jpg"
    },
    {
        "id":  98,
        "slug":  "bone-esportivo-amarelo",
        "name":  "Boné Esportivo Amarelo",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  69.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BON",
        "image":  "assets/produtos/bone-esportivo-amarelo.jpg"
    },
    {
        "id":  99,
        "slug":  "munhequeira-performance",
        "name":  "Munhequeira Performance",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  79.9,
        "oldPrice":  119.9,
        "promo":  true,
        "code":  "MUN",
        "image":  "assets/produtos/munhequeira-performance.jpg"
    },
    {
        "id":  100,
        "slug":  "caneleira-pro-ghost",
        "name":  "Caneleira Pro Ghost",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Consultar",
        "price":  89.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAN",
        "image":  "assets/produtos/caneleira-pro-ghost.jpg"
    },
    {
        "id":  101,
        "slug":  "luvas-goleiro-black",
        "name":  "Luvas Goleiro Black",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  99.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "LUV",
        "image":  "assets/produtos/luvas-goleiro-black.jpg"
    },
    {
        "id":  102,
        "slug":  "garrafa-esportiva-ghost",
        "name":  "Garrafa Esportiva Ghost",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  109.9,
        "oldPrice":  149.9,
        "promo":  true,
        "code":  "GAR",
        "image":  "assets/produtos/garrafa-esportiva-ghost.jpg"
    },
    {
        "id":  103,
        "slug":  "mochila-treino-compacta",
        "name":  "Mochila Treino Compacta",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  119.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "MOC",
        "image":  "assets/produtos/mochila-treino-compacta.jpg"
    },
    {
        "id":  104,
        "slug":  "bolsa-chuteira-ghost",
        "name":  "Bolsa Chuteira Ghost",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Consultar",
        "price":  49.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BOL",
        "image":  "assets/produtos/bolsa-chuteira-ghost.jpg"
    },
    {
        "id":  105,
        "slug":  "meiao-preto-pro",
        "name":  "Meião Preto Pro",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  59.9,
        "oldPrice":  99.9,
        "promo":  true,
        "code":  "MEI",
        "image":  "assets/produtos/meiao-preto-pro.jpg"
    },
    {
        "id":  106,
        "slug":  "meiao-branco-pro",
        "name":  "Meião Branco Pro",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  69.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "MEI",
        "image":  "assets/produtos/meiao-branco-pro.jpg"
    },
    {
        "id":  107,
        "slug":  "meiao-amarelo-pro",
        "name":  "Meião Amarelo Pro",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  79.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "MEI",
        "image":  "assets/produtos/meiao-amarelo-pro.jpg"
    },
    {
        "id":  108,
        "slug":  "bola-society-premium",
        "name":  "Bola Society Premium",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Consultar",
        "price":  89.9,
        "oldPrice":  129.9,
        "promo":  true,
        "code":  "BOL",
        "image":  "assets/produtos/bola-society-premium.jpg"
    },
    {
        "id":  109,
        "slug":  "bola-futsal-premium",
        "name":  "Bola Futsal Premium",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  99.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "BOL",
        "image":  "assets/produtos/bola-futsal-premium.jpg"
    },
    {
        "id":  110,
        "slug":  "chuteira-society-ghost",
        "name":  "Chuteira Society Ghost",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  109.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CHU",
        "image":  "assets/produtos/chuteira-society-ghost.jpg"
    },
    {
        "id":  111,
        "slug":  "camisa-termica-preta",
        "name":  "Camisa Térmica Preta",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  119.9,
        "oldPrice":  159.9,
        "promo":  true,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-termica-preta.jpg"
    },
    {
        "id":  112,
        "slug":  "camisa-termica-branca",
        "name":  "Camisa Térmica Branca",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Consultar",
        "price":  49.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAM",
        "image":  "assets/produtos/camisa-termica-branca.jpg"
    },
    {
        "id":  113,
        "slug":  "calca-treino-slim",
        "name":  "Calça Treino Slim",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  59.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "CAL",
        "image":  "assets/produtos/calca-treino-slim.jpg"
    },
    {
        "id":  114,
        "slug":  "agasalho-esportivo-preto",
        "name":  "Agasalho Esportivo Preto",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  69.9,
        "oldPrice":  109.9,
        "promo":  true,
        "code":  "AGA",
        "image":  "assets/produtos/agasalho-esportivo-preto.jpg"
    },
    {
        "id":  115,
        "slug":  "jaqueta-corta-vento",
        "name":  "Jaqueta Corta Vento",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  79.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "JAQ",
        "image":  "assets/produtos/jaqueta-corta-vento.jpg"
    },
    {
        "id":  116,
        "slug":  "coletes-treino-kit",
        "name":  "Coletes Treino Kit",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Consultar",
        "price":  89.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "COL",
        "image":  "assets/produtos/coletes-treino-kit.jpg"
    },
    {
        "id":  117,
        "slug":  "kit-infantil-futebol",
        "name":  "Kit Infantil Futebol",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "P",
                      "M",
                      "G",
                      "GG"
                  ],
        "status":  "Pronta entrega",
        "price":  99.9,
        "oldPrice":  139.9,
        "promo":  true,
        "code":  "KIT",
        "image":  "assets/produtos/kit-infantil-futebol.jpg"
    },
    {
        "id":  118,
        "slug":  "toalha-esportiva-ghost",
        "name":  "Toalha Esportiva Ghost",
        "category":  "Acessórios",
        "description":  "Produto esportivo selecionado para completar treino, jogo e rotina com estilo.",
        "sizes":  [
                      "Único"
                  ],
        "status":  "Pronta entrega",
        "price":  109.9,
        "oldPrice":  null,
        "promo":  false,
        "code":  "TOA",
        "image":  "assets/produtos/toalha-esportiva-ghost.jpg"
    }
];

let products = [];
let selectedCategory = "Todos";
let selectedSize = "Todos";
let selectedPrice = "Todos";
let selectedStatus = "Todos";
let searchTerm = "";
let adminSearchTerm = "";

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const byId = (id) => document.getElementById(id);

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || `produto-${Date.now()}`;
}

function normalizeProduct(product) {
  const sizes = Array.isArray(product.sizes) ? product.sizes : String(product.sizes || "Único").split(",");
  return {
    ...product,
    sizes: sizes.map((size) => String(size).trim()).filter(Boolean),
    price: Number(product.price) || 0,
    oldPrice: product.oldPrice ? Number(product.oldPrice) : null,
    promo: Boolean(product.promo),
    slug: product.slug || slugify(product.name),
    code: product.code || "VG",
    image: product.image || "assets/produtos/novo-produto.jpg"
  };
}

function normalizeProducts(list) {
  return (Array.isArray(list) ? list : []).map(normalizeProduct);
}
function getStoredProducts() {
  try {
    const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function persistProducts(message = "Produtos salvos no navegador.") {
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  renderProducts();
  renderProductPage();
  if (byId("adminPanel")?.classList.contains("active")) renderAdminPanel();
  showToast(message);
}

function mergeProducts(baseProducts, savedProducts) {
  baseProducts = normalizeProducts(baseProducts);
  savedProducts = normalizeProducts(savedProducts).filter((product) => product.name && product.slug);
  if (!savedProducts.length) return baseProducts;

  const savedBySlug = new Map(savedProducts.map((product) => [product.slug, product]));
  const merged = baseProducts.map((baseProduct) => {
    const savedProduct = savedBySlug.get(baseProduct.slug);
    if (!savedProduct) return baseProduct;
    return normalizeProduct({ ...baseProduct, ...savedProduct, sizes: savedProduct.sizes?.length ? savedProduct.sizes : baseProduct.sizes });
  });

  const baseSlugs = new Set(baseProducts.map((product) => product.slug));
  const extraSavedProducts = savedProducts.filter((product) => !baseSlugs.has(product.slug));
  return [...merged, ...extraSavedProducts];
}
async function loadProducts() {
  const savedProducts = getStoredProducts();
  let baseProducts = fallbackProducts;

  try {
    const response = await fetch("products.json?cache=" + Date.now(), { cache: "no-store" });
    if (response.ok) baseProducts = await response.json();
  } catch (error) {
    console.warn("Usando produtos internos porque o JSON não carregou.", error);
  }

  const mergedProducts = mergeProducts(baseProducts, savedProducts);
  return normalizeProducts(mergedProducts).filter((product) => product.name && product.slug);
}

function openWhatsapp(message) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function showToast(message) {
  const toast = byId("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function getGeneralWhatsappMessage() {
  return "Olá! Vim pelo site da Vestiário da Ghost e queria ver os produtos disponíveis.";
}

function isCustomizableProduct(product) {
  return /camisa|kit/i.test(product.name) && product.category !== "Acessórios";
}

function getCustomizationLabel(enabled) {
  return enabled ? "Sim, quero personalizar" : "Não, sem personalização";
}

function getProductWhatsappMessage(product, size, customization = false) {
  const customLine = isCustomizableProduct(product) ? `\nPersonalização: ${getCustomizationLabel(customization)}` : "";
  return `Olá! Tenho interesse nesse produto da Vestiário da Ghost:\n\nProduto: ${product.name}\nCategoria: ${product.category}\nTamanho: ${size}\nStatus: ${product.status}${customLine}\n\nAinda está disponível?`;
}

function getAvailabilityMessage(product) {
  return `Olá! Esse item ainda está disponível?\n\nProduto: ${product.name}\nCategoria: ${product.category}\nStatus: ${product.status}`;
}

function getProductUrl(product) {
  const basePath = window.location.href.replace(/(index\.html|produto\.html)?(\?.*)?(#.*)?$/, "").replace(/\/$/, "");
  return `${basePath}/produto.html?produto=${encodeURIComponent(product.slug)}`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Link copiado.");
  } catch {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    showToast("Link copiado.");
  }
}

function handleImageError(img, code) {
  const box = img.closest(".product-image, .hero-media, .product-detail-image");
  if (!box) return;
  box.classList.add("image-fallback");
  box.innerHTML = `<span>${escapeHtml(code || "GH")}</span><small>adicione a foto real em assets/produtos</small>`;
}

function productMatchesFilters(product) {
  const matchCategory = selectedCategory === "Todos" || product.category === selectedCategory || (selectedCategory === "Promoções" && product.promo);
  const matchStatus = selectedStatus === "Todos" || product.status === selectedStatus;
  const matchSize = selectedSize === "Todos" || product.sizes.includes(selectedSize);
  const matchPrice = selectedPrice === "Todos" || Number(product.price) <= Number(selectedPrice);
  const term = searchTerm.toLowerCase();
  const matchSearch = product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term) || product.description.toLowerCase().includes(term);
  return matchCategory && matchStatus && matchSize && matchPrice && matchSearch;
}

function renderProducts() {
  const productsGrid = byId("productsGrid");
  if (!productsGrid) return;
  const filteredProducts = products.filter(productMatchesFilters);
  productsGrid.innerHTML = "";

  if (!filteredProducts.length) {
    productsGrid.innerHTML = `<div class="empty-message">Nenhum produto encontrado com esses filtros.</div>`;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.className = "product-card reveal visible";
    const sizeOptions = product.sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join("");
    const sizeBadges = product.sizes.map((size) => `<span>${escapeHtml(size)}</span>`).join("");
    const oldPrice = product.oldPrice ? `<small class="old-price">${money.format(product.oldPrice)}</small>` : "";
    const promo = product.promo ? `<span class="promo-badge">Promoção</span>` : "";
    const customizable = isCustomizableProduct(product);
    const customBadge = customizable ? `<span class="custom-badge">Personalizável</span>` : "";
    const customOption = customizable ? `<label class="custom-option"><input type="checkbox" class="product-custom" /> Personalizar nome e número</label>` : "";

    productCard.innerHTML = `
      <a class="product-image page-link" href="produto.html?produto=${encodeURIComponent(product.slug)}" aria-label="Ver ${escapeHtml(product.name)}">
        ${promo}${customBadge}
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </a>
      <div class="product-info">
        <div class="product-status"><span>${escapeHtml(product.status)}</span><small>${escapeHtml(product.category)}</small></div>
        <h3><a class="page-link" href="produto.html?produto=${encodeURIComponent(product.slug)}">${escapeHtml(product.name)}</a></h3>
        <p>${escapeHtml(product.description)}</p>
        <div class="price-row"><strong>${money.format(product.price)}</strong>${oldPrice}</div>
        <div class="sizes">${sizeBadges}</div>
        <div class="product-actions">
          <select class="product-size" aria-label="Selecionar tamanho">${sizeOptions}</select>
          ${customOption}
          <button class="buy-btn">Comprar pelo WhatsApp</button>
          <div class="secondary-actions"><a class="page-link" href="produto.html?produto=${encodeURIComponent(product.slug)}">Ver produto</a><button class="copy-btn">Copiar link</button></div>
        </div>
      </div>`;

    productCard.querySelector("img").addEventListener("error", (event) => handleImageError(event.currentTarget, product.code));
    productCard.querySelector(".buy-btn").addEventListener("click", () => openWhatsapp(getProductWhatsappMessage(product, productCard.querySelector(".product-size").value, Boolean(productCard.querySelector(".product-custom")?.checked))));
    productCard.querySelector(".copy-btn").addEventListener("click", () => copyText(getProductUrl(product)));
    productsGrid.appendChild(productCard);
  });
}

function renderProductPage() {
  const detail = byId("productDetail");
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("produto");
  const product = products.find((item) => item.slug === slug) || products[0];

  if (!product) {
    detail.innerHTML = `<div class="empty-message">Produto não encontrado.</div>`;
    return;
  }

  document.title = `${product.name} | Vestiário da Ghost`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", `${product.name}: ${product.description} Por ${money.format(product.price)}.`);
  const oldPrice = product.oldPrice ? `<small class="old-price">${money.format(product.oldPrice)}</small>` : "";
  const promo = product.promo ? `<span class="promo-badge detail">Promoção</span>` : "";
  const customizable = isCustomizableProduct(product);
  const customDetail = customizable ? `<span>Personalizável: nome e número</span>` : "";
  const customDetailOption = customizable ? `<label class="custom-option detail-custom"><input type="checkbox" id="detailCustom" /> Quero personalizar nome e número</label>` : "";

  detail.innerHTML = `
    <div class="product-detail-image">
      ${promo}
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
    </div>
    <div class="product-detail-info">
      <span class="tag">${escapeHtml(product.category)}</span>
      <h1>${escapeHtml(product.name)}</h1>
      <p>${escapeHtml(product.description)}</p>
      <div class="price-row detail-price"><strong>${money.format(product.price)}</strong>${oldPrice}</div>
      <div class="detail-meta"><span>${escapeHtml(product.status)}</span><span>Tamanhos: ${escapeHtml(product.sizes.join(", "))}</span>${customDetail}</div>
      <div class="availability-feedback"><div><strong>Esse item ainda está disponível?</strong><span>Confirme estoque, tamanho e prazo antes de finalizar.</span></div><button type="button" id="availabilityCheck">Confirmar disponibilidade</button></div>
      <label class="detail-size-label" for="detailSize">Tamanho</label>
      <select id="detailSize">${product.sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join("")}</select>
      ${customDetailOption}
      <div class="detail-actions"><button class="btn primary" id="detailBuy">Comprar pelo WhatsApp</button><button class="btn secondary" id="detailCopy">Copiar link</button></div>
    </div>`;

  detail.querySelector("img").addEventListener("error", (event) => handleImageError(event.currentTarget, product.code));
  byId("detailBuy").addEventListener("click", () => openWhatsapp(getProductWhatsappMessage(product, byId("detailSize").value, Boolean(byId("detailCustom")?.checked))));
  byId("availabilityCheck")?.addEventListener("click", () => openWhatsapp(getAvailabilityMessage(product)));
  byId("detailCopy").addEventListener("click", () => copyText(window.location.href));

  const schema = byId("productSchema");
  if (schema) {
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: product.name, image: product.image, description: product.description, offers: { "@type": "Offer", priceCurrency: "BRL", price: product.price, availability: product.status === "Pronta entrega" ? "https://schema.org/InStock" : "https://schema.org/PreOrder" } });
  }
}

function isAdminLogged() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function toggleAdminPanel() {
  const adminPanel = byId("adminPanel");
  if (!adminPanel) return;
  const isOpen = adminPanel.classList.toggle("active");
  adminPanel.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) renderAdminPanel();
}

function closeAdminPanel() {
  const adminPanel = byId("adminPanel");
  if (!adminPanel) return;
  adminPanel.classList.remove("active");
  adminPanel.setAttribute("aria-hidden", "true");
}

function renderAdminPanel() {
  const adminPanel = byId("adminPanel");
  if (!adminPanel) return;
  adminPanel.innerHTML = isAdminLogged() ? getAdminDashboardHtml() : getAdminLoginHtml();
  bindAdminEvents();
}

function getAdminLoginHtml() {
  return `
    <div class="admin-dialog admin-login-card">
      <button class="admin-close" id="adminClose" aria-label="Fechar">×</button>
      <div class="admin-login-icon">G</div>
      <span class="tag">Área administrativa</span>
      <h2>Entrar no painel</h2>
      <p>Use a senha local para editar produtos, promoções, status e imagens do catálogo.</p>
      <form id="adminLoginForm" class="admin-login-form">
        <label for="adminPassword">Senha</label>
        <input id="adminPassword" type="password" autocomplete="current-password" placeholder="Digite a senha" />
        <small>Senha padrão: <strong>${ADMIN_PASSWORD}</strong></small>
        <button class="btn primary" type="submit">Entrar</button>
      </form>
    </div>`;
}

function getAdminDashboardHtml() {
  const promoCount = products.filter((product) => product.promo).length;
  const readyCount = products.filter((product) => product.status === "Pronta entrega").length;
  const categoriesCount = new Set(products.map((product) => product.category)).size;
  const filteredAdminProducts = products.filter((product) => {
    const term = adminSearchTerm.toLowerCase();
    return product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term) || product.status.toLowerCase().includes(term);
  });

  return `
    <div class="admin-dialog admin-dashboard">
      <button class="admin-close" id="adminClose" aria-label="Fechar">×</button>
      <div class="admin-head">
        <div><span class="tag">Admin</span><h2>Painel da Vestiário da Ghost</h2><p>Alterações ficam salvas neste navegador. Exporte o JSON para publicar as mudanças no site.</p></div>
        <button class="clear-btn" id="adminLogout">Sair</button>
      </div>
      <div class="admin-stats">
        <div><strong>${products.length}</strong><span>produtos</span></div>
        <div><strong>${promoCount}</strong><span>promoções</span></div>
        <div><strong>${readyCount}</strong><span>pronta entrega</span></div>
        <div><strong>${categoriesCount}</strong><span>categorias</span></div>
      </div>
      <div class="admin-toolbar">
        <button class="btn primary" id="adminAddProduct">Adicionar produto</button>
        <button class="btn secondary" id="adminExport">Exportar JSON</button>
        <button class="clear-btn" id="adminReset">Limpar edição local</button>
        <input id="adminSearch" value="${escapeHtml(adminSearchTerm)}" placeholder="Buscar no admin" />
      </div>
      <div class="admin-product-list">
        ${filteredAdminProducts.map((product) => getAdminProductItemHtml(product)).join("") || `<div class="empty-message">Nenhum produto encontrado no admin.</div>`}
      </div>
      <div class="admin-modal-host" id="adminModalHost"></div>
    </div>`;
}

function getAdminProductItemHtml(product) {
  const promo = product.promo ? "Promoção ativa" : "Sem promoção";
  return `
    <article class="admin-product-item" data-slug="${escapeHtml(product.slug)}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
      <div>
        <strong>${escapeHtml(product.name)}</strong>
        <span>${escapeHtml(product.category)} · ${escapeHtml(product.status)} · ${money.format(product.price)}</span>
        <small>${promo}</small>
      </div>
      <div class="admin-item-actions">
        <button data-admin-action="edit">Editar</button>
        <button data-admin-action="promo">${product.promo ? "Remover promo" : "Promover"}</button>
        <button data-admin-action="status">${product.status === "Pronta entrega" ? "Marcar consultar" : "Pronta entrega"}</button>
        <button data-admin-action="duplicate">Duplicar</button>
        <button data-admin-action="delete" class="danger-action">Excluir</button>
      </div>
    </article>`;
}

function bindAdminEvents() {
  byId("adminClose")?.addEventListener("click", closeAdminPanel);
  byId("adminLoginForm")?.addEventListener("submit", handleAdminLogin);
  byId("adminLogout")?.addEventListener("click", () => { sessionStorage.removeItem(ADMIN_SESSION_KEY); renderAdminPanel(); });
  byId("adminAddProduct")?.addEventListener("click", () => openProductModal());
  byId("adminExport")?.addEventListener("click", exportProductsJson);
  byId("adminReset")?.addEventListener("click", () => openConfirmModal("Limpar edições locais?", "Isso remove alterações salvas no navegador e volta ao JSON publicado.", () => {
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    products = fallbackProducts;
    renderProducts();
    renderAdminPanel();
    showToast("Edições locais removidas.");
  }));
  byId("adminSearch")?.addEventListener("input", (event) => { adminSearchTerm = event.target.value.trim(); renderAdminPanel(); const search = byId("adminSearch"); search?.focus(); search?.setSelectionRange(search.value.length, search.value.length); });

  document.querySelectorAll("[data-admin-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".admin-product-item");
      const product = products.find((entry) => entry.slug === item?.dataset.slug);
      if (!product) return;
      const action = button.dataset.adminAction;
      if (action === "edit") openProductModal(product);
      if (action === "promo") toggleProductPromo(product.slug);
      if (action === "status") toggleProductStatus(product.slug);
      if (action === "duplicate") duplicateProduct(product.slug);
      if (action === "delete") openConfirmModal("Excluir produto?", `O produto ${product.name} será removido da lista local.`, () => deleteProduct(product.slug));
    });
  });
}

function handleAdminLogin(event) {
  event.preventDefault();
  const password = byId("adminPassword")?.value || "";
  if (password !== ADMIN_PASSWORD) {
    showToast("Senha incorreta.");
    byId("adminPassword")?.focus();
    return;
  }
  sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  renderAdminPanel();
  showToast("Admin liberado.");
}

function openProductModal(product = null) {
  const isEdit = Boolean(product);
  const current = product || {
    id: getNextProductId(), slug: "", name: "", category: "Clubes", description: "", sizes: ["P", "M", "G"], status: "Consultar", price: 0, oldPrice: null, promo: false, code: "GH", image: "assets/produtos/novo-produto.jpg"
  };
  const host = byId("adminModalHost");
  if (!host) return;
  host.innerHTML = `
    <div class="admin-popover-backdrop">
      <form class="admin-popover" id="productEditForm">
        <button type="button" class="admin-close mini" id="productModalClose" aria-label="Fechar">×</button>
        <span class="tag">${isEdit ? "Editar produto" : "Novo produto"}</span>
        <h3>${isEdit ? escapeHtml(current.name) : "Adicionar produto"}</h3>
        <div class="admin-form-grid">
          <label>Nome<input name="name" value="${escapeHtml(current.name)}" required /></label>
          <label>Slug<input name="slug" value="${escapeHtml(current.slug)}" placeholder="gerado automaticamente se vazio" /></label>
          <label>Categoria<select name="category"><option ${current.category === "Clubes" ? "selected" : ""}>Clubes</option><option ${current.category === "Seleções" ? "selected" : ""}>Seleções</option><option ${current.category === "Brasil" ? "selected" : ""}>Brasil</option><option ${current.category === "Acessórios" ? "selected" : ""}>Acessórios</option></select></label>
          <label>Status<select name="status"><option ${current.status === "Pronta entrega" ? "selected" : ""}>Pronta entrega</option><option ${current.status === "Consultar" ? "selected" : ""}>Consultar</option></select></label>
          <label>Preço<input name="price" type="number" step="0.01" value="${Number(current.price || 0)}" required /></label>
          <label>Preço antigo<input name="oldPrice" type="number" step="0.01" value="${current.oldPrice || ""}" /></label>
          <label>Tamanhos<input name="sizes" value="${escapeHtml(current.sizes.join(", "))}" /></label>
          <label>Código<input name="code" value="${escapeHtml(current.code || "GH")}" /></label>
          <label class="wide">Imagem<input name="image" value="${escapeHtml(current.image)}" /></label>
          <label class="wide">Descrição<textarea name="description" required>${escapeHtml(current.description)}</textarea></label>
          <label class="toggle-line"><input name="promo" type="checkbox" ${current.promo ? "checked" : ""} /> Produto em promoção</label>
        </div>
        <div class="admin-popover-actions"><button type="submit" class="btn primary">Salvar produto</button><button type="button" class="btn secondary" id="productModalCancel">Cancelar</button></div>
      </form>
    </div>`;
  byId("productModalClose").addEventListener("click", closeAdminModal);
  byId("productModalCancel").addEventListener("click", closeAdminModal);
  byId("productEditForm").addEventListener("submit", (event) => saveProductFromModal(event, product?.slug));
}

function closeAdminModal() {
  const host = byId("adminModalHost");
  if (host) host.innerHTML = "";
}

function saveProductFromModal(event, originalSlug = null) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get("name").trim();
  const slug = slugify(data.get("slug") || name);
  const product = {
    id: products.find((item) => item.slug === originalSlug)?.id || getNextProductId(),
    slug,
    name,
    category: data.get("category"),
    description: data.get("description").trim(),
    sizes: data.get("sizes").split(",").map((size) => size.trim()).filter(Boolean),
    status: data.get("status"),
    price: Number(data.get("price")),
    oldPrice: data.get("oldPrice") ? Number(data.get("oldPrice")) : null,
    promo: data.get("promo") === "on",
    code: data.get("code").trim() || "GH",
    image: data.get("image").trim()
  };

  const conflict = products.some((item) => item.slug === slug && item.slug !== originalSlug);
  if (conflict) {
    showToast("Já existe produto com esse slug.");
    return;
  }

  if (originalSlug) products = products.map((item) => item.slug === originalSlug ? product : item);
  else products = [...products, product];
  closeAdminModal();
  persistProducts(originalSlug ? "Produto atualizado." : "Produto adicionado.");
}

function openConfirmModal(title, message, onConfirm) {
  const host = byId("adminModalHost");
  if (!host) return;
  host.innerHTML = `
    <div class="admin-popover-backdrop">
      <div class="admin-popover confirm-popover">
        <button type="button" class="admin-close mini" id="confirmClose" aria-label="Fechar">×</button>
        <span class="tag">Confirmação</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(message)}</p>
        <div class="admin-popover-actions"><button class="btn primary" id="confirmYes">Confirmar</button><button class="btn secondary" id="confirmNo">Cancelar</button></div>
      </div>
    </div>`;
  byId("confirmClose").addEventListener("click", closeAdminModal);
  byId("confirmNo").addEventListener("click", closeAdminModal);
  byId("confirmYes").addEventListener("click", () => { closeAdminModal(); onConfirm(); });
}

function toggleProductPromo(slug) {
  products = products.map((product) => product.slug === slug ? { ...product, promo: !product.promo } : product);
  persistProducts("Promoção atualizada.");
}

function toggleProductStatus(slug) {
  products = products.map((product) => product.slug === slug ? { ...product, status: product.status === "Pronta entrega" ? "Consultar" : "Pronta entrega" } : product);
  persistProducts("Status atualizado.");
}

function duplicateProduct(slug) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return;
  const copyName = `${product.name} Cópia`;
  const copy = { ...product, id: getNextProductId(), name: copyName, slug: `${slug}-copia-${Date.now().toString().slice(-4)}` };
  products = [...products, copy];
  persistProducts("Produto duplicado.");
}

function deleteProduct(slug) {
  products = products.filter((product) => product.slug !== slug);
  persistProducts("Produto excluído.");
}

function getNextProductId() {
  return Math.max(0, ...products.map((product) => Number(product.id) || 0)) + 1;
}

function exportProductsJson() {
  const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "products.json";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("JSON exportado.");
}

function bindCategoryEvents() {
  document.querySelectorAll(".nav-category, .category-pill, .category-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-category, .category-pill, .category-card").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      selectedCategory = button.dataset.category;
      byId("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
      byId("navMenu")?.classList.remove("active");
      renderProducts();
    });
  });
}

function bindPageTransitions() {
  document.body.classList.add("page-ready");
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const isPage = href.includes(".html") && !link.target && !href.startsWith("http");
    if (!isPage) return;
    event.preventDefault();
    document.body.classList.add("page-leaving");
    window.setTimeout(() => { window.location.href = href; }, 180);
  });
}

function bindGlobalEvents() {
  byId("menuBtn")?.addEventListener("click", () => byId("navMenu")?.classList.toggle("active"));
  document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => byId("navMenu")?.classList.remove("active")));
  ["headerWhatsapp", "heroWhatsapp", "ctaWhatsapp", "footerWhatsapp", "contactWhatsapp"].forEach((id) => byId(id)?.addEventListener("click", (event) => { event.preventDefault(); openWhatsapp(getGeneralWhatsappMessage()); }));
  byId("instagramLink")?.setAttribute("href", INSTAGRAM_URL);
  byId("adminToggle")?.addEventListener("click", toggleAdminPanel);
  bindCategoryEvents();

  byId("searchInput")?.addEventListener("input", (event) => { searchTerm = event.target.value.trim(); renderProducts(); });
  byId("sizeFilter")?.addEventListener("change", (event) => { selectedSize = event.target.value; renderProducts(); });
  byId("priceFilter")?.addEventListener("change", (event) => { selectedPrice = event.target.value; renderProducts(); });
  byId("statusFilter")?.addEventListener("change", (event) => { selectedStatus = event.target.value; renderProducts(); });
  byId("clearFilters")?.addEventListener("click", () => {
    selectedCategory = "Todos";
    selectedSize = "Todos";
    selectedPrice = "Todos";
    searchTerm = "";
    if (byId("searchInput")) byId("searchInput").value = "";
    if (byId("sizeFilter")) byId("sizeFilter").value = "Todos";
    if (byId("priceFilter")) byId("priceFilter").value = "Todos";
    if (byId("statusFilter")) byId("statusFilter").value = "Todos";
    document.querySelectorAll(".nav-category, .category-pill, .category-card").forEach((btn) => btn.classList.toggle("active", btn.dataset.category === "Todos"));
    renderProducts();
  });
  document.querySelectorAll("img[data-fallback]").forEach((img) => img.addEventListener("error", (event) => handleImageError(event.currentTarget, img.dataset.fallback)));
}

function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

async function init() {
  try {
    products = await loadProducts();
    if (!products.length) products = normalizeProducts(fallbackProducts);
    bindPageTransitions();
    bindGlobalEvents();
    renderProducts();
    renderProductPage();
    initRevealAnimations();
  } catch (error) {
    console.error("Erro ao iniciar catálogo", error);
    products = normalizeProducts(fallbackProducts);
    const productsGrid = byId("productsGrid");
    if (productsGrid) {
      productsGrid.innerHTML = `<div class="empty-message">O catálogo encontrou um erro ao carregar. Atualize a página ou limpe as edições locais no admin.</div>`;
    }
    renderProducts();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}















