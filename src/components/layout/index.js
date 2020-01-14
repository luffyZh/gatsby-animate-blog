/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import logo from "../../images/logo.jpg";
import "./layout.css";

const iconStyle = {
  position: 'absolute',
  right: 4,
  top: 0,
  width: 20,
  cursor: 'pointer',
}

const activeStyle = key => {
  if (typeof window !== `undefined`) {
    return window.location.pathname.includes(key);
  }
  return false
}

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const Layout = ({ children }) => {
  const [full, setFull] = useState(false);
  const [iconHover, setIconHover] = useState(false);
  const [menuHover, setMenuHover] = useState('');
  return (
    <>
      <div className='bg-container'>
        <div className='left-bg-container' />
        <div className='right-bg-container' />
      </div>
      <div
        id='main_panel'
        style={{
          position: 'absolute',
          display: 'flex',
          top: 60,
          left: 60,
          right: 60,
          bottom: 60,
          zIndex: 9,
          borderRadius: '6px',
          boxShadow: '#e2e2e2 0px 0px 18px'
        }}
      >
        <aside className='aside-container'>
          <div className='header-container'>
            <div className='logo-container'>
              <img title='周公子' alt='logo' className='logo' src={logo} />
            </div>
            <h4>luffyZh</h4>
            <span>不会写代码的保洁不是一个好厨子<span aria-label='cooker' role='img'>👨‍🍳</span>～</span>
          </div>
          <div className='menu-container'>
            <section
              style={{ border: activeStyle('home') && menuHover !== 'home' ? '1px solid #8888FA' : '' }}
              onMouseEnter={() => setMenuHover('home')}
              onMouseLeave={() => setMenuHover('')}
              onClick={() => navigate('/home/')}
            >
              <svg t="1578236879449" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5667" width="32" height="32">
                <path d="M889.70763321 457.76002481L583.66088227 139.50573901c-18.98584661-19.71350931-44.43887055-30.66723907-71.66172602-30.66723906-27.226228 0-52.67756607 10.84664603-71.66003933 30.66723906L134.39186173 457.76002481c-31.60485297 32.8586597-27.53651789 61.22992402-22.32314649 73.12211059 3.75635934 8.45117633 16.27249822 31.5019855 52.46845779 31.50198551l44.85540043 0 0 244.81766986c0 55.59411978 39.94894555 107.95886636 96.69147418 107.95886636l130.28622829 0L436.37027676 656.05364431c0-27.74562616-4.17204629-43.2904617 24.20427723-43.2904617l102.95123071 0c28.37295099 0 24.20090469 15.43775181 24.2009047 43.2904617L587.72668858 915.16065714l130.18167415 0c56.74252863 0 96.69653339-52.36390366 96.69653339-107.95886637L814.60489612 562.38412091l44.8520279 0c36.19595874 0 48.7137843-23.15957876 52.46677111-31.50198551C917.14128281 518.989948 921.20961871 490.61868369 889.70763321 457.76002481L889.70763321 457.76002481 889.70763321 457.76002481zM859.45776777 512.00421628l-95.33817334 0-1e-8 295.19841825c0 27.74393948-17.94114817 57.47356385-46.31241248 57.47356383l-79.80176953 0L638.00541241 656.05364431c0-55.59917899-17.83743777-93.66952341-74.58333892-93.6695234L460.46999985 562.38412091c-56.74590115 0-74.58502478 38.07034442-74.58502478 93.6695234l0 208.72626445L306.08320554 864.77990876c-28.37126431 0-46.31241247-29.72962436-46.31241248-57.47356385L259.77079306 512.10792666l-95.33817333 0c-0.93761389 0-1.66864993-3.44606946-2.3979993-3.54978067 1.77067447-3.02532413 4.79768445-10.74209189 9.80279131-15.96052248L477.88247519 174.55666144c9.07850116-9.59705557 22.01369952-15.33319766 34.53236802-15.22948728 12.51445303-0.10371121 24.61490497 5.73867169 33.79290106 15.22948727l305.9455685 317.93893754c5.0059498 5.21337141 8.03211685 12.93351251 9.7007668 15.96052249-0.62732482 0.10202453-1.46038459 3.54303562-2.39799931 3.54303561L859.45776777 512.00421628 859.45776777 512.00421628zM859.45776777 512.00421628" p-id="5668" fill={menuHover === 'home' ? '#fff' : '#8888FA'}></path>
              </svg>
              <span>首页</span>
            </section>
            <section
              style={{ border: activeStyle('garden') && menuHover !== 'garden' ? '1px solid #8888FA' : '' }}
              onMouseEnter={() => setMenuHover('garden')}
              onMouseLeave={() => setMenuHover('')}
              onClick={() => navigate('/garden/')}
            >
              <svg t="1578910642710" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1318" width="32" height="32">
                <path d="M295.62 386.32a95 95 0 1 1 95-95 95.11 95.11 0 0 1-95 95z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1319"></path>
                <path d="M295.62 216.32a75 75 0 1 1-75 75 75.09 75.09 0 0 1 75-75m0-40a115 115 0 0 0-115 115 115 115 0 0 0 115 115 115 115 0 0 0 115-115 115 115 0 0 0-115-115z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1320"></path>
                <path d="M506.18 351.15m-95 0a95 95 0 1 0 190 0 95 95 0 1 0-190 0Z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1321"></path>
                <path d="M506.18 276.15a75 75 0 1 1-75 75 75.09 75.09 0 0 1 75-75m0-40a115 115 0 0 0-115 115 115 115 0 0 0 115 115 115 115 0 0 0 115-115 115 115 0 0 0-115-115z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1322"></path>
                <path d="M722.06 414.23m-95 0a95 95 0 1 0 190 0 95 95 0 1 0-190 0Z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1323"></path>
                <path d="M722.06 339.23a75 75 0 1 1-75 75 75.09 75.09 0 0 1 75-75m0-40a115 115 0 0 0 0 230 115 115 0 0 0 0-230z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1324"></path>
                <path d="M852 530.53h-40v49.15h-69.94V425.69h-40v153.99H526.18V362.61h-40v217.07H315.62v-276.9h-40v276.9H212v-96.55h-40v364.55h40v-228h600v168h40V530.53z" fill={menuHover === 'garden' ? '#fff' : '#8888fa'} p-id="1325"></path>
              </svg>
              <span>花园</span>
            </section>
            <section
              style={{ border: activeStyle('list') && menuHover !== 'list' ? '1px solid #8888FA' : '' }}
              onMouseEnter={() => setMenuHover('list')}
              onMouseLeave={() => setMenuHover('')}
              onClick={() => navigate('/list/')}
            >
              <svg t="1578236965434" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7736" width="32" height="32">
                <path d="M341.333 170.667h568.89v113.777h-568.89z m-227.555 0h113.778v113.777H113.778z m0 284.444h113.778V568.89H113.778z m0 284.445h113.778v113.777H113.778z m227.555 0h568.89v113.777h-568.89z m0-284.445h568.89V568.89h-568.89z" fill={menuHover === 'list' ? '#fff' : '#8888fa'} p-id="7737"></path>
              </svg>
              <span>列表</span>
            </section>
            <section
              style={{ border: activeStyle('repo') && menuHover !== 'repo' ? '1px solid #8888FA' : '' }}
              onMouseEnter={() => setMenuHover('repo')}
              onMouseLeave={() => setMenuHover('')}
              onClick={() => navigate('/repo/')}
            >
              <svg t="1578239199201" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9554" width="32" height="32">
                <path d="M1004.728 466.4l-447.104-447.072c-25.728-25.76-67.488-25.76-93.28 0l-103.872 103.872 78.176 78.176c12.544-5.984 26.56-9.376 41.376-9.376 53.024 0 96 42.976 96 96 0 14.816-3.36 28.864-9.376 41.376l127.968 127.968c12.544-5.984 26.56-9.376 41.376-9.376 53.024 0 96 42.976 96 96s-42.976 96-96 96-96-42.976-96-96c0-14.816 3.36-28.864 9.376-41.376l-127.968-127.968c-3.04 1.472-6.176 2.752-9.376 3.872l0 266.976c37.28 13.184 64 48.704 64 90.528 0 53.024-42.976 96-96 96s-96-42.976-96-96c0-41.792 26.72-77.344 64-90.528l0-266.976c-37.28-13.184-64-48.704-64-90.528 0-14.816 3.36-28.864 9.376-41.376l-78.176-78.176-295.904 295.872c-25.76 25.792-25.76 67.52 0 93.28l447.136 447.072c25.728 25.76 67.488 25.76 93.28 0l444.992-444.992c25.76-25.76 25.76-67.552 0-93.28z" p-id="9555" fill={menuHover === 'repo' ? '#fff' : "#8888fa"}></path>
              </svg>
              <span>仓库</span>
            </section>
          </div>
        </aside>
        <main className='main-container'>
          {
            !full
              ? <svg
              style={iconStyle}
              onClick={
                () => {
                  const mailPanel = document.getElementById('main_panel');
                  mailPanel.classList.remove('nofull-panel');
                  mailPanel.classList.add('full-panel');
                  setFull(true);
                }
              }
              onMouseEnter={() => setIconHover(true)}
              onMouseLeave={() => setIconHover(false)}
              t="1578209989408" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1491" width="32" height="32">
              <path
                d="M444.3 539.9L202 782.2 199.8 563c0-16.5-13.5-30-30-30s-30 13.5-30 30l2.2 285.1c0 8.8 3.8 16.7 9.8 22.2 5.5 6 13.4 9.8 22.2 9.8h295.6c16.5 0 30-13.5 30-30s-13.5-30-30-30H248.9l237.8-237.8c11.7-11.7 11.7-30.8 0-42.4-11.6-11.6-30.7-11.6-42.4 0zM578.1 488l242.3-242.3 2.2 219.2c0 16.5 13.5 30 30 30s30-13.5 30-30l-2.2-285.1c0-8.8-3.8-16.7-9.8-22.2-5.5-6-13.4-9.8-22.2-9.8H552.8c-16.5 0-30 13.5-30 30s13.5 30 30 30h220.7L535.7 445.6c-11.7 11.7-11.7 30.8 0 42.4 11.7 11.7 30.8 11.7 42.4 0z"
                p-id="1492"
                fill={iconHover ? '#a0a0a0' : "#eee"}
              ></path>
            </svg> : <svg
              style={iconStyle}
              onClick={
                () => {
                  const mailPanel = document.getElementById('main_panel');
                  mailPanel.classList.remove('full-panel');
                  mailPanel.classList.add('nofull-panel');
                  setFull(false);
                }
              }
              onMouseEnter={() => setIconHover(true)}
              onMouseLeave={() => setIconHover(false)}
              t="1578213074385" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1640" width="32" height="32">
              <path 
                d="M195.1 871.4l242.3-242.3 2.2 219.2c0 16.5 13.5 30 30 30s30-13.5 30-30l-2.2-285.1c0-8.8-3.8-16.7-9.8-22.2-5.5-6-13.4-9.8-22.2-9.8H169.8c-16.5 0-30 13.5-30 30s13.5 30 30 30h220.7L152.7 829c-11.7 11.7-11.7 30.8 0 42.4 11.6 11.6 30.7 11.6 42.4 0zM827.3 156.6L585 398.9l-2.2-219.2c0-16.5-13.5-30-30-30s-30 13.5-30 30l2.2 285.1c0 8.8 3.8 16.7 9.8 22.2 5.5 6 13.4 9.8 22.2 9.8h295.6c16.5 0 30-13.5 30-30s-13.5-30-30-30H631.9L869.7 199c11.7-11.7 11.7-30.8 0-42.4-11.7-11.7-30.8-11.7-42.4 0z"
                p-id="1641"
                fill={iconHover ? '#a0a0a0' : "#eee"}
              ></path>
            </svg>
          }
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
