import React from "react";
import { localTheme } from "../../../theme";
import { Arrow } from "../../../svg/Arrow";
import { selectWrapperStyles, inputStyles } from "../Input.styles";
import { Label } from "../../Label";

function Select({
	className,
	children,
	size = "default",
	error,
	success,
	label,
	theme = localTheme,
	...props
}) {
	return (
		<>
			{label && <Label htmlFor={props.id}>{label}</Label>}
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
		</>
	);
}

export { Select };
