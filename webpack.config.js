/**
 * Created by Personal on 12/10/2016.
 */

module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test:    /\.html$/,
                loader:  'file?name=[path][name].[ext]&context=./src'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        inline: true,
        stats: { colors: true }
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
}