import { useState } from 'react'
import { Flex, Button, Input, ConfigProvider, Drawer, Dropdown, Avatar, message } from 'antd';
import { MenuOutlined, LoginOutlined, UserOutlined, MehOutlined } from '@ant-design/icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';

//images
import logo from '../static/icons/logo.png';
import { setMyContext } from '../context/MyContext';

const Navbar = ({ signup, signin }) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const navigate = useNavigate();

    const { userSignOut } = setMyContext();

    const handleSignOut = async () => {
        try {
            await message.loading('Wait...')
            await userSignOut();
            navigate('/signin')
        } catch (error) {
            message.error('Error');
        }
    }

    const items = [
        {
            key: 1,
            label: (
                <Link to='/profile'>Profile</Link>
            ),
            icon: <UserOutlined />
            //disabled: true,
        },
        {
            key: 2,
            label: (
                <button onClick={handleSignOut}>Log out</button>
            ),
            icon: <LoginOutlined />,
        },
    ];

    const handlePageLogic = () => {
        if (signup === 'signup') {
            return (
                <Flex gap={4} className='flex-col xs:flex-row items-center justify-end'>
                    <Link to='/signin'><Button type='primary' danger className='font-semibold'>Sign in</Button></Link>
                </Flex>
            )
        } else if (signin === 'signin') {
            return ''
        } else {
            return <Flex className='w-full h-auto flex-col-reverse gap-2 md:gap-0 md:flex-row items-end ss:items-end md:items-center' justify='space-between'>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: 'fixed',
                                colorPrimaryHover: 'fixed',
                                colorPrimaryActive: 'fixed',
                            },
                            Drawer: {
                                colorBgElevated: '#0d0d0df2',
                                colorText: '#fff',
                                colorIcon: '#fff',
                                colorIconHover: 'gray',
                                colorSplit: 'gray'
                            },
                            Input: {
                                colorBgContainer: 'fixed',
                                colorText: '#fff',
                            },
                            Dropdown: {
                                colorBgElevated: '#0d0d0d54',
                                colorText: '#fff',
                                colorTextDisabled: '#fff',
                                controlItemBgHover: 'rgba(128, 128, 128, 0.478)'
                            }
                        },
                    }}>
                    <div className='flex ss:hidden items-center gap-5'>
                        <Button type="primary" onClick={() => setShowDrawer(true)} icon={<MenuOutlined />} />
                        <Dropdown menu={{ items }} placement='bottomRight'>
                            <Avatar shape="square" size={44} icon={<MehOutlined />} />
                        </Dropdown>
                        <Drawer onClose={() => setShowDrawer(false)} open={showDrawer} closable title='Menu' footer={
                            <footer className='flex items-center justify-start gap-3 text-lg text-white font-medium'>
                                <button>
                                    <LoginOutlined />Log out
                                </button>
                            </footer>}>
                            <header>
                                <div>
                                    <ConfigProvider theme={{
                                        components: {
                                            Input: {
                                                colorBgContainer: 'fixed',
                                                colorText: '#fff',
                                                colorTextPlaceholder: 'gray'
                                            },
                                        }
                                    }}>
                                        <Input.Search placeholder='Search Movie' />
                                    </ConfigProvider>
                                </div>
                            </header>
                            <main className='pt-10'>
                                <Flex gap={20} className='text-white flex-col items-start font-medium'>
                                    <NavLink to='/' className='hover:underline'>Movies</NavLink>
                                </Flex>
                            </main>
                        </Drawer>
                    </div>
                    <Flex gap={20} className='ss:flex items-center justify-start text-sm ss:text-base hidden'>
                        <NavLink to='/' className='hover:underline'>Home</NavLink>
                        <Link to='/' className='hover:underline'>TV Shows</Link>
                        <Link to='/' className='hover:underline'>Movies</Link>
                        <Link to='/' className='hover:underline'>New & Popular</Link>
                        <Link to='/' className='hover:underline'>My List</Link>
                    </Flex>
                    <div className='ss:flex items-center justify-end gap-5 hidden'>
                        <Input.Search />
                        <Dropdown menu={{ items, }} placement='bottomRight'>
                            <Avatar shape="square" size={44} icon={<MehOutlined />} />
                        </Dropdown>
                    </div>
                </ConfigProvider>
            </Flex >
        }
    }

    return (
        <nav className='w-full flex gap-5 items-center justify-between p-5 relative z-10 text-white'>
            <div className='w-[20%]'><img src={logo} alt="" className='w-28 md:w-48 select-none' /></div>
            <div className='w-[75%]'>{handlePageLogic()}</div>
        </nav>
    )
}

export default Navbar