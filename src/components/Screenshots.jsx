import React from 'react';

import ss1 from '../assets/pic1.png';
import ss2 from '../assets/pic2.png';
import ss3 from '../assets/pic3.png';
import ss4 from '../assets/pic4.png';
import ss5 from '../assets/pic5.png';

function Screenshots() {
  const shots = [
    { url: ss1 },
    { url: ss2 },
    { url: ss3 },
    { url: ss4 },
    { url: ss5 },
  ];

  return (
    <section
      id="screenshots"
      className="px-8 py-18 w-full"
    >
      <h2
        className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        App Screenshots
      </h2>
      
      {/* 1. Added a wrapper div to limit the width and enable scrolling */}
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-8 pb-4">
          {shots.map((s, i) => (
            <div
              key={i}
              // 2. Decreased min-width to reduce the overall size/height
              className="min-w-[280px] md:min-w-[320px] flex-shrink-0 bg-cover bg-center rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 aspect-[9/16]"
              style={{ backgroundImage: `url(${s.url})` }}
              data-aos="fade-left"
              data-aos-delay={i * 150}
              data-aos-duration="1500"
            >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Screenshots;