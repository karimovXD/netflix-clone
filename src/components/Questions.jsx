import React, { useState } from 'react'
import { Card, ConfigProvider, Button } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'


const Questions = ({ title, textChildren }) => {
    const [isActive, setisActive] = useState(false);
    console.log(isActive);

    return (
        <ConfigProvider theme={{
            components: {
                Card: { colorBgContainer: 'rgb(45, 45, 45)', colorBorderSecondary: '#000', headerFontSize: '16  px sm:25px', colorText: '#fff', colorTextHeading: '#fff' },
            }
        }}>
            <Card title={title} extra={<button onClick={() => setisActive(!isActive)} className='text-white text-xl' >{isActive ? <CloseOutlined /> : <PlusOutlined />}</button>}>
                {
                    isActive ?
                        textChildren :
                        null
                }
            </Card>
        </ConfigProvider>
    )
}

export default Questions