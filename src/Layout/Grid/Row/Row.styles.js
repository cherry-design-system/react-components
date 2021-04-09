import { css } from "@emotion/react";
import { mq, Breakpoints } from "../../../mq";

const row = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const defaultGutter = (theme) => css`
	margin-right: ${theme.spacing.marginRow.default};
	margin-left: ${theme.spacing.marginRow.default};

	& .col {
		padding-right: ${theme.spacing.gutterCol.default};
		padding-left: ${theme.spacing.gutterCol.default};
	}
`;

const mediumGutter = (theme) => css`
	margin-right: ${theme.spacing.marginRow.medium};
	margin-left: ${theme.spacing.marginRow.medium};

	& .col {
		padding-right: ${theme.spacing.gutterCol.medium};
		padding-left: ${theme.spacing.gutterCol.medium};
	}
`;

const bigGutter = (theme) => css`
	margin-right: ${theme.spacing.marginRow.big};
	margin-left: ${theme.spacing.marginRow.big};

	& .col {
		padding-right: ${theme.spacing.gutterCol.big};
		padding-left: ${theme.spacing.gutterCol.big};
	}
`;

export const rowStyles = (
	theme,
	alignItems,
	justifyContent,
	gutterXs = "default",
	gutterSm,
	gutterMd,
	gutterLg,
	gutterXl,
	gutterXxl,
	gutterXxxl,
) => css`
	${row}
	${alignItems === "stretch" &&
	css`
		align-items: stretch;
	`}

	${alignItems === "center" &&
	css`
		align-items: center;
	`}

	${alignItems === "flex-start" &&
	css`
		align-items: flex-start;
	`}

	${alignItems === "flex-end" &&
	css`
		align-items: flex-end;
	`}

	${alignItems === "baseline" &&
	css`
		align-items: baseline;
	`}

	${alignItems === "initial" &&
	css`
		align-items: initial;
	`}

	${justifyContent === "flex-start" &&
	css`
		justify-content: flex-start;
	`}

	${justifyContent === "flex-end" &&
	css`
		justify-content: flex-end;
	`}

	${justifyContent === "center" &&
	css`
		justify-content: center;
	`}

	${justifyContent === "space-between" &&
	css`
		justify-content: space-between;
	`}

	${justifyContent === "space-around" &&
	css`
		justify-content: space-around;
	`}

	${justifyContent === "initial" &&
	css`
		justify-content: initial;
	`}

	${gutterXs === "default" &&
	css`
		${mq(Breakpoints.xs)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterXs === "medium" &&
	css`
		${mq(Breakpoints.xs)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterXs === "big" &&
	css`
		${mq(Breakpoints.xs)} {
			${bigGutter(theme)};
		}
	`}

	${gutterSm === "default" &&
	css`
		${mq(Breakpoints.sm)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterSm === "medium" &&
	css`
		${mq(Breakpoints.sm)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterSm === "big" &&
	css`
		${mq(Breakpoints.sm)} {
			${bigGutter(theme)};
		}
	`}

	${gutterMd === "default" &&
	css`
		${mq(Breakpoints.md)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterMd === "medium" &&
	css`
		${mq(Breakpoints.md)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterMd === "big" &&
	css`
		${mq(Breakpoints.md)} {
			${bigGutter(theme)};
		}
	`}

	${gutterLg === "default" &&
	css`
		${mq(Breakpoints.lg)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterLg === "medium" &&
	css`
		${mq(Breakpoints.lg)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterLg === "big" &&
	css`
		${mq(Breakpoints.lg)} {
			${bigGutter(theme)};
		}
	`}

	${gutterXl === "default" &&
	css`
		${mq(Breakpoints.xl)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterXl === "medium" &&
	css`
		${mq(Breakpoints.xl)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterXl === "big" &&
	css`
		${mq(Breakpoints.xl)} {
			${bigGutter(theme)};
		}
	`}

	${gutterXxl === "default" &&
	css`
		${mq(Breakpoints.xxl)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterXxl === "medium" &&
	css`
		${mq(Breakpoints.xxl)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterXxl === "big" &&
	css`
		${mq(Breakpoints.xxl)} {
			${bigGutter(theme)};
		}
	`}

	${gutterXxxl === "default" &&
	css`
		${mq(Breakpoints.xxxl)} {
			${defaultGutter(theme)};
		}
	`}
	${gutterXxxl === "medium" &&
	css`
		${mq(Breakpoints.xxxl)} {
			${mediumGutter(theme)};
		}
	`}
	${gutterXxxl === "big" &&
	css`
		${mq(Breakpoints.xxxl)} {
			${bigGutter(theme)};
		}
	`}
`;
