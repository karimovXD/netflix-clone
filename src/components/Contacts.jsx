import React from 'react'

const Contacts = ({ title, url }) => <li className='hover:underline text-xs xl:text-base xxl:text-xl'><a href={`${url}`}>{title}</a></li>

export default Contacts;