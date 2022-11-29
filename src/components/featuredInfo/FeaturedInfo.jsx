import {useState, useEffect} from "react"
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest, BASE_URL } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(()=> {
    const getIncome = async ()=>{
      try{
        const res = await userRequest.get(BASE_URL + "/orders/income")
        setIncome(res.data)
        setPerc((res.data[1].total*100)/ res.data[0].total - 100);
      }catch{}
    }
    getIncome()
  }, [])

   console.log(income, "income......");
   console.log(perc, "perc......");

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{ perc || "$2,415"}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc) || "-11.4"} 
            {" "} {perc < 0 ? (

              <ArrowDownward  className="featuredIcon negative"/>
            ) : <ArrowDownward className="featuredIcon negative"/> }
          </span> 
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
