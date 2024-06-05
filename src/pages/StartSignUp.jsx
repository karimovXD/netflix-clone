import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input } from 'antd';
import Logo from '../static/icons/logo.png'
//components
import Footer from '../components/Footer'
//context
import { setMyContext } from '../context/MyContext';

const StartSignUp = () => {
  const { signUp } = setMyContext();
  const navigate = useNavigate();

  const handleSignUp = async ({ email, password }) => {
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-white h-auto'>
      <nav className='flex items-center justify-between p-5 border-b-[1px]'>
        <img src={Logo} className='w-36' alt="" />
        <Link to='/signin' className='font-bold text-lg'>Sign in</Link>
      </nav>
      <main>
        <section className='w-full ss:w-[600px] m-auto p-10 h-[500px]'>
          <h1 className='text-3xl font-bold'></h1>
          <Form
            className='w-full h-auto m-auto flex flex-col items-start justify-start pb-2'
            name="basic"
            onFinish={handleSignUp}>
            <h1 className='text-2xl md:text-3xl font-bold text-black'>Sign up and start watch</h1>
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
              <button className='px-5 py-1 text-white bg-[#ff4d4f] flex items-center justify-center text-center text-md font-medium rounded-md'>Sign up</button>
            </Form.Item>
          </Form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default StartSignUp