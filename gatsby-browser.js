const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {

    // console.log("ffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    //  addScript("./static/all_css/js/jquery.js")
    //  addScript("./static/all_css/js/plugins.js")
    //  addScript("./static/all_css/js/functions.js")
    
  }
}

/*



<script src="./all_css/js/jquery.js" />
 <script src="./all_css/js/jquery.js"></script>
	<script src="./all_css/js/plugins.js" />
  <script src="./all_css/js/functions.js" />
  */
// const $ = require("jquery")

// export const onClientEntry = () => {
//  console.log("from gatsby###########################");
//     var vSource;  
//     var f = $("#mainBtnId");
//     var c = $("button[id$='mainBtnId']")
//     console.log(c);
//       c.on("click",function() {
//         vSource = this.getAttribute("data-src");
//           console.log(vSource);
//       });
         
// // when the modal is opened autoplay it  
// $('#myModal').on('shown.bs.modal', function (e) {
//   console.log("showing event");
// // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
// $("#video").attr('src',vSource + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
// })
  


// // stop playing the youtube video when I close the modal
// $('#myModal').on('hide.bs.modal', function (e) {
//   console.log("closing event");
//     // a poor man's stop video
//     $("#video").attr('src',vSource); 
// }) 
//   }