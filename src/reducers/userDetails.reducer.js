export function userDetails(defaultStore={},action){
    switch(action.type){
        case "FETCH_USER_DETAILS":
            return action.response;
        default: return defaultStore;
    }
    
}