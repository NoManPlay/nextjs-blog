/**
 * @Author Tianxing.Qin
 * @Date 2023-07-06 17:27:03
 * @LastEditors Tianxing.Qin
 * @LastEditTime 2023-07-06 17:27:24
 * @Description 
 */
module.exports = {
    plugins: [
      'tailwindcss',
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009'
          },
          stage: 3,
          features: {
            'custom-properties': false
          }
        }
      ]
    ]
  }