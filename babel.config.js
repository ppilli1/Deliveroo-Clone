module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'tailwindcss-react-native/babel',
        {
          config: './tailwind.config.js', // Specify the path to your Tailwind CSS configuration file if necessary
        },
      ],
    ],
  };
};
