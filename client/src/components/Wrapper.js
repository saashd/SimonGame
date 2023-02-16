import React from "react";
import Navbar from "./Navbar";

function Wrapper(props) {
    return (<div>
        <Navbar/>
        <main style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom:"2vh"
        }}>
            {props.children}
        </main>
    </div>);
}


export default Wrapper;