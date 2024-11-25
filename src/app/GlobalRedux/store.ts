"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice"
import { TypeOf } from "zod";

export const store = configureStore ({
  reducer: {
    counter : counterReducer
  }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;