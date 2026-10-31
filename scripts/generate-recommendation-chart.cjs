const fs = require('node:fs');
async function main() {
const vega = await import('vega');
const vegaLite = await import('vega-lite');

// Illustrative values, not observations from the study dataset.
const values = [
  { origin: 'USA', count: 42 },
  { origin: 'Europe', count: 28 },
  { origin: 'Japan', count: 34 },
];
const spec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 260, height: 250,
  data: { values },
  mark: { type: 'bar', color: '#5076a3', width: 48 },
  encoding: {
    x: { field: 'origin', type: 'nominal', title: 'Origin', sort: null, axis: { labelAngle: 0 } },
    y: { field: 'count', type: 'quantitative', title: 'Count', scale: { zero: true } },
  },
  config: { view: { stroke: null }, axis: { gridColor: '#ece8e3', domainColor: '#bdb5ae', tickColor: '#bdb5ae', labelColor: '#79716b', titleColor: '#292524', labelFontSize: 12, titleFontSize: 13, titlePadding: 12 } },
};
const runtime = vega.parse(vegaLite.compile(spec).spec);
const svg = await new vega.View(runtime, { renderer: 'none' }).toSVG();
fs.writeFileSync('assets/recommendation-chart.svg', svg);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
