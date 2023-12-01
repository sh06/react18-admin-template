import { Card, Form, Input, Button, message } from 'antd'
import { userLogin } from '@/store/modules/auth';
import { useDispatch } from'react-redux'
import { AppDispatch } from '@/types/store';
import './index.scss'

const Login = () => {
  type FieldType = {
    username: string;
    password: string;
  };
  
  const navigate = useNavigate()

  // 防止 userLogin(values) ts 报错
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch()

  const onLogin = async (values: FieldType) => {
    await dispatch(userLogin(values))
    navigate('/')
    message.success('登录成功')
  }

  const onLoginFailed = () => {
    console.log('onLoginFailed')
  }

  return (
    <div className='login'>
      <Card className='login-container'>
        <Form
          onFinish={onLogin}
          onFinishFailed={onLoginFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
