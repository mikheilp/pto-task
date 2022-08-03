import React,{useEffect} from 'react'
import MainService from '../../services/MainService';

function Employees() {
    const [data,setData] = React.useState(0);
    const [activeTab,setActiveTab] = React.useState(0);
    let tabItems = ['Small Business','Medium Business','Enterprise'];

    const getData = async () => {
        try {
            const res = await MainService.getData({});
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <div className="py-40px container">
            <div className="text-center small-container">
                <h1 className="font-bold font-size-64 text-dark pb-12px text-nowrap">Easy Turn-Key Integration</h1>
                <p className="font-size-18 font-base pt-12px flex-shrink-1 line-height-18 text-light">Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.</p>
            </div>
            <ul className="d-flex justify-content-center tabs pt-50px">
                {
                    tabItems.map(function(item,i){
                        return (
                            <li className={`${activeTab === i ? 'active text-white' : 'text-light'} font-size-12 font-medium fade-out-hover d-flex align-items-center cursor-pointer mx-4px`}
                                onClick={()=>setActiveTab(i)}
                                key={i}><span>{item}</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Employees;