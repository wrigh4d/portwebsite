const PROJECTS = [
	{
		id: "family-book-club",
		title: "Family Book Club",
		tagline: "Pick a book they'll actually read",
		category: "Side project",
		description:
			"A phone-friendly site I built for my family's book club. Share a link, join with a name and a club code, keep a standing shortlist, and present when you meet so everyone sees the same current book and next-book options. Recs are computed from that cycle's genre votes and past ratings, then frozen for the meeting—so the next pick is something the group will actually finish.",
		tech: ["React", "TypeScript", "Vite", "Tailwind", "Firebase", "Open Library"],
		href: "https://wrigh4d.github.io/family-book-club/",
		linkLabel: "Visit the site",
		tone: "#241c16",
		accent: "#c47868",
		highlight: "#d4b06a",
	},
	{
		id: "football-fantasy-manager",
		title: "Football Fantasy Manager",
		tagline: "Single-season dynasty",
		category: "Side project",
		description:
			"A single-season dynasty style fantasy football project. Users create leagues and manage a roster through contracts across the summer. It keeps the parts of dynasty that are worth it - long-term team building and hard contract calls - and drops the multi-season grind that burns leagues out. This is a deeper take on the original, built to feel like running a franchise for one focused season.",
		tech: ["Flutter", "C#", "SQLite"],
		href: "https://github.com/KirkDWilliams/Football-GM",
		linkLabel: "View on GitHub",
		tone: "#1a2a1c",
		accent: "#8fbf6a",
		highlight: "#e8c44a",
	},
	{
		id: "buffbud",
		title: "Buffbud",
		tagline: "Tamagotchi-style exercise app",
		category: "Mobile app",
		description:
			"My first big group computer science project: a Tamagotchi-style exercise companion for mobile. We drew pixel-art pets in GIMP that users could pick as workout partners. Throughout the day the app nudged you to walk the pet or finish a random exercise; completing daily workouts earned food to feed it.",
		tech: ["Java", "JavaFX", "GIMP", "Sprite animation"],
		href: "https://github.com/wrigh4d/Buffbud",
		linkLabel: "View on GitHub",
		tone: "#2a2228",
		accent: "#4ec9a8",
		highlight: "#f0c060",
	},
	{
		id: "slime-slayer",
		title: "Slime Slayer",
		tagline: "Isometric RPG",
		category: "Game",
		description:
			"A 2D isometric RPG I built as a college final. I challenged myself to create every asset and the whole world without the Unity Asset Store - mostly in Photoshop and Aseprite - and wrote every script from scratch. Art and code, start to finish, just me.",
		tech: ["C#", "Unity", "Photoshop", "Aseprite"],
		href: "https://nickwright.itch.io/slime-slayer",
		linkLabel: "Play on itch.io",
		tone: "#2a1214",
		accent: "#e07050",
		highlight: "#6ec8ff",
	},
];

export default PROJECTS;
