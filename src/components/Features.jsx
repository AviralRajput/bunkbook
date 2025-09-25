import React from 'react';

function Features({ isDark }) {
  const features = [
    { title: "Attendance Tracking", desc: "Monitor attendance for all courses in one place.", icon: "📅" },
    { title: "Warnings & Alerts", desc: "Get timely alerts about low attendance.", icon: "🔔" },
    { title: "Safe Skip Suggestions", desc: "Know when it's safe to bunk without hurting grades.", icon: "🛡️" },
    { title: "Auto Sync", desc: "Instant synchronization across devices.", icon: "🔄" },
    { title: "Session Insights", desc: "Detailed breakdown of sessions for smarter planning.", icon: "📊" },
    { title: "Customization", desc: "Modify the interface to fit your preferences.", icon: "⚙️" },
  ];

  return (
    <section
      id="features"
      className="w-full px-8 py-18"
      data-aos="fade-up"
    >
      <h2
        className="text-5xl font-extrabold text-center text-black-900 dark:text-white mb-12"
        data-aos-duration="1500"
      >
        Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-duration="1500"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {f.title}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;