import React from "react"


export const MainPage = ({ classes, content, front }) => {

    return <div className="container clearfix">
        <div className={classes} >
            <h1>{front.title}</h1>

        </div>
        <div style={{ color: "red" }}>
            {content}
        </div>

    </div>
}



const main = ({ data, location }) => {
    var allFront = data.allMarkdownRemark.nodes[0].frontmatter;
    var cont = data.allMarkdownRemark.nodes[0].internal.content;
    var speClass = allFront.classes;
    return <MainPage classes={speClass} content={cont} front={allFront} />;

}
export default main;


export const pageQuery = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "sections"}}}) {
        nodes {
          frontmatter {
            title
            category
            classes
            description
          }
          internal {
            content
          }
        }
      }
}

`