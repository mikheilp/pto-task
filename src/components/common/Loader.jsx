import React from 'react'

function Option(props) {


    const setChecked = (e) => {
      console.log(e);
    }
    
    return (
        <label htmlFor={`option-${props.data.id}`} className="switch cursor-pointer d-flex align-items-center p-16px w-basis-280px h-80px border border-gray rounded-md">
            <img src={props.data.thumbnail} className="rounded-sm w-48px h-48px object-cover" alt=""/>
            <div className="pl-8px">
                <h2 className="font-size-16 font-base text-dark">{props.data.brand}</h2>
                <p className="font-size-12 font-base text-light">{props.data.category}</p>
            </div>
            <input type="checkbox" checked={props.checked} id={`option-${props.data.id}`} onChange={(e) => setChecked(e)} />
            <span className="slider round position-relative ml-auto" />
        </label>
    )
}

export default Option;