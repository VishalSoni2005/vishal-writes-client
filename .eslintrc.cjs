module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // React 17+ JSX transform
    "react/react-in-jsx-scope": "off",

    // ❌ Disable prop-types completely (JS project)
    "react/prop-types": "off",
    "no-mixed-spaces-and-tabs": "off",

    // Vite HMR safety
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Clean code rules
    "no-unused-vars": "off",
    "no-undef": "error",

    "no-console": "off",
  },
};
