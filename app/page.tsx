import AppBarChart from "../components/AppBarChart"
import AppPieChart from "../components/AppPieChart"
import AppAreaChart from "../components/AreaChart"
import CardList from "../components/CardList"

const Page = () => {
  return (
    <div className="font-general-sans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 mt-4 border border-border">
        <div className="bg-accent/80 py-2 px-6 rounded-lg lg:col-span-2 border border-border max-lg:flex max-lg:justify-start max-lg:items-center">
          <AppBarChart />
        </div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border flex justify-center items-center">
          <AppPieChart />
        </div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg lg:col-span-1 flex justify-center items-center border border-border">
          <AppAreaChart />
        </div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border"><CardList title="Popular Content" /></div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border">
          <CardList title="Latest Transactions" />
        </div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border">Test</div>
    </div>
  )
}

export default Page
