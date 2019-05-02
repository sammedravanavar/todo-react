export function users(defaultStore=[],action){
    switch(action.type){
        case "FETCH_USERS":
            return action.response;
        default: return defaultStore;
    }
    
}