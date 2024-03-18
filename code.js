figma.showUI(`
  <button id="generate">Generate Random Number</button>
  <script>
    document.getElementById('generate').addEventListener('click', () => {
      parent.postMessage({ pluginMessage: { type: 'generate-number' } }, '*');
    });
  </script>
`, { width: 240, height: 100 });

figma.ui.onmessage = async msg => {
  if (msg.type === 'generate-number') {
    const proxyUrl = 'https://satin-destiny-birch.glitch.me/proxy?url=https://api.random.org/json-rpc/2/invoke';
    const body = {
      jsonrpc: "2.0",
      method: "generateIntegers",
      params: {
        apiKey: "2c759ac1-95ef-40aa-8501-802dafa3e426",
        n: 1, // Request only one number
        min: 1,
        max: 6,
        replacement: true
      },
      id: 1
    };

    fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(async data => {
      if (data.result && data.result.random && data.result.random.data && figma.currentPage.selection.length > 0 && figma.currentPage.selection[0].type === 'TEXT') {
        const textNode = figma.currentPage.selection[0];
        await figma.loadFontAsync(textNode.fontName);
        // Update the text node with just the number
        textNode.characters = `${data.result.random.data[0]}`;
      } else {
        console.error('Unexpected response format or no text node selected:', data);
      }
    })
    .catch(error => console.error('Error:', error));
  }
};
