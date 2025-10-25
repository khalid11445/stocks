import Link from 'next/link'
import React from 'react'

const FooterLink = ({text, linkText, href}:FooterLinkProps) => {
  return (
    <div className='text-center text-gray-500 pt-4'>
        <p className='font-medium'>
            {text} {' '}
            <Link href={href} className='text-blue-800 hover:underline'>
            {linkText} {` `}</Link>
        </p>
      
    </div>
  )
}

export default FooterLink
