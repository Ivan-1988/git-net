import React from "react";
import preloader from "../../../assets/images/loading-loader-svgrepo-com.svg";


function Preloader (props: any) {
    return (
    <div>
        <img style={{width: '20px', height: '20px'}} src={preloader} />
    </div>
)
}
 export default Preloader;