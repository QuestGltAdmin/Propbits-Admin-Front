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
import toast from "react-hot-toast";
import axiosMain from "../http/axios/axios_main";
import { useNavigate } from "react-router-dom/dist";

export default function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");
  const HandleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!inputValue?.email) {
      setFormError("Please enter valid email");
    } else if (!inputValue?.password) {
      setFormError("Please enter valid password");
    } else {
      setFormError("");
      setDisable(true);
      try {
        const payload = {
          email: inputValue?.email,
          password: inputValue?.password,
        };
        const sendData = await axiosMain?.post("/admin/login", payload);
        if (sendData?.data?.status) {
          toast.success("Login success. Please verify otp");
          setDisable(false);
          setTimeout(() => {
            navigate("/verify-otp", { state: { email: inputValue?.email } });
          }, 3000);
        }
      } catch (err) {
        setDisable(false);

        toast.error(err?.response?.data?.message);
      }
    }
  };
  return (
    <>
      <Layout />
      <section className="signup-sec">
        <Container>
          <Row>
            <Col lg={5} className="m-auto">
              <div className="outer-bg-signup">
                <h3> Welcome </h3>
                <h5>Please login to continue </h5>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={HandleInput}
                    value={inputValue?.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Password"
                      name="password"
                      onChange={HandleInput}
                      value={inputValue?.password}
                    />
                    <InputGroup.Text>
                      <i class="fa fa-eye"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <p>{formError}</p>
                <div>
                  <button
                    className="common-btn w-100 m-0"
                    onClick={() => {
                      handleLogin();
                    }}
                    disabled={disable}
                  >
                    {disable ? "Please Wait..." : "Login"}
                  </button>
                </div>

                {/* <div className="outer-forgot-pass-link">
                  <a href="/Forgot_password" className="forgot-link">
                    Forgot Password?
                  </a>
                  <p className="dont-have-acc">
                    Don't have an account? <a href="/Register">Register</a>
                  </p>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
