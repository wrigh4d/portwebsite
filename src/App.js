import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import theme from "./theme";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const ScrollToTop = () => {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			window.scrollTo(0, 0);
		}
	}, [pathname, hash]);

	return null;
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<ScrollToTop />
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/blog/:slug" element={<BlogPost />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
