import React, { useRef } from "react";

// Import Emailjs
import emailjs from "emailjs-com";

// Import MUI
import { Typography, TextField, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
			<div className="container">
				<section id="contact" className="contact-container">
					<Typography variant="h1">CONTACT ME</Typography>
					<br></br>
					<Typography variant="h4" style={{ paddingBottom: "20px" }}>
						-GET IN TOUCH-
					</Typography>
					<Box sx={{ width: 1000, maxWidth: "100%" }}>
						<div className="left">
							<div className="socials"></div>
							<div className="socials"></div>
							<div className="socials"></div>
						</div>
						<div className="right">
							<form ref={form} onSubmit={sendEmail}>
								<TextField
									variant="filled"
									label="Name"
									type="text"
									name="fullName"
									sx={{
										width: "calc(50% - 20px)",
										maxWidth: "100%",
										backgroundColor: "white",
										borderRadius: "5px",
										margin: "10px",
									}}
								/>
								<TextField
									variant="filled"
									label="Email"
									type="email"
									name="email"
									sx={{
										width: "calc(50% - 20px)",
										maxWidth: "100%",
										backgroundColor: "white",
										borderRadius: "5px",
										margin: "10px",
									}}
								/>
								<TextField
									fullWidth
									variant="filled"
									label="Phone Number"
									type="phone"
									name="phone"
									sx={{
										width: "calc(100% - 20px)",
										maxWidth: "100%",
										backgroundColor: "white",
										borderRadius: "5px",
										margin: "10px",
									}}
								/>
								<TextField
									fullWidth
									variant="filled"
									label="Message"
									type="text"
									name="message"
									sx={{
										width: "calc(100% - 20px)",
										maxWidth: "100%",
										backgroundColor: "white",
										borderRadius: "5px",
										margin: "10px",
									}}
								/>
								<Button
									variant="contained"
									type="submit"
									endIcon={<SendIcon />}
									sx={{
										borderRadius: "5px",
										margin: "10px",
										float: "right",
										backgroundColor: "black",
									}}
								>
									Send
								</Button>
							</form>
						</div>
					</Box>
				</section>
			</div>
		</>
	);
};

export default Contact;
