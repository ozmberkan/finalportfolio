import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebase";
import toast from "react-hot-toast";

const initialState = {
  projects: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const getAllProjects = createAsyncThunk(
  "projects/getAllProjects",
  async () => {
    try {
      const projectsRef = collection(db, "projects");
      const projectsData = await getDocs(projectsRef);
      const data = projectsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    } catch (error) {
      toast.error("Hata !" + error);
    }
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllProjects.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = "Projeler çağırılırken bir hata ile karşılaşıldı.";
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.projects = action.payload;
      });
  },
});

export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
