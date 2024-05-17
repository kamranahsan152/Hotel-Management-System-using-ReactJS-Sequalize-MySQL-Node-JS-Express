import React from "react"
import { useState } from "react";

export const sliderdata = async ()=>{

    const [getState, setState] = useState[{}];
    
    const url = "http://photos.hotelbeds.com/giata/xxl/";

    const resp = await fetch(url).then((res)=> res.json()).then((data)=>{
        setState({
            items: data
        })
    })

    console.log(setState);
}
