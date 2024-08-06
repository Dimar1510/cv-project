import { bindActionCreators, createAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { personalActions } from "./personal.slice";
import { educationActions } from "./education.slice";
import { professionActions } from "./profession.slice";
import { IResume } from "./types";

const allActions = {
  ...personalActions,
  ...educationActions,
  ...professionActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};

export const revertAll = createAction("REVERT_ALL");
export const clearAll = createAction("CLEAR_ALL");
export const importAll = createAction<IResume>("IMPORT_ALL");
