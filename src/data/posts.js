const POSTS = [
	{
		slug: "rebuilding-the-portfolio",
		title: "Rebuilding the portfolio, one token at a time",
		date: "2026-08-26",
		category: "Design",
		tags: ["Design", "React"],
		excerpt:
			"A pass at making this site feel like one product: a shared palette, a quieter layout, and fewer one-off styles.",
		content: [
			{
				type: "p",
				text: "This site started as a student project and picked up styles the way most personal sites do - a colour here, a one-off layout there, a component that only made sense on one screen. It still worked. It just didn’t feel like a single thing.",
			},
			{
				type: "p",
				text: "The latest pass was less about adding pages and more about giving the existing ones a shared language. If a value is a colour, a radius, or a spacing step, it now lives in one place and gets reused.",
			},
			{
				type: "h2",
				text: "Tokens first",
			},
			{
				type: "p",
				text: "There are two sources of truth, and they stay in sync on purpose. CSS custom properties in the global stylesheet drive styled-components. The MUI theme mirrors the same tokens so buttons, fields, and tooltips don’t invent their own palette. Components are not supposed to hardcode hex values; they ask for a token.",
			},
			{
				type: "p",
				text: "The palette is dark on purpose. Near-black backgrounds, slightly lifted surfaces, a cool accent for links and focus rings. I wanted it to read as a product, not a template with a hero gradient glued on.",
			},
			{
				type: "h2",
				text: "A quieter page",
			},
			{
				type: "p",
				text: "The original layout was louder than it needed to be. Headings fought each other, cards didn’t share a rhythm, and the navigation tried to be a full menu in a space that works better as a compact control. The pill nav is icon-only with tooltips. It stays out of the way and still tells you where you are.",
			},
			{
				type: "p",
				text: "Projects got the same treatment. Each card is a surface with a short write-up, a tech list, and a generated visual instead of a screenshot that goes stale. The point is to scan, then choose one to open.",
			},
			{
				type: "h2",
				text: "What I would still change",
			},
			{
				type: "ul",
				items: [
					"Light mode, for the people who will ask.",
					"A toolchain that isn’t Create React App. It still ships; it is also clearly on the way out.",
					"More project write-ups that are too long for a card - which is why this notebook exists.",
				],
			},
			{
				type: "p",
				text: "The site will keep moving. The constraint I care about is that the next change still looks like it belongs.",
			},
		],
	},
	{
		slug: "starting-a-notebook",
		title: "Starting a notebook",
		date: "2026-08-18",
		category: "Notes",
		tags: ["Notes"],
		excerpt:
			"This site has always been one scrolling page. I’m adding a notebook next to it for the write-ups that don’t belong on a project card.",
		content: [
			{
				type: "p",
				text: "The rest of this site is a single page: who I am, what I’ve built, where I’ve worked, how to reach me. That shape is right for a portfolio. It is a bad shape for anything that needs more than a paragraph.",
			},
			{
				type: "p",
				text: "So this is a separate page. Same palette, same type, same nav - with a divider before the notebook so it is obvious you are leaving the scrolling site. Posts live on their own URLs. You can send someone a link to one of them without asking them to hunt through a homepage.",
			},
			{
				type: "h2",
				text: "What I plan to put here",
			},
			{
				type: "p",
				text: "Mostly the longer version of work that already shows up as a card. How a project actually got built, what I would do differently, the bits that are interesting and don’t fit in a two-sentence summary. Occasionally notes on tools, design decisions on this site, or something I learned that is easier to explain in writing than in a screenshot.",
			},
			{
				type: "p",
				text: "I am not going to recap confidential work from United Wholesale Mortgage. Day to day I sit in a large ASP.NET codebase building automation around underwriting. That work is the job; it is not the blog. The public projects and the craft around them are.",
			},
			{
				type: "h2",
				text: "A small bar",
			},
			{
				type: "p",
				text: "I want these to be useful if you landed here from the homepage, and still readable if you didn’t. No growth-hacking, no newsletter gate. If a post is here, it is because I wanted a durable place to put the thinking - not because a card felt empty.",
			},
			{
				type: "p",
				text: "If you want the short version of me, the homepage is still the right place. This page is for when the short version is not enough.",
			},
		],
	},
	{
		slug: "intern-project-that-stuck",
		title: "The intern project that stuck",
		date: "2026-08-08",
		category: "Write-up",
		tags: ["React", "C#", ".NET"],
		excerpt:
			"Ten weeks at United Wholesale Mortgage, a flashcard app for executives, and the first time I watched a real software team work.",
		content: [
			{
				type: "p",
				text: "In 2022 I interned at United Wholesale Mortgage. The assignment for the summer was a site that looked simple on a slide: executives should be able to learn about people across the company the way you learn a deck of cards. Flip one, see a person, remember a name.",
			},
			{
				type: "p",
				text: "Underneath it was a full trip through the software development cycle. React on the front, a C# API, a database of every team member, Docker, Vault, the whole shape of a production service even if the product itself was an internal learning tool. Ten weeks is not a long time. It is long enough to find out whether you like this kind of work.",
			},
			{
				type: "h2",
				text: "What the ten weeks actually were",
			},
			{
				type: "p",
				text: "We did not start in a code editor. We started with the problem, the users, and the fact that “a flashcard app” is a product sentence, not a design. There were stories, a backlog, standups, and reviews. People had roles. The work had a sequence. That sounds obvious now; it was not obvious coming off coursework where the rubric is the only stakeholder.",
			},
			{
				type: "p",
				text: "I spent most of my time in the UI and in the glue between the UI and the API. MUI, JavaScript, the awkward middle where a mock becomes a real endpoint and you find out your component assumed a shape the server does not return. I also got a look at how a large .NET codebase is put together - not as the person owning it, as the person trying not to break it.",
			},
			{
				type: "h2",
				text: "What I took with me",
			},
			{
				type: "ul",
				items: [
					"A demo is not a product. The last 20% is integration, data, and the parts nobody puts on a slide.",
					"Readable code is a feature. Someone else will read it in a week, and that someone might be you.",
					"The interesting problems are usually at the boundaries: UI to API, API to data, team to team.",
				],
			},
			{
				type: "p",
				text: "I came back full time the next year. The intern project is still the one I point to when someone asks how I got here - not because the flashcards were clever, but because it was the first time the work looked like the job.",
			},
			{
				type: "p",
				text: "The repo is public if you want the code. This post is the part that never fit on the project card.",
			},
		],
	},
];

const WORDS_PER_MINUTE = 220;

const wordCount = (content) =>
	content.reduce((sum, block) => {
		if (block.text) {
			return sum + block.text.trim().split(/\s+/).length;
		}
		if (block.items) {
			return sum + block.items.join(" ").trim().split(/\s+/).length;
		}
		return sum;
	}, 0);

const withMeta = (post) => ({
	...post,
	readingTime: `${Math.max(1, Math.round(wordCount(post.content) / WORDS_PER_MINUTE))} min read`,
});

export const getPosts = () =>
	[...POSTS]
		.sort((a, b) => b.date.localeCompare(a.date))
		.map(withMeta);

export const getPostBySlug = (slug) => {
	const post = POSTS.find((entry) => entry.slug === slug);
	return post ? withMeta(post) : undefined;
};

export const formatPostDate = (isoDate) =>
	new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

export default POSTS;
