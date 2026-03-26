module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    indent: ['error', 'tab'],
    'react/jsx-indent': ['error', 'tab'],
    'react/jsx-indent-props': ['error', 'tab'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
  },
};