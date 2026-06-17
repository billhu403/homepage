import { useEffect, useState } from "react";

const timeZone = "America/Los_Angeles";

function getRegionTime() {
  const now = new Date();

  return {
    time: new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone,
      timeZoneName: "short",
    }).format(now),
    date: new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone,
    }).format(now),
  };
}

export default function RegionTime() {
  const [regionTime, setRegionTime] = useState(getRegionTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRegionTime(getRegionTime());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="region-time" aria-label="Current Pacific time">
      <div className="region-time-label">Pacific Time</div>
      <div className="region-time-value">{regionTime.time}</div>
      <div className="region-time-date">{regionTime.date}</div>
    </div>
  );
}
