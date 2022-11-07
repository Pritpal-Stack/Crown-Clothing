import { CATEGORY_TYPES } from "./category.types";

const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORY_TYPES.FETCH_CATEGORY_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORY_TYPES.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            }
        case CATEGORY_TYPES.FETCH_CATEGORY_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }

}