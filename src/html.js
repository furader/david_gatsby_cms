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

	<link rel="stylesheet" href="./all_css/css/custom.css" type="text/css" />
	
	


<script
dangerouslySetInnerHTML={{
    __html: `
  (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() `}}/>     
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
        <div className="modal fade bs-example-modal-lg2"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
	<div className="modal-dialog modal-lg">
		<div className="modal-body">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title tsa-pink" id="vladimir-danila-modal">David Rowan's Speaking Topics</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">
					<p>
						<ul style={{padding:"padding: 0 0 0 40px"}}>
							<li>FINDING OPPORTUNITY AMID THE CRISIS: Technology offers hope for optimism as we emerge from this crisis</li>
							<li>BUSINESS INNOVATION HAS NEVER MATTERED MORE</li>
							<li>TEN LESSONS FROM THE NON-BULLSHIT INNOVATORS</li>
							<li>WHAT TECHNOLOGY MEANS FOR THE FUTURE OF YOUR INDUSTRY</li>
							<li>THE FUTURE OF THE WORKPLACE</li>
							<li>WHY IT’S TIME TO CHALLENGE THE TECH MONOPOLIES  </li>
							<li>THE TEN NEW RULES OF BUSINESS</li>
							<li>HOW TO OPTIMISE CUSTOMER ENGAGEMENT</li>
							<li>WHY PURPOSE PLUS PROFIT IS THE NEW BUSINESS MANTRA </li>
						</ul>
					</p>
				
				</div>
			</div>
		</div>
	</div>
</div>

	
<script src="./all_css/js/jquery.js" />
	<script src="./all_css/js/plugins.js" />
	<script src="./all_css/js/functions.js" />
	<script
  dangerouslySetInnerHTML={{
    __html: `
      
    jQuery(window).scroll(function() {

	  console.log(jQuery);
	  console.log($);
			var pixs = jQuery(window).scrollTop(),
				opacity = pixs / 650,
				element = jQuery( '.blurred-img' ),
				elementHeight = element.outerHeight(),
        elementNextHeight = jQuery('#section-skills').outerHeight();
        console.log(opacity)
        
			if( ( elementHeight + elementNextHeight + 50 ) > pixs ) {
				element.addClass('blurred-image-visible');
				console.log("blured image visible")
        element.css({ 'opacity': opacity });
			} else {
				console.log("blured image not visible");
        element.removeClass('blurred-image-visible');
			}
		});
        `,
  }}
/>
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

/*
<script src="./all_css/js/jquery.js" />
	<script src="./all_css/js/plugins.js" />
	<script src="./all_css/js/functions.js" />
<script src="./all_css/js/jquery.js" />
	<script src="./all_css/js/plugins.js" />
	<script src="./all_css/js/functions.js" />


	<link rel="stylesheet" href="./all_css/css/colors.php?color=7B6ED6" 
        type="text/css" />

*/