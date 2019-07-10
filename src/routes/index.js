import {
    Login,
    NotFound,
    Commodity,
    Home,
    Setting,

    LoginLog,
    SystemHome,
    SystemInfo,
    UserSetting,

    SetLoginLog,
    SetSystemHome,
    SetSystemInfo,
    SetUserSetting,

    ComLoginLog,
    ComSystemHome,
    ComSystemInfo,
    ComUserSetting
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
        component: SetLoginLog
    }, {
        path: '/admin/setting/systemhome',
        component: SetSystemHome
    }, {
        path: '/admin/setting/systeminfo',
        component: SetSystemInfo
    }, {
        path: '/admin/setting/usersetting',
        component: SetUserSetting
    }
    
]
//商品路由，陈益改
export const commodityRoutes =[
    {
        path: '/admin/commodity/loginLog',
        component: ComLoginLog
    }, {
        path: '/admin/commodity/systemhome',
        component: ComSystemHome
    }, {
        path: '/admin/commodity/systeminfo',
        component: ComSystemInfo
    }, {
        path: '/admin/commodity/usersetting',
        component: ComUserSetting
    }
    
]