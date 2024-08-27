import Image from "next/image";
import { history } from "../data/history";
import Link from "next/link";

const History = () => {
  return (
    <div className="text-xs rounded-xl absolute bottom-10 right-0 flex items-center justify-center">
      <div className="w-[350px] rounded-xl">
        <div className="flex justify-between items-center text-gray-400 mb-4">
          <h3 className="px-4">HISTORY</h3>
          <Link href="#" className="text-blue-400 text-sm px-3">
            See All
          </Link>
        </div>
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className={`py-2 relative flex items-center gap-3 w-full px-3 group cursor-pointer hover:bg-[#17153a]/60 transition-colors duration-300 ease-in-out ${
                item.highlighted ? "bg-[#17153a]" : ""
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={`/${item.icon}`}
                  width={30}
                  height={30}
                  className="object-contain object-center"
                />
                <span className="ml-2">{item.description}</span>
              </div>
              <div
                className={`ml-auto text-${
                  item.changeType === "positive" ? "green" : "red"
                }-500`}
              >
                {item.change}
              </div>
              <div className="text-gray-500 ml-4">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
