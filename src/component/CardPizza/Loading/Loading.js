import React from "react"
import classes from "./Loading.module.scss"
import ContentLoader from "react-content-loader"

const Loading = () => (
    <div className="col">
        <div className={classes.loading}>
            <ContentLoader
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="137" cy="128" r="124" />
                <rect x="0" y="270" rx="6" ry="6" width="280" height="17" />
                <rect x="0" y="307" rx="10" ry="10" width="280" height="85" />
                <rect x="139" y="405" rx="20" ry="20" width="140" height="40" />
                <rect x="8" y="413" rx="6" ry="6" width="90" height="27" />
            </ContentLoader>
        </div>
    </div>
)

export default Loading