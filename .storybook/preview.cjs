import prettier from "prettier/standalone";
import prettierBabel from "prettier/parser-babel";

import "tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    transformSource: (input) =>
      prettier
        .format(input, { parser: "babel", plugins: [prettierBabel] })
        .trim()
        .slice(0, -1),
  },
};
