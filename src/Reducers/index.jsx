import { combineReducers } from 'redux';

import Languages from "./Languages/";
import AddProductDetails from "./Products/AddProducts/";
import AddProductCoverImage from "./Products/AddProducts/CoverImage";

export default combineReducers({
    Languages: Languages,
    AddProductDetails: AddProductDetails,
    AddProductCoverImage: AddProductCoverImage,
})