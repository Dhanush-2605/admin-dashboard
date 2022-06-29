
import "./home.css"
import FeaturedInfo from "../featuresInfo/FeaturedInfo"

import Chart from "../../components/charts/Chart"
import { userData } from "../../dummydata"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetSm/WidgetSm"
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homewidget">
      <WidgetSm />
      <WidgetLg />
        
      </div>
    </div>
  )
}

export default Home