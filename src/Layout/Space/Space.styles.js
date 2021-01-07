import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../mq";

const localStyle = (size, horizontal) =>
	horizontal
		? css`
				display: inline-block;
				height: 0;
				width: ${size}px;
		  `
		: css`
				display: block;
				height: ${size}px;
		  `;

const spaceStyles = (size, xs, sm, md, lg, xl, xxl, xxxl, horizontal) => css`
	${size &&
	css`
		${horizontal ? localStyle(size, true) : localStyle(size, false)}
	`}

	${size === "none" &&
	css`
		display: none;
	`}

	${xs &&
	css`
		${mq(Breakpoints.xs)} {
			${horizontal ? localStyle(xs, true) : localStyle(xs, false)}
		}
	`}

	${xs === "none" &&
	css`
		${mq(Breakpoints.xs)} {
			display: none;
		}
	`}

	${sm &&
	css`
		${mq(Breakpoints.sm)} {
			${horizontal ? localStyle(sm, true) : localStyle(sm, false)}
		}
	`}

	${sm === "none" &&
	css`
		${mq(Breakpoints.sm)} {
			display: none;
		}
	`}

	${md &&
	css`
		${mq(Breakpoints.md)} {
			${horizontal ? localStyle(md, true) : localStyle(md, false)}
		}
	`}

	${md === "none" &&
	css`
		${mq(Breakpoints.md)} {
			display: none;
		}
	`}

	${lg &&
	css`
		${mq(Breakpoints.lg)} {
			${horizontal ? localStyle(lg, true) : localStyle(lg, false)}
		}
	`}

	${lg === "none" &&
	css`
		${mq(Breakpoints.lg)} {
			display: none;
		}
	`}

	${xl &&
	css`
		${mq(Breakpoints.xl)} {
			${horizontal ? localStyle(xl, true) : localStyle(xl, false)}
		}
	`}

	${xl === "none" &&
	css`
		${mq(Breakpoints.xl)} {
			display: none;
		}
	`}

	${xxl &&
	css`
		${mq(Breakpoints.xxl)} {
			${horizontal ? localStyle(xxl, true) : localStyle(xxl, false)}
		}
	`}

	${xxl === "none" &&
	css`
		${mq(Breakpoints.xxl)} {
			display: none;
		}
	`}

	${xxxl &&
	css`
		${mq(Breakpoints.xxxl)} {
			${horizontal ? localStyle(xxxl, true) : localStyle(xxxl, false)}
		}
	`}

	${xxxl === "none" &&
	css`
		${mq(Breakpoints.xxxl)} {
			display: none;
		}
	`}
`;

export { spaceStyles };
