import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "game",
    initialState: {
        currentUser: null,
        currentUserHighestScore: null,
        currentUserGames: [],
        topTenBestGames: [],
    },
    reducers: {
        userLogin: (state, action) => {
            state.currentUser = action.payload;
        },
        userLogout: (state) => {
            state.currentUser = null;
            state.currentUserHighestScore = null;
            state.currentUserGames = [];
            state.topTenBestGames = [];
            state.isFetching = false;
        },
        setUserGames: (state, action) => {
            state.currentUserGames = action.payload;
        },
        addUserGame: (state, action) => {
            state.currentUserGames.push(action.payload);
            console.log(action.payload.score , state.currentUserHighestScore)
            if (action.payload.score > state.currentUserHighestScore) {
                state.currentUserHighestScore = action.payload.score;
            }
        },
        setHighestScore: (state, action) => {
            state.currentUserHighestScore = action.payload;

        },
        setBestGames: (state, action) => {
            state.topTenBestGames = action.payload;

        },
    }
});


export const {
    userLogin,
    userLogout,
    setBestGames,
    setUserGames,
    addUserGame,
    setHighestScore
} = userSlice.actions;
export default userSlice.reducer;
