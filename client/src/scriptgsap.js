import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const AppName = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    // Create a GSAP context for the component
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2","#title-3","#title-4","#title-5"],{
        opacity: 0,
        y:"+=30",
        stagger:0.5,
      }).to(["#title-1", "#title-2","#title-3","#title-4","#title-5"],{
        opacity:0,
        y:"-=30",
        delay:0.5,
        stagger:0.5,
      }).to("#intro-slider",{
        xPercent:"-100",
        duration:1.3,
      }).from("#welcome",{
        opacity:0,
        duration:0.5,
      })
    }, comp);

    // Clean up the context on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute top-0 left-0 z-10 flex flex-col w-full h-screen gap-10 p-6 font-mono tracking-tight bg-twitter">
        <h1 id="title-1" className="text-transparent text-8xl bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-transparent text-8xl bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text">
          Code
        </h1>
        <h1 id="title-3" className="text-transparent text-8xl bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text">
          Design
        </h1>
        <h1 id="title-4" className="text-transparent text-8xl bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text">
          Deploy
        </h1>
        <h1 id="title-5" className="text-transparent text-8xl bg-gradient-to-r from-purple-700 to-orange-600 bg-clip-text">
          Test
        </h1>
      </div>
      <div className="flex justify-center h-screen bg-gray-950 place-items-center">
        <h1 id="welcome" className="font-bold text-gray-100 text-9xl">Welcome.</h1>
      </div>
    </div>
  );
};

export default AppName;
