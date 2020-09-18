import '@/style/App.scss'
import '@/style/base.scss'
import '@/style/layout.scss'
import 'antd/dist/antd.css'
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// 路由懒加载
import loadable from '@/utils/loadable'
import Layout from '@/layout'
// const index = loadable(() => import('@/views/index/index'))
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact render={() => <Redirect to='/index' />} />
                <Route component={Layout} />
                {/* <Route path='/login' component={Login} />
            <Route path='/404' component={View404} />
            <Route component={DefaultLayout} /> */}
            </Switch>
        </Router>
    )
}

export default App
