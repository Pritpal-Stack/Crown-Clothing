import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORY_TYPES } from "./category.types"

export const setCategoryMap = (categoriesMap) => createAction(CATEGORY_TYPES.SET_CATEGORY_MAP, categoriesMap) 