export function todos(defaultStore=[],action){
    switch(action.type){
        case "FETCH_TODOS":
            return action.response;
        default: return defaultStore;
    }
    
}