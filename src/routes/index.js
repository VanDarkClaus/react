import {
    Login,
    NotFound,
    Commodity,
    Home,
    Setting,
    Notice,

    LoginLog,
    SystemHome,
    SystemInfo,
    UserSetting,
    Hledit,
    DashBoard,

    SetLoginLog,
    SetSystemHome,
    SetSystemInfo,
    SetUserSetting,

    CYProductDetail,
    CYProductList,
    CYUserSetting,
    CYAddProduct
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
//路由配置说明，title为左侧列表显示数据，notLeftTable: true表示不显示，icon为显示矢量图标
export const adminRoutes = [
    {
        path: '/admin/home',
        component: Home,
        title: '主页',
        icon: 'setting'
    }, {
        path: '/admin/commodity',
        component: Commodity,
        title: '商品',
        icon: 'setting'
    }, {
        path: '/admin/setting',
        component: Setting,
        title: '设置',
        icon: 'setting'
    }, {
        path: '/admin/notice',
        component: Notice,
        notLeftTable: true
    }
]
//主页路由，侯龙改
export const homeRoutes =[
    {
        path: '/admin/home/loginLog',
        component: LoginLog,
        title: '登录信息',
        icon: 'setting'
    }, {
        path: '/admin/home/systemhome',
        component: SystemHome,
        exact: true,
        title: '系统首页',
        icon: 'setting'
    }, {
        path: '/admin/home/systeminfo',
        component: SystemInfo,
        title: '系统信息',
        icon: 'setting'
    }, {
        path: '/admin/home/usersetting',
        component: UserSetting,
        title: '用户设置',
        icon: 'setting'
    }, {
        path: '/admin/home/systemhome/edit/:id',
        component: Hledit,
        // 判断是否是左边导航栏
        notLeftTable: true,
    }, {
        path: '/admin/home/dashboard',
        component: DashBoard,
        title: '仪表盘',
        icon: 'setting'
    }
    
]

//设置路由，陈霜雪改
export const settingRoutes =[
    {
        path: '/admin/setting/loginLog',
        component: SetLoginLog,
        title: '用户设置',
        icon: 'setting'
    }, {
        path: '/admin/setting/systemhome',
        component: SetSystemHome,
        title: '用户设置',
        icon: 'setting'
    }, {
        path: '/admin/setting/systeminfo',
        component: SetSystemInfo,
        title: '用户设置',
        icon: 'setting'
    }, {
        path: '/admin/setting/usersetting',
        component: SetUserSetting,
        title: '用户设置',
        icon: 'setting'
    }
    
]
//商品路由，陈益改
export const commodityRoutes =[
    {
        path: '/admin/commodity/cyproductlist',
        component: CYProductList,
        exact: true,
        title: '书籍列表',
        icon: 'unordered-list'
    }, {
        path: '/admin/commodity/cyaddproduct',
        component: CYAddProduct,
        title: '添加书籍',
        icon: 'plus'
    }, {
        path: '/admin/commodity/cyproductlist/detail/:id',
        component: CYProductDetail,
        title: '书籍详情',
        icon: 'appstore'
    }, {
        path: '/admin/commodity/cyusersetting',
        component: CYUserSetting,
        title: '数据可视化',
        icon: 'dashboard'
    }
    
]