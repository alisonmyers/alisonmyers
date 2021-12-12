import {FaArrowCircleUp} from '@react-icons/all-files/fa/FaArrowCircleUp';
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (

    <>

    <FaArrowCircleUp 
   className="scroll-to-top" 
   onClick={scrollToTop} 
   style={{height: 40, display: isVisible ? 'flex' : 'none'}}/>

    <div className="scrollTop">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3 className="p-4"><FaArrowCircleUp /> To Top</h3>
        </div>
      )}
    </div>

    </>
  );
}
