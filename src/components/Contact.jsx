import React, { useRef, useState } from "react";

import emailjs from "emailjs-com";

import styled from "styled-components";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import Section from "./Section";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_xgtn6s4";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_6uhugmw";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "UFubcgllF8R8hOFkO";

const ContactStyles = styled.div`
	.form {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem;
		background-color: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.grid > .full {
		grid-column: 1 / -1;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		margin-top: 1.5rem;
	}

	@media only screen and (max-width: 640px) {
		.form {
			padding: 1.25rem;
		}

		.grid {
			grid-template-columns: 1fr;
		}
	}
`;

const Contact = () => {
	const form = useRef();
	const [status, setStatus] = useState(null);
	const [sending, setSending] = useState(false);

	const sendEmail = async (event) => {
		event.preventDefault();
		setSending(true);

		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
			setStatus({ severity: "success", message: "Thanks! Your message has been sent." });
			form.current.reset();
		} catch (error) {
			setStatus({
				severity: "error",
				message: "Something went wrong. Please email me directly instead.",
			});
		} finally {
			setSending(false);
		}
	};

	return (
		<Section
			id="contact"
			eyebrow="Get in touch"
			title="Contact me"
			subtitle="Have a role, a project, or a question? Send me a note."
		>
			<ContactStyles>
				<Box component="form" ref={form} onSubmit={sendEmail} className="form">
					<div className="grid">
						<TextField
							required
							variant="filled"
							label="Name"
							type="text"
							name="fullName"
							autoComplete="name"
						/>
						<TextField
							required
							variant="filled"
							label="Email"
							type="email"
							name="email"
							autoComplete="email"
						/>
						<TextField
							className="full"
							variant="filled"
							label="Phone number (optional)"
							type="tel"
							name="phone"
							autoComplete="tel"
						/>
						<TextField
							required
							className="full"
							variant="filled"
							label="Message"
							name="message"
							multiline
							minRows={4}
						/>
					</div>

					<div className="actions">
						<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={sending}
							endIcon={<SendIcon />}
						>
							{sending ? "Sending…" : "Send"}
						</Button>
					</div>
				</Box>

				<Snackbar
					open={Boolean(status)}
					autoHideDuration={6000}
					onClose={() => setStatus(null)}
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				>
					<Alert
						severity={status?.severity}
						variant="filled"
						onClose={() => setStatus(null)}
					>
						{status?.message}
					</Alert>
				</Snackbar>
			</ContactStyles>
		</Section>
	);
};

export default Contact;
