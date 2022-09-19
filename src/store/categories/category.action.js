import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORY_TYPES } from "./category.types"

export const setCategories = (categoriesArray) => createAction(CATEGORY_TYPES.SET_CATEGORY, categoriesArray) 