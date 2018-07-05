module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '浙江省公共数据•交换平台',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: '浙江省公共数据•交换平台'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_723532_qwwghdu112.css' }
        ],

        script: [
            { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' },
            { src: 'https://cdn.bootcss.com/echarts/3.8.5/echarts.js' },
        ],
    },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~/assets/css/common.css'
    ],
    /*
     ** Add element-ui in our app, see plugins/element-ui.js file
     */
    plugins: [
        '@/plugins/element-ui'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['element-ui'],
        postcss: [
            require('postcss-import')(),
            require('postcss-url')(),
            require('postcss-cssnext')(),
            require('precss')()
        ],
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}