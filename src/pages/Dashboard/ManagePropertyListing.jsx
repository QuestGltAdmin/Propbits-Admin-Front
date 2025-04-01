import React, { useCallback, useEffect, useState } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Nav,
  OverlayTrigger,
  Pagination,
  Row,
  Tab,
  Tooltip,
} from "react-bootstrap";
import RangeSlider from "react-range-slider-input";
import Slider from "react-slick";
import Layout from "../../component/Layout";
import axiosMain from "../../http/axios/axios_main";
import { debounce } from "lodash";
import useAuth from "../../hooks/useAuth";

export const ManagePropertyListing = () => {
  const { user } = useAuth();
  var prpertyslider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showDataAll, setShowDataAll] = useState([]);
  const [pageNumberAll, setPageNumberAll] = useState(1);
  const [totalOrderCountAll, setTotalOrderCountAll] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("pending");
  const [checkForCount, setCheckForCount] = useState(0);

  //===============================Get property Data===============================//
  const getPropertyList = async (pageNumberAll, search, filter) => {
    setCheckForCount(0);
    try {
      const URL = `/property/few?page=${pageNumberAll}&limit=10&status=${filter}&search=${search}`;
      const getApiData = await axiosMain.get(URL, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      if (getApiData?.data?.status) {
        console.log("getApiData", getApiData);

        if (getApiData?.data?.data?.length > 0) {
          setCheckForCount(1);
          setShowDataAll(getApiData?.data?.data);
          setTotalOrderCountAll(getApiData?.data?.totalRecords);
        } else {
          setCheckForCount(2);
          setShowDataAll([]);
        }
      }
    } catch (err) {
      setCheckForCount(2);
    }
  };
  console.log("showDataAll", showDataAll);

  const incressFunctionAll = () => {
    if (pageNumberAll < Math.ceil(totalOrderCountAll / 10)) {
      setPageNumberAll(pageNumberAll + 1);
    }
  };
  const decressFunctionAll = () => {
    if (pageNumberAll > 1) {
      setPageNumberAll(pageNumberAll - 1);
    }
  };

  const filterDataAll = useCallback(debounce(getPropertyList, 500), []);
  useEffect(() => {
    filterDataAll(pageNumberAll, search, filter);
  }, [pageNumberAll, search, filter]);
  //===============================End Of Code===============================//

  return (
    <>
      <Layout>
        <section>
          <Container>
            <Row>
              <Col lg={12}>
                <div>
                  <div className="d-flex gap-2">
                    <button
                      className={
                        filter == "pending"
                          ? "filter-btn-new active"
                          : "filter-btn-new"
                      }
                      onClick={() => {
                        setFilter("pending");
                        setPageNumberAll(1);
                      }}
                    >
                      Pending
                    </button>
                    <button
                      className={
                        filter == "approved"
                          ? "filter-btn-new active"
                          : "filter-btn-new"
                      }
                      onClick={() => {
                        setFilter("approved");
                        setPageNumberAll(1);
                      }}
                    >
                      Approved
                    </button>
                    <button
                      className={
                        filter == "rejected"
                          ? "filter-btn-new active"
                          : "filter-btn-new"
                      }
                      onClick={() => {
                        setFilter("rejected");
                        setPageNumberAll(1);
                      }}
                    >
                      Rejected
                    </button>
                  </div>

                  <div className="view-type-row justify-content-end">
                    <div>
                      <InputGroup className="inputsearch me-2">
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-search"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="search...."
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          value={search}
                        />
                      </InputGroup>
                      <Dropdown className="buy-dropdown city-dropdown ">
                        <Dropdown.Toggle>
                          <span>
                            {" "}
                            <img
                              src="assets/img/properties/filter_list.png"
                              alt=""
                            />
                            Actions
                          </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="">Actions</Dropdown.Item>
                          <Dropdown.Item href="">Pending</Dropdown.Item>
                          <Dropdown.Item href="">Disable</Dropdown.Item>
                          <Dropdown.Item href="">Disable</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  {checkForCount == 1 &&
                    showDataAll?.map((items, index) => {
                      return (
                        <div className="properties-inner-box admin-property ms-0">
                          <>
                            <div className="inner-property">
                              <div className="outer-img-prop">
                                <Slider
                                  className="slider-main"
                                  {...prpertyslider}
                                >
                                  {items?.images?.length > 0 &&
                                    Object.values(items?.images)?.map(
                                      (items, index) => {
                                        return (
                                          <div>
                                            <img src={items} alt="" />
                                          </div>
                                        );
                                      }
                                    )}
                                </Slider>

                                {/* <div className="outer-position">
                                  <span className="verified">
                                    <img
                                      src="assets/img/properties/verified_user.png"
                                      alt=""
                                    />{" "}
                                    Verified
                                  </span>
                                  <span className="hot-deal">
                                    <img
                                      src="assets/img/properties/white-fire.png"
                                      alt=""
                                    />{" "}
                                    Hot deal
                                  </span>
                                </div> */}
                              </div>
                              <div className="porperty-main-details">
                                <h4>{items?.title}</h4>
                                <h3>{items?.appartment}</h3>
                                <div className="aminity">
                                  <span>
                                    <img
                                      src="assets/img/properties/bed.png"
                                      alt=""
                                    />{" "}
                                    1 Bedroom
                                  </span>
                                  <span>
                                    <img
                                      src="assets/img/properties/bathtub.png"
                                      alt=""
                                    />{" "}
                                    2 Bathroom
                                  </span>
                                  <span>
                                    <img
                                      src="assets/img/properties/aspect_ratio.png"
                                      alt=""
                                    />{" "}
                                    sqft
                                  </span>
                                </div>
                                <p className="address-line">
                                  <img
                                    src="assets/img/properties/location.png"
                                    alt=""
                                  />{" "}
                              {items?.houseNo} {items?.area} {items?.city} {items?.state} {items?.country}
                                </p>
                                <div className="type-property">
                                  <span className="ps-0">Lake view</span>
                                  <span>Luxury</span>
                                  <span>New</span>
                                </div>
                                <div className="list-time">
                                  Listed 3 months ago
                                  {/* <div>
                                    <a href="">
                                      <img
                                        src="assets/img/properties/favorite.png"
                                        alt=""
                                      />
                                    </a>
                                    <a href="">
                                      <img
                                        src="assets/img/properties/more_vert.png"
                                        alt=""
                                      />
                                    </a>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="rating-box-prop">
                              <h2>4.5</h2>
                              <div className="rating-box">
                                <img
                                  src="assets/img/properties/star.png"
                                  alt=""
                                />
                                <img
                                  src="assets/img/properties/star.png"
                                  alt=""
                                />
                                <img
                                  src="assets/img/properties/star.png"
                                  alt=""
                                />
                                <img
                                  src="assets/img/properties/star.png"
                                  alt=""
                                />
                                <img
                                  src="assets/img/properties/rating.png"
                                  alt=""
                                />
                              </div>
                              <p>Rated by Reve</p>
                              <div className="rental-percent">
                                <span>Rental yield : 50%</span>{" "}
                                <img
                                  src="assets/img/properties/arrow_circle_up.png"
                                  alt=""
                                />
                              </div>
                              <div className="rental-percent">
                                <span>Capital gain : 50%</span>{" "}
                                <img
                                  src="assets/img/properties/arrow_circle_up.png"
                                  alt=""
                                />
                              </div>
                              <button className="common-btn w-100 mt-1">
                                Show interest
                              </button>
                            </div>
                          </>
                        </div>
                      );
                    })}

                  <div className="mt-3 text-center">
                    {showDataAll?.length > 0 && (
                      <div className="d-flex justify-content-center list-pagination pb-5 pt-5 w-full">
                        <button
                          className="page-link"
                          onClick={() => {
                            decressFunctionAll();
                          }}
                        >
                          <i className="fa fa-angle-left"></i>
                        </button>
                        <button className="page-link">
                          {" "}
                          Page {pageNumberAll} of{" "}
                          {Math.ceil(totalOrderCountAll / 10)}
                          {/* Page {1} of {20} */}
                        </button>
                        <button
                          className="page-link"
                          onClick={() => {
                            incressFunctionAll();
                          }}
                        >
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    )}
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
