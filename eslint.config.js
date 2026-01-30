import js from "@eslint/js";
import globals from "globals";

import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "coverage", "node_modules"]),

  {
    files: ["**/*.{ts,tsx}"],

    plugins: {
      import: importPlugin,
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      quotes: ["error", "double", { avoidEscape: true }],

      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            { target: "./src/app", from: ["./src/features", "./src/entities"] },
            { target: "./src/entities", from: ["./src/shared", "./src/widgets", "./src/pages"] },
            { target: "./src/shared", from: ["./src/entities", "./src/features", "./src/widgets"] },
          ],
        },
      ],
    },
  },

  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
]);
