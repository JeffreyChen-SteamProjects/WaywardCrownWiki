// Languages and the sidebar of the wiki. English sits at the site root; every other language
// has a folder of the same name under docs/. Sidebar labels are English with one translation
// per language code; each page slug is its path under docs/ without `.md`.

export const locales = {
  "root": {
    "label": "English",
    "lang": "en"
  },
  "zh_TW": {
    "label": "繁體中文",
    "lang": "zh-TW"
  },
  "zh_CN": {
    "label": "简体中文",
    "lang": "zh"
  },
  "ja": {
    "label": "日本語",
    "lang": "ja"
  },
  "ko": {
    "label": "한국어",
    "lang": "ko"
  },
  "de": {
    "label": "Deutsch",
    "lang": "de"
  },
  "fr": {
    "label": "Français",
    "lang": "fr"
  },
  "es": {
    "label": "Español",
    "lang": "es"
  },
  "it": {
    "label": "Italiano",
    "lang": "it"
  },
  "pt_BR": {
    "label": "Português (Brasil)",
    "lang": "pt-BR"
  },
  "ru": {
    "label": "Русский",
    "lang": "ru"
  },
  "pl": {
    "label": "Polski",
    "lang": "pl"
  },
  "tr": {
    "label": "Türkçe",
    "lang": "tr"
  },
  "th": {
    "label": "ไทย",
    "lang": "th"
  },
  "vi": {
    "label": "Tiếng Việt",
    "lang": "vi"
  }
};

export const sidebar = [
  {
    "label": "Home",
    "translations": {
      "zh-TW": "首頁",
      "zh": "首页",
      "ja": "ホーム",
      "ko": "홈",
      "de": "Startseite",
      "fr": "Accueil",
      "es": "Inicio",
      "pt-BR": "Início",
      "ru": "Главная",
      "pl": "Strona główna",
      "tr": "Ana Sayfa",
      "th": "หน้าแรก",
      "vi": "Trang chủ"
    },
    "slug": "index"
  },
  {
    "label": "Gameplay",
    "translations": {
      "zh-TW": "遊戲攻略",
      "zh": "游戏攻略",
      "ja": "ゲームプレイ",
      "ko": "게임플레이",
      "de": "Spielanleitung",
      "fr": "Guide de jeu",
      "es": "Guía de juego",
      "it": "Guida al gioco",
      "pt-BR": "Guia de jogo",
      "ru": "Игровой процесс",
      "pl": "Poradnik",
      "tr": "Oyun Rehberi",
      "th": "คู่มือเกม",
      "vi": "Hướng dẫn chơi"
    },
    "items": [
      {
        "label": "Getting Started",
        "translations": {
          "zh-TW": "新手入門",
          "zh": "新手入门",
          "ja": "はじめに",
          "ko": "시작하기",
          "de": "Erste Schritte",
          "fr": "Premiers pas",
          "es": "Primeros pasos",
          "it": "Per iniziare",
          "pt-BR": "Primeiros passos",
          "ru": "Начало игры",
          "pl": "Pierwsze kroki",
          "tr": "Başlangıç",
          "th": "เริ่มต้นเล่น",
          "vi": "Bắt đầu"
        },
        "slug": "gameplay/getting-started"
      },
      {
        "label": "Adventurers",
        "translations": {
          "zh-TW": "冒險者",
          "zh": "冒险者",
          "ja": "冒険者",
          "ko": "모험가",
          "de": "Abenteurer",
          "fr": "Aventuriers",
          "es": "Aventureros",
          "it": "Avventurieri",
          "pt-BR": "Aventureiros",
          "ru": "Искатели приключений",
          "pl": "Poszukiwacze przygód",
          "tr": "Maceracılar",
          "th": "นักผจญภัย",
          "vi": "Nhà phiêu lưu"
        },
        "slug": "gameplay/adventurers"
      },
      {
        "label": "Enemies",
        "translations": {
          "zh-TW": "敵人",
          "zh": "敌人",
          "ja": "敵",
          "ko": "적",
          "de": "Feinde",
          "fr": "Ennemis",
          "es": "Enemigos",
          "it": "Nemici",
          "pt-BR": "Inimigos",
          "ru": "Враги",
          "pl": "Wrogowie",
          "tr": "Düşmanlar",
          "th": "ศัตรู",
          "vi": "Kẻ thù"
        },
        "slug": "gameplay/enemies"
      },
      {
        "label": "Buildings",
        "translations": {
          "zh-TW": "建築",
          "zh": "建筑",
          "ja": "建物",
          "ko": "건물",
          "de": "Gebäude",
          "fr": "Bâtiments",
          "es": "Edificios",
          "it": "Edifici",
          "pt-BR": "Construções",
          "ru": "Здания",
          "pl": "Budynki",
          "tr": "Binalar",
          "th": "อาคาร",
          "vi": "Công trình"
        },
        "slug": "gameplay/buildings"
      },
      {
        "label": "Bounty System",
        "translations": {
          "zh-TW": "懸賞系統",
          "zh": "悬赏系统",
          "ja": "依頼システム",
          "ko": "현상금 시스템",
          "de": "Auftragssystem",
          "fr": "Système de primes",
          "es": "Sistema de recompensas",
          "it": "Sistema taglie",
          "pt-BR": "Sistema de recompensas",
          "ru": "Система поручений",
          "pl": "System zleceń",
          "tr": "Ödül Sistemi",
          "th": "ระบบค่าหัว",
          "vi": "Hệ thống tiền thưởng"
        },
        "slug": "gameplay/bounties"
      },
      {
        "label": "Equipment & Shops",
        "translations": {
          "zh-TW": "裝備與商店",
          "zh": "装备与商店",
          "ja": "装備とショップ",
          "ko": "장비와 상점",
          "de": "Ausrüstung & Läden",
          "fr": "Équipement & Boutiques",
          "es": "Equipamiento y tiendas",
          "it": "Equipaggiamento e negozi",
          "pt-BR": "Equipamentos e lojas",
          "ru": "Снаряжение и магазины",
          "pl": "Wyposażenie i sklepy",
          "tr": "Teçhizat ve Dükkanlar",
          "th": "อุปกรณ์และร้านค้า",
          "vi": "Trang bị và cửa hàng"
        },
        "slug": "gameplay/equipment"
      }
    ]
  },
  {
    "label": "Game Systems",
    "translations": {
      "zh-TW": "遊戲系統",
      "zh": "游戏系统",
      "ja": "ゲームシステム",
      "ko": "게임 시스템",
      "de": "Spielsysteme",
      "fr": "Systèmes de jeu",
      "es": "Sistemas de juego",
      "it": "Sistemi di gioco",
      "pt-BR": "Sistemas de jogo",
      "ru": "Игровые системы",
      "pl": "Systemy gry",
      "tr": "Oyun Sistemleri",
      "th": "ระบบเกม",
      "vi": "Hệ thống game"
    },
    "items": [
      {
        "label": "Combat",
        "translations": {
          "zh-TW": "戰鬥系統",
          "zh": "战斗系统",
          "ja": "戦闘システム",
          "ko": "전투 시스템",
          "de": "Kampfsystem",
          "fr": "Système de combat",
          "es": "Sistema de combate",
          "it": "Sistema di combattimento",
          "pt-BR": "Sistema de combate",
          "ru": "Боевая система",
          "pl": "System walki",
          "tr": "Savaş Sistemi",
          "th": "ระบบการต่อสู้",
          "vi": "Hệ thống chiến đấu"
        },
        "slug": "systems/combat"
      },
      {
        "label": "Random Events",
        "translations": {
          "zh-TW": "隨機事件",
          "zh": "随机事件",
          "ja": "ランダムイベント",
          "ko": "랜덤 이벤트",
          "de": "Zufallsereignisse",
          "fr": "Événements aléatoires",
          "es": "Eventos aleatorios",
          "it": "Eventi casuali",
          "pt-BR": "Eventos aleatórios",
          "ru": "Случайные события",
          "pl": "Losowe wydarzenia",
          "tr": "Rastgele Olaylar",
          "th": "เหตุการณ์สุ่ม",
          "vi": "Sự kiện ngẫu nhiên"
        },
        "slug": "systems/events"
      },
      {
        "label": "Research & Skills",
        "translations": {
          "zh-TW": "研究與技能",
          "zh": "研究与技能",
          "ja": "研究とスキル",
          "ko": "연구와 스킬",
          "de": "Forschung & Fähigkeiten",
          "fr": "Recherche & Compétences",
          "es": "Investigación y habilidades",
          "it": "Ricerca e abilità",
          "pt-BR": "Pesquisa e habilidades",
          "ru": "Исследования и навыки",
          "pl": "Badania i umiejętności",
          "tr": "Araştırma ve Yetenekler",
          "th": "วิจัยและทักษะ",
          "vi": "Nghiên cứu và kỹ năng"
        },
        "slug": "systems/research"
      },
      {
        "label": "Enemy Strongholds",
        "translations": {
          "zh-TW": "敵方據點",
          "zh": "敌方据点",
          "ja": "敵の拠点",
          "ko": "적 거점",
          "de": "Feindliche Festungen",
          "fr": "Forteresses ennemies",
          "es": "Fortalezas enemigas",
          "it": "Fortezze nemiche",
          "pt-BR": "Fortalezas inimigas",
          "ru": "Вражеские крепости",
          "pl": "Twierdze wrogów",
          "tr": "Düşman Kaleleri",
          "th": "ฐานที่มั่นของศัตรู",
          "vi": "Căn cứ địch"
        },
        "slug": "systems/enemy-buildings"
      },
      {
        "label": "Campaign Mode",
        "translations": {
          "zh-TW": "戰役模式",
          "zh": "战役模式",
          "ja": "キャンペーンモード",
          "ko": "캠페인 모드",
          "de": "Kampagnenmodus",
          "fr": "Mode Campagne",
          "es": "Modo Campaña",
          "it": "Modalità Campagna",
          "pt-BR": "Modo Campanha",
          "ru": "Режим кампании",
          "pl": "Tryb kampanii",
          "tr": "Kampanya Modu",
          "th": "โหมดรณรงค์",
          "vi": "Chế độ chiến dịch"
        },
        "slug": "systems/campaigns"
      },
      {
        "label": "Maps & Terrain",
        "translations": {
          "zh-TW": "地圖與地形",
          "zh": "地图与地形",
          "ja": "マップと地形",
          "ko": "맵과 지형",
          "de": "Karten & Gelände",
          "fr": "Cartes & Terrains",
          "es": "Mapas y terreno",
          "it": "Mappe e terreni",
          "pt-BR": "Mapas e terreno",
          "ru": "Карты и местность",
          "pl": "Mapy i teren",
          "tr": "Haritalar ve Arazi",
          "th": "แผนที่และภูมิประเทศ",
          "vi": "Bản đồ và địa hình"
        },
        "slug": "systems/maps"
      }
    ]
  },
  {
    "label": "Developer",
    "translations": {
      "zh-TW": "開發者",
      "zh": "开发者",
      "ja": "開発者",
      "ko": "개발자",
      "de": "Entwickler",
      "fr": "Développeur",
      "es": "Desarrollador",
      "it": "Sviluppatore",
      "pt-BR": "Desenvolvedor",
      "ru": "Разработчик",
      "pl": "Deweloper",
      "tr": "Geliştirici",
      "th": "นักพัฒนา",
      "vi": "Nhà phát triển"
    },
    "items": [
      {
        "label": "Plugin Development",
        "translations": {
          "zh-TW": "外掛開發",
          "zh": "插件开发",
          "ja": "プラグイン開発",
          "ko": "플러그인 개발",
          "de": "Plugin-Entwicklung",
          "fr": "Développement de plugins",
          "es": "Desarrollo de plugins",
          "it": "Sviluppo plugin",
          "pt-BR": "Desenvolvimento de plugins",
          "ru": "Разработка плагинов",
          "pl": "Tworzenie wtyczek",
          "tr": "Eklenti Geliştirme",
          "th": "การพัฒนาปลั๊กอิน",
          "vi": "Phát triển plugin"
        },
        "slug": "development/plugins"
      },
      {
        "label": "Creator Tutorial",
        "translations": {
          "zh-TW": "創作者教學",
          "zh": "创作者教程",
          "ja": "クリエイターチュートリアル",
          "ko": "창작자 튜토리얼",
          "de": "Ersteller-Tutorial",
          "fr": "Tutoriel du créateur",
          "es": "Tutorial del creador",
          "it": "Tutorial del creatore",
          "pt-BR": "Tutorial do criador",
          "ru": "Руководство для авторов",
          "pl": "Samouczek twórcy",
          "tr": "Yapımcı eğitimi",
          "th": "บทเรียนสำหรับผู้สร้าง",
          "vi": "Hướng dẫn cho người sáng tạo"
        },
        "slug": "development/creator-tutorial"
      },
      {
        "label": "Map & Campaign Editor",
        "translations": {
          "zh-TW": "地圖與戰役編輯器",
          "zh": "地图与战役编辑器",
          "ja": "マップ・キャンペーンエディタ",
          "ko": "맵 · 캠페인 에디터",
          "de": "Karten- & Kampagneneditor",
          "fr": "Éditeur de cartes & campagnes",
          "es": "Editor de mapas y campañas",
          "it": "Editor mappe e campagne",
          "pt-BR": "Editor de mapas e campanhas",
          "ru": "Редактор карт и кампаний",
          "pl": "Edytor map i kampanii",
          "tr": "Harita ve Kampanya Editörü",
          "th": "ตัวแก้ไขแผนที่และรณรงค์",
          "vi": "Trình biên tập bản đồ & chiến dịch"
        },
        "slug": "development/editors"
      },
      {
        "label": "Packaging",
        "translations": {
          "zh-TW": "打包發布",
          "zh": "打包发布",
          "ja": "パッケージング",
          "ko": "패키징",
          "de": "Paketierung",
          "fr": "Empaquetage",
          "es": "Empaquetado",
          "it": "Pacchettizzazione",
          "pt-BR": "Empacotamento",
          "ru": "Упаковка",
          "pl": "Pakowanie",
          "tr": "Paketleme",
          "th": "การแพ็กเกจ",
          "vi": "Đóng gói"
        },
        "slug": "development/packaging"
      },
      {
        "label": "Localization",
        "translations": {
          "zh-TW": "多語系",
          "zh": "多语系",
          "ja": "ローカライゼーション",
          "ko": "현지화",
          "de": "Lokalisierung",
          "fr": "Localisation",
          "es": "Localización",
          "it": "Localizzazione",
          "pt-BR": "Localização",
          "ru": "Локализация",
          "pl": "Lokalizacja",
          "tr": "Yerelleştirme",
          "th": "การแปลภาษา",
          "vi": "Bản địa hóa"
        },
        "slug": "development/i18n"
      }
    ]
  }
];
