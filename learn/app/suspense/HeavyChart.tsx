"use client";

import { useEffect, useState } from "react";

export default function HeavyChart() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake API request using Promise
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          users: 1200,
          sales: 5400,
        });
      }, 3000);
    }).then((response: any) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-lg">Fetching chart data...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 bg-gray-300 flex flex-col items-center justify-center rounded-xl">
      <p className="text-xl font-bold">Heavy Chart Loaded!</p>

      <div className="mt-4 text-center">
        <p>Users: {data.users}</p>
        <p>Sales: ${data.sales}</p>
      </div>
    </div>
  );
}
