import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const HomePage = () => {
	const { hash } = useLocation();

	useEffect(() => {
		document.title = "Nick Wright - Software Developer";
	}, []);

	useEffect(() => {
		const id = hash.replace("#", "");
		if (!id) return undefined;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const frame = window.requestAnimationFrame(() => {
			document.getElementById(id)?.scrollIntoView({
				behavior: reduceMotion ? "auto" : "smooth",
			});
		});

		return () => window.cancelAnimationFrame(frame);
	}, [hash]);

	return (
		<>
			<Main />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</>
	);
};

export default HomePage;
