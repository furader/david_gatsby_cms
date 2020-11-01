// const _ = require('lodash')
// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allMarkdownRemark(filter: {frontmatter: {identifier: {regex: "/^section/"}}}) {
//         edges {
//           node {
//             id
//             frontmatter {
//               title
//               templateKey
//               identifier
//               subtitle
//               second_title
//             }
//           }
//         }
//       }
    
//     }
//   `).then((result) => {
//     if (result.errors) {
//       result.errors.forEach((e) => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }
//     const posts = result.data.allMarkdownRemark.edges;
//     posts.forEach((edge) => {
//       const id = edge.node.id
//       const t = edge.node.frontmatter.identifier;
//       console.log("#################################################################");
//       console.log(t);
//       console.log("#################################################################");
    
//       createPage({
        
//         path: "/", //edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
      
//     })

  
    
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node) // convert image paths for gatsby images

 
// }
