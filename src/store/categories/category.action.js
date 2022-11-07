import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORY_TYPES } from "./category.types"
 

export const fetchCategoriesStart = () =>  createAction(CATEGORY_TYPES.FETCH_CATEGORY_START)// no need of playload 
export const fetchCategoriesSuccess = (categoriesArray) =>  createAction(CATEGORY_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray)
export const fetchCategoriesFailed = (error) =>  createAction(CATEGORY_TYPES.FETCH_CATEGORY_FAILED, error)