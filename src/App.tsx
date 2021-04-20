import React from "react";
import "./App.css";
import SeriesParamsCollector from "./series-params/SeriesParamsCollector";
import SeriesVisualiser from "./series-visualiser/SeriesVisualiser";
import { FourierSeriesParams } from "./series/fourier-series";

const DEFAULT_PARAMS = { radius: 100, angleSpeed: 15 };
class App extends React.Component<{}, { params: FourierSeriesParams[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      params: [{ ...DEFAULT_PARAMS }],
    };
  }
  setParams(params: FourierSeriesParams[]) {
    this.setState({ params });
  }
  newParams() {
    this.setParams([...this.state.params, { ...DEFAULT_PARAMS }]);
  }
  render() {
    return (
      <main>
        <header>
          <SeriesParamsCollector
            params={this.state.params}
            paramsUpdated={(params) => this.setParams(params)}
            newParams={() => this.newParams()}
            clearAllParams={() => this.setParams([{ ...DEFAULT_PARAMS }])}
          />
        </header>
        <section>
          <SeriesVisualiser params={this.state.params} />
        </section>
      </main>
    );
  }
}

export default App;
