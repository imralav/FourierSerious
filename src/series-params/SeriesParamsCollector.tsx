import React from "react";
import { FourierSeriesParams } from "../series/fourier-series";
import "./SeriesParamsCollector.css";

type FourierParamProps = FourierSeriesParams & {
  changeRadius: (value: number) => void;
  changeAngleSpeed: (value: number) => void;
};

function SingleParam(props: FourierParamProps) {
  return (
    <div className="fourier-series-param">
      <label>
        Radius
        <input
          type="number"
          value={props.radius}
          min="10"
          onChange={(event) => props.changeRadius(+event.target.value)}
        />
        px
      </label>
      <label>
        Angle speed
        <input
          type="number"
          value={props.angleSpeed}
          onChange={(event) => props.changeAngleSpeed(+event.target.value)}
        />
        deg/s
      </label>
    </div>
  );
}

type SeriesParamsCollectorState = {
  params: FourierParamProps[];
};

type SeriesParamsCollectorProps = {
  params: FourierSeriesParams[];
  paramsUpdated: (params: FourierSeriesParams[]) => void;
  newParams: () => void;
  clearAllParams: () => void;
};

export default class SeriesParamsCollector extends React.Component<
  SeriesParamsCollectorProps,
  SeriesParamsCollectorState
> {
  constructor(props: SeriesParamsCollectorProps) {
    super(props);
  }
  changeAngleSpeed(index: number, value: number) {
    const newParams = [...this.props.params];
    newParams[index].angleSpeed = value;
    this.props.paramsUpdated(newParams);
  }
  changeRadius(index: number, value: number) {
    const newParams = [...this.props.params];
    newParams[index].radius = value;
    this.props.paramsUpdated(newParams);
  }
  render() {
    return (
      <div className="fourier-series-params">
        {this.props.params.map((param, index) => (
          <SingleParam
            key={index}
            radius={param.radius}
            angleSpeed={param.angleSpeed}
            changeAngleSpeed={(value) => this.changeAngleSpeed(index, value)}
            changeRadius={(value) => this.changeRadius(index, value)}
          />
        ))}
        <button onClick={() => this.props.newParams()}>+</button>
        <button onClick={() => this.props.clearAllParams()}>clear all</button>
      </div>
    );
  }
}
