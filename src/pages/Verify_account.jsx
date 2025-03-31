import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Layout from "../component/Loginheader";
import { useLocation, useNavigate } from "react-router-dom/dist";
import OTPInput from "otp-input-react";
import { useDispatch } from "react-redux";
import { userLoginSaga } from "../store/reducers/authReducer";
import axiosMain from "../http/axios/axios_main";
import toast from "react-hot-toast";

export default function Verify() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email } = state || "";
  const [otp, setOtp] = useState("");
  const [disable, setDisable] = useState(false);
  const [disableResend, setDisableResend] = useState(false);
  const [formError, setFormError] = useState("");
  const handleOtp = async () => {
    if (!email) {
      setFormError("Please go back and try again");
    } else if (otp?.length < 6) {
      setFormError("Please enter valid otp");
    } else {
      setFormError("");
      setDisable(true);
      try {
        const payload = {
          email: email,
          otp: otp,
        };
        dispatch(userLoginSaga({ payload, navigate, setDisable }));
      } catch (err) {
        setDisable(false);

        toast.error(err?.response?.data?.message);
      }
    }
  };

  const resendOtp = async () => {
    setDisableResend(true);
    try {
      const sendData = await axiosMain.post("/admin/resend", {
        email: email,
      });
      if (sendData?.data?.status) {
        setDisableResend(false);
        toast?.success("Otp Resend successfully");
      }
    } catch (err) {
      setDisableResend(false);

      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <>
      <Layout />
      <section className="signup-sec" id="sign_up">
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                <h3> Verify Your Account </h3>
                <h5>
                  Enter your email address below. To activate your account.
                </h5>

                <Form.Group className="mb-3">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    autoFocus
                    className="otp_box"
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    //   secure
                    name="otp"
                  />
                </Form.Group>
                <div className="d-flex justify-content-end mb-2">
                  <a
                    onClick={() => {
                      resendOtp();
                    }}
                  >
                    {disableResend ? "Please wait..." : "Re-send"}
                  </a>
                </div>
                <p>{formError}</p>
                <div>
                  <button
                    className="common-btn w-100 m-0"
                    disabled={disable}
                    onClick={() => {
                      handleOtp();
                    }}
                  >
                    {disable ? "Please wait..." : "Verify"}{" "}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
