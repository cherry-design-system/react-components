import React from "react";
import { localTheme } from "../../../theme";
import { rowStyles } from "./Row.styles";

export class Row extends React.Component {
	render() {
		const {
			id,
			className,
			children,
			alignItems,
			justifyContent,
			gutterXs = "default",
			gutterSm,
			gutterMd,
			gutterLg,
			gutterXl,
			gutterXxl,
			gutterXxxl,
			theme = localTheme,
		} = this.props;
		return (
			<div
				css={rowStyles(
					theme,
					alignItems,
					justifyContent,
					gutterXs,
					gutterSm,
					gutterMd,
					gutterLg,
					gutterXl,
					gutterXxl,
					gutterXxxl,
				)}
				id={id}
				className={className}
				data-row
			>
				{children}
			</div>
		);
	}
}

export default Row;
