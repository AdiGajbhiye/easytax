import { createRef, useEffect } from 'react';
import vegaEmbed, { VisualizationSpec } from 'vega-embed';

interface IProps {
  spec: VisualizationSpec;
}

export default function VegaContainer({ spec }: IProps) {
  const ref = createRef<HTMLDivElement>();
  useEffect(async () => {
    const result = await vegaEmbed(ref, spec);
    console.log(result);
  }, []);
  return <div ref={ref}></div>;
}
