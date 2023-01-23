import React from "react";
import square from "../images/skillsSqr.jpg";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Skills = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className="container">
					<section id="skills" className="main" style={{ margin: "5rem 0" }}>
						<div className="content">
							<Typography
								variant="p"
								sx={{ fontSize: 100 }}
							>
								SKILLS
							</Typography>
							<br />
						</div>
						<img
							src={square}
							alt=""
							style={{
								width: "40%",
								boxShadow:
									" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
							}}
						/>
					</section>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Skills;
