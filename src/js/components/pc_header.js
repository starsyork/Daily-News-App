import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    };

    setModalVisible(value){
      this.setState({modalVisible:value});
    };

    handleClick(e){
      if(e.key=="register"){
        console.log(e.key)
        this.setState({current:'register'});
        this.setModalVisible(true);
      } else {
        this.setState({current:e.key});
        console.log(e.key)
      }
    };

    handleSubmit(e){
      e.preventDefault();
      var myFetchOptions={
        method: 'GET'
      };
      var formData = this.props.form.getFieldDecorator;
      
    };

    render() {
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" class="register">
                    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target='_blank'>
                        <Button type="dashed" htmlType="button">personal center</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type="dashed" htmlType="button">Log out</Button>
                </Menu.Item>
            : <Menu.Item key="register" class="register">
                Log in/ Sign up
            </Menu.Item>;

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class='logo'>
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>Daily News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Modal title="User Center" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card">
                        <Tabs.TabPane tab="注册" key="2">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入账号" {...getFieldDecorator('r_userName')}/>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_ password')}/>
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input type="password" placeholder="请再次输入密码" {...getFieldDecorator('r_comfirmPassword')}/>
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </Tabs.TabPane>

                    </Tabs>
                </Modal>

            </header>
        );
    };
}
export default PCHeader = Form.create({})(PCHeader);
