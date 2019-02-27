const initialState = {
    skywalkersList: [],
    fetched: false,
}

const skywalkersReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_SKYWALKERS' :
            state = {
                skywalkersList: action.skywalkers.results,
                fetched: true,
            }
            return state;
        case 'DELETE_SKYWALKER' :
            state = {
                skywalkersList: [...state.skywalkersList.filter(sky => sky.name!==action.name)],
                fetched: true,
            }
            return state;
        default:
        return state
    }
}

export default skywalkersReducer