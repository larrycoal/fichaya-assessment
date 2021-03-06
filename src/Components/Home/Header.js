import React,{useState} from "react";

const Header = () => {
  const [display,setDisplay]=useState(false)
  return (
    <nav className="nav_wrapper">
      <div className="logo">
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.7174 0.0940346C16.2304 0.371949 14.479 0.784249 12.6276 1.52781C2.03664 5.78138 -2.92924 18.2677 1.95053 28.375C2.70654 29.9406 2.59959 29.8855 3.04847 28.942C4.62527 25.6289 7.72551 23.276 11.0323 22.8828C11.6029 22.815 23.2308 22.6542 23.2908 22.7133C23.3268 22.7489 22.9321 23.3957 22.2185 24.4697C19.8105 28.0951 17.6585 29.7422 14.5613 30.3308C14.212 30.3974 13.1662 30.4518 11.4944 30.4901C7.8632 30.5737 7.04343 30.8082 5.2634 32.2719C4.64508 32.78 4.61307 32.6946 5.9023 33.9717C17.5585 45.5173 37.4624 39.3826 40.2748 23.3776C42.2098 12.365 34.6002 1.99244 23.3144 0.259666C22.3925 0.118168 19.45 0.0119811 18.7174 0.0940346ZM36.1932 12.2984C36.1932 12.3286 36.0695 12.5954 35.9181 12.8911C34.0436 16.5565 31.0175 19.0476 27.4905 19.8285C26.9697 19.9438 26.4258 19.952 20.3732 19.9352C13.436 19.9162 12.1325 19.9543 11.4121 20.1979C10.4732 20.5157 9.6168 21.1889 9.03583 22.0658C8.72006 22.5426 8.72107 22.5431 8.49193 21.7155C7.96989 19.829 8.65629 17.3273 10.2394 15.3486C11.359 13.9491 13.3222 12.8489 15.5302 12.3832C16.1818 12.2458 36.1932 12.1638 36.1932 12.2984Z"
            fill="#01037C"
          />
        </svg>
      </div>
      <div className="links_wrapper" id={display?"show-menu":""}>
        <a href="/"> DASHBOARD</a>
        <a href="/">CUSTOMER</a>
        <a href="/">ASSOCIATES</a>
        <a id="active"href="/">REQUEST</a>
        <a href="/">SCHEDULE</a>
        <a href="/">PAYMENTS</a>
        <a href="/">SETTINGS</a>
      </div>
      <div className="icons" id={display?"show-menu":""}>
        <span>
        <i class="fa fa-bell" aria-hidden="true"></i>
        </span>
        <span>
        <i class="fa fa-user" aria-hidden="true"></i>
        <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </div>
      <div className="hamburger" onClick={()=>{setDisplay(!display)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
  );
};

export default Header;
