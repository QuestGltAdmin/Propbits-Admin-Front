import { put, call } from "redux-saga/effects";
import { catchHandler } from "../helperSaga";
import {
  userLoginStart,
  userloginSuccess,
  userLoginFail,
} from "../../reducers/authReducer";
import { toast } from "react-hot-toast";
import axiosMain from "../../../http/axios/axios_main";

function* setItemToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// @ note := THis login saga is for connecting the wallet ,
// and not for login the user through API Call

// @ note := THis login saga is for login the user through API Call

export function* userLoginSaga(action) {
  yield put(userLoginStart());
  const { payload, navigate, setDisable } = action.payload;
  try {
    const response = yield axiosMain.post(`/broker`, payload);
    if (response?.data.status) {
      sessionStorage.setItem("jwt", "enable");
      yield call(setItemToLocalStorage, "isAuthenticated", true);
      yield call(
        setItemToLocalStorage,
        "userData",
        JSON.stringify(response.data.data)
      );
      yield put(userloginSuccess(response.data.data));
      if (response.data.status === true) {
        sessionStorage.setItem("jwt", "enable");
        if (response.data.data.user_role === "admin") {
          toast.success("Admin Login successful");
          setTimeout(() => {
            navigate("/admin-dashboard");
          }, 3000);
        } else {
          toast.success("Broker login successful");
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
      }
    } else {
      setDisable(false);
      toast.error(response.data.message);
      yield put(userLoginFail(response.data.message));
    }
  } catch (error) {
    setDisable(false);
    toast.error(error.response.data.message);
    yield call(catchHandler, error, userLoginFail);
  }
}

export function* userLoginSagaCustomer(action) {
  yield put(userLoginStart());
  const { payload, WalletAddress, payloadKey, navigate, setDisable } =
    action.payload;
  try {
    const response = yield axiosMain.post(`/customer`, payload);
    if (response?.data.status) {
      sessionStorage.setItem("jwt", "enable");
      // console.log(WalletAddress, response?.data?.data?.btcWallet);
      if (
        response?.data?.data?.btcPublicKey == true ||
        response?.data?.data?.btcPublicKey == "true"
      ) {
        if (
          WalletAddress?.toLowerCase() ==
          response?.data?.data?.btcWallet?.toLowerCase()
        ) {
          yield call(setItemToLocalStorage, "isAuthenticated", true);
          yield call(
            setItemToLocalStorage,
            "userData",
            JSON.stringify(response.data.data)
          );
          yield put(userloginSuccess(response.data.data));
          sessionStorage.setItem("jwt", "enable");
          toast.success("Customer login successful");
          setTimeout(() => {
            navigate("/dashboard-user");
          }, 3000);
        } else {
          toast.error("Please connect BTC wallet that share with broker");
          setDisable(false);
        }
      } else {
        if (
          WalletAddress?.toLowerCase() ==
          response?.data?.data?.btcWallet?.toLowerCase()
        ) {
          // const payload = {
          //   key: privateKeyData,
          // };
          const addPrivateKey = yield axiosMain.post(
            "/customer/key",
            payloadKey,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${response?.data?.data?.token}`,
              },
            }
          );
          if (addPrivateKey?.data?.status) {
            yield call(setItemToLocalStorage, "isAuthenticated", true);
            yield call(
              setItemToLocalStorage,
              "userData",
              JSON.stringify(addPrivateKey.data.data)
            );
            yield put(userloginSuccess(addPrivateKey.data.data));
            sessionStorage.setItem("jwt", "enable");
            toast.success("Customer login successful");
            setTimeout(() => {
              navigate("/dashboard-user");
            }, 3000);
          }
        } else {
          toast.error("Please connect BTC wallet that share with broker");
          setDisable(false);
        }
      }
    } else {
      setDisable(false);
      toast.error(response.data.message);
      yield put(userLoginFail(response.data.message));
    }
  } catch (error) {
    setDisable(false);
    toast.error(error.response.data.message);
    yield call(catchHandler, error, userLoginFail);
  }
}

//===============================UserRegisterSaga============================//
// export function* registerSaga(action) {
//   yield put(registerStart());
//   const { payload, email, navigate, setDisable } = action.payload;
//   try {
//     const response = yield axiosMain.post(`/broker/signup`, payload);
//     if (response?.data?.status) {
//       // console.log("response", response);
//       setDisable(false);
//       toast.success("Broker registration successfull. Please verify OTP");
//       setTimeout(() => {
//         navigate("/verify-otp", { state: { email: email } });
//       }, 3000);
//     } else {
//       // toast.error(response);
//       setDisable(false);
//       yield put(registerFail("Something went wrong! Please try again."));
//     }
//   } catch (error) {
//     setDisable(false);
//     toast.error(error.response.data.message);
//     yield call(catchHandler, error, registerFail);
//   }
// }
//===============================End Of UserRegisterSaga============================//
