import React, { useState } from 'react'
import { Breadcrumb, Col, Container, Dropdown, Form, InputGroup, Nav, OverlayTrigger, Pagination, Row, Tab, Tooltip } from 'react-bootstrap'
import RangeSlider from 'react-range-slider-input';
import Slider from 'react-slick';
import Layout from '../../component/Layout';

export const ManagePropertyListing = () => {

    

    var prpertyslider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Layout>
               
                <section>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                
                                <div className="agent-tabs">
                                    <Tab.Container defaultActiveKey="uploaded">
                                        <Nav variant="pills" >
                                            <Nav.Item>
                                                <Nav.Link eventKey="uploaded">Uploaded <span>1</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="pending">Pending <span>2</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="reject">Pending <span>2</span></Nav.Link>
                                            </Nav.Item>


                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="uploaded">
                                                <div className="view-type-row justify-content-end">
                                                    <div>
                                                    <InputGroup className="inputsearch me-2">
                                                          <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                                          <Form.Control
                                                              type="text"
                                                              placeholder="search...."
                                                          />
                                                      </InputGroup>
                                                        <Dropdown className="buy-dropdown city-dropdown ">
                                                            <Dropdown.Toggle >
                                                                <span> <img src="assets/img/properties/filter_list.png" alt="" />
                                                                Actions</span>
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


                                                <div>
                                                     

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="pending">
                                                <div className="view-type-row justify-content-end">
                                                    <div>
                                                    <Dropdown className="buy-dropdown city-dropdown mt-4">
                                                            <Dropdown.Toggle >
                                                                <span> <img src="assets/img/properties/filter_list.png" alt="" />
                                                                Actions</span>
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


                                                <div >
                                                <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="reject">
                                                <div className="view-type-row justify-content-end">
                                                    <div>
                                                    <Dropdown className="buy-dropdown city-dropdown mt-4">
                                                            <Dropdown.Toggle >
                                                                <span> <img src="assets/img/properties/filter_list.png" alt="" />
                                                                Actions</span>
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


                                                <div >
                                                <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>

                                                    <div className="properties-inner-box admin-property">
                                                   
                                                        <div className="inner-property">
                                                            <div className="outer-img-prop">
                                                                <Slider className="slider-main" {...prpertyslider}>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <img src="assets/img/properties/propert-listing.png" alt="" />
                                                                    </div>
                                                                </Slider>


                                                                <div className="outer-position">
                                                                    <span className="verified"><img src="assets/img/properties/verified_user.png" alt="" /> Verified</span>
                                                                    <span className="hot-deal"><img src="assets/img/properties/white-fire.png" alt="" /> Hot deal</span>
                                                                </div>
                                                            </div>
                                                            <div className="porperty-main-details">
                                                                <h4>Apartment</h4>
                                                                <h3>320,00 AED yearly</h3>
                                                                <div className="aminity">
                                                                    <span><img src="assets/img/properties/bed.png" alt="" /> 1 Bedroom</span>
                                                                    <span><img src="assets/img/properties/bathtub.png" alt="" /> 2 Bathroom</span>
                                                                    <span><img src="assets/img/properties/aspect_ratio.png" alt="" /> sqft</span>
                                                                </div>
                                                                <p className="address-line"><img src="assets/img/properties/location.png" alt="" /> Dubai, lake side sector 29, Near Burj khalifa Zone1</p>
                                                                <div className="type-property">
                                                                    <span className="ps-0">Lake view</span>
                                                                    <span>Luxury</span>
                                                                    <span>New</span>
                                                                </div>
                                                                <div className="list-time">
                                                                    Listed 3 months ago
                                                                    <div>
                                                                        <a href=""><img src="assets/img/properties/favorite.png" alt="" /></a>
                                                                        <a href=""><img src="assets/img/properties/more_vert.png" alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rating-box-prop">
                                                            <h2>4.5</h2>
                                                            <div className="rating-box">
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/star.png" alt="" />
                                                                <img src="assets/img/properties/rating.png" alt="" />
                                                            </div>
                                                            <p>Rated by Reve</p>
                                                            <div className="rental-percent"><span>Rental yield : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <div className="rental-percent"><span>Capital gain : 50%</span> <img src="assets/img/properties/arrow_circle_up.png" alt="" /></div>
                                                            <button className="common-btn w-100 mt-1">Show interest</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </Col>

                        </Row>


                        <div className="mt-3 text-center">
                            <Pagination className="list-pagination">
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </div>


                    </Container>
                </section>
            </Layout>
        </>
    )
}