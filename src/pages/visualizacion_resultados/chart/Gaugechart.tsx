import React from "react";
import GaugeChart from "react-gauge-chart";

export default function Gauge(por:any){
  <GaugeChart
    id="gauge-chart1"
    nrOfLevels={3}
    percent={por}
    hideText={false}
    textColor="black"
    needleBaseColor="black"
    arcPadding={0.015}
    cornerRadius={0}
    arcWidth={0.19}
    needleColor="black"
    colors={["red", "yellow", "green"]}
    arcsLength={[0.075, 0.075, 0.025]}
  />
};