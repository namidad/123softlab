export const addSkywalkers = (skywalkers) => {
    return( dispatch, getState) => {
        dispatch({type: 'ADD_SKYWALKERS', skywalkers})
    }
}

export const deleteSkywalker = (name) => {
    return( dispatch, getState) => {
        dispatch({type: 'DELETE_SKYWALKER', name})
    }
}