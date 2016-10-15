export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    }
}