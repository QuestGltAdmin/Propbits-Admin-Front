import { createSlice } from "@reduxjs/toolkit";

const isAuthenticated = localStorage.getItem("isAuthenticated");
const userRole = localStorage.getItem("userRole");
const userData = localStorage.getItem("userData");
const sellData = localStorage.getItem("sellData");
const purposeFilter = localStorage.getItem("purposeFilter");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuthenticated: !!isAuthenticated ? true : false,
    userRole: !!userRole ? userRole : "",
    user: !!userData ? JSON.parse(userData) : {},
    sellData: !!sellData ? JSON.parse(sellData) : {},
    errorMsg: "",
    modelState: false,
    purposeFilter: !!purposeFilter ? purposeFilter : "",
    filterObj : {},
    resetFilter : 1
  },

  reducers: {
    loginSaga: (state, action) => {
      return { ...state };
    },

    userLoginSaga: (state, action) => {
      return { ...state };
    },
    userLoginSagaCustomer: (state, action) => {
      return { ...state };
    },
    userLoginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    userloginSuccess: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        userRole: action.payload.user_role,
      };
    },

    userLoginFail: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        errorMsg: action.payload,
      };
    },

    modelOpen: (state, action) => {
      return {
        ...state,
        modelState: action.payload,
      };
    },

    logout: (state) => {
     const temp =  localStorage.getItem("purposeFilter");
     const selectedCurrency =  localStorage.getItem("selectedCurrency");
      localStorage.clear();
     temp && localStorage.setItem("purposeFilter", temp);
     selectedCurrency && localStorage.setItem("selectedCurrency", selectedCurrency);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errorMsg: "",
        user: {},
      };
    },

    sellPropertyObj: (state, action) => {
      localStorage.setItem("sellData", JSON.stringify(action.payload));
      console.log("action.payload", action.payload);

      return {
        ...state,
        sellData: action.payload,
      };
    },

    purposeFilterObj: (state, action) => {
     
      localStorage.setItem("purposeFilter", action.payload);
      return {
        ...state,
        purposeFilter: action.payload,
      };
    },

    filterListing : (state , action) => {
      return {
        ...state,
        filterObj: action.payload,
      };
    },
    setReset : (state , action) => {
      return {
        ...state,
        resetFilter: action.payload,
      };
    }
  },
});

export const {
  logout,
  userLoginSaga,
  userLoginStart,
  userloginSuccess,
  userLoginFail,
  sellPropertyObj,
  modelOpen,
  purposeFilterObj,
  filterListing,
  setReset
} = authSlice.actions;

export default authSlice.reducer;
