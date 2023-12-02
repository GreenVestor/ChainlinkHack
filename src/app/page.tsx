import Link from "next/link";
import Image from "next/image";
import arrowDown from "../../public/arrowDown.png";
import tree from "../../public/tree.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className="w-full h-fit bg-green-800 pb-9">
          <div className="container mx-auto font-bold text-lg text-emerald-300 tracking-wider mb-2 pt-2">
            <p>Invest in a Sustainable Future</p>
          </div>
          <div className="container mx-auto text-4xl text-white font-normal tracking-wide mt-4">
            <h2>Empower Change through Sustainable Projects</h2>
          </div>
          <div className="container mx-auto px-4 pt-3 mt-4 bg-white rounded-2xl">
            <div className="px-8 flex flex-row">
              <p className="pr-16 max-w-lg pt-24">
                At Greenvestor, your investments drive positive change. Choose
                from curated sustainable projects to make a financial commitment
                with an environmental impact. Join us in shaping a greener
                future today!
                <Link
                  className="block bg-slate-400 text-lg w-36 pl-2.5 mt-4 rounded-md"
                  href="/"
                >
                  Get Started
                  <Image
                    className="w-4 h-4 inline ml-2 mb-1"
                    src={arrowDown}
                    alt="/"
                  />
                </Link>
              </p>
              <Image
                className="w-3/6 h-3/6 container mx-auto w-full mr-4"
                src={tree}
                alt=""
              />
            </div>
            <div className="pb-4">
                <p className="font-bold max-w-xl text-2xl px-8 mb-4">
                  Borrow capital or invest in sustainable projects to drive
                  positive change!
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
