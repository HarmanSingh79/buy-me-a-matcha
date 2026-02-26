import React from 'react'

const Footer = () => {
    const currentYear=new Date().getFullYear();
    return (
        <footer className='bg-gray-900 text-white flex justify-center items-center h-15 px-4'>
            <p className='text-center'>
                Copyright &copy; {currentYear} Buy Me A Matcha - All rights reserved
            </p>
        </footer>
    )
}

export default Footer
