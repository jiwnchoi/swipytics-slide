const fs = require('node:fs');
async function main() {
  const vega = await import('vega');
  const vegaLite = await import('vega-lite');
  // Counts transcribed from Appendix: Questionnaire Responses (n = 14).
  const rows = [
    ['Proficiency: self-study', [0, 1, 0, 7, 6]],
    ['Proficiency: exploration', [0, 0, 0, 6, 8]],
    ['Confidence: self-learning', [0, 0, 0, 4, 10]],
    ['Confidence: exploration', [0, 0, 0, 4, 10]],
    ['Charts helpful', [0, 0, 1, 5, 8]],
    ['Charts easy to interpret', [0, 1, 1, 6, 6]],
    ['Smartphone usability', [0, 0, 0, 1, 13]],
  ];
  const values = rows.flatMap(([question, counts]) => { let offset = 0; return counts.map((count, index) => { const start = offset; offset += count; return { question, rating: String(index + 1), count, start, end: offset, midpoint: start + count / 2 }; }).filter(d => d.count); });
  const encoding = {
    y: { field: 'question', type: 'nominal', sort: rows.map(row => row[0]), axis: { title: null, labelLimit: 350, labelFontSize: 17, labelPadding: 12, ticks: false, domain: false } },
    x: { field: 'start', type: 'quantitative', scale: { domain: [0, 14] }, axis: { title: 'Participants (n = 14)', values: [0, 2, 4, 6, 8, 10, 12, 14], grid: false, labelFontSize: 14, titleFontSize: 15, titlePadding: 10 } },
    x2: { field: 'end' },
    color: { field: 'rating', type: 'nominal', scale: { domain: ['1', '2', '3', '4', '5'], range: ['#c90024', '#f5a582', '#cccccc', '#91c5d8', '#216fa8'] }, legend: { title: 'Rating (1–5)', orient: 'bottom', direction: 'horizontal', labelFontSize: 14, titleFontSize: 14, symbolType: 'square' } },
    order: { field: 'rating', type: 'ordinal', sort: 'ascending' },
  };
  const spec = { $schema: 'https://vega.github.io/schema/vega-lite/v6.json', width: 600, height: 320, data: { values }, layer: [
    { mark: { type: 'bar', size: 30 }, encoding },
    { mark: { type: 'text', fontSize: 16, fontWeight: 'bold' }, encoding: { ...encoding, color: { condition: { test: "datum.rating === '5' || datum.rating === '1'", value: 'white' }, value: '#161616' }, text: { field: 'count', type: 'quantitative' }, x: { field: 'midpoint', type: 'quantitative' }, x2: undefined } },
  ], config: { view: { stroke: null }, axisY: { labelLimit: 350 }, font: 'Arial' } };
  const runtime = vega.parse(vegaLite.compile(spec).spec);
  fs.writeFileSync('assets/study-ratings.svg', await new vega.View(runtime, { renderer: 'none' }).toSVG());
}
main().catch(error => { console.error(error); process.exitCode = 1; });
