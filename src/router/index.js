// const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))
const Index = import('@/views/index/index.js')
const Home = import('@/views/home')
const Disease = import('@/views/diseases')
const Research = import('@/views/research')
const Profile = import('@/views/profile')

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/Home', exact: true, name: 'Home', component: Home, auth: [1] },
    { path: '/Disease', exact: true, name: 'Disease', component: Disease, auth: [1] },
    { path: '/Research', exact: true, name: 'Research', component: Research, auth: [1] },
    { path: '/Profile', exact: true, name: 'Profile', component: Profile, auth: [1] }
]
export default routes
