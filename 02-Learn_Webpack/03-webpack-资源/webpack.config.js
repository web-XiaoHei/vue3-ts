const path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, //正则表达式
                // 1.loader的写法(语法糖)
                // loader: "css-loader"

                // 2.完整的写法
                use: [
                    // {loader: "css-loader"}
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                    // {
                    //   loader: "postcss-loader",
                    //   options: {
                    //     postcssOptions: {
                    //       plugins: [
                    //         require("autoprefixer")
                    //       ]
                    //     }
                    //   }
                    // }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // {
            //   test: /\.(less|css)$/,
            //   use: [
            //     "style-loader",
            //     "css-loader",
            //     "less-loader"
            //   ]
            // },
            // {
            //   test: /\.(jpe?g|png|gif|svg)$/,
            //   use: {
            //     loader: "url-loader",
            //     options: {
            //       // outputPath: "img",
            //       name: "img/[name]_[hash:6].[ext]",
            //       limit: 100 * 1024
            //     }
            //   }
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6][ext]"
                }
            }
        ]
    }
}
