
module.exports = {
    locales: { '/': { lang: 'zh-CN' }},//,'/en/': { lang: 'en-US', },  },
    port: '8888', // 本地端口
    markdown:{
        lineNumbers: true
    },
    base: '/geoncs/',
    head: [
        ['link', { rel: 'icon', href: '/images/Logo.png' }]
    ],
    title: '地理研学',
    theme: require.resolve('../../theme-reco'),
    themeConfig: {
        //导航栏logo
        logo: '/images/Logo.png',
        author: '洛',
        type: 'blog',
        authorAvatar: '/images/Luo.png',
        modePicker: true,
        nav: require('./config/navbar.js'),

        //valineConfig: {
        //    appId: '...',// your appId
        //    appKey: '...', // your appKey
        //},

        vssueConfig: {
            platform: 'github-v4',
            owner: 'LiChongrui',
            repo: 'geoncs',
            clientId: '7c394e52578eace41116',
            clientSecret: '6a052342039e6356824758e86d3ef21da83bf700',
            autoCreateIssue: true
        },

        // 加密
        keyPage: {
          //keys: ['e10adc3949ba59abbe56e057f20f883e'],
          //color: '#42b983', // 登录页动画球的颜色
          //lineColor: '#42b983' // 登录页动画线的颜色
        },
        // 侧边栏
        sidebar: require('./config/sidebar.js'),
        sidebarDepth: 4,

        displayAllHeaders: true,
        subSidebar: 'auto', 

        lastUpdated: '最近更新', 
        smoothScroll: true,

        // 备案号
        record: '某某ICP备xxxxxxxxxx号',
        recordLink: 'http://www.beian.gov.cn/portal/registerSystemInfo',
        cyberSecurityRecord: 'xxx安备xxxxxxxxxx号',
        cyberSecurityLink: 'https://beian.miit.gov.cn/',
        startYear: 2021,
        showAccessNumber: true,
        //codeTheme: 'tomorrow',//'solarizedlight', 'funky','okaidia', 'tomorrow'
    },
    plugins: [
         [
             'vuepress-plugin-mermaidjs',{
                 //gantt: { barHeight: 40, fontSize:20}
             }        
         ],
         'vuepress-plugin-boxx',
         'vuepress-plugin-mathjax'
    ]

}  