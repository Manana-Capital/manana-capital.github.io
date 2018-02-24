import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { value, onChange } = this.props;

        const hiddenStyle = {
            'position': 'absolute',
            'left': '-5000px'
        };

        return (
            <div>
                <form action='https://capital.us17.list-manage.com/subscribe/post?u=b0c566c575594af45b0ff76b2&amp;id=cb78de3352' method='post' target='_blank' noValidate ant-form ant-form-horizontal>
                    <label htmlFor="mce-EMAIL">
                        Email Address  <span className="asterisk">*</span>
                    </label>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} name="EMAIL" placeholder="example@email.com" id="mce-EMAIL" />
                        )}
                    </FormItem>

                    <div style={ hiddenStyle } aria-hidden="true"><input type="text" name="b_b0c566c575594af45b0ff76b2_cb78de3352" tabIndex="-1" value="" /></div>
                    {/* <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button login-form-button" /> */}
                    <Button type="primary" htmlType="submit" className="login-form-button" id="mc-embedded-subscribe">
                        Subscribe
                    </Button>
                </form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;