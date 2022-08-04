import React, {useEffect} from 'react'
import Option from '../common/Option'

function Employee(props) {
    let employeeData = props.data[props.activeTab];
    const [options, setOptions] = React.useState();

    useEffect(() => {
        let optionsDefaults = {
            leftOptions: [
                {id: 1, name: 'Sapling', status: 'HR Management', checked: true, image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQF6SV_iEja5DA/company-logo_200_200/0/1625421845572?e=2147483647&v=beta&t=Yq-lnm41MnEPhqqTu3Bfoq089s4FqLbb-24SJd2frEA'},
                {id: 2, name: 'Workday', status: 'HR Management', checked: (props.activeTab ? true : false), image: 'https://hr.cornell.edu/sites/default/files/styles/original/public/workday_logo_herobutton.png?itok=iSjVxhQz'},
                {id: 3, name: 'Xero',status: 'Employers Base', checked: (props.activeTab > 1 ? true : false), image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFS6YYNfoamA6udxPJJ32N03sgo_ij8DwVsNMb74Et5smxMIkcEV2zAIIk6bEszlP75zk&usqp=CAU' }
            ],
            rightOptions: [
                {id: 4, name: 'Rippling', status: 'Salary Management', checked: (props.activeTab > 1 ? true : false), image: 'https://www.theladders.com/s3proxy/company-photo.theladders.com/55416/397788a6-d206-4a11-be20-bccee9ea1958.png'},
                {id: 5, name: 'Expensify', status: 'HR Management', checked: (props.activeTab ? true : false), image: 'https://www.apkmirror.com/wp-content/uploads/2021/03/38/6041434133de5.png'},
                {id: 6, name: 'Zenefits',status: 'HR Management', checked: true, image: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wmvk6wozxiuetdo56wcy' }
            ]
        }
        setOptions(optionsDefaults)
    }, [props.activeTab]);

    return (
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between pt-50px px-lg-0 px-25px">
            {/*Options*/}
            <div className="d-flex justify-content-between flex-column order-lg-1 order-2 w-100 w-lg-auto">
                {
                    options && options.leftOptions &&
                    options.leftOptions.map(function (item, i) {
                        return <div key={i} className="w-100"><Option {...item}/></div>
                    })
                }
            </div>

            <div className="flex-grow-1 d-lg-flex align-items-center rotate d-none order-lg-1">
                <svg viewBox="-1 -1 120 190">
                    <path className="top-curve" d="M0,0 L55,0 Q60,0 60, 10 L 60, 85 Q 60,90 70,90"/>
                    <path className="common-middle-line" d="M 70, 90 L 120, 90"/>
                    <path className="middle-line" d="M 0, 90 L 70, 90"/>
                    <path className="bottom-curve" d="M 70, 90 Q 60, 90 60, 95 L 60, 170 Q 60, 180 55, 180 L 0, 180"/>
                    {options && options.leftOptions &&
                        <>
                            <path className={`path common-handler ${options.leftOptions[0].checked || options.leftOptions[1].checked || options.leftOptions[2].checked ? 'animate' : ''}`}
                                  d="M 70, 90 L 120, 90"/>
                            <path className={`path path-handler ${options.leftOptions[0].checked ? 'animate' : ''}`}
                                  d="M0,0 L55,0 Q60,0 60, 10 L 60, 85 Q 60,90 70,90"/>
                            <path className={`path path-handler ${options.leftOptions[1].checked ? 'animate' : ''}`} d="M 0, 90 L 70, 90"/>
                            <path className={`path reverse-path-handler ${options.leftOptions[2].checked ? 'animate' : ''}`} d="M 70, 90 Q 60, 90 60, 95 L 60, 170 Q 60, 180 55, 180 L 0, 180"/>
                        </>
                    }
                </svg>
            </div>
            {/*Employee*/}
            {
                <div
                    className="mb-20px mb-lg-0 order-lg-2 order-1 rounded max-width-380px w-100 w-basis-lg-380px min-height-lg-268px border-solid-2 border-primary bg-secondary d-flex flex-column align-items-center text-center">
                    <div className={`mt-lg-n30px mt-n40px pb-25px px-40px data-container ${employeeData.title ? 'animate' : ''}`}>
                        <img src={employeeData.thumbnail} className="rounded-sm w-86px h-86px object-cover" alt=""/>
                        <h2 className="font-size-18 font-medium pt-14px pb-6px text-dark">{employeeData.title}</h2>
                        <h4 className="font-size-14 font-base pb-6px text-light">{employeeData.category}</h4>
                        <p className="pt-14px font-base font-size-16 line-height-16">{employeeData.description}</p>
                    </div>
                </div>
            }

            <div className="flex-grow-1 d-lg-flex d-none align-items-center order-lg-2">
                <svg className="flip-horizontal" viewBox="-1 -1 120 190">
                    <path className="top-curve" d="M0,0 L55,0 Q60,0 60, 10 L 60, 85 Q 60,90 70,90"/>
                    <path className="common-middle-line" d="M 70, 90 L 120, 90"/>
                    <path className="middle-line" d="M 0, 90 L 70, 90"/>
                    <path className="bottom-curve" d="M 70, 90 Q 60, 90 60, 95 L 60, 170 Q 60, 180 55, 180 L 0, 180"/>
                    {options && options.leftOptions &&
                        <>
                            <path className={`path common-handler ${options.rightOptions[0].checked || options.rightOptions[1].checked || options.rightOptions[2].checked ? 'animate' : ''}`}
                                  d="M 70, 90 L 120, 90"/>
                            <path className={`path path-handler ${options.rightOptions[0].checked ? 'animate' : ''}`}
                                  d="M0,0 L55,0 Q60,0 60, 10 L 60, 85 Q 60,90 70,90"/>
                            <path className={`path path-handler ${options.rightOptions[1].checked ? 'animate' : ''}`} d="M 0, 90 L 70, 90"/>
                            <path className={`path reverse-path-handler ${options.rightOptions[2].checked ? 'animate' : ''}`} d="M 70, 90 Q 60, 90 60, 95 L 60, 170 Q 60, 180 55, 180 L 0, 180"/>
                        </>
                    }
                </svg>
            </div>
            {/*Options*/}
            <div className="d-flex justify-content-between flex-column order-3 w-100 w-lg-auto">
                {
                    options && options.rightOptions &&
                    options.rightOptions.map(function (item, i) {
                        return <div key={i} className="w-100"><Option {...item}/></div>
                    })
                }
            </div>
        </div>
    )
}

export default Employee;