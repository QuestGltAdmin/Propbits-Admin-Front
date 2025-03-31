import React from 'react';
import Header from './Header';
// import Footer from "./Footer";


function Layout(props) {
  return (
    <div className="dashboard-layout">
            <div className="inner-dash-bpx">
              <Header/>
              {props.children}
              {/* <Footer/> */}
            </div>
        </div>
  )
}

export default Layout