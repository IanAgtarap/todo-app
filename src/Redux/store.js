// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducer from "./reducer";

// const store = configureStore({reducer: reducer});
const store = createStore(reducer);

export default store;
