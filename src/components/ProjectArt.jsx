import React from "react";

const Scene = ({ tone, children }) => (
	<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="presentation">
		<rect width="800" height="500" fill={tone} />
		{children}
	</svg>
);

const FamilyBookClubArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<linearGradient id="fbc-glow" x1="0.2" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor={highlight} stopOpacity="0.45" />
				<stop offset="100%" stopColor={tone} stopOpacity="0" />
			</linearGradient>
			<linearGradient id="fbc-page" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor="#fff6ea" />
				<stop offset="100%" stopColor="#e8d7bc" />
			</linearGradient>
			<linearGradient id="fbc-table" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#5a3d2a" />
				<stop offset="100%" stopColor="#3a2418" />
			</linearGradient>
			<radialGradient id="fbc-lamp" cx="0.5" cy="0.15" r="0.9">
				<stop offset="0%" stopColor={highlight} stopOpacity="0.7" />
				<stop offset="100%" stopColor={highlight} stopOpacity="0" />
			</radialGradient>
		</defs>
		<ellipse cx="560" cy="70" rx="260" ry="170" fill="url(#fbc-glow)" />
		<ellipse cx="640" cy="180" rx="160" ry="160" fill="url(#fbc-lamp)" />
		<rect x="78" y="70" width="52" height="218" rx="4" fill="#5c211b" />
		<rect x="138" y="48" width="44" height="240" rx="4" fill={accent} />
		<rect x="190" y="92" width="40" height="196" rx="4" fill="#4d5b43" />
		<rect x="238" y="62" width="48" height="226" rx="4" fill="#b0894f" />
		<rect x="78" y="70" width="8" height="218" fill="#f3e4d2" opacity="0.18" />
		<rect x="138" y="48" width="7" height="240" fill="#f3e4d2" opacity="0.18" />
		<rect x="190" y="92" width="6" height="196" fill="#f3e4d2" opacity="0.18" />
		<rect x="238" y="62" width="8" height="226" fill="#f3e4d2" opacity="0.18" />
		<g transform="translate(348,158)">
			<circle cx="0" cy="18" r="28" fill="#f3d7c4" />
			<ellipse cx="0" cy="78" rx="42" ry="36" fill={accent} />
			<circle cx="92" cy="0" r="32" fill="#e8c4a8" />
			<ellipse cx="92" cy="68" rx="50" ry="40" fill="#7a2e24" />
			<circle cx="188" cy="22" r="26" fill="#f0d2b4" />
			<ellipse cx="188" cy="78" rx="40" ry="34" fill="#4d5b43" />
		</g>
		<rect x="70" y="288" width="660" height="160" rx="18" fill="url(#fbc-table)" />
		<rect x="70" y="288" width="660" height="18" rx="8" fill="#6b4a32" />
		<g transform="translate(612,158)">
			<rect x="46" y="86" width="14" height="44" rx="4" fill="#2a1c14" />
			<ellipse cx="53" cy="80" rx="38" ry="12" fill={highlight} opacity="0.85" />
			<ellipse cx="53" cy="72" rx="22" ry="8" fill="#f4e4c4" />
			<rect x="46" y="78" width="14" height="12" fill="#c9a56a" />
		</g>
		<g transform="translate(118,318)">
			<rect width="118" height="18" rx="3" fill="#4d5b43" />
			<rect y="18" width="118" height="18" rx="3" fill={accent} />
			<rect y="36" width="118" height="18" rx="3" fill="#b0894f" />
			<rect y="54" width="118" height="16" rx="3" fill="#5c211b" />
			<rect x="4" y="2" width="8" height="66" fill="#f4f1e4" opacity="0.2" />
		</g>
		<g transform="translate(290,300)">
			<rect x="96" y="8" width="28" height="118" rx="4" fill="#7a2e24" />
			<path d="M0 18 C 70 8, 70 8, 96 18 L 96 126 C 70 114, 70 114, 0 126 Z" fill="url(#fbc-page)" />
			<path d="M124 18 C 150 8, 150 8, 220 18 L 220 126 C 150 114, 150 114, 124 126 Z" fill="url(#fbc-page)" />
			<line x1="24" y1="40" x2="80" y2="36" stroke={tone} strokeOpacity="0.28" strokeWidth="3" />
			<line x1="22" y1="56" x2="82" y2="52" stroke={tone} strokeOpacity="0.22" strokeWidth="3" />
			<line x1="26" y1="72" x2="78" y2="68" stroke={tone} strokeOpacity="0.2" strokeWidth="3" />
			<line x1="140" y1="36" x2="200" y2="40" stroke={tone} strokeOpacity="0.28" strokeWidth="3" />
			<line x1="138" y1="52" x2="202" y2="56" stroke={tone} strokeOpacity="0.22" strokeWidth="3" />
			<line x1="142" y1="68" x2="196" y2="72" stroke={tone} strokeOpacity="0.2" strokeWidth="3" />
		</g>
		<rect x="250" y="446" width="300" height="6" rx="3" fill={highlight} opacity="0.7" />
	</Scene>
);

const BuffbudArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<linearGradient id="bb-wall" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor={highlight} stopOpacity="0.35" />
				<stop offset="55%" stopColor={accent} stopOpacity="0.2" />
				<stop offset="100%" stopColor="#8a6bb8" stopOpacity="0.25" />
			</linearGradient>
		</defs>
		<rect x="180" y="40" width="200" height="420" fill="url(#bb-wall)" opacity="0.9" />
		<rect x="420" y="40" width="200" height="420" fill="#6b5a9a" opacity="0.18" />
		<g transform="translate(250,70)">
			<rect width="300" height="360" rx="48" fill={accent} />
			<rect x="18" y="18" width="264" height="324" rx="36" fill="#2a4f48" />
			<rect x="40" y="48" width="220" height="170" rx="24" fill="#14332e" />
			<ellipse cx="150" cy="150" rx="78" ry="70" fill="#f3d7a0" />
			<ellipse cx="150" cy="168" rx="70" ry="52" fill="#fff6e4" />
			<ellipse cx="92" cy="118" rx="28" ry="34" fill="#f3d7a0" />
			<ellipse cx="208" cy="118" rx="28" ry="34" fill="#f3d7a0" />
			<circle cx="128" cy="148" r="8" fill="#1a1a14" />
			<circle cx="172" cy="148" r="8" fill="#1a1a14" />
			<ellipse cx="150" cy="176" rx="16" ry="10" fill="#e07050" />
			<rect x="70" y="240" width="160" height="18" rx="9" fill={tone} opacity="0.45" />
			<circle cx="80" cy="300" r="16" fill={highlight} />
			<circle cx="220" cy="300" r="16" fill={highlight} />
			<rect x="118" y="284" width="64" height="32" rx="8" fill="#1a2e2a" />
		</g>
	</Scene>
);

const SlimeSlayerArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<linearGradient id="ss-glow" x1="0.5" y1="1" x2="0.5" y2="0">
				<stop offset="0%" stopColor={accent} stopOpacity="0.15" />
				<stop offset="100%" stopColor={highlight} stopOpacity="0.35" />
			</linearGradient>
		</defs>
		<polygon points="400,70 690,220 400,370 110,220" fill="url(#ss-glow)" />
		<polygon points="400,110 620,220 400,330 180,220" fill="#241012" />
		<polygon points="400,150 560,220 400,290 240,220" fill="#4a1e18" />
		<g fill={highlight} opacity="0.85">
			<polygon points="560,90 600,112 560,134 520,112" />
			<polygon points="620,150 656,170 620,190 584,170" />
			<polygon points="200,120 236,140 200,160 164,140" />
			<polygon points="160,200 196,220 160,240 124,220" />
		</g>
		<g transform="translate(400,210)">
			<rect x="-28" y="10" width="56" height="70" rx="10" fill={accent} />
			<circle cy="-8" r="22" fill="#f3d7c4" />
			<rect x="-30" y="-44" width="60" height="16" rx="4" fill="#6b1c28" />
			<rect x="-10" y="-62" width="20" height="22" rx="4" fill="#6b1c28" />
			<rect x="18" y="-20" width="14" height="70" rx="4" fill={highlight} />
			<rect x="-46" y="24" width="18" height="50" rx="4" fill="#4a1418" />
			<rect x="-16" y="78" width="14" height="36" rx="4" fill="#2a1012" />
			<rect x="4" y="78" width="14" height="36" rx="4" fill="#2a1012" />
		</g>
		<ellipse cx="400" cy="390" rx="160" ry="18" fill="#000" opacity="0.35" />
	</Scene>
);

const FantasyArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<linearGradient id="ff-field" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#2a4a32" />
				<stop offset="100%" stopColor={tone} />
			</linearGradient>
		</defs>
		<rect x="80" y="70" width="640" height="360" rx="18" fill="url(#ff-field)" />
		{[130, 190, 250, 310, 370].map((y) => (
			<line
				key={y}
				x1="110"
				x2="690"
				y1={y}
				y2={y}
				stroke="#f4f1e4"
				strokeOpacity="0.18"
				strokeWidth="3"
			/>
		))}
		<line x1="400" y1="70" x2="400" y2="430" stroke="#f4f1e4" strokeOpacity="0.28" strokeWidth="3" />
		<g transform="translate(430,210)">
			<ellipse cx="86" cy="78" rx="70" ry="52" fill="#1a2420" />
			<ellipse cx="86" cy="70" rx="64" ry="48" fill="#245838" />
			<rect x="78" y="22" width="16" height="28" rx="4" fill="#c9d4c4" />
			<rect x="52" y="48" width="68" height="10" rx="3" fill="#c9d4c4" />
			<rect x="46" y="62" width="80" height="8" rx="3" fill="#9aa89a" />
			<rect x="50" y="78" width="72" height="8" rx="3" fill="#9aa89a" />
		</g>
		<g transform="translate(168,248)">
			<ellipse cx="70" cy="58" rx="78" ry="48" fill="#6b3a1c" />
			<ellipse cx="70" cy="52" rx="70" ry="42" fill="#8a4a24" />
			<path
				d="M18 52 C 40 38, 100 38, 122 52"
				fill="none"
				stroke="#e8d2b0"
				strokeWidth="4"
			/>
			{[0, 1, 2, 3].map((i) => (
				<line
					key={i}
					x1={48 + i * 12}
					y1="40"
					x2={48 + i * 12}
					y2="64"
					stroke="#e8d2b0"
					strokeWidth="3"
				/>
			))}
		</g>
		<g transform="translate(300,150)">
			<rect width="150" height="190" rx="8" fill="#d9c9a0" />
			<rect x="10" y="10" width="130" height="170" rx="4" fill="#f4f1e4" />
			<rect x="22" y="28" width="90" height="8" rx="4" fill={tone} opacity="0.45" />
			<rect x="22" y="48" width="106" height="6" rx="3" fill="#2a332c" opacity="0.25" />
			<rect x="22" y="64" width="96" height="6" rx="3" fill="#2a332c" opacity="0.25" />
			<rect x="22" y="80" width="88" height="6" rx="3" fill="#2a332c" opacity="0.25" />
			<rect x="22" y="110" width="70" height="6" rx="3" fill={accent} opacity="0.55" />
			<rect x="54" y="148" width="50" height="10" rx="3" fill="#2a332c" opacity="0.35" />
			<rect x="118" y="-8" width="22" height="36" rx="3" fill={highlight} />
		</g>
	</Scene>
);

const GenericArt = ({ title, tone, accent, highlight }) => (
	<Scene tone={tone}>
		<circle cx="400" cy="250" r="160" fill={accent} opacity="0.15" />
		<circle cx="400" cy="250" r="90" fill={highlight} opacity="0.2" />
		<text
			x="400"
			y="278"
			textAnchor="middle"
			fill={accent}
			fontSize="120"
			fontWeight="800"
			fontFamily="system-ui, sans-serif"
		>
			{(title || "?").charAt(0)}
		</text>
	</Scene>
);

const ART = {
	"family-book-club": FamilyBookClubArt,
	"football-fantasy-manager": FantasyArt,
	buffbud: BuffbudArt,
	"slime-slayer": SlimeSlayerArt,
};

const ProjectArt = ({ project }) => {
	const Art = ART[project.id] || GenericArt;
	return <Art {...project} />;
};

export default ProjectArt;
