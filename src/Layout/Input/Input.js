import React from "react";
import { localTheme } from "../../theme";
import { inputStyles, checkboxWrapperStyles } from "./Input.styles";
import { Check } from "../../svg/Check";
import { Label } from "../Label";

function Input({
	className,
	children,
	size = "default",
	type = "text",
	success,
	error,
	label,
	theme = localTheme,
	...props
}) {
	if ((type === "checkbox") | (type === "radio")) {
		return (
			<div css={checkboxWrapperStyles(theme, type, size)}>
				<input
					type={type}
					className={className}
					css={inputStyles(
						theme,
						type,
						size,
						props.disabled,
						success,
						error,
					)}
					{...props}
				/>
				{type === "checkbox" ? <Check /> : <em />}
				{label && <Label htmlFor={props.id}>{label}</Label>}
			</div>
		);
	}

	return (
		<>
			{label && <Label htmlFor={props.id}>{label}</Label>}
			<input
				type={type}
				className={className}
				css={inputStyles(
					theme,
					type,
					size,
					props.disabled,
					success,
					error,
				)}
				{...props}
			/>
		</>
	);
}

export { Input };
