import React from 'react'
//components
import Contacts from './Contacts';

const Footer = () => {
    return (
        <div className='w-full h-auto text-secondary flex flex-col items-start justify-between gap-5 font-light px-5 xxl:gap-8'>
            <div>
                <h1 className='sm:text-xl xxl:text-3xl text-secondary'>Questions? Contact us.</h1>
            </div>
            <div className='flex flex-col xs:flex-row items-start justify-between w-full'>
                <div>
                    <ul className='flex flex-col items-start justify-start gap-2 md:gap-3'>
                        <Contacts title={'FAQ'} url={'https://help.netflix.com/ru/node/412'} />
                        <Contacts title={'Investor Relations'} url={'http://ir.netflix.com/'} />
                        <Contacts title={'Privacy'} url={'https://help.netflix.com/legal/privacy'} />
                        <Contacts title={'Speed Test'} url={'https://fast.com/'} />
                    </ul>
                </div>
                <div className='my-2'>
                    <ul className='flex flex-col items-start justify-start gap-2 md:gap-3'>
                        <Contacts title={'Help Center'} url={'https://help.netflix.com/'} />
                        <Contacts title={'Jobs'} url={'https://jobs.netflix.com/jobs'} />
                        <Contacts title={'Legal Notices'} url={'https://help.netflix.com/legal/notices'} />
                        <Contacts title={'Ways to Watch'} url={'https://www.netflix.com/watch'} />

                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col items-start justify-start gap-2 md:gap-3'>
                        <Contacts title={'Corporate Information'} url={'https://help.netflix.com/legal/corpinfo'} />
                        <Contacts title={'Media Center'} url={'https://media.netflix.com/'} />
                        <Contacts title={'Terms of Use'} url={'https://help.netflix.com/legal/termsofuse'} />
                        <Contacts title={'Contact Us'} url={'https://help.netflix.com/contactus'} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer