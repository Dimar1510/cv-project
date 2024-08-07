import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultEducations } from "../components/DefaultData";
import { IEducation, IProfession, IResume } from "./types";
import { clearAll, importAll, revertAll } from "./useActions";

const initialState = {
  education: defaultEducations,
};

const clearState: { education: IEducation[] } = {
  education: [],
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action: PayloadAction<IEducation>) => {
      state.education.push(action.payload);
    },
    editEducation: (state, action: PayloadAction<IEducation>) => {
      const existItem = action.payload;
      const educationItem = state.education.find(
        (item) => item.id === existItem.id
      );
      if (educationItem) {
        for (const key in educationItem) {
          educationItem[key as keyof IEducation] =
            existItem[key as keyof IEducation];
        }
      }
    },
    deleteEducation: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.education = state.education.filter((item) => item.id !== id);
    },
  },
  selectors: {
    selectEducation: (state) => state.education,
  },
  extraReducers: (builder) =>
    builder
      .addCase(revertAll, () => initialState)
      .addCase(clearAll, () => clearState)
      .addCase(importAll.type, (state, action: PayloadAction<IResume>) => {
        state.education = action.payload.education;
      }),
});

export const educationReducer = educationSlice.reducer;
export const educationActions = educationSlice.actions;
export const { selectEducation } = educationSlice.selectors;
