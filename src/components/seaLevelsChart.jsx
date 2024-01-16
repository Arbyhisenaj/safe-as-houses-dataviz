import React, { useEffect, useRef, useState } from 'react';
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";


function SeaLevels() {
  const headerRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    d3.csv("/hpiData.csv", d3.autoType).then(setData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const chart = Plot.plot({
      style: {
        background: "transparent"
      },
      y: {
        grid: true
      },
      marks: [
        Plot.lineY(data, { x: "dateq", y: "equally weighted", tip: "x" })
      ]
    });
    headerRef.current.append(chart);
    return () => chart.remove();
  }, [data]);

  return (
    <div className="HpiChart">
      <h2>Global Sea Levels</h2>
      <header className="HpiChart-header" ref={headerRef}></header>
    </div>
  );
}

export default SeaLevels;
