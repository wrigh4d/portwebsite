import React from "react";
import styled from "styled-components";

const AboutItemStyles = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-top: 1.5rem;
	position: relative;
	.title {
		display: flex;
		width: 100%;
		max-width: 20%;
		font-size: 2.4rem;
	}
	.items {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.item {
		background-color: #2a2a2a;
		padding: 0.9rem;
		border-radius: 8px;
	}
	@media only screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.2rem;
		.items {
			display: flex;
			flex-wrap: wrap;
			position: initial;
			gap: 1rem;
		}
		.item {
			font-size: 1rem;
		}
		.title {
			width: 100%;
			max-width: 100%;
			font-size: 1.6rem;
		}
	}
`;

export default function AboutInfoItem({
	title = "this is title",
	items = ["HTML", "CSS", "JS"],
}) {
	return (
		<AboutItemStyles>
			<p className="title">{title}</p>
			<div className="items">
				{items.map((item, index) => (
					<div className="item" key={index}>
						<p>{item}</p>
					</div>
				))}
			</div>
		</AboutItemStyles>
	);
}
