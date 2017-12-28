/**
 * PostCSS
 * Reference: https://github.com/postcss/autoprefixer
 * Add vendor prefixes to your css
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 versions']
        })
    ]
};