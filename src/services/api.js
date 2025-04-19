import axios from "axios";

const API_URL = "https://cricket-live-line1.p.rapidapi.com";

const HEADERS = {
  "x-rapidapi-key": "ffaac7ab3amsh8f6c91e4e0a87f5p14101cjsn736a354a732d",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
};

export const getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log("API FULL RESPONSE:", response.data);

    if (!response.data?.status || !response.data?.data?.A) {
      throw new Error("Unexpected response format");
    }

    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      lost: team.L,
      points: team.Points || team.pts || team.Pts || 0,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};
