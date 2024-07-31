import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultProfessions } from "../components/DefaultData";
import { IProfession } from "./types";
import { clearAll, revertAll } from "./useActions";

const initialState = {
  profession: defaultProfessions,
};

const clearState: { profession: IProfession[] } = {
  profession: [],
};

export const professionSlice = createSlice({
  name: "profession",
  initialState,
  reducers: {
    addProfession: (state, action: PayloadAction<IProfession>) => {
      state.profession.push(action.payload);
    },
    editProfession: (state, action: PayloadAction<IProfession>) => {
      const existItem = action.payload;
      const professionItem = state.profession.find(
        (item) => item.id === existItem.id
      );
      if (professionItem) {
        for (const key in professionItem) {
          professionItem[key as keyof IProfession] =
            existItem[key as keyof IProfession];
        }
      }
    },
    deleteProfession: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.profession = state.profession.filter((item) => item.id !== id);
    },
  },
  selectors: {
    selectProfession: (state) => state.profession,
  },
  extraReducers: (builder) =>
    builder
      .addCase(revertAll, () => initialState)
      .addCase(clearAll, () => clearState),
});

export const professionReducer = professionSlice.reducer;
export const professionActions = professionSlice.actions;
export const { selectProfession } = professionSlice.selectors;
