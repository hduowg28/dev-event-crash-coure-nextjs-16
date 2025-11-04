'use client'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header>
            <Link href="/" className="logo">
                <Image src="./icons/logo.png" alt="logo" width={24} height={24}/>
            </Link>
            <p>DevEvent</p>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Create Event</Link>
            </ul>
        </header>
    )
}
export default Navbar
