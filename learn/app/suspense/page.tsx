'use client'

import { useState } from "react";

import HeavyChart from "./HeavyChart";
import { Suspense } from "react";

export default function SuspensePage(){

  let [suspensetest , setSuspenseTest] = useState(false);

  return (

    <>
      <h1 className="text-2xl font-bold mb-4">Suspense Example</h1>
      <p className="mb-4">This page demonstrates the use of React Suspense for loading a heavy component.</p>
      <div className="border p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Heavy Chart</h2>
        <p className="mb-2">The chart below simulates a heavy component that takes time to load.</p>
        {/* The HeavyChart component will be loaded here */}

        {
          suspensetest ? <Suspense fallback={<div>Loading chart...</div>}>
            <HeavyChart />
          </Suspense> : <button onClick={()=>setSuspenseTest(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Load Chart</button>
        }

      </div>
    </>
  )
}