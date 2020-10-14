const React = require("react")
import { withPrefix } from 'gatsby'
export const onPreRenderHTML = (a) => {
  const { replacePostBodyComponents , getPostBodyComponents  } = a;
  //console.log(getPostBodyComponents())
  var a =  `/src/templates/all_css/js/jquery.js`;///templates/all_css/js/functions.js
  var b =  `/src/templates/all_css/js/plugins.js`;
  var c =  `/src/templates/all_css/js/functions.js`;
  const bodyComponents = getPostBodyComponents ().concat([
      
      <script
      key="23"
          type="text/javascript"
      src={a}>
    </script>,
    <script
    key="34"
          type="text/javascript"
    src={b}>
  </script>,
  <script
  key="45"
          type="text/javascript"
  src={c}>
</script>,
  ]);
  //replacePostBodyComponents(bodyComponents);


 // console.log(getPostBodyComponents())
}
// export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
//   setHeadComponents([
//     <script
//       src="./static/all_css/js/jquery.js">
//     </script>,
//     <script
//     src="./static/all_css/js/plugins.js">
//   </script>,
//   <script
//   src="./static/all_css/js/functions.js">
// </script>,
//   ])
// }

// addScript("./static/all_css/js/jquery.js")
// addScript("./static/all_css/js/plugins.js")
// addScript("./static/all_css/js/functions.js")