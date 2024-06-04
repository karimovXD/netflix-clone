import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, ConfigProvider, Divider } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

const SliderImage = ({ item }) => {

    return <ConfigProvider
        theme={{
            components: {
                Popover: {
                    colorBgElevated: '#0d0d0dcd',
                    colorText: '#fff',
                    colorTextHeading: '#fff',
                    controlItemBgHover: 'rgba(128, 128, 128, 0.478)'
                },
                Divider: {
                    colorText: '#fff',
                    colorTextHeading: '#fff',
                    colorSplit: 'gray'
                }
            },
        }}>
        <Popover trigger='hover' placement='rightTop' arrow={false} title={item?.title || item?.name} content={
            <div className='w-auto h-auto border-white pt-1 select-none'>
                <Link to={`/movie/${item?.id}`}>
                    <button className='border w-full py-1 text-xl rounded-lg'><CaretRightOutlined /></button>
                </Link>
                <Divider orientation='left'>{item?.release_date}</Divider>
                <h3 className='text-secondary mb-4'>Language: <span className='text-white uppercase'>{item?.original_language}</span></h3>
                <p className='line-clamp-3 w-40 text-secondary text-[11px]'>{item?.overview}</p>
            </div>}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="movie" className='cursor-pointer' />
                <h1 className='text-xs text-center sm:text-sm'>{item?.title || item?.name}</h1>
            </div>
        </Popover>
    </ConfigProvider>

}

export default SliderImage;