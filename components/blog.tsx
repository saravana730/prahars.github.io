'use client';
import React from 'react';
import 'styles/styles.css';
import 'styles/mobile.css';
import Image from 'next/image';
import forward_arrow from "/public/blog/icons8-forward-100.png";
import { useEffect, useState } from 'react';
import Link from 'next/link';

// import calendar from '../blog/calendar.png';
// import sheet from '/blog/news.png';
// import profile from '/blog/owner.png';

export default function Blogs() {
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
            img: '/blog/thumbnail (3).png',
            link: "/blog_innerpage_1",

        },
        {
            id: 2,
            title: "Social Media Marketing - A Guide",
            description: "Social media marketing is one of the most efficient and effective ways to connect with customers and promote your brand.",
            img: '/blog/thumbnail (4).png',
            link: "/blog_innerpage_2",
        }
    ];

    return (
        <div className={`scroll-animationPortfolio ${isVisible ? '' : ''}`}>
            <div className="desktopBlog">
                <div className="blog_page">
                    <div className="blog_content">
                        Know why at <br />
                        <span style={{ color: "#df0070" }}>our blogs</span>
                        <div className="empty_box"></div>
                        <div className="flex flex-row"> 
                       
                            <div  className="flex flex-row flex-wrap justify-around">
                            {blogs.map((item)=>(
                                <div key={item.id} className="name_blog_content">
                                    <div className="flex flex-col ">
                                        <div className="bg_image_1 "><img src={item.img}/></div>
                                        <div className="blog_title">{item.title}</div>
                                        <div className="blog_desc">{item.description}</div>
                                        <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href={item.link}>Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                    </div>
                                    </div>
                                    
                                </div>
                                ))}
                            </div>
                              
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mobileBlog">
                <div className="blog_page">
                    <div className="blog_content">
                        Know why at <br />
                        <span style={{ color: "#df0070" }}>our blogs</span>
                        <div className="empty_box"></div>
                        <div className="flex flex-col">
                            {blogs.map((item)=>(
                                <div key={item.id} className="name_blog_content">
                                    <div className="flex flex-col ">
                                        <div className="bg_image_1 "><img src={item.img}/></div>
                                        <div className="blog_title">{item.title}</div>
                                        <div className="blog_desc">{item.description}</div>
                                        <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href={item.link}>Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                    </div>
                                    </div>
                                    
                                </div>
                            ))}
                            {/* <div className="flex flex-col">
                                <div className="bg_image_1"></div>
                                <div className="blog_title">Paid Marketing Vs Affiliate Marketing</div>
                                <div className="blog_desc">Paid marketing and affiliate marketing are two of the<br />
                                    most popular ways to promote products and services<br />
                                    online.
                                </div>
                                <div className="read_more_justify">
                                        <div>
                                            <Link className="read_more_row" href="/blog_innerpage_2">Read More</Link>
                                        </div>
                                        <div className="read_more_arrow"><Image src={forward_arrow} alt='>' width={20} height={20} /></div>
                                    </div>
                            </div> */}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
        // </div>

    )
}