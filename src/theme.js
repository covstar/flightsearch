import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#54156e",
		},
		secondary: {
			main: "#18191b",
		},
		background: {
			default: "#f5f5f5",
		},
	},
	typography: {
		fontFamily: "Open Sans, sans-serif",
	},
});

export default theme;
