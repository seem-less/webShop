//const InjectPlugin = require('webpack-inject-plugin').default;
//const uiCore = require("./styles/core.min.js");
//const customScript = require("./styles/script.js");

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config

        // config.plugins.push(new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }))



        // config.plugins.push(new InjectPlugin(function() {
        //     return uiCore + customScript;
        // }))
        
        //config.optimization.minimize = false;

        // load vegano theme scripts
        // return {...config, 
        //     entry () {
        //     return config.entry().then((entry) => {
        //             return Object.assign({}, entry, { 
        //                 "core.min": './public/core.min.js',
        //                 "script": './public/script.js'})
        //         })
        //     }
        // }

        // const original = config.entry
        // config.entry = function () {
        //   return original()
        //     .then((entry) => {
        //       // do something with it
        //       console.log(entry)
        //       return entry
        //     })
        // }

        // config.rules = [
        //     {
        //         test: /\.m?js$/,
        //         exclude: /(node_modules|bower_components)/,
        //         use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env']
        //         }
        //         }
        //     }
        // ]
        

        // Important: return the modified config
        return config
    },
}