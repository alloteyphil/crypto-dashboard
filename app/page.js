import Alert from "./components/Alert";
import ChartTabs from "./components/ChartTabs";
import Graph from "./components/Graph";
import History from "./components/History";
import NotificationPanel from "./components/NotificationPanel";
import Trend from "./components/Trend";

export default async function Home() {
  return (
    <div className="flex flex-col gap-3 pt-7 w-full relative">
      <p className="uppercase text-[#B1AFCD]">Wallets</p>
      <ChartTabs />
      <Graph />
      <NotificationPanel />
      <Trend />
      <History />
      <Alert />
    </div>
  );
}
