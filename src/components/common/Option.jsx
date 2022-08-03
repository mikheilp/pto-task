import React from 'react'
import Option from '../common/Option'

function Employee(props) {
    let employeeData = props.data[[props.activeTab]];

    const lefTOptions = () => {
        for (let i=3; i<7; i++) {
            return
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center pt-50px">
            {/*Options*/}
            
            {/*Employee*/}
            {
                <div className="rounded w-380px min-height-268px border-solid-2 border-primary bg-secondary d-flex flex-column align-items-center text-center">
                    <div className="mt-n30px px-40px">
                        <img src={employeeData.thumbnail} className="rounded-sm w-86px h-86px object-cover" alt=""/>
                        <h2 className="font-size-18 font-medium pt-14px pb-6px text-dark">{employeeData.title}</h2>
                        <h4 className="font-size-14 font-base pb-6px text-light">{employeeData.category}</h4>
                        <p className="pt-14px font-base font-size-16 line-height-16">{employeeData.description}</p>
                    </div>
                </div>
            }
            
            
            {/*Options*/}
            
        </div>
    )
}

export default Employee;