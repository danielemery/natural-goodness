import { push } from 'react-router-redux';

export const navigate = (path) => {
    return dispatch =>  {
        dispatch(push(path));
    }
}
