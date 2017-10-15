module.exports = {
    entry : './app/app.jsx',
    output : {
        path : __dirname,
        filename : './public/bundle.js'
    },
    resolve : {
        extensions: ['', '.js', '.jsx'],
        root : __dirname,
        alias : {
            Main : 'app/components/Main.jsx',
            NavComponent : 'app/components/NavComponent.jsx',
            Weather : 'app/components/Weather.jsx',
            WeatherForm : 'app/components/WeatherForm.jsx',
            WeatherMessage : 'app/components/WeatherMessage.jsx',
            About : 'app/components/About.jsx',
            Examples : 'app/components/Examples.jsx',
            openWeatherMap : 'app/api/openWeatherMap.jsx'
        }
    },
    module : {
        loaders : [
            {
                loader : 'babel-loader',
                query : {
                    presets : ['react', 'env', 'stage-0']
                },
                test : /\.jsx?$/,
                exclude : /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "cheap-module-eval-source-map"
};
