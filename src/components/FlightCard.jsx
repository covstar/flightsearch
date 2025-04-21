import { Card, Grid, CardContent, Typography } from "@mui/material";

export function FlightCard({ flights }) {
	return (
		<Grid container spacing={2}>
			{flights.map((flight) => (
				<Grid item size={{ md: 6, xs: 12 }} key={flight.id}>
					<Card
						bgcolor="secondary.main"
						sx={{ borderRadius: 2, bgcolor: "secondary.main" }}
					>
						<CardContent>
							<Typography
								variant="h6"
								gutterBottom
								color="#fff"
								sx={{
									fontSize: {
										xs: "1.2rem",
										sm: "1.5rem",
										md: "1.8rem",
									},
									fontWeight: "bold",
								}}
							>
								{flight?.navigation?.localizedName || "Unknown Flight"}
							</Typography>
							<Grid container spacing={1} color="#fff">
								<Grid item size={{ xs: 12 }}>
									<Typography
										variant="body2"
										sx={{
											fontSize: {
												xs: "1rem",
												sm: "1.2rem",
												md: "1.4rem",
											},
											fontWeight: 500,
										}}
									>
										Flight Place:{" "}
										{flight.navigation?.relevantFlightParams?.flightPlaceType ||
											"Unknown Destination"}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											fontSize: {
												xs: "1rem",
												sm: "1.2rem",
												md: "1.4rem",
											},
											fontWeight: 500,
										}}
									>
										Region: {flight.presentation?.subtitle || "Unknown Region"}
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
