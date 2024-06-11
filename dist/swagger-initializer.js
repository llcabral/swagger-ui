window.onload = function () {
  // Build a system
  const ui = SwaggerUIBundle({
    url: "swagger.yaml",  // Modifique esta linha para apontar para o seu arquivo YAML
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
};