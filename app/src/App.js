import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { 
    Layout,
    Menu,
    Row,
    Col,
    Card
} from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import reducer from './reducers';
import PerformanceChart from './containers/PerformanceChart';
import SubscribeEmailForm from './containers/SubscribeEmail';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

const { Content } = Layout;
const App = () => (
    <Provider store={ store }>
        <div className="app">
            <div
                className="header">
                <div className="header__logo"> 

                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className="header__menu"
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </div>
            <Content>
            <Row gutter={64}>
                <Col span={11}>
                    <h1>Mañana Capital</h1>
                    <h3>Mañana Capital is a hedge fund that actively manages crypto-asset portfolios.</h3>
                    <Card className="subscribeForm">
                        <p>Submit your email to receive monthly email reports with Mañana fund performance and team updates.</p>
                        <SubscribeEmailForm />
                    </Card>
                </Col>
                <Col span={13}>
                    <PerformanceChart />
                </Col>
            </Row>
            </Content>
        </div>
    </Provider>
);

export default App;
