import React from "react"


const  HauptSeite = ({ classes, content, front }) => {

    return <div className="container clearfix">
        <div className={classes} >
            <h1>{front.title}</h1>

        </div>
        <div style={{ color: "red" }}>
            {content}
        </div>

    </div>
}
export default HauptSeite;

