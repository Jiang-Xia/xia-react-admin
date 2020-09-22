import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons'
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Routes from '@/router'
import * as request from '@/api/home'
import menu from './menu'

const { Header, Sider, Content } = Layout
// 菜单栏
function MenuItemList(props) {
    const menu = props.menu
    const { SubMenu } = Menu
    const listItems = menu.map((item, index) => {
        let ele = ''
        item.submenu
            ? (ele = (
                  <SubMenu key={item.path} title={item.cn}>
                      {item.submenu.map((item2, index2) => {
                          return <Menu.Item key={item2.disease_id}>{item2.disease_name}</Menu.Item>
                      })}
                  </SubMenu>
              ))
            : (ele = <Menu.Item key={item.path}>{item.cn}</Menu.Item>)
        return ele
    })
    const clickItemHandle = (item) => {
        console.log(item)
    }
    return (
        <Menu theme='dark' mode='inline' onClick={clickItemHandle} defaultSelectedKeys={['1']}>
            {listItems}
        </Menu>
    )
}

// 系统布局
class DefaultLayout extends React.Component {
    state = {
        collapsed: false,
        menu: []
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    getHtml() {
        let html = ''
        for (let i = 0; i < 100000; i++) {
            html += <br /> + 'Content'
        }
        return html
    }
    componentDidMount() {
        request.userResource({}, 'disease_list').then((res) => {
            const list = res.data.result.disease_list
            for (let item of menu) {
                if (item.path === '/diseases') {
                    item.submenu = list
                }
            }
            this.setState({ menu: menu })
        })
    }
    render() {
        let auth = ''
        return (
            <Layout style={{ height: '100%' }} className='sys-layout-container'>
                <Sider className='sys-sider-container' trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className='logo' />
                    <MenuItemList menu={menu} />
                </Sider>
                <Layout className='sys-main-container'>
                    <Header className='sys-main-header' style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle
                        })}
                    </Header>
                    <Content
                        className='sys-main-content'
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280
                        }}>
                        <Switch>
                            {Routes.map((item) => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={(props) => {
                                            console.log(props)
                                            item.component = props
                                        }}></Route>
                                )
                            })}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default DefaultLayout
