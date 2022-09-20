import { getCategoryAndDocuments } from "../../utils/firebase/firebase.utils"
import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORY_TYPES } from "./category.types"
 

export const fetchCategoriesStart = () =>  createAction(CATEGORY_TYPES.FETCH_CATEGORY_START)
export const fetchCategoriesSuccess = (categoriesArray) =>  createAction(CATEGORY_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray)
export const fetchCategoriesFailed = (error) =>  createAction(CATEGORY_TYPES.FETCH_CATEGORY_FAILED, error)

export const fetchCategoriesAsync = () => async (dispatch) =>{
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoryAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    } 
}