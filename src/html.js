import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
	<link rel="stylesheet" href="./all_css/style.css" type="text/css" />
	<link rel="stylesheet" href="./all_css/css/dark.css" type="text/css" />
  
	<link rel="stylesheet" href="./all_css/css/interior_fonts.css" type="text/css" />
	<link rel="stylesheet" href="./all_css/css/interior-design.css" type="text/css" />

	<link rel="stylesheet" href="./all_css/css/resume.css" type="text/css" />
	<link rel="stylesheet" href="./all_css/css/resume_fonts.css" type="text/css" />

	<link rel="stylesheet" href="./all_css/css/font-icons.css" type="text/css" />
	<link rel="stylesheet" href="./all_css/css/animate.css" type="text/css" />
	<link rel="stylesheet" href="./all_css/css/magnific-popup.css" type="text/css" />

	<link rel="stylesheet" href="./all_css/css/responsive.css" type="text/css" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="stylesheet" href="./all_css/css/colors.php?color=7B6ED6" type="text/css" />
	<link rel="stylesheet" href="./all_css/css/custom.css" type="text/css" />
 <script src="./all_css/js/jquery.js" />
	<script src="./all_css/js/plugins.js" />
	<script src="./all_css/js/functions.js" />
<script
  dangerouslySetInnerHTML={{
    __html: `
            var name = 'world';
            console.log('Hello ' + name);


            window.onload = ()=>{
              console.log("loadded");
          }
          
  window.onload = ()=>{
    console.log("loaddedkkkkk");
}
    jQuery(window).scroll(function() {

      console.log("scroooling");
			var pixs = jQuery(window).scrollTop(),
				opacity = pixs / 650,
				element = jQuery( '.blurred-img' ),
				elementHeight = element.outerHeight(),
        elementNextHeight = jQuery('.content-wrap').find('.page-section').first().outerHeight();
        
        console.log("my element");
        console.log(element);
        console.log(elementHeight);
        console.log(elementNextHeight);
        
			if( ( elementHeight + elementNextHeight + 50 ) > pixs ) {
				element.addClass('blurred-image-visible');
        element.css({ 'opacity': opacity });
        
        console.log("it's viiiiiiiiiisible");
			} else {
        element.removeClass('blurred-image-visible');
        console.log("it's no");
			}
		});
        `,
  }}
/>
        {props.headComponents}
      </head>
      <body  className="stretched sticky-responsive-menu" {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
