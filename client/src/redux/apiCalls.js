import axios from "axios";
import {
    userLogin, addUserGame, setBestGames, setHighestScore, setUserGames
} from "./gameRedux";


export const register = async (dispatch, user) => {
    try {
        await axios.post("/auth/register", user);
        await login(dispatch, user)
    } catch (err) {
       errorHandling(err)
    }
}
export const login = async (dispatch, user) => {
    try {
        const res = await axios.post("/auth/login", user);
        const {_id, accessToken} = res.data;
        dispatch(userLogin(res.data));
        axios.defaults.headers.common['token'] = `Bearer ${accessToken}`;
        await Promise.all([
            getGamesByUid(_id, dispatch),
            getUserHighestScore(_id, dispatch),
            getTopTenGames(dispatch)
        ]);
    } catch (err) {
        errorHandling(err)
    }
};


export const getGamesByUid = async (uid, dispatch) => {
    try {
        const res = await axios.get(`/games/${uid}`);
        dispatch(setUserGames(res.data));
    } catch (err) {
        errorHandling(err)
    }
};

export const createGame = async (game, dispatch) => {
    try {
        const res = await axios.post(`/games`, game);
        dispatch(addUserGame(res.data))
        await Promise.all([
            getTopTenGames(dispatch),
        ]);
    } catch (err) {
        errorHandling(err)
    }
};

export const getUserHighestScore = async (uid, dispatch) => {
    try {
        const res = await axios.get(`/scores/${uid}`);
        dispatch(setHighestScore(res.data));
    } catch (err) {
        errorHandling(err)
    }
};

export const getTopTenGames = async (dispatch) => {
    try {
        const res = await axios.get(`/scores`);
        dispatch(setBestGames(res.data));
    } catch (err) {
       errorHandling(err)
    }
};


const errorHandling = (error) => {
    console.error(error);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        // Let the user know that there is a problem with the request
        // by displaying the error message from the server response
        alert(error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        // This can happen if the server is not responding
        console.log(error.request);
        alert('Server is not responding');
    } else {
        // Something else happened while setting up the request
        console.log('Error', error.message);
        alert('An error occurred');
    }

}