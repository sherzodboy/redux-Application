import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articldeDetail: null,
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSucccess: (state, action) => {
      state.isLoading = false;
      state.articldeDetail = action.payload;
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticleFailure,
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSucccess,
} = articleSlice.actions;
export default articleSlice.reducer;
