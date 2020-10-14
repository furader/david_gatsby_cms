import React from 'react'

import { Link } from "gatsby"


// import '../templates/all_css/style.css'
// import '../templates/all_css/css/custom.css'
// import '../templates/all_css/css/resume.css'
// import '../templates/all_css/css/resume_fonts.css'
// import '../templates/all_css/css/resume_fonts.css'
// import '../templates/all_css/css/font-icons.css'
// import '../templates/all_css/css/dark.css'
// import '../templates/all_css/css/interior_fonts.css'
// import '../templates/all_css/css/interior-design.css'


const Header = () => {

    /*
    <a href="#" data-href={`#section-videos`}><i className="icon-film"></i>
                                <div>Videos</div>
                            </a>
                            */
    return (
        <header id={`header`} className="transparent-header sticky-transparent static-sticky">

            <div id={`header-wrap`}>

                <div className="container clearfix">

                    <div id={`primary-menu-trigger`}><i className="icon-reorder"></i></div>

                    <div id="logo">
                    </div>
                    <nav id={`primary-menu`}>

                        <ul className="one-page-menu" data-easing="easeInOutExpo" data-speed="1250" data-offset="0">
                            <li className="current">


                                <a href="#" data-href="#slider"><i className="icon-home"></i>
                                    <div>Home</div>
                                </a></li>
                            <li>
                                <Link to=".section4" >
                                    <i className="icon-star"></i>
                                    <div>Talks</div>
                                </Link>

                            </li>
                            <li>
                                <Link to="#section-videos" ><i className="icon-film"></i>
                                    <div>Videos</div>
                                </Link>





                            </li>
                            <li>
                                <Link to="#section-about" >
                                    <i className="icon-user"></i>
                                    <div>About</div>
                                </Link></li>
                            <li>
                                <Link to="#section-testimonials" >
                                    <i className="icon-comments"></i>
                                    <div>Testimonials</div>
                                </Link>
                            </li>
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