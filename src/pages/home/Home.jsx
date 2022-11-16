import { useState, useEffect, useMemo } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Layout from "../../components/layout";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import {userRequest, BASE_URL } from "../../requestMethods";


export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(BASE_URL + "/users/status");
        res.data.pa((item) =>
        setUserStats((prev) => [

          ...prev,
          {name:MONTHS[item._id -1], "Active User": item.total},
        ])
        );
      } catch {}
    };
    getStats()
  }, [MONTHS]);

  console.log(userStats, "userStats........")

  return (
    <Layout>
      <div className="home">
        <FeaturedInfo />
        <Chart
    // data={userStats}

          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </Layout>
  );
}
