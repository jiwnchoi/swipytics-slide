const fs = require('node:fs');
async function main() {
  const Plot = await import('@observablehq/plot');
  const { JSDOM } = await import('jsdom');
  const document = new JSDOM('').window.document;
  // Response counts transcribed from Appendix Figure: Questionnaire Responses.
  function chart(filename, rows, width, height, marginLeft) {
    const data = rows.flatMap(([label, counts]) => {
      let total = 0;
      return counts.map((count, i) => {
        const start = total; total += count;
        return { label, rating: i + 1, count, start, end: total, midpoint: (start + total) / 2 };
      }).filter(d => d.count > 0);
    });
    const svg = Plot.plot({
      document, width, height, marginLeft, marginRight: 20, marginTop: 12, marginBottom: 45,
      style: { fontFamily: 'Arial, sans-serif', fontSize: '16px', background: 'white' },
      x: { domain: [0, 14], ticks: [0, 7, 14], label: 'Participants (n = 14)' },
      y: { domain: rows.map(r => r[0]), label: null, tickSize: 0, padding: 0.3 },
      color: { domain: [1, 2, 3, 4, 5], range: ['#c90024', '#f5a582', '#ccc', '#91c5d8', '#216fa8'] },
      marks: [
        Plot.rectX(data, { x1: 'start', x2: 'end', y: 'label', fill: 'rating', insetTop: 3, insetBottom: 3 }),
        Plot.text(data, { x: 'midpoint', y: 'label', text: d => String(d.count), fill: d => d.rating === 5 || d.rating === 1 ? 'white' : '#161616', fontWeight: 'bold', fontSize: 17 }),
        Plot.ruleX([0])
      ]
    });
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    fs.writeFileSync(filename, svg.outerHTML);
  }
  chart('assets/proficiency-plot.svg', [['After Self-Learning', [0,1,0,7,6]], ['After Experiment', [0,0,0,6,8]]], 490, 185, 165);
  chart('assets/confidence-plot.svg', [['After Self-Learning', [0,0,0,4,10]], ['After Experiment', [0,0,0,4,10]]], 490, 185, 165);
  chart('assets/usability-plot.svg', [['Charts helpful', [0,0,1,5,8]], ['Charts interpretable', [0,1,1,6,6]], ['Smartphone usability', [0,0,0,1,13]]], 950, 250, 225);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
