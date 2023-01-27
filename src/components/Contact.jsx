import React, { useRef } from "react";

// Import Emailjs
import emailjs from "emailjs-com";

// Import MUI
import { Typography, TextField, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ContactStyles = styled.div`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	.textfield {
		width: calc(50% - 20px);
		max-width: 100%;
		background-color: white;
		border-radius: 5px;
		margin: 10px;
	}
	.textfield2 {
		width: calc(100% - 20px);
		max-width: 100%;
		background-color: white;
		border-radius: 5px;
		margin: 10px;
	}
	.btn {
		border-radius: 5px;
		margin: 10px;
		float: right;
		background-color: #000;
	}
	@media only screen and (max-width: 768px) {
		padding: 1rem;
	}
`;

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_xgtn6s4",
				"template_6uhugmw",
				form.current,
				"UFubcgllF8R8hOFkO"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<ContactStyles id="contact">
					<Typography variant="h1">CONTACT ME{"\n"}</Typography>
					<Typography variant="h5">-GET IN TOUCH-</Typography>
					<Box sx={{ width: 1000, maxWidth: "100%" }}>
						<form ref={form} onSubmit={sendEmail}>
							<TextField
								variant="filled"
								label="Name"
								type="text"
								name="fullName"
								className="textfield"
							/>
							<TextField
								variant="filled"
								label="Email"
								type="email"
								name="email"
								className="textfield"
							/>
							<TextField
								fullWidth
								variant="filled"
								label="Phone Number"
								type="phone"
								name="phone"
								className="textfield2"
							/>
							<TextField
								fullWidth
								variant="filled"
								label="Message"
								type="text"
								name="message"
								className="textfield2"
							/>
							<Button
								variant="contained"
								type="submit"
								endIcon={<SendIcon />}
								className="btn"
							>
								Send
							</Button>
						</form>
					</Box>
				</ContactStyles>
			</ThemeProvider>
		</>
	);
};

export default Contact;
