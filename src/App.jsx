import { useEffect, useState } from 'react';
import { client } from './client/client';
import Path from './Path';
import movieListData from './assets/data/movieListData.json';
import Header from './components/Header';

function App() {
    const [popular, setPopular] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    useEffect(() => {
        try {
            const fetchPopularMovies = async () => {
                const response = await client.get('movie/top_rated', {
                    params: {
                        language: 'ko-KR',
                        page: 1,
                    },
                });
                setPopular([...response.data.results]);
            };

            fetchPopularMovies();
        } catch (error) {
            console.error('에러', error);
        }
    }, []);

    useEffect(() => {
        try {
            const fetchNowPlaying = async () => {
                const response = await client.get('movie/now_playing', {
                    params: {
                        language: 'ko-KR',
                        page: 1,
                    },
                });
                setNowPlaying([...response.data.results]);
            };

            fetchNowPlaying();
        } catch (error) {
            console.error('에러', error);
        }
    }, []);

    return (
        <>
            {/* <Header /> */}
            <Path popular={popular} nowPlaying={nowPlaying} />
        </>
    );
}

export default App;
