import { useState, useEffect } from "react";

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

function useGiphy(keyword: string) {
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    async function fetchGifs() {
      try {
        const response = await fetch(
          GIPHY_SEARCH_URL +
            `?api_key=${GIPHY_API_KEY}&q=${keyword.split(" ").join("")}&limit=1`
        );
        const { data } = await response.json();

        setGifUrl(data[0]?.images?.downsized_medium?.url);
      } catch (error: unknown) {
        console.log(error);
        // default gif
        setGifUrl(
          "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
        );
      }
    }

    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
}

export default useGiphy;
