import axios from "axios";

export const fetchFlights = async (query, date) => {
	try {
		const response = await axios.request({
			method: "GET",
			url: "https://sky-scanner3.p.rapidapi.com/flights/auto-complete",
			params: {
				query: query,
				outboundDate: date.toISOString().split("T")[0],
			},
			headers: {
				"x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
				"x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
			},
		});
		return response.data.data || [];
	} catch (err) {
		console.error("API error:", err);
		throw new Error("Failed to fetch flight data.");
	}
};

// API KEY: ed850ac38emsh17c1628f50d0029p1fa1e3jsn92c7e253c801