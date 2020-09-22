import '@/style/App.scss'
import '@/style/base.scss'
import '@/style/layout.scss'
import 'antd/dist/antd.css'
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// 路由懒加载
import Layout from '@/layout'
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact render={() => <Redirect to='/home' />} />
                {/* 默认路由 */}
                <Route component={Layout} />
            </Switch>
        </Router>
    )
}

export default App
