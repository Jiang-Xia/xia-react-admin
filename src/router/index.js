// const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))
const Index = import(/* webpackChunkName: 'index' */ '@/views/index')

const routes = [{ path: '/index', exact: true, name: 'Index', component: Index, auth: [1] }]
export default routes
