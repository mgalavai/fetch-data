# Figma Random Number Generator Plugin

This Figma plugin updates a selected text node with a random number obtained from an external API. It's designed to demonstrate how Figma plugins can interact with external services and update document elements based on the response.

## How It Works

1. The user selects a text node in a Figma document.
2. The user activates the plugin and clicks the "Generate Random Number" button in the plugin UI.
3. The plugin sends a request to an external API through a CORS proxy to generate a random number.
4. The plugin updates the selected text node with the random number received from the API.

## Setup

To use this plugin:

1. Clone this repository to your local machine.
2. Navigate to the cloned directory and install dependencies (if any).
3. Load the plugin in Figma using the 'Plugins > Development > New Plugin...' menu option and selecting the `manifest.json` file from the cloned directory.

## Contributing

Contributions are welcome! Please read the contributing guide before making a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
