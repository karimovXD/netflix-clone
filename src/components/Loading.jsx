import React from 'react'
import { Spin } from 'antd'

const Loading = () => {
    return (
        <div className='w-full h-svh bg-black flex items-center justify-center'>
            <Spin />
        </div>
    )
}

export default Loading;