import { babel } from '@rollup/plugin-babel';
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

export default [
	{
		input: "./src/index.js",

		output: [
			{
				file: "./dist/cherry.js",
				format: "umd",
				name: "CherryGrid",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"@emotion/react": "css",
				},
			},
			{
				file: "./dist/cherry.module.js",
				format: "es",
				name: "CherryGrid",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"@emotion/react": "css",
				},
			},
		],

		plugins: [
			babel({
				exclude: "./node_modules/**",
			}),
			replace({
				"process.env.NODE_ENV": JSON.stringify("development"),
			}),
			resolve(),
			commonjs(),
			terser(),
		],

		external: ["react", "react-dom", "@emotion/react"],
	},
];
