import React from 'react'



const Header = ()=>{
    return (
        <header id="header" className="transparent-header sticky-transparent static-sticky">

        <div id="header-wrap">

            <div className="container clearfix">

                <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

                <div id="logo">
                </div>
                <nav id="primary-menu">

                    <ul className="one-page-menu" data-easing="easeInOutExpo" data-speed="1250" data-offset="0">
                        <li className="current"><a href="#" data-href="#slider"><i className="icon-home"></i>
                                <div>Home</div>
                            </a></li>
                        <li><a href="#" data-href="#section-keynotes"><i className="icon-star"></i>
                                <div>Talks</div>
                            </a></li>
                        <li><a href="#" data-href="#section-videos"><i className="icon-film"></i>
                                <div>Videos</div>
                            </a></li>
                        <li><a href="#" data-href="#section-about"><i className="icon-user"></i>
                                <div>About</div>
                            </a></li>
                        <li><a href="#" data-href="#section-testimonials"><i className="icon-comments"></i>
                                <div>Testimonials</div>
                            </a></li>
                        <li><a href="#" data-href="#section-book"><i className="icon-book"></i>
                                <div>Book</div>
                            </a></li>
                        <li><a href="#" data-href="#footer"><i className="icon-envelope"></i>
                                <div>Contact</div>
                            </a></li>
                    </ul>

                </nav>

            </div>

        </div>

    </header>

    );
}

export default Header;