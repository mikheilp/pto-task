import React from 'react'

function Option(props) {

    const setChecked = (e) => {
      console.log(e);
    }
    
    return (
        <label htmlFor={`option-${props.id}`} className="switch cursor-pointer d-flex align-items-center p-16px w-lg-280px h-80px border border-gray rounded-md">
            <img src={props.image} className="rounded-sm w-48px h-48px object-contain" alt=""/>
            <div className="pl-8px">
                <h2 className="font-size-16 font-base text-dark">{props.name}</h2>
                <p className="font-size-12 font-base text-light">{props.status}</p>
            </div>
            <input type="checkbox" checked={props.checked} id={`option-${props.id}`} onChange={(e) => setChecked(e)} />
            <span className="slider round position-relative ml-auto" />
        </label>
    )
}

export default Option;