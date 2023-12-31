'use client';
import React from 'react';
// import '../app/styles/styles.css'
// import 'app/styles/mobile.css';
import Image from 'next/image';
import forward_arrow from "/public/blog/icons8-forward-100.png";
import Navbar from '@/components/navbar';
// import calendar from '../blog/calendar.png';
// import sheet from '/blog/news.png';
// import profile from '/blog/owner.png';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function PageBlogs() {
    const [isVisible, setIsVisible] = useState(false);
    //   const [isLogo, setLogoVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = window.innerHeight * 0.4;
            const triggerPointLogo = window.innerHeight * 0.2;
            // Adjust this value as needed
            setIsVisible(scrollTop > triggerPoint);
            //   setLogoVisible(scrollTop > triggerPointLogo);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const blogs = [
        {
            id: 1,
            title: "Paid Marketing Vs Affiliate Marketing",
            description: "Paid marketing and affiliate marketing are two of the most popular ways to promote products and services online.",
            img: '/blog/thumbnail (3).png'

        },
        {
            id: 2,
            title: "Social Media Marketing - A Guide",
            description: "Social media marketing is one of the most efficient and effective ways to connect with customers and promote your brand.",
            img: '/blog/thumbnail (4).png'
        }
    ];
    return (
        <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
            <div className="desktopBlog">
                <div className="blog_padding_page_title">
                    <div className="blog_page">
                        <div className="blog_content">
                            Know why at <br />
                            <span style={{ color: "#df0070" }}>our blogs</span>
                            <div className="blog_padding_page">
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <div className="bg_image_1"></div>
                                                <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                                <div className="blog_desc">Paid marketing and affiliate marketing are two of the most popular ways to promote products and services online.</div>
                                                {/* <button className="outlined-button_blog"> */}
                                                <div className="read_more_justify">
                                                    <div>
                                                        <Link className=" read_more_row" href="/blog_innerpage_1">Read More</Link>
                                                    </div>
                                                    <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                </div>
                                                {/* </button> */}
                                            </div>
                                            <div className="right_side_blog">
                                                <div className="col">
                                                    <div className="bg_image_2"></div>
                                                    <div className="blog_title">Social Media Marketing - A Guide</div>
                                                    <div className="blog_desc">Social media marketing is one of the most efficient and
                                                        effective ways to connect with customers and promote
                                                        your brand.
                                                    </div>
                                                    <div className="read_more_justify">
                                                        <div>
                                                            <Link className="read_more_row" href="/blog_innerpage_2">Read More</Link>
                                                        </div>
                                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                                        {/* <a href='/blog_innerpage'></a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                {/* </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobileBlog">
                <div className="blog_padding_page_title">
                    <div className="blog_page_mobile">
                        <div className="blog_content">
                            Know why at <br />
                            <span style={{ color: "#df0070" }}>our blogs</span>
                            <div className="blog_padding_page">
                                {/* <div className="row"> */}
                                <div className="col">
                                    <div className="bg_image_1"></div>
                                    <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                    <div className="blog_desc">Paid marketing and affiliate marketing are two of the<br /> most popular ways to promote products and services<br /> online.</div>
                                    {/* <button className="outlined-button_blog"> */}
                                    <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href="/blog_innerpage_1">Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                        {/* <a href='/blog_innerpage'></a> */}
                                    </div>
                                    {/* </button> */}
                                </div>
                                {/* <div className="right_side_blog"> */}
                                <div className="col">
                                    <div className="bg_image_2"></div>
                                    <div className="blog_title">Social Media Marketing - A Guide</div>
                                    <div className="blog_desc">Social media marketing is one of the most efficient and<br />
                                        effective ways to connect with customers and promote<br />
                                        your brand.
                                    </div>
                                    <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href="/blog_innerpage_2">Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                        {/* <a href='/blog_innerpage'></a> */}
                                    </div>
                                </div>
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}