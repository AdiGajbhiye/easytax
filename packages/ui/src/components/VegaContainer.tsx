import { createRef, useEffect } from 'react';
import vegaEmbed, { VisualizationSpec } from 'vega-embed';

interface IProps {
  spec: VisualizationSpec;
}

export default function VegaContainer({ spec }: IProps) {
  const containerRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (containerRef.current) {
      vegaEmbed(containerRef.current, spec);
    }
  }, [containerRef, spec]);
  return <div ref={containerRef} />;
}
