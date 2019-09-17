var webpack = require('webpack');
module.exports = {
    // publickPath: './',
    publicPath: './',
    chainWebpack: config => {
        config.module.rules.delete('images')
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                name: 'img/[name].[ext]',
                limit: 4096,
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }


            })
    }

    // chainWebpack: config => {
    //     publickPath: './',
    //     config.module
    //     .rule('images')
    //     .use('url-loader')
    //     .loader('url-loader')
    //     .tap(options => {
    //         name: 'img/[name].[ext]';
    //         return name
    //     })
    // }
}


/* config.module.rule('images') */
//  {
//     test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
//     use: [
//       /* config.module.rule('images').use('url-loader') */
//       {
//         loader: 'url-loader',
//         options: {
//           limit: 4096,
//           fallback: {
//             loader: 'file-loader',
//             options: {
//               name: 'img/[name].[hash:8].[ext]'
//             }
//           }
//         }
//       }
//     ]
//   },
//   /* config.module.rule('svg') */
//   {
//     test: /\.(svg)(\?.*)?$/,
//     use: [
//       /* config.module.rule('svg').use('file-loader') */
//       {
//         loader: 'file-loader',
//         options: {
//           name: 'img/[name].[hash:8].[ext]'
//         }
//       }
//     ]
//   },
//   /* config.module.rule('media') */
//   {
//     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//     use: [
//       /* config.module.rule('media').use('url-loader') */
//       {
//         loader: 'url-loader',
//         options: {
//           limit: 4096,
//           fallback: {
//             loader: 'file-loader',
//             options: {
//               name: 'media/[name].[hash:8].[ext]'
//             }
//           }
//         }
//       }
//     ]
//   },
//   /* config.module.rule('fonts') */
//   {
//     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
//     use: [
//       /* config.module.rule('fonts').use('url-loader') */
//       {
//         loader: 'url-loader',
//         options: {
//           limit: 4096,
//           fallback: {
//             loader: 'file-loader',
//             options: {
//               name: 'fonts/[name].[hash:8].[ext]'
//             }
//           }
//         }
//       }
//     ]
//   },