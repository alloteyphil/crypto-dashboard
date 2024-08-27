import Image from "next/image";
import Path1 from "../../public/Path1.png";
import Path2 from "../../public/Path2.png";
import Path3 from "../../public/Path3.png";
import Path4 from "../../public/Path4.png";

const Trend = () => {
  return (
    <div className="bg-transparent flex mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-transparent p-4 rounded-lg shadow-lg w-[260px]">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              BTC <span className="text-gray-500">USD</span>
            </div>
            <div className="text-red-500 text-sm">▼ -5.23%</div>
          </div>
          <div className="py-2 text-lg">7,356.67</div>
          <div className="mt-2">
            <Image
              src={Path1}
              alt="Path1"
              width={200}
              height={20}
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="bg-transparent p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              ETH <span className="text-gray-500">USD</span>
            </div>
            <div className="text-green-500 text-sm">▲ +132%</div>
          </div>
          <div className="py-2 text-lg">465.22</div>
          <div className="mt-2">
            <Image
              src={Path2}
              alt="Path1"
              width={200}
              height={20}
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="bg-transparent p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              LTC <span className="text-gray-500">USD</span>
            </div>
            <div className="text-green-500 text-sm">▲ +75.6%</div>
          </div>
          <div className="py-2 text-lg">104.23</div>
          <div className="mt-2">
            <Image
              src={Path3}
              alt="Path1"
              width={200}
              height={20}
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="bg-transparent p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              BTC <span className="text-gray-500">IDR</span>
            </div>
            <div className="text-green-500 text-sm">▲ +132%</div>
          </div>
          <div className="py-2 text-lg">107,543,234</div>
          <div className="mt-2">
            <Image
              src={Path4}
              alt="Path1"
              width={200}
              height={20}
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
