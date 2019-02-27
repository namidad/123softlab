const initialState = {
    skywalkersList: [],
}

const skywalkersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_SKYWALKERS' :
            state = {
                skywalkersList: action.skywalkers.results,
            }
            return state;
        case 'DELETE_SKYWALKER' :
            console.log(action.name);
            return state;
        default:
        return state
    }
}

export default skywalkersReducer