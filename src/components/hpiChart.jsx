import React, { useEffect, useRef, useState } from 'react';
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";


function HpiChart() {
  const headerRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    d3.csv("/hpiData.csv", d3.autoType).then(setData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const chart = Plot.plot({
       x: {label: "Date", tickRotate:"0", insetLeft: 36}, // reserve space for inset labels
  y: {label: "Index"}, // reserve space for inset labels
      style: {
        background: "transparent"
      },
      y: {
        grid: true,
        label: "Index",
      },
      x: {
        label: "Date",
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
      <h2>House Price Index</h2>
      <header className="HpiChart-header" ref={headerRef}></header>
    </div>
  );
}

export default HpiChart;
