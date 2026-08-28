import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const tokens = {
	bg: "#0b0d10",
	surface: "#14171c",
	surfaceRaised: "#1c2028",
	border: "#282e38",
	textPrimary: "#e8eaed",
	textSecondary: "#98a2b3",
	accent: "#7aa2f7",
	accentHover: "#9ab8f9",
	accentContrast: "#0b0d10",
	radiusSm: "8px",
	radiusMd: "12px",
	radiusLg: "16px",
	sectionPaddingX: "clamp(1.25rem, 8vw, 10rem)",
	sectionPaddingY: "clamp(3rem, 8vh, 6rem)",
	maxWidth: "1200px",
};

let theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: tokens.bg,
			paper: tokens.surface,
		},
		primary: {
			main: tokens.accent,
			dark: "#5c85e0",
			light: tokens.accentHover,
			contrastText: tokens.accentContrast,
		},
		secondary: {
			main: tokens.surfaceRaised,
			contrastText: tokens.textPrimary,
		},
		text: {
			primary: tokens.textPrimary,
			secondary: tokens.textSecondary,
		},
		divider: tokens.border,
	},
	shape: {
		borderRadius: 12,
	},
	typography: {
		fontFamily: '"Sofia Sans", system-ui, -apple-system, sans-serif',
		h1: {
			fontSize: "3rem",
			fontWeight: 800,
			letterSpacing: "-0.02em",
		},
		h2: {
			fontSize: "2.25rem",
			fontWeight: 700,
			letterSpacing: "-0.015em",
		},
		h3: { fontWeight: 700 },
		h4: { fontWeight: 600 },
		h5: {
			fontSize: "1.125rem",
			fontWeight: 400,
			lineHeight: 1.7,
			color: tokens.textSecondary,
		},
		h6: { fontWeight: 600, letterSpacing: "0.04em" },
		button: {
			fontWeight: 600,
			letterSpacing: "0.03em",
			textTransform: "none",
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: tokens.radiusSm,
					paddingInline: "1.25rem",
					transition: "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
				},
				containedSecondary: {
					border: `1px solid ${tokens.border}`,
					"&:hover": {
						backgroundColor: tokens.border,
					},
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					backgroundColor: tokens.surfaceRaised,
					borderRadius: tokens.radiusSm,
					"&:hover, &.Mui-focused": {
						backgroundColor: tokens.surfaceRaised,
					},
					"&::before, &::after": {
						borderBottomColor: tokens.border,
					},
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					backgroundColor: tokens.surfaceRaised,
					border: `1px solid ${tokens.border}`,
					fontSize: "0.8rem",
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
