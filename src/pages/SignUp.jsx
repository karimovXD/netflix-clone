import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ConfigProvider, Flex, Input } from 'antd'
//components
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import Footer from '../components/Footer'

const Signup = () => {
    return (
        <div>
            <header className={`h-auto pb-24 sm:pb-0 sm:h-[700px] border-b-8 border-b-stone-800 bg-[url('../static/images/background_banner.jpg')] bg-no-repeat bg-cover text-white relative`}>
                <div className='absolute top-0 w-full h-full shadow-2xl bg-black/60' />
                <Navbar signup={'signup'} />
                <div className='relative z-10 px-5 text-center pt-10 md:pt-48'>
                    <h1 className='text-3xl font-bold md:text-5xl md:font-extrabold mb-5'>Unlimited movies, TV shows, and more</h1>
                    <h3 className='text-xl md:text-2xl mb-5 font-semibold'>Watch anywhere. Cancel anytime.</h3>
                    <h3 className='text-xl md:text-xl mb-6' >Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='w-full sm:w-[600px] m-auto'>
                        <ConfigProvider theme={{
                            components: {
                                Input: { colorBgContainer: 'rgba(0, 0, 0, 0.458)', activeBorderColor: '#fff', colorBorder: "#BDBDBD", hoverBorderColor: '#fff', colorTextPlaceholder: "#BDBDBD" },
                            }
                        }}>
                            <Flex gap={8} className='flex-col sm:flex-row items-center justify-center'>
                                <Input type='text' placeholder='Email Address' className='text-secondary rounded-sm' size='large' />
                                <Link to='/start_signup'>
                                    <Button type='primary' danger className='font-semibold rounded-sm' size='large'>Get Started</Button>
                                </Link>
                            </Flex>
                        </ConfigProvider>
                    </div>
                </div>
            </header>
            <main className='bg-black'>
                <section className='w-full border-b-8 border-b-stone-800'>
                    <div className='w-full h-auto flex items-center justify-between xxl:w-[1440px] px-5 py-10 flex-col sm:flex-row m-auto text-white sm:gap-10'>
                        <div className='text-center sm:text-left'>
                            <h1 className='text-3xl font-bold md:text-5xl md:font-extrabold mb-5'>Enjoy on your TV</h1>
                            <h3 className='text-xl md:text-2xl mb-5 font-normal'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                        </div>
                        <div>
                            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt="" />
                        </div>
                    </div>
                </section>
                <section className='w-full border-b-8 border-b-stone-800'>
                    <div className='w-full h-auto flex items-center justify-between xxl:w-[1440px] px-5 py-10 flex-col-reverse sm:flex-row m-auto text-white sm:gap-10'>
                        <div>
                            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt="" />
                        </div>
                        <div className='text-center sm:text-left'>
                            <h1 className='text-3xl font-bold md:text-5xl md:font-extrabold mb-5'>Download your shows to watch offline</h1>
                            <h3 className='text-xl md:text-2xl mb-5 font-normal'>Save your favorites easily and always have something to watch.</h3>
                        </div>
                    </div>
                </section>
                <section className='w-full border-b-8 border-b-stone-800'>
                    <div className='w-full h-auto flex items-center justify-between xxl:w-[1440px] px-5 py-10 flex-col sm:flex-row m-auto text-white sm:gap-10'>
                        <div className='text-center sm:text-left'>
                            <h1 className='text-3xl font-bold md:text-5xl md:font-extrabold mb-5'>Watch everywhere</h1>
                            <h3 className='text-xl md:text-2xl mb-5 font-normal'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                        </div>
                        <div>
                            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt="" />
                        </div>
                    </div>
                </section>
                <section className='w-full border-b-8 border-b-stone-800'>
                    <div className='w-full h-auto flex items-center justify-between xxl:w-[1440px] px-5 py-10 flex-col-reverse sm:flex-row m-auto text-white sm:gap-10'>
                        <div>
                            <img src='https://occ-0-3428-1500.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55' alt="" />
                        </div>
                        <div className='text-center sm:text-left'>
                            <h1 className='text-3xl font-bold md:text-5xl md:font-extrabold mb-5'>Create profiles for kids</h1>
                            <h3 className='text-xl md:text-2xl mb-5 font-normal'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                        </div>
                    </div>
                </section>
                <section className='text-white py-10 px-5 border-b-8 border-b-stone-800'>
                    <h1 className='text-3xl font-bold md:text-5xl md:font-black mb-7 text-center'>Frequently Asked Questions</h1>
                    <div className='w-full xxl:w-[1440px] m-auto mb-7'>
                        <Flex className='flex-col' gap={10}>
                            <Questions title='What is Netflix?' textChildren={`
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            `}>
                            </Questions>
                            <Questions title='How much does Netflix cost?' textChildren={`
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.
                            `}>
                            </Questions>
                            <Questions title='Where can I watch?' textChildren={`
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            `}>
                            </Questions>
                            <Questions title='How do I cancel?' textChildren={`
                            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            `}>
                            </Questions>
                            <Questions title='What can I watch on Netflix?' textChildren={`
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            `}>
                            </Questions>
                            <Questions title='Is Netflix good for kids?' textChildren={`
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            `}>
                            </Questions>
                            <Questions title='Why am I seeing this language?' textChildren={`
                            Your browser preferences determine the language shown here.
                            `}>
                            </Questions>
                        </Flex>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <h3 className='text-xl md:text-xl text-center' >Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='w-full sm:w-[600px] m-auto'>
                            <ConfigProvider theme={{
                                components: {
                                    Input: { colorBgContainer: 'rgba(0, 0, 0, 0.458)', activeBorderColor: '#fff', colorBorder: "#BDBDBD", hoverBorderColor: '#fff', colorTextPlaceholder: "#BDBDBD" },
                                }
                            }}>
                                <Flex gap={8} className='flex-col sm:flex-row items-center justify-center'>
                                    <Input type='text' placeholder='Email Address' className='text-secondary rounded-sm' size='large' />
                                    <Button type='primary' danger className='font-semibold rounded-sm' size='large'>Get Started</Button>
                                </Flex>
                            </ConfigProvider>
                        </div>
                    </div>
                </section >
            </main >
            <footer>
                <Footer />
            </footer>
        </div >
    )
}

export default Signup