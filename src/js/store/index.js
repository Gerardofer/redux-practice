// ./src/js/store/index.js

import { createStore } from "redux";
import rootRefucer from "../reducers/index";

const store = createStore(rootRefucer);

export default store;
