import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Modal,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import "react-range-slider-input/dist/style.css";
import Slider from "react-slick";
import Layout from "../../component/Layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  const [showImages, setShowImages] = useState(false);
  const [id, setId] = useState(searchParams.get("id") || "");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const mainSlider = useRef(null); // Reference for the main image slider
  const [imageArray, setImageArray] = useState([]);
  const [modelForReject, setModelForReject] = useState(false);
  const [modelForApprove, setModelForApprove] = useState(false);
  const [showData, setShowData] = useState(false);
  const [inputReason, setInputReason] = useState("");
  const [disable, setDisable] = useState(false);
  const HandleCloseReject = () => {
    setModelForReject(false);
  };
  const HandleCloseApprove = () => {
    setModelForApprove(false);
  };
  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 700,
    slidesToScroll: 1,
    pauseOnHover: false,
    beforeChange: (current, next) => setSelectedIndex(next), // Update selected thumbnail index
  };
  const thumbnailSliderSettings = {
    slidesToShow:
      Object.values(imageArray)?.length >= 9
        ? 9
        : Object.values(imageArray)?.length,
    dots: false,
    arrows: false,
    centerMode: Object.values(imageArray)?.length > 1, // Enable centerMode only if more than 1 image
    focusOnSelect: true,
    infinite: Object.values(imageArray)?.length > 1, // Enable infinite scroll only if more than 1 image
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 1000,
    asNavFor: mainSlider.current,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: Math.min(7, Object?.values(imageArray)?.length),
          infinite: Object.values(imageArray)?.length > 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: Math.min(7, Object?.values(imageArray)?.length),
          infinite: Object.values(imageArray)?.length > 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: Math.min(5, Object?.values(imageArray)?.length),
          infinite: Object.values(imageArray)?.length > 1,
        },
      },
      {
        breakpoint: 519,
        settings: {
          slidesToShow: Math.min(3, Object?.values(imageArray)?.length),
          infinite: Object.values(imageArray)?.length > 1,
        },
      },
    ],
  };

  const handleCloseImages = () => {
    setSelectedIndex(0);
    setShowImages(false);
  };
  useEffect(() => {
    if (id) {
      getPropertyDetails();
    }
  }, [id]);
  const getPropertyDetails = async () => {
    try {
      const getData = await axiosMain.get(`/property/one?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      if (getData?.data?.status) {
        console.log("getData", getData);

        setShowData(getData?.data?.data);
      }
    } catch (err) {}
  };

  const rejectProperty = async () => {
    if (!inputReason) {
      toast.error("Please enter the reason for reject");
    } else {
      setDisable(true);
      try {
        const payload = {
          propertyId: id,
          rejectReason: inputReason,
        };
        const submitData = await axiosMain?.post("/property/reject", payload, {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        });
        if (submitData?.data?.status) {
          setDisable(false);
          toast?.success("Property rejected successfully");
          setTimeout(() => {
            navigate("/manage-property-listing")
            HandleCloseReject();
          }, 3000);
        }
      } catch (err) {
        setDisable(false);
        toast.error(err?.response?.data?.message);
      }
    }
  };
  const approveProperty = async () => {
    setDisable(true);
    try {
      const payload = {
        propertyId: id,
      };
      const submitData = await axiosMain?.post("/property/approve", payload, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      if (submitData?.data?.status) {
        setDisable(false);
        toast?.success("Property approved successfully");
        setTimeout(() => {
          navigate("/manage-property-listing")
          HandleCloseApprove();

        }, 3000);
      }
    } catch (err) {
      setDisable(false);
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <>
      <Layout>
        <div className="product-banner">
          <Container>
            <Row>
              <Col md="12">
                <div className="text-end">
                  <p className="location-para">
                    <img
                      src="/assets/img/product/location.png"
                      className="img-fluid"
                      alt="location"
                    />
                    12 palm jumerha Dubai
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-3 product-banner-images">
              <Col sm="8" className="d-flex align-items-stretch">
                <div className="first-image w-100">
                  <p>47,460,400 INR</p>
                  <img
                    src="assets/img/product/product-banner1.png"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col sm="4" className="d-flex align-items-stretch">
                <div className="w-100">
                  <Row>
                    <Col md="12" sm="12" xs="6">
                      <div className="second-image">
                        <img
                          src="assets/img/product/product-banner2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col md="12" sm="12" xs="6">
                      <div className="third-image">
                        <img
                          src="assets/img/product/product-banner3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <div className="interest-strip p-0">
              <Row>
                <Col md="8" xs="6">
                  <ul className="interest-images">
                    <li>
                      <div>
                        <img
                          src="/assets/img/product/interest1.png"
                          className="img-fluid"
                          alt="user"
                        />
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="/assets/img/product/interest2.png"
                          className="img-fluid"
                          alt="user"
                        />
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="/assets/img/product/interest3.png"
                          className="img-fluid"
                          alt="user"
                        />
                      </div>
                    </li>
                    <li>
                      <div>+2</div>
                    </li>
                  </ul>
                </Col>
                <Col md="4" xs="6">
                  <div>
                    <button
                      className="common-btn bg-green w-100"
                      onClick={() => {
                        if (!showData?.isApproved && !showData?.isRejected) {
                          setModelForApprove(true);
                        }
                      }}
                    >
                      Approve
                    </button>
                    <button
                      className="common-btn bg-red w-100"
                      onClick={() => {
                        if (!showData?.isApproved && !showData?.isRejected) {
                          setModelForReject(true);
                        }
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
            {/* <div className="interest-strip">
              <Row className="align-items-center ">
                <Col lg="5" md="5" sm="7">
                  <div className="agent-box mb-0">
                    <div className="agent-name">
                      <img src="/assets/img/properties/property-profile.png" className="img-fluid" alt="profile" />
                      <div className="text-start">
                        <h3>Morgan thomas</h3>
                        <p>Selected</p>
                      </div>
                    </div>
                    <div className="agent-icons">
                      <a>
                        <img src="/assets/img/properties/phone.png" className="img-fluid" alt="phone" />
                      </a>
                      <a>
                        <img src="/assets/img/properties/whatsapp.png" className="img-fluid" alt="phone" />
                      </a>
                      <a>
                        <img src="/assets/img/properties/mail.png" className="img-fluid" alt="phone" />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg="3" md="4" sm="5">
                  <div className="agent-box mb-0">
                    <div className="agent-name">
                      <img src="/assets/img/properties/property-profile.png" className="img-fluid" alt="profile" />
                      <div className="text-start">
                        <p>Wednesday, 10th Jan</p>
                        <p>11:00 AM</p>
                      </div>
                    </div>
                    <div>
                      <a href="" className="edit-btn">Edit</a>
                    </div>
                  </div>
                </Col>
                <Col lg="2" md="3" className="offset-lg-2">
                  <div>
                    <button
                      className="border-btn w-100"

                    >
                      Scheduled
                    </button>
                  </div>
                </Col>
              </Row>
            </div> */}
            <div>
              <Row>
                <Col md="8">
                  <div className="">
                    <ul className="room-specify">
                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/apartment.svg"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          Property Type
                        </p>
                        <p className="dark-color">lorem ipsum new changes</p>
                      </li>
                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/bed.svg"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          Bedroom
                        </p>
                        <p className="dark-color">lorem ipsum new changes</p>
                      </li>
                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/bathroom.svg"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          Bathroom
                        </p>
                        <p className="dark-color">lorem ipsum new changes</p>
                      </li>
                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/calendar.svg"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          Available from
                        </p>
                        <p className="dark-color">lorem ipsum new changes</p>
                      </li>
                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/sqft.svg"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          sqft
                        </p>
                        <p className="dark-color">lorem ipsum new changes</p>
                      </li>

                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/rental.png"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          Rental Yield
                        </p>
                        <p className="dark-color">30%</p>
                      </li>

                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/pricesqft.png"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          225/Sq.ft
                        </p>
                        <p className="dark-color">lorem ipsum new changes</p>
                      </li>

                      <li>
                        <p className="light-color">
                          <img
                            src="/assets/img/product/capital.png"
                            className="img-fluid"
                            alt="bedroom"
                          />
                          Capital Appreciation
                        </p>
                        <p className="dark-color m-2">40%</p>
                      </li>
                    </ul>

                    <ul className="breadcrumb view-sec">
                      <li>
                        <a href="#">Lorem ipsum text</a>
                      </li>
                      {/* <li>
                        <a href="#">Luxury</a>
                      </li>
                      <li>
                        <a href="#">New</a>
                      </li> */}
                    </ul>

                    <div className="site-details">lorem ipsum new changes</div>

                    <div className="amenities-sec">
                      <h3 className="feature-head">Feature / Amenities</h3>
                      <ul>
                        <li>
                          <div>
                            <img src="" className="img-fluid" alt="feature" />
                            <p>lorem ipsum new changes</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="map-box">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.3424470099835!2d55.274348040869334!3d25.197447618821002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sDubai%20Mall!5e0!3m2!1sen!2sin!4v1732095707860!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Modal
          show={showImages}
          onHide={handleCloseImages}
          size="lg"
          centered
          className="login-modal property-agent-modal product-details-slider-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Slider
                className="main-slick-slider"
                {...mainSliderSettings}
                ref={mainSlider}
                asNavFor={mainSlider.current} // Synchronize both sliders
              >
                {Object?.values(imageArray)?.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={image} alt={`Slide ${index}`} />
                    </div>
                  );
                })}
              </Slider>

              {/* Thumbnails Slider */}
              <Slider className="thumbnail-slider" {...thumbnailSliderSettings}>
                {Object?.values(imageArray)?.map((image, index) => (
                  <div
                    className="items"
                    key={index}
                    onClick={() => mainSlider.current.slickGoTo(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className={
                        selectedIndex === index ? "active-thumbnail" : ""
                      }
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={modelForReject}
          onHide={HandleCloseReject}
          backdrop="static"
          keyboard={false}
          size="md"
          centered
          className="common-listing-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <Row className="justify-content-center">
                <Col lg="9">
                  <div className="property-profile-sec">
                    <Form.Group>
                      <Form.Label>Enter the reason</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) => {
                          setInputReason(e?.target?.value);
                        }}
                        value={inputReason}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col lg={9}>
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      className="common-btn "
                      onClick={() => {
                        HandleCloseReject();
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      className="common-btn "
                      onClick={() => {
                        rejectProperty();
                      }}
                    >
                      {disable ? "Please wait..." : "Reject"}
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={modelForApprove}
          onHide={HandleCloseApprove}
          backdrop="static"
          keyboard={false}
          size="md"
          centered
          className="common-listing-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <Row className="justify-content-center">
                <p>Are you sure you want to approve this property</p>
                <Col lg={9}>
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      className="common-btn "
                      onClick={() => {
                        HandleCloseApprove();
                      }}
                    >
                      Cancel
                    </button>

                    <button
                      className="common-btn "
                      onClick={() => {
                        approveProperty();
                      }}
                    >
                      {disable ? "Please wait..." : "Approve"}
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </Layout>
    </>
  );
};

export default ProductDetail;
