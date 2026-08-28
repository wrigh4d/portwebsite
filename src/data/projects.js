import uwm from "../images/uwm.webp";
import uwmMobile from "../images/uwmMobile.webp";
import pollinate from "../images/pollinate.webp";
import pollinateMobile from "../images/pollinateMobile.webp";
import buffbud from "../images/buffbud.webp";
import buffbudMobile from "../images/buffbudMobile.webp";
import mage from "../images/mage.webp";
import mageMobile from "../images/mageMobile.webp";
import taxi from "../images/taxi.webp";
import taxiMobile from "../images/taxiMobile.webp";
import mmd from "../images/mmd.webp";
import mmdMobile from "../images/mmdMobile.webp";
import projects from "../images/projects.webp";
import projectsMobile from "../images/projectsMobile.webp";

const PROJECTS = [
	{
		id: "uwm-flashcard",
		title: "UWM Flashcard",
		alt: "Screenshot of the UWM Flashcard study application",
		image: uwm,
		mobileImage: uwmMobile,
		href: "https://github.com/wrigh4d/UWMFlashcard",
		linkLabel: "View on GitHub",
	},
	{
		id: "pollinate",
		title: "Pollinate",
		alt: "Screenshot of the Pollinate polling website",
		image: pollinate,
		mobileImage: pollinateMobile,
		href: "https://github.com/wrigh4d/PollingWebsite",
		linkLabel: "View on GitHub",
	},
	{
		id: "buffbud",
		title: "Buffbud",
		alt: "Screenshot of the Buffbud fitness application",
		image: buffbud,
		mobileImage: buffbudMobile,
		href: "https://github.com/wrigh4d/Buffbud",
		linkLabel: "View on GitHub",
	},
	{
		id: "slime-slayer",
		title: "Slime Slayer",
		alt: "Key art for the Slime Slayer game",
		image: mage,
		mobileImage: mageMobile,
		href: "https://nickwright.itch.io/slime-slayer",
		linkLabel: "Download the game",
	},
	{
		id: "crazy-taxi",
		title: "Crazy Taxi",
		alt: "Key art for the Crazy Taxi game",
		image: taxi,
		mobileImage: taxiMobile,
		href: "https://nickwright.itch.io/crazy-taxi",
		linkLabel: "Download the game",
	},
	{
		id: "multimedia-design",
		title: "Multimedia Design Work",
		alt: "Collage of multimedia design work",
		image: mmd,
		mobileImage: mmdMobile,
		href: "https://github.com/wrigh4d/portwebsite",
		linkLabel: "View on GitHub",
	},
	{
		id: "more-projects",
		title: "More Projects",
		alt: "Overview of additional projects",
		image: projects,
		mobileImage: projectsMobile,
		href: null,
		linkLabel: null,
	},
];

export default PROJECTS;
