module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "eslint-config-prettier",
    ],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
            },
        ],
        "react/react-in-jsx-scope": "off",
    },
};
