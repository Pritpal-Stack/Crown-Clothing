import { call, all, takeLatest, put } from 'redux-saga/effects'
import { getCategoryAndDocuments } from '../../utils/firebase/firebase.utils'
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action'
import { CATEGORY_TYPES } from './category.types'


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield  call(getCategoryAndDocuments,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORY_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([ call(onFetchCategories) ]);
}






// export const fetchCategoriesAsync = () => async (dispatch) =>{
//     dispatch(fetchCategoriesStart());
//     try {
//         const categoriesArray = await getCategoryAndDocuments('categories');
//         dispatch(fetchCategoriesSuccess(categoriesArray))
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error));
//     }
// }