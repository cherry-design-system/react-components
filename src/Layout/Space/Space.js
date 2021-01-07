import React from "react";
import { spaceStyles } from "./Space.styles";

function Space({ size, xs, sm, md, lg, xl, xxl, xxxl, horizontal }) {
	return (
		<div
			css={spaceStyles(size, xs, sm, md, lg, xl, xxl, xxxl, horizontal)}
		/>
	);
}

export { Space };
