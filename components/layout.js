import Head from 'next/head'
import { Affix, Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


export default ({ children, title = 'This is the default title' }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Layout className="layout">
            <Header style={{ color: '#fff' }}>
                Main Head
            </Header>
            <Affix >
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                        <Menu.Item key="4">nav 4</Menu.Item>
                        <Menu.Item key="5">nav 5</Menu.Item>
                        <Menu.Item key="6">nav 6</Menu.Item>
                        <Menu.Item key="7">nav 7</Menu.Item>
                    </Menu>
                </Header>
            </Affix>
            <Content style={{ padding: '10px 50px 0px 50px' }}>
                
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </>
)