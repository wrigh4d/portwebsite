import React from "react";
import "./index.css";

// Components Imports
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="main-container">
			<Navbar />
			<Main />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
