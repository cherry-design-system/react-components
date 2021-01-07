import React from "react";
import { localTheme } from "../../../theme";
import { Arrow } from "../../../svg/Arrow";
import { selectWrapperStyles, inputStyles } from "../Input.styles";

function Select({
	className,
	children,
	size = "default",
	error,
	success,
	theme = localTheme,
	...props
}) {
	return (
		<div css={selectWrapperStyles(theme, size, success, error)}>
			<select
				className={className}
				css={inputStyles(
					theme,
					"text",
					size,
					props.disabled,
					success,
					error,
				)}
				{...props}
			>
				{children}
			</select>
			<Arrow />
		</div>
	);
}

export { Select };
