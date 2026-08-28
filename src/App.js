import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import theme from "./theme";

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
		<ThemeProvider theme={theme}>
			<Navbar />
			<main>
				<Main />
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
