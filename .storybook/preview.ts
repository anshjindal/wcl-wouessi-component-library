import React from 'react';
import type { Preview } from '@storybook/react'; 
import "../src/App.css"; // Ensure global styles are loaded


/**
 * Customizing the story's viewport to center components on the page while allowing them to strech in all directions.
 * ---------------------------
 */
(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    #storybook-root {
      width: 100%;
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem;
      box-sizing: border-box;
    }
    
    #storybook-root[hidden="true"] {
      display: none;
    }

    .docs-story {
      padding: 2rem;
    }
  `;
  document.head.appendChild(style);
})();

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => 
      React.createElement(
        React.Fragment,
        {},
        React.createElement("link", {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        }),
        React.createElement("link", {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        }),
        React.createElement("link", {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap",
          rel: "stylesheet",
        }),
        React.createElement(Story)
      ),
  ],
};

export default preview; 