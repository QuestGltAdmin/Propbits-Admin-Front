import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table, Form, InputGroup } from "react-bootstrap";
import Layout from "../../component/Layout";
import toast from "react-hot-toast";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const { user } = useAuth();
  console.log("user", user);

  const [updatePass, setUpdatePass] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  const [pass1, setPass1] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [pass3, setPass3] = useState(false);

  const [formErrorPass, setFormErrorPass] = useState("");
  const [disablePass, setDisablePass] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
  });

  const HandlePass = (e) => {
    setUpdatePass({ ...updatePass, [e.target.name]: e.target.value });
  };

  const updatePassData = async () => {
    let passregex = new RegExp("^(?=.*[A-Z])(?=.{8,})");
    if (!updatePass?.oldPass) {
      setFormErrorPass("Please enter your old password");
    } else if (!passregex?.test(updatePass?.newPass)) {
      setFormErrorPass(
        "Password must contain 1 Uppercase character. Length must be greater or equal to 8 digit"
      );
    } else if (updatePass?.newPass != updatePass?.confirmPass) {
      setFormErrorPass("New password and confirm password not same");
    } else {
      setFormErrorPass("");
      setDisablePass(true);
      try {
        const payload = {
          oldPassword: updatePass?.oldPass,
          password: updatePass?.newPass,
        };
        const updateData = await axiosMain.post("/admin/password", payload, {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        });
        if (updateData?.data?.status) {
          setUpdatePass({
            oldPass: "",
            newPass: "",
            confirmPass: "",
          });
          toast.success("Password updated successfully");
          setDisablePass(false);
        }
      } catch (err) {
        setDisablePass(false);
        toast.error(err?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <Layout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Account Info</h2>
                    <div className="inner-dash-form shadow-box-main">
                      <Row>
                        <Col lg={4}>
                          <div class="profile-pic">
                            <label class="-label" for="file">
                              <span class="glyphicon glyphicon-camera"></span>
                              <span>Change Image</span>
                            </label>
                            <input
                              id="file"
                              type="file"
                              onchange="loadFile(event)"
                            />
                            <img
                              src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
                              id="output"
                              width="200"
                            />
                          </div>
                        </Col>
                        <Col lg={8}>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="First Name"
                                  onChange={(e) => {
                                    setProfileUpdate({
                                      ...profileUpdate,
                                      firstName: e.target.value,
                                    });
                                  }}
                                  value={profileUpdate?.firstName}
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="text"
                                  placeholder="Last Name"
                                  onChange={(e) => {
                                    setProfileUpdate({
                                      ...profileUpdate,
                                      lastName: e.target.value,
                                    });
                                  }}
                                  value={profileUpdate?.lastName}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="email"
                                  placeholder="Enter email"
                                  value={user?.email}
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <div>
                            <button className="common-btn  m-0">Submit</button>
                          </div>
                        </Col>
                      </Row>

                      <h2 className="inner-page-heading mt-5">
                        Change Password
                      </h2>

                      <Row>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                type={pass1 ? "text" : "password"}
                                placeholder="Current Password"
                                onChange={HandlePass}
                                name="oldPass"
                                value={updatePass?.oldPass}
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  setPass1(!pass1);
                                }}
                              >
                                {pass1 ? (
                                  <i class="fa fa-eye"></i>
                                ) : (
                                  <i
                                    class="fa fa-eye-slash"
                                    aria-hidden="true"
                                  ></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                type={pass2 ? "text" : "password"}
                                placeholder="New Password"
                                onChange={HandlePass}
                                name="newPass"
                                value={updatePass?.newPass}
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  setPass2(!pass2);
                                }}
                              >
                                {pass2 ? (
                                  <i class="fa fa-eye"></i>
                                ) : (
                                  <i
                                    class="fa fa-eye-slash"
                                    aria-hidden="true"
                                  ></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col lg={4}>
                          <Form.Group className="mb-3">
                            <InputGroup className="mb-3">
                              <Form.Control
                                type={pass3 ? "text" : "password"}
                                placeholder="Confirm Password"
                                onChange={HandlePass}
                                name="confirmPass"
                                value={updatePass?.confirmPass}
                              />
                              <InputGroup.Text
                                onClick={() => {
                                  setPass3(!pass3);
                                }}
                              >
                                {pass3 ? (
                                  <i class="fa fa-eye"></i>
                                ) : (
                                  <i
                                    class="fa fa-eye-slash"
                                    aria-hidden="true"
                                  ></i>
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                      <p>{formErrorPass}</p>
                      <div>
                        <button
                          className="common-btn m-0"
                          onClick={() => {
                            updatePassData();
                          }}
                          disabled={disablePass}
                        >
                          {disablePass ? "Please wait..." : "Update"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Profile;
