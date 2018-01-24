/**
* Webpack config created by Vladislav Korzo
* Date created: 13.02.2017
* Date updated: 16.05.2017
*/

/**
* MODULES
*/
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import WebpackNotifierPlugin from 'webpack-notifier';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssets from 'optimize-css-assets-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import appConfig from './config';

/**
* VARIABLES
*/
const DEV_SERVER = process.env.NODE_ENV === 'development';
const API_URL = DEV_SERVER ? 'http://localhost:3001' : 'https://befront.io';

/**
* CONFIG
* Reference: https://webpack.js.org/configuration/
* This is the object where all configuration gets set
*/
const config = {};

/**
* RESOLVE
* Reference: https://webpack.js.org/configuration/resolve/#resolve
* Configure how modules are resolved.
*/
config.resolve = {
    alias: {
        appMiddlewares: path.resolve(__dirname, appConfig.APP_MIDDLEWARES_DIRECTORY),
        appUtils: path.resolve(__dirname, appConfig.APP_UTILS_DIRECTORY),
        appAPI: path.resolve(__dirname, appConfig.APP_API_DIRECTORY),
        appConfig: path.resolve(__dirname, appConfig.APP_CONFIG_DIRECTORY),
        appComponents: path.resolve(__dirname, appConfig.APP_COMPONENTS_DIRECTORY),
        appContainers: path.resolve(__dirname, appConfig.APP_CONTAINERS_DIRECTORY),
        appHoc: path.resolve(__dirname, appConfig.APP_HOC_DIRECTORY),
        appPages: path.resolve(__dirname, appConfig.APP_PAGES_DIRECTORY),
        appAssets: path.resolve(__dirname, appConfig.ASSETS_DIRECTORY)
    }
};

/**
* ENTRY
* Reference: https://webpack.js.org/configuration/entry-context/#e..
* Entry point of the application
*/
config.entry = {
    app: `${[appConfig.APP_ENTRY_DIRECTORY]}/app`
};

/**
* OUTPUT
* Reference: https://webpack.js.org/configuration/output/
* Output files of the application
*/
config.output = {
    // Absolute output directory
    path: path.resolve(__dirname, appConfig.BUILD_DIRECTORY),

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: DEV_SERVER ? appConfig.DEV_SERVER_URL : appConfig.PRODUCTION_SERVER_URL,

    // Filename for entry points
    // Only adds hash in build mode
    filename: DEV_SERVER ? `${appConfig.SCRIPTS_DIRECTORY}/[name].js` : `${appConfig.SCRIPTS_DIRECTORY}/[name].[hash].js`
};

/**
* DEVTOOL
* Reference: https://webpack.js.org/configuration/devtool/
* Type of sourcemap to use per build type
*/
if (DEV_SERVER) {
    config.devtool = 'cheap-module-source-map';
} else {
    config.devtool = 'eval-source-map';
}

/**
* LOADERS
* Reference: https://webpack.js.org/concepts/loaders/
* This handles most of the magic responsible for converting modules
*/
config.module = {
    rules: [
        {
        // ESLINT LOADER
        // Reference: https://github.com/MoOx/eslint-loader
        // Check js files for code errors
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            options: {
                fix: true
            }
        },
        {
        // JS LOADER
        // Reference: https://github.com/babel/babel-loader
        // Transpile .js files using babel-loader
        // Compiles ES6 and ES7 into ES5 code
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-runtime']
            }
        },
        {
        // CSS LOADER
        // Reference: https://github.com/webpack-contrib/css-loader
        // Allow loading css through js
        //
        // POSTCSS LOADER
        // Reference: https://github.com/postcss/postcss-loader
        // Postprocess your css with PostCSS plugins
        //
        // STYLE LOADER
        // Reference: https://github.com/webpack-contrib/style-loader
        // Adds CSS to the DOM by injecting a <style> tag
        //
        // SASS LOADER
        // Reference: https://github.com/jtangelder/sass-loader
        // Compiles Sass to CSS
        //
        // SASS RESOURCES LOADER
        // Reference: https://github.com/shakacode/sass-resources-loader
        // Import sass resources to every sass file 
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader', 
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                `${appConfig.ASSETS_DIRECTORY}/styles/variables.scss`, 
                                `${appConfig.ASSETS_DIRECTORY}/styles/mixins.scss`,
                                `${appConfig.ASSETS_DIRECTORY}/styles/colors.scss`
                            ]
                        },
                    }
                ],
                fallback: 'style-loader'
            })
        },
        {
        // FILE LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy png, jpg, jpeg, gif, svg files to output
        // Rename the file using the asset hash
        // Pass along the updated reference to your code
        //
        // IMAGE WEBPACK LOADER
        // Reference: https://github.com/tcoopman/image-webpack-loader
        // Loader for images
            test: /\.(gif|png|jpe?g|svg)$/i,
            loaders: [
                `file-loader?name=${appConfig.IMAGES_DIRECTORY}/[name].[ext]`,
                {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true
                        },
                        gifsicle: {
                            interlaced: true
                        },
                        optipng: {
                            optimizationLevel: 4
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3
                        }
                    }
                }
            ],
            exclude: /node_modules/
        },
        {
        // FILE LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy woff, woff2, ttf, eot files to output
        // Rename the file using the asset hash
        // Pass along the updated reference to your code
            test: /\.(woff|woff2|ttf|eot)$/,
            loader: `file-loader?name=${appConfig.FONTS_DIRECTORY}/[name].[ext]`
        },
        {
        // JSON LOADER
        // Reference: https://github.com/webpack-contrib/json-loader
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
        // FILE LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy css files to output
        // Rename the file using the asset hash
        // Pass along the updated reference to your code
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            camelCase: true,
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ],
                fallback: 'style-loader'
            })
        }
    ]
};

/**
* Devserver
* Reference: https://webpack.js.org/configuration/dev-server/
*/
config.devServer = {
    contentBase: path.resolve(__dirname, appConfig.APP_ENTRY_DIRECTORY),
    historyApiFallback: true,
    inline: true,
    open: true,
    compress: true,
    port: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' }
};

/**
* Plugins
* Reference: https://webpack.js.org/configuration/plugins/
*/
config.plugins = [];

// WEBPACK NOTIFIER WINDOW
// Reference: https://github.com/Turbo87/webpack-notifier
// Add build status system notifications
config.plugins.push(
    new WebpackNotifierPlugin({
        alwaysNotify: true,
        title: 'befront',
        contentImage: path.resolve(__dirname, appConfig.WEBPACK_NOTIFIER_IMG)
    })
);

// PROGRESS BAR WEBPACK PLUGIN
// Reference: https://github.com/clessg/progress-bar-webpack-plugin
// Add progress bar to webpack build
config.plugins.push(
    new ProgressBarPlugin({
        format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
        clear: false
    })
);

// HTML WEBPACK PLUGIN
// Reference: https://github.com/ampedandwired/html-webpack-plugin
// Skip rendering index.html in test mode
config.plugins.push(
    new HtmlWebpackPlugin({
        template: `${appConfig.HTML_DIRECTORY}/index.html`,
        inject: 'body'
    })
);

// EXTRACT TEXT WEBPACK PLUGIN
// Reference: https://github.com/webpack/extract-text-webpack-plugin
// Extract css files
// Disabled when in test mode or not in build mode
config.plugins.push(
    new ExtractTextPlugin({
        filename: `${appConfig.STYLES_DIRECTORY}/[name].[hash].css`,
        disable: DEV_SERVER
    })
);

// DEFINE PLUGIN
// Reference: https://webpack.js.org/plugins/define-plugin/
// Create global constants which can be configured at compile time
config.plugins.push(
    new webpack.DefinePlugin({ 
        DEV_SERVER: JSON.stringify(DEV_SERVER),
        API_URL: JSON.stringify(API_URL)
    })
);

// Add build specific plugins
if (!DEV_SERVER) {
    config.plugins.push(

    // COMMONS CHUNK PLUGIN
    // Reference: https://webpack.js.org/plugins/commons-chunk-plugin/
    // Create separate file for common modules
        new webpack.optimize.CommonsChunkPlugin({
            name: 'libs',
            minChunks: ({ resource }) => /node_modules/.test(resource)
        }),

        // MODULE CONCATENATION WEBPACK PLUGIN
        // Reference: https://webpack.js.org/plugins/module-concatenation-plugin/
        // This plugin will enable the same concatenation behavior in webpack.
        new webpack.optimize.ModuleConcatenationPlugin(),

        // NO ERRORS PLUGIN
        // Reference: https://webpack.js.org/plugins/no-emit-on-errors-plug..
        // Only emit files when there are no errors
        new webpack.NoEmitOnErrorsPlugin(),

        // OPTIMIZE CSS ASSETS PLUGIN
        // Reference: https://github.com/NMFR/optimize-css-assets-webpack-p..
        // Minimize css assets
        new OptimizeCSSAssets({
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),

        // UGLIFYJS PLUGIN
        // Reference: https://github.com/webpack-contrib/uglifyjs-webpack-p..
        // Minify all javascript, switch loaders to minimizing mode
        new UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false
            }
        }),

        // COPY WEBPACK PLUGIN
        // Copy assets from the public folder
        // Reference: https://github.com/kevlened/copy-webpack-plugin
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, appConfig.HTML_DIRECTORY)
        }])
    );
}

module.exports = config;