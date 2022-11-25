import { useState } from "react";

const fetchApi = () => { 
        const [isLoaded, setLoaded] = useState(false);

        const fetchMovies = () => {
        try {
        const response = fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=2fbc7db510c512abbad3f7536a5c4f5b&page=1`
        );
        if (!response.ok) {
            setLoaded(false);
            throw new Error(response.status);
        } else {
            return response.json();
        }
        } catch (err) {
        setLoaded(false);
        return console.log(err);
        }
    };
};

export default fetchApi;