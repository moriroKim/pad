import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGFmYmRlMzBhNzkzYTQzNDgxNmE1MjlmYjg5MmZjNSIsIm5iZiI6MTcyNDIwODcwMC4yODMzNDEsInN1YiI6IjY2YzU1MDg4NDZkYzkyN2M3ZGQxMmE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VsQjSdwMwsry4eULVQU5QeF_CUFpGVDwHwXddu1sSgA',
    },
});

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
