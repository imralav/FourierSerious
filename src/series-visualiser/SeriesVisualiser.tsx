import { FourierSeriesParams } from "../series/fourier-series";

export default function SeriesVisualiser(props: {
  params: FourierSeriesParams[];
}) {
  return (
    <div>
      canvas to draw on
      <pre>{JSON.stringify(props.params)}</pre>
    </div>
  );
}
