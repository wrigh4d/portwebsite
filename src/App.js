import React from "react";
import "./index.css";

// Components Imports
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Main />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
