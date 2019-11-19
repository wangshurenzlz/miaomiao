export default {
    path: '/movie',
    component : ()=> import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : 'detail/1/:movieId',
            components : {
                default : () => import('@/components/NowPlaying'),
                detail : ()=> import('@/views/Movie/detail.vue')
            },
            props : {
                detail : true//解决动态路由传参的问题
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default : () => import('@/components/ComingSoon'),
                detail : ()=> import('@/views/Movie/detail.vue')
            },
            props : {
                detail : true//解决动态路由传参的问题
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowplaying'
        }
    ]
}