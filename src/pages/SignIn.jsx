import React from 'react';
import { Form, Input, ConfigProvider } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { setMyContext } from '../context/MyContext';
//components
import Navbar from '../components/Navbar'

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const { signIn } = setMyContext();
  const navigate = useNavigate();

  const handleSignIn = async ({ email, password }) => {
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <header className={`h-auto pb-24 sm:pb-0 sm:h-[700px] border-b-8 border-b-stone-800 bg-[url('../static/images/background_banner.jpg')] bg-no-repeat bg-cover text-white relative`}>
        <div className='absolute top-0 w-full h-full shadow-2xl bg-black/50' />
        <Navbar signin={'signin'} />
        <ConfigProvider theme={{
          components: {
            Input: { colorBgContainer: 'rgba(0, 0, 0, 0.458)', activeBorderColor: '#fff', colorBorder: "#BDBDBD", hoverBorderColor: '#fff', colorTextPlaceholder: "#BDBDBD", colorText: '#fff', colorIcon: '#fff', colorIconHover: '#fff' },
          }
        }}>
          <div className='w-full ss:w-[600px] m-auto bg-[#0d0d0db5] mt-10 relative z-20 p-10'>
            <Form
              className='w-full h-auto m-auto flex flex-col items-start justify-start pb-2'
              name="basic"
              onFinish={handleSignIn}
            >
              <h1 className='text-3xl md:text-4xl font-bold text-white'>Sign in</h1>
              <Form.Item className='w-full mt-10 ' name='email' rules={[{ required: true, message: 'Write your username', }]}>
                <Input placeholder='Email' required type='email' />
              </Form.Item>
              <Form.Item className='w-full mb-8 mt-2' name='password' rules={[{ required: true, message: 'Write your password' }]}>
                <Input.Password placeholder='Password' type='password' required />
              </Form.Item>
              <Form.Item
                className='w-full'
                wrapperCol={{
                  span: 16,
                }}
              >
                <button className='px-5 py-1 text-white bg-[#ff4d4f] flex items-center justify-center text-center text-md font-medium rounded-md'>Sign in</button>
              </Form.Item>
            </Form>
            <div>
              <h3 className='text-secondary'>New to Netflix? <Link to='/start_signup' className='text-white font-medium' >Sign up now.</Link></h3>
            </div>
          </div>
        </ConfigProvider>
      </header>
    </div>
  )
}

export default Signin;