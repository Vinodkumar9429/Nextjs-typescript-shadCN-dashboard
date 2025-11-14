import AppBarChart from "../components/AppBarChart";
import AppPieChart from "../components/AppPieChart";
import AppAreaChart from "../components/AreaChart";
import CardList from "../components/CardList";

const Page = () => {
  return (
    <div className="font-general-sans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 mt-4 ">
      <div className="bg-accent/80 py-2 px-6 rounded-lg lg:col-span-2  max-lg:flex max-lg:justify-start max-lg:items-center">
        <AppBarChart />
      </div>
      <div className="bg-accent/80 py-2 px-4 rounded-lg flex justify-center items-center">
        <AppPieChart />
      </div>
      <div className="bg-accent/80 py-2 px-4 rounded-lg lg:col-span-1 flex flex-col justify-between items-center ">
        <h1 className="font-general-sans mt-2 font-bold text-sm md:text-lg lg:text-xl text-center">
          Total Visitors
        </h1>
        <AppAreaChart />
      </div>
      <div className="bg-accent/80 py-2 px-4 rounded-lg ">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-accent/80 py-2 px-4 rounded-lg ">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-accent/80 py-2 px-4 rounded-lg ">Test</div>
    </div>
  );
};

export default Page;
