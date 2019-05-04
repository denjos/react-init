const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:`./src/app/index.js`,
    output:{
        path:path.join(__dirname,"dist"),
        filename: "bundle.js"
    },
    devServer: {
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?outputStyle=compressed&sourceMap'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};