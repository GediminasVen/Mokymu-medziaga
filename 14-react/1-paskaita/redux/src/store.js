import { counterReducer } from "./counterReducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: counterReducer });
