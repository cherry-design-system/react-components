import React from "react";
import { tableOverflowStyles } from "./TableOverflow.styles";

function TableOverflow({ className, children }) {
	return (
		<div className={className} css={tableOverflowStyles}>
			{children}
		</div>
	);
}

export { TableOverflow };
