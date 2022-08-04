process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  presets: ['babel-preset-react-app'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-module-resolver',
      {
        root: ['.', './src/pages'],
      },
    ],
  ],
}
