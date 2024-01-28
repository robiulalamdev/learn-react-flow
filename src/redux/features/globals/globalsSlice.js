import { initialEdges, initialNodes } from "@/lib/datas/nodes-edges";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialNodes: initialNodes || [],
  initialEdges: initialEdges || [],
};

const globalsSlice = createSlice({
  name: "Global slice",
  initialState,
  reducers: {
    setInitialNodes: (state, action) => {
      state.initialNodes = action.payload;
    },
    setInitialEdges: (state, action) => {
      state.initialEdges = action.payload;
    },
  },
});

export const { setInitialNodes, setInitialEdges } = globalsSlice.actions;

export default globalsSlice.reducer;
