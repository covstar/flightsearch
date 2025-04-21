import React, { useState } from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	Grid,
	LinearProgress,
	AppBar,
	Toolbar,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlightCard } from "./components/FlightCard";
import { fetchFlights } from "./api/flights";

const App = () => {
	const [query, setQuery] = useState("");
	const [date, setDate] = useState("");
	const [flights, setFlights] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const searchLocations = async () => {
		setLoading(true);
		setError("");
		setFlights([]);
		try {
			const flightData = await fetchFlights(query, date);
			setFlights(flightData);
			console.log("Flight search response:", flightData);
		} catch (err) {
			setError("Failed to fetch flight data. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<AppBar position="static" sx={{borderRadius: 2, bgcolor: "secondary.main"}}>
				<Toolbar>
					<h1 className="font-bold ">Flight Search</h1>
				</Toolbar>
			</AppBar>
			<Container sx={{ py: 4 }}>
				<Typography variant="body2" color="textSecondary" sx={{ mb: 2, textAlign: "center" }}>
					Enter cities (e.g., London, New York). Google Flights confirms flights
					from London to New York on May 13, 2025.
				</Typography>

				<Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 4 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							label="Origin City"
							onChange={(e) => setQuery(e.target.value)}
							required
							value={query}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<DatePicker
							selected={date}
							onChange={(date) => setDate(date)}
							minDate={new Date()}
							customInput={<TextField fullWidth label="Departure Date" />}
						/>
					</Grid>

					<Grid item xs={12}>
						<Button
							fullWidth
							variant="contained"
							onClick={searchLocations}
							disabled={loading}
						>
							Search Flights
						</Button>
					</Grid>
				</Grid>

				{loading && <LinearProgress />}

				{error && (
					<Typography color="error" sx={{ mb: 2 }}>
						{error}
					</Typography>
				)}

				<FlightCard flights={flights} />
			</Container>
		</>
	);
};

export default App;
