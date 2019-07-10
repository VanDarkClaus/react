import {
    Login,
    NotFound,
    Commodity,
    Home,
    Setting,
    LoginLog,
    SystemHome,
    SystemInfo,
    UserSetting
} from '../views'
//该路由不需要权限
export const mainRoutes = [
    {
        path: '/login',
        component: Login
    }, {
        path: '/404',
        component: NotFound
    }
]

//该路由需要权限
export const adminRoutes = [
   {
        path: '/admin/commodity',
        component: Commodity
    }, {
        path: '/admin/home',
        component: Home
    }, {
        path: '/admin/setting',
        component: Setting
    }
]
//主页路由，侯龙改
export const homeRoutes =[
    {
        path: '/admin/home/loginLog',
        component: LoginLog
    }, {
        path: '/admin/home/systemhome',
        component: SystemHome
    }, {
        path: '/admin/home/systeminfo',
        component: SystemInfo
    }, {
        path: '/admin/home/usersetting',
        component: UserSetting
    }
    
]

//设置路由，陈霜雪改
export const settingRoutes =[
    {
        path: '/admin/setting/loginLog',
        component: LoginLog
    }, {
        path: '/admin/setting/systemhome',
        component: SystemHome
    }, {
        path: '/admin/setting/systeminfo',
        component: SystemInfo
    }, {
        path: '/admin/setting/usersetting',
        component: UserSetting
    }
    
]
//商品路由，陈益改
export const commodityRoutes =[
    {
        path: '/admin/commodity/loginLog',
        component: LoginLog
    }, {
        path: '/admin/commodity/systemhome',
        component: SystemHome
    }, {
        path: '/admin/commodity/systeminfo',
        component: SystemInfo
    }, {
        path: '/admin/commodity/usersetting',
        component: UserSetting
    }
    
]