import React, { useRef, useEffect, useState } from "react";
import { TweenMax, TimelineMax } from "gsap";
import "./Result";
import "tachyons";

const Line = () => {
  const lineCss = useRef(null);
  const [t1] = useState(new TimelineMax({ delay: 1 }));

  useEffect(() => {
    t1.to(lineCss.current, 1, { x: 100, y: 0 })
      .to(lineCss.current, 1, { x: 100, y: 100,rotate:90 })
      .to(lineCss.current, { x: -50, y: 50, rotate:90 })
      .to(lineCss.current, { x: 0, y: 0 ,rotate:90});
  }, []);
  return (
    <div className="tc ">
      <div ref={lineCss} className="Line ma2 "></div>
    </div>
  );
};

export default Line;

/*

 console.log(tw);
    tw.to(lineCss.current, 1, {
      x: "1000",
    })
      .to(lineCss.current, 1, {
        y: "1000",
        delay: 1,
      })

      .to(lineCss.current, 1, {
        x: "-1000",
        delay: 1,
      })

      .to(lineCss.current, 1, {
        y: "-1000",
        delay: 1,
      });
*/
