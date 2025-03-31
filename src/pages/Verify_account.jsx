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
import { useLocation } from "react-router-dom/dist";
import OTPInput from "otp-input-react";

export default function Verify() {
  const { state } = useLocation();
  const { email } = state || "";
  const [otp, setOtp] = useState("");
  const [disable , setDisable] = useState(false);
  const [formError , setFormError] = useState("")
const handleOtp = async () => {
  try{

  }catch(err){
    
  }
}
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

                <div>
                  <button className="common-btn w-100 m-0" disabled={disable}>
                 {disable ? "Please wait..." : "Verify" }{" "}
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
