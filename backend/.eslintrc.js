module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['eslint:recommended', 'airbnb-base'],
  root: true,
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@angular-eslint/no-empty-lifecycle-method": "off",
    "no-useless-constructor": "off",
    "no-plusplus": ["off"],
    "class-methods-use-this": ["off"],
    "import/no-cycle-return": ["off"],
    "import/no-cycle": ["off"],
    "consistent-return": ["off"],
    "array-callback-return": ["off"],
    "no-unused-vars": "off",
    "import/no-relative-packages": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "object-curly-newline": ["error", {"multiline": true}],
    "max-len": ["error", { "code": 120 }],
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
};
