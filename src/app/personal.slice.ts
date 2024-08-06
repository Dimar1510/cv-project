import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultPersonal } from "../components/DefaultData";
import { IPersonal, IPersonalDetails, IResume } from "./types";
import { clearAll, importAll, revertAll } from "./useActions";

const initialState = {
  personal: defaultPersonal,
};

const clearState: { personal: IPersonal } = {
  personal: {
    details: {
      name: "",
      email: "",
      phone: "",
      address: "",
      specialty: "",
      about: "",
    },

    links: [],
    skills: [],
  },
};

export const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    addLink: (state) => {
      state.personal.links.push("");
    },
    removeLink: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.personal.links.splice(index, 1);
    },
    editLink: (
      state,
      action: PayloadAction<{ value: string; index: number }>
    ) => {
      const value = action.payload.value;
      const index = action.payload.index;
      state.personal.links[index] = value;
    },
    addSkill: (state) => {
      state.personal.skills.push("");
    },
    removeSkill: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.personal.skills.splice(index, 1);
    },
    editSkill: (
      state,
      action: PayloadAction<{ value: string; index: number }>
    ) => {
      const value: string = action.payload.value;
      const index: number = action.payload.index;
      state.personal.skills[index] = value;
    },
    editDetails: (
      state,
      action: PayloadAction<{ value: string; field: keyof IPersonalDetails }>
    ) => {
      const value = action.payload.value;
      const field = action.payload.field;
      state.personal.details[field] = value;
    },
  },
  selectors: {
    selectPersonalDetails: (state) => state.personal.details,
    selectSkills: (state) => state.personal.skills,
    selectLinks: (state) => state.personal.links,
    selectAllPersonal: (state) => state.personal,
  },
  extraReducers: (builder) =>
    builder
      .addCase(revertAll, () => initialState)
      .addCase(clearAll, () => clearState)
      .addCase(importAll.type, (state, action: PayloadAction<IResume>) => {
        state.personal = action.payload.personal;
      }),
});

export const personalReducer = personalSlice.reducer;
export const personalActions = personalSlice.actions;
export const {
  selectSkills,
  selectLinks,
  selectPersonalDetails,
  selectAllPersonal,
} = personalSlice.selectors;
