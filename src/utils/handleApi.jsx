import axios from "axios";
export async function getShows() {
  try {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
    return response.data;
  } catch (error) {
    console.error('Error fetching shows: ', error);
    return [];
  }
}

export async function getShowSummary(id) {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`);
    return response.data.summary;
  } catch (error) {
    console.error('Error fetching show summary: ', error);
    return '';
  }
}

