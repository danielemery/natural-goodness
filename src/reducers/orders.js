/** Begin adding the order (client side) */
export const START_ADD_ORDER = 'orders/START_ADD_ORDER';
/** Cancel adding the order */
export const CANCEL_ADD_ORDER = 'orders/CANCEL_ADD_ORDER';
/** Add the order (optimistic) */
export const ADD_ORDER = 'orders/ADD_ORDER';
/** Order added on server side - confirm */
export const ORDER_ADDED = 'orders/ORDER_ADDED';
/** Order add failed on server side - delete on client and show error */
export const ORDER_ADD_FAILED  = 'orders/ORDER_ADD_FAILED'

const initialState = {
    orders: [],
    adding: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case START_ADD_ORDER:
            return {
                ...state,
                adding: true
            }
        case CANCEL_ADD_ORDER:
            return {
                ...state,
                adding: false
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    action.order
                ],
                adding: false
            }
        case ORDER_ADDED:
            return {
                ...state,
                orders: state.orders.map((item) => {
                    if(action.id !== item.id) {
                        return item;
                    }
                    return {
                        ...item,
                        confirmed: true
                    }
                })
            }
        default:
            return state;
    }
}

export const startAddOrder = () => {
    return dispatch =>  {
        dispatch({
            type: START_ADD_ORDER
        });
    }
}

export const cancelAddOrder = () => {
    return dispatch => {
        dispatch({
            type: CANCEL_ADD_ORDER
        });
    }
}

export const addOrder = (order) => {
    return dispatch => {
        dispatch({
            type: ADD_ORDER,
            order: {
                name: order.name,
                confirmed: false
            }
        });
    }
}

export const confirmOrder = (order) => {
    return dispatch => {
        dispatch({
            type: ORDER_ADDED,
            order: order
        });
    }
}
