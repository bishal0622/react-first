module.exports = {

    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/component/Main.jsx',
            Nav: 'app/component/Nav.jsx',
            Weather: 'app/component/Weather.jsx',
            About: 'app/component/About.jsx',
            Examples: 'app/component/Examples.jsx',
            WeatherForm: 'app/component/WeatherForm',
            WeatherMessage: 'app/component/WeatherMessage',
            openWeatherMap: 'app/api/openWeatherMap'

        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/
            }
        ]
    }
};