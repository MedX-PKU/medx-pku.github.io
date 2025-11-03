import js from '@eslint/js'
import vue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,vue,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      }
    },
    rules: {
      // Vue specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',

      // General JavaScript rules
      'no-unused-vars': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // Code style
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never']
    }
  },
  {
    files: ['**/*.vue'],
    rules: {
      // Vue template specific rules
      'vue/html-indent': ['error', 2],
      'vue/html-quotes': ['error', 'double'],
      'vue/max-attributes-per-line': ['error', {
        'singleline': 3,
        'multiline': 1
      }]
    }
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.min.js',
      'public/**'
    ]
  }
]