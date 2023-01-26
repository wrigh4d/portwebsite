import React from "react";
import styled from "styled-components";

const AboutItemStyles = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 1rem;
    position: relative;
	.title {
		font-size: 2.4rem;
	}
	.items {
		display: flex;
		gap: 1rem;
		position: absolute;
		left: 15rem;
	}
	.item {
		background-color: #2a2a2a;
		padding: .9rem;
		border-radius: 8px;
	}
	@media only screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		.items {
			position: initial;
			gap: 1rem;
		}
		.title {
			font-size: 2rem;
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
