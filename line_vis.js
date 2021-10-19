var vg_3 = "line_chart.json";
vegaEmbed("#line_chart", vg_3)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
