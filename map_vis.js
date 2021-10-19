var vg_4 = "melb_map.json";
vegaEmbed("#map", vg_4)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
