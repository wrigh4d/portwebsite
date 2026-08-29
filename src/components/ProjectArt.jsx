import React from "react";

const Scene = ({ tone, children }) => (
	<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="presentation">
		<rect width="800" height="500" fill={tone} />
		{children}
	</svg>
);

const FlashcardArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<linearGradient id="fc-glow" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor={accent} stopOpacity="0.35" />
				<stop offset="100%" stopColor={tone} stopOpacity="0" />
			</linearGradient>
			<linearGradient id="fc-portrait" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor={highlight} />
				<stop offset="100%" stopColor={accent} />
			</linearGradient>
		</defs>
		<ellipse cx="520" cy="80" rx="280" ry="180" fill="url(#fc-glow)" />
		<g transform="translate(150,90) rotate(-10)">
			<rect width="200" height="260" rx="22" fill="#1a2422" stroke={accent} strokeOpacity="0.35" />
			<rect x="16" y="16" width="168" height="168" rx="14" fill="#243330" />
			<circle cx="100" cy="88" r="36" fill={accent} opacity="0.55" />
			<ellipse cx="100" cy="150" rx="48" ry="28" fill={accent} opacity="0.35" />
		</g>
		<g transform="translate(460,70) rotate(9)">
			<rect width="200" height="260" rx="22" fill="#1a2422" stroke={accent} strokeOpacity="0.35" />
			<rect x="16" y="16" width="168" height="168" rx="14" fill="#243330" />
			<circle cx="100" cy="88" r="36" fill={highlight} opacity="0.55" />
			<ellipse cx="100" cy="150" rx="48" ry="28" fill={highlight} opacity="0.35" />
		</g>
		<g transform="translate(300,55)">
			<rect width="220" height="290" rx="24" fill="#24382f" stroke={accent} strokeWidth="2" />
			<rect x="16" y="16" width="188" height="188" rx="16" fill="url(#fc-portrait)" />
			<circle cx="110" cy="96" r="42" fill={tone} opacity="0.35" />
			<circle cx="110" cy="88" r="28" fill="#f3e4d2" />
			<ellipse cx="110" cy="168" rx="58" ry="34" fill="#3d6b5c" />
			<rect x="28" y="224" width="120" height="10" rx="5" fill={accent} opacity="0.5" />
			<rect x="28" y="246" width="80" height="8" rx="4" fill={accent} opacity="0.3" />
		</g>
	</Scene>
);

const PollinateArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<pattern id="hex" width="56" height="64" patternUnits="userSpaceOnUse">
				<polygon
					points="28,4 50,18 50,46 28,60 6,46 6,18"
					fill="none"
					stroke={accent}
					strokeOpacity="0.18"
				/>
			</pattern>
		</defs>
		<rect width="800" height="500" fill="url(#hex)" />
		<g transform="translate(400,230)">
			<rect x="-120" y="50" width="240" height="160" rx="18" fill="#d9c9a0" />
			<rect x="-96" y="86" width="118" height="90" rx="10" fill="#3d4a42" />
			<rect x="-86" y="96" width="98" height="54" rx="6" fill={highlight} opacity="0.35" />
			<rect x="36" y="108" width="60" height="68" rx="8" fill="#2a332c" />
			<circle cx="66" cy="142" r="10" fill={accent} />
			<g transform="translate(0,-16) scale(1.25)">
				<ellipse cx="-42" cy="-32" rx="32" ry="18" fill="#f4f1e4" opacity="0.9" />
				<ellipse cx="42" cy="-32" rx="32" ry="18" fill="#f4f1e4" opacity="0.9" />
				<ellipse cx="0" cy="0" rx="48" ry="34" fill={highlight} />
				<rect x="-34" y="-20" width="20" height="40" rx="7" fill="#1a1a14" />
				<rect x="14" y="-20" width="20" height="40" rx="7" fill="#1a1a14" />
				<circle cx="-18" cy="-6" r="6" fill="#1a1a14" />
				<circle cx="18" cy="-6" r="6" fill="#1a1a14" />
				<line x1="-12" y1="-32" x2="-26" y2="-60" stroke="#1a1a14" strokeWidth="3.5" />
				<line x1="12" y1="-32" x2="26" y2="-60" stroke="#1a1a14" strokeWidth="3.5" />
				<circle cx="-26" cy="-62" r="5" fill="#1a1a14" />
				<circle cx="26" cy="-62" r="5" fill="#1a1a14" />
			</g>
		</g>
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

const TaxiArt = ({ tone, accent, highlight }) => (
	<Scene tone={tone}>
		<defs>
			<linearGradient id="tx-sky" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor={highlight} />
				<stop offset="55%" stopColor="#4a6a70" />
				<stop offset="100%" stopColor="#e8a060" />
			</linearGradient>
			<linearGradient id="tx-floor" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor="#3a2222" />
				<stop offset="100%" stopColor="#1a1010" />
			</linearGradient>
		</defs>
		<rect x="160" y="40" width="480" height="300" fill="#1a1210" />
		<rect x="200" y="70" width="400" height="250" fill="url(#tx-sky)" />
		<rect x="230" y="160" width="28" height="160" fill="#1a2428" opacity="0.45" />
		<rect x="290" y="130" width="36" height="190" fill="#1a2428" opacity="0.35" />
		<rect x="520" y="140" width="32" height="180" fill="#1a2428" opacity="0.4" />
		<rect y="340" width="800" height="160" fill="url(#tx-floor)" />
		<ellipse cx="400" cy="400" rx="220" ry="28" fill={highlight} opacity="0.15" />
		<g transform="translate(250,250)">
			<rect x="20" y="70" width="260" height="70" rx="16" fill={accent} />
			<path d="M70 70 L110 18 H230 L280 70 Z" fill={accent} />
			<rect x="118" y="28" width="96" height="42" rx="6" fill="#1a2428" opacity="0.55" />
			<circle cx="80" cy="142" r="28" fill="#1a1010" />
			<circle cx="80" cy="142" r="12" fill="#6a5a4a" />
			<circle cx="230" cy="142" r="28" fill="#1a1010" />
			<circle cx="230" cy="142" r="12" fill="#6a5a4a" />
			<rect x="28" y="86" width="18" height="12" rx="3" fill="#f4f1e4" />
			<rect x="256" y="86" width="18" height="12" rx="3" fill="#f4f1e4" />
			<rect x="148" y="4" width="28" height="16" rx="4" fill="#f4f1e4" />
			<text x="150" y="112" fill="#1a1010" fontSize="22" fontWeight="700" fontFamily="system-ui">
				TAXI
			</text>
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
	"football-fantasy-manager": FantasyArt,
	"uwm-flashcard": FlashcardArt,
	pollinate: PollinateArt,
	buffbud: BuffbudArt,
	"slime-slayer": SlimeSlayerArt,
	"crazy-taxi": TaxiArt,
};

const ProjectArt = ({ project }) => {
	const Art = ART[project.id] || GenericArt;
	return <Art {...project} />;
};

export default ProjectArt;
