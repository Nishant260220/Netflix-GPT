import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMoives: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMoives, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;