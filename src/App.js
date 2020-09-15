import React from 'react';
import 'antd/dist/antd.css';
import '@/style/base.scss'
import '@/style/App.scss'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// 路由懒加载
import loadable from '@/utils/loadable'
const index = loadable(()=>import('@/views/index/index'))
function App() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/index' />} />
            <Route path='/index' component={index} />
            {/* <Route path='/login' component={Login} />
            <Route path='/404' component={View404} />
            <Route component={DefaultLayout} /> */}
        </Switch>
    </Router>

  );
}

export default App;
