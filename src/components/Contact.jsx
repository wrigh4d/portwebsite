import React, { useRef } from "react";

// Import Emailjs
import emailjs from "emailjs-com";

// Import MUI
import { Typography, TextField, Box, Button, Modal } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ContactStyles = styled.div`
	padding: 2.5rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	.header {
		padding: 1rem;
		text-align: center;
	}
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
	}
`;

const Contact = () => {
	const form = useRef();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
					<div className="header">
						<Typography variant="h1">CONTACT ME{"\n"}</Typography>
						<Typography variant="h5">-GET IN TOUCH-</Typography>
					</div>

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
								color="secondary"
								endIcon={<SendIcon />}
								onClick={handleOpen}
								className="btn"
							>
								Send
							</Button>

							<div>
								<Modal open={open} onClose={handleClose}>
									<Box
										sx={{
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											width: "100%",
											maxWidth: 400,
											textAlign: "center",
											bgcolor: "background.paper",
											color: "#000",
											borderRadius: "10px",
											boxShadow: 24,
											p: 4,
										}}
									>
										<Typography variant="h3">Email Sent</Typography>
										<Typography variant="h5">
											Thank you for sending me an email!
										</Typography>
									</Box>
								</Modal>
							</div>
						</form>
					</Box>
				</ContactStyles>
			</ThemeProvider>
		</>
	);
};

export default Contact;
