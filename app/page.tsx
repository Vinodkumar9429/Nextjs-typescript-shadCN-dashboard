import AppBarChart from "../components/AppBarChart"
import AppAreaChart from "../components/AreaChart"

const Page = () => {
  return (
    <div className="font-general-sans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 mt-4 border border-border">
        <div className="bg-accent/80 py-2 px-4 rounded-lg lg:col-span-2 border border-border">
          <AppBarChart />
        </div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border">Test</div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg lg:col-span-1 flex justify-center items-center border border-border">
          <AppAreaChart />
        </div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border">Test</div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border">Test</div>
        <div className="bg-accent/80 py-2 px-4 rounded-lg border border-border">Test</div>
    </div>
  )
}

export default Page
