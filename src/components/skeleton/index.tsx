
import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
    <ContentLoader 
    style={{
        display:'flex'
    }}
    speed={2}
    width={400}
    height={465}
    viewBox="0 0 400 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="144" cy="128" r="125" /> 
    <rect x="6" y="268" rx="0" ry="0" width="260" height="21" /> 
    <rect x="6" y="304" rx="5" ry="5" width="260" height="88" /> 
    <rect x="6" y="414" rx="8" ry="8" width="95" height="30" /> 
    <rect x="139" y="409" rx="30" ry="30" width="152" height="39" />
  </ContentLoader>
)


export default Skeleton