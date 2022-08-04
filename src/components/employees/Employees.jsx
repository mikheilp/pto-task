import React,{useEffect} from 'react'
import MainService from '../../services/MainService';
import Employee from './Employee';
import Loader from '../common/Loader';

function Employees() {
    const [data,setData] = React.useState(0);
    const [activeTab,setActiveTab] = React.useState(0);
    let tabItems = ['Small Business','Medium Business','Enterprise'];

    const getData = async () => {
        try {
            const response = await MainService.getData({});
            let resData = response.data.products;
            let mapEmployeeData = [];
            for (let i=0; i<3; i++) {
                mapEmployeeData.push(resData[i]);
            }
            setData(mapEmployeeData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return (
        <div className="pb-40px pt-lg-40px container">
            <div className="text-center px-25px">
                <h1 className="font-bold font-size-lg-64 font-size-36 text-dark pb-12px line-height-normal">Easy Turn-Key Integration</h1>
                <p className="mx-auto font-size-lg-18 line-height-lg-18 font-size-16 font-base pt-12px flex-shrink-1 text-light max-width-780px">Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.</p>
            </div>
            <div className="tabs-container mt-30px mt-sm-50px mb-sm-30px mb-20px">
                <ul className="d-flex flex-nowrap justify-content-between justify-content-sm-center tabs">
                    {
                        tabItems.map(function(item,i){
                            return (
                                <li className={`${activeTab === i ? 'active' : ''} font-size-sm-12 font-size-14 font-medium fade-out-hover d-flex align-items-center cursor-pointer mx-4px`}
                                    onClick={()=>setActiveTab(i)}
                                    key={i}><span>{item}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
            {
                data ? <Employee data={data} activeTab={activeTab} /> : <Loader className="min-height-268px w-100 d-flex align-items-center justify-content-center" />
            }
        </div>
    )
}

export default Employees;