import React from "react";
import SearchBar from "./SearchBar";
import spyglass from "./images/spyglass.png";
const NoAssetDisplay = ({ status }) => {
  if (status === "No Address") {
    return (
      <div className="startingpage">
        <div className="startingpagecontents">
          <svg
            className="spyglassSvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 215.02 150.53"
          >
            <g id="Artwork">
              <path d="M167.53,118.27c-5.59,0-11.45-2.17-17-6.38-7.75-5.85-14.08-15-17.8-25.73-7.75-22.35-1.67-44.82,13.54-50.1,7.47-2.59,15.94-.73,23.85,5.24,7.75,5.85,14.08,15,17.8,25.73s4.41,21.83,1.94,31.23c-2.52,9.58-8,16.28-15.48,18.87A20.76,20.76,0,0,1,167.53,118.27ZM153,37.53a18.1,18.1,0,0,0-5.94,1c-13.86,4.8-19.22,25.79-11.94,46.79,3.56,10.26,9.56,19,16.91,24.5,7.19,5.43,14.8,7.16,21.42,4.86S185,106.31,187.3,97.6c2.35-8.91,1.68-19.46-1.88-29.72s-9.56-19-16.91-24.5C163.39,39.52,158.06,37.53,153,37.53Z" />
              <path d="M165.39,105.92c-9.64,0-20-9.09-24.65-22.55h0c-5.45-15.73-1.12-31.57,9.66-35.3s24,6,29.43,21.75c2.61,7.54,3.09,15.32,1.35,21.92-1.78,6.79-5.69,11.54-11,13.38A14.45,14.45,0,0,1,165.39,105.92ZM143.2,82.52c5,14.37,16.7,23.41,26.12,20.15,4.47-1.55,7.79-5.67,9.35-11.59,1.6-6.11,1.14-13.35-1.3-20.41-5-14.37-16.7-23.41-26.12-20.14s-13,17.61-8.05,32Z" />
              <path d="M147.6,73.26c-.75-6.63,1.38-12.14,5.72-14.73l1.33,2.24c-3.43,2-5.1,6.6-4.46,12.19Z" />
              <path d="M151.58,84.64A30.06,30.06,0,0,1,148.32,77l2.51-.67a27.32,27.32,0,0,0,3,7Z" />
              <path d="M162.23,119.32c-13.39,0-27.79-12.7-34.31-31.51-7.6-21.94-1.64-44,13.31-49.19l.85,2.45c-13.59,4.71-18.84,25.3-11.7,45.89s24,33.51,37.59,28.8l.85,2.46A20.08,20.08,0,0,1,162.23,119.32Z" />
              <path d="M81.52,139.83c-11.11,0-23-10.51-28.44-26.07C46.78,95.58,51.76,77.3,64.17,73a17.84,17.84,0,0,1,11.13-.08l-.74,2.5a15.3,15.3,0,0,0-9.54,0C54,79.29,49.71,96.09,55.54,112.9s19.56,27.39,30.63,23.55a15.51,15.51,0,0,0,8-6.64l2.19,1.39A18.31,18.31,0,0,1,87,138.91,16.71,16.71,0,0,1,81.52,139.83Z" />
              <path d="M77.09,140.71c-4.49,0-9.19-1.74-13.66-5.11-6.19-4.67-11.23-11.95-14.2-20.51-6.18-17.85-1.3-35.81,10.9-40L61,77.51c-10.84,3.76-15,20.24-9.29,36.73,2.8,8.07,7.53,14.92,13.31,19.28,5.62,4.25,11.56,5.6,16.72,3.81l.85,2.46A16.77,16.77,0,0,1,77.09,140.71Z" />
              <path d="M22.48,147.46c-7.2,0-14.89-6.73-18.35-16.71a28.34,28.34,0,0,1-1-16.23c1.33-5.07,4.27-8.63,8.27-10a11.7,11.7,0,0,1,7.29,0L18,106.94a9.16,9.16,0,0,0-5.7,0c-3.15,1.09-5.5,4-6.61,8.23a25.7,25.7,0,0,0,1,14.7c3.57,10.32,11.93,16.83,18.64,14.51a9.29,9.29,0,0,0,4.8-4l2.2,1.39a12,12,0,0,1-6.15,5.05A11.1,11.1,0,0,1,22.48,147.46Z" />
              <path d="M19.74,148c-7.07,0-14.63-6.61-18-16.42-4-11.47-.77-23,7.15-25.78l.85,2.46c-6.56,2.27-9,12.35-5.54,22.47S15.86,147.23,22.43,145l.85,2.46A10.73,10.73,0,0,1,19.74,148Z" />
              <path d="M157,120.31c-13.14,0-27.27-12.46-33.66-30.9-7.46-21.53-1.6-43.18,13.06-48.27l.85,2.46c-13.3,4.62-18.44,24.78-11.45,44.95s23.51,32.83,36.82,28.22l.85,2.46A19.65,19.65,0,0,1,157,120.31Z" />
              <path d="M151.65,121.31c-5.29,0-10.83-2-16.1-6-7.33-5.53-13.3-14.15-16.81-24.29s-4.17-20.61-1.83-29.48c2.38-9.06,7.58-15.4,14.64-17.85l.86,2.46c-6.22,2.16-10.83,7.85-13,16-2.2,8.38-1.57,18.31,1.78,28s9,17.85,15.91,23.07,13.92,6.73,20.13,4.57l.85,2.46A19.56,19.56,0,0,1,151.65,121.31Z" />
              <rect
                x="49.52"
                y="67.25"
                width="76.44"
                height="2.6"
                transform="translate(-20.81 43.74) rotate(-25.13)"
              />
              <rect
                x="94.63"
                y="123.37"
                width="51.43"
                height="2.6"
                transform="translate(-25.12 30.51) rotate(-13.09)"
              />
              <rect
                x="70.62"
                y="132.03"
                width="25"
                height="2.6"
                transform="translate(-28.05 22.3) rotate(-13.09)"
              />
              <rect
                x="2.54"
                y="100.5"
                width="48.41"
                height="2.6"
                transform="translate(-40.7 20.99) rotate(-25.13)"
              />
              <rect
                x="15.48"
                y="137.84"
                width="48.41"
                height="2.6"
                transform="translate(-30.49 12.61) rotate(-13.09)"
              />
              <rect
                x="104.23"
                y="63"
                width="10.08"
                height="2.6"
                transform="translate(-16.95 52.32) rotate(-25.05)"
              />
              <rect
                x="69.38"
                y="73.94"
                width="32.97"
                height="2.6"
                transform="translate(-23.78 43.44) rotate(-25.05)"
              />
              <rect
                x="39.45"
                y="99.66"
                width="5.45"
                height="2.6"
                transform="translate(-38.78 27.36) rotate(-25.05)"
              />
              <rect
                x="21.1"
                y="105.77"
                width="15.99"
                height="2.6"
                transform="translate(-42.6 22.39) rotate(-25.05)"
              />
              <rect x="125.9" y="147.93" width="14.31" height="2.6" />
              <rect x="32.53" y="147.93" width="9.23" height="2.6" />
              <rect x="49.99" y="147.93" width="65.14" height="2.6" />
              <path d="M181.89,48.87l-3.76-18.41L159.72,26.7l18.41-3.76,3.76-18.41,3.76,18.41,18.41,3.76-18.41,3.76ZM172.71,26.7l7.62,1.56,1.56,7.61,1.55-7.61,7.62-1.56-7.62-1.56-1.55-7.61-1.56,7.61Z" />
              <path d="M151.14,28.17l-2.39-11.7-11.7-2.39,11.7-2.39L151.14,0l2.39,11.69,11.69,2.39-11.69,2.39Zm-1.09-14.09.9.19.19.9.18-.9.9-.19-.9-.18-.18-.9-.19.9Z" />
              <polygon points="203.64 58.81 201.71 49.36 192.25 47.43 201.71 45.5 203.64 36.05 205.57 45.5 215.02 47.43 205.57 49.36 203.64 58.81" />
            </g>
          </svg>
          <h1>Hunt for treasure out on the open sea</h1>
          <h3>Find undervalued NFTs with Spyglass</h3>
          {process.env.NODE_ENV === "development" ? null : (
            <div className="warning">
              Please note that this version of the site is for demo purposes
              only. IMPORTANT: The price data as well as valuations may not be
              completely accurate! It currently only supports two slugs:
              boredapeyachtclub and doodles-official. Some features may not be
              working, such as price filters and wallet connection.
            </div>
          )}

          <SearchBar />
        </div>
      </div>
    );
  } else {
    return (
      <div className="startingpage">
        <div className="startingpagecontents">
          <h1>Loading....</h1>
        </div>
      </div>
    );
  }
};

export default NoAssetDisplay;
