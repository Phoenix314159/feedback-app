import axios from 'axios';
import { types } from './types';

export const fetchUser = () => async dispatch => {
    let res = await axios.get('/api/current_user');
    dispatch({
        type: types.FETCH_USER,
        payload: res.data
    })
}

export const fetchAlbums = () => async dispatch => {
    let res = await axios.get('/api/albums');
    dispatch({
        type: types.FETCH_ALBUMS,
        payload: res.data
    })
}
