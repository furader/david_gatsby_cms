const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter { 
              identifier
              templateKey
              title
              background_image {
                childImageSharp {
                  fluid (maxWidth: 3000,quality: 100){
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach((edge) => {
      const id = edge.node.id
      const t = edge.node.frontmatter.title;

      if(edge.node.frontmatter && edge.node.frontmatter.identifier == "section1"){
          
  console.log("################################################################")
  console.log(edge.node.frontmatter.background_image);
    console.log("################################################################")

    const tg = edge.node.frontmatter.background_image;
    createPage({
        
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id, 
        mainImageData: tg
      },
    })
      }else{
      createPage({
        
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
      }
    })

  
    
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
if(node.frontmatter && node.frontmatter.identifier == "section1"){
  console.log("(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((");
console.log(node);
  console.log("(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((");
  const vv = node.frontmatter.background_image;
  createNodeField({
    name: `mainImageData`,
    node,
    vv
  })
}
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
