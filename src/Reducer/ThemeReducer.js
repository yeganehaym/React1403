const initialState = {
    theme: 'light',
    language: 'en',
}

export const ThemeReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_THEME':
            const newState={...state};
            newState.theme=action.payload;
            return newState;
        case 'CHANGE_LANGUAGE':
            return {...state, language: action.payload};
        default:
            return state;
    }
}
