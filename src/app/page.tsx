import Link from "next/link";
import Image from "next/image";
import arrowDown from "../../public/arrowDown.png";
import tree from "../../public/tree.jpg";
import solar from "../../public/homePosts/solar.jpg";
import greentech from "../../public/homePosts/greentech.jpg";

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
                className="max-w-md max-h-md container mx-auto w-full mr-4"
                src={tree}
                alt=""
              />
            </div>
            <div className="pb-20 mt-4">
              <p className="font-bold max-w-xl text-2xl px-8 mb-4">
                Borrow capital or invest in sustainable projects to drive
                positive change!
              </p>
              <div className="px-8 font-semibold flex flex-row gap-6 text-green-700">
                <p>Support Impactful Initiatives</p>
                <p>Earn Sustainable Returns</p>
                <p>Create a Greener World</p>
              </div>
            </div>
            <div className="pb-8 flex flex-row rounded-lg">
              <Image className="max-w-md max-h-md pl-8" src={solar} alt="" />
              <div className="bg-green-800 px-8 mr-8 pt-8 text-white">
                <p className="text-2xl pb-4">Solar Harvest Energy Park</p>
                <p className="pb-4">
                  At Solar Harvest Energy Park, we're dedicated to
                  revolutionizing energy generation and combine climate change
                  through renewable technologies
                </p>
                <p className="pb-4">Total Investment Needed: 250,000 Naira</p>
                <Link
                  className="text-black bg-emerald-300 p-1.5 rounded-md"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="pb-8 flex flex-row rounded-lg">
              <Image
                className="max-w-md max-h-md pl-8"
                src={greentech}
                alt=""
              />
              <div className="bg-green-800 px-8 mr-8 pt-8 text-white">
                <p className="text-2xl pb-4">
                  Green Tech Urban Farm Initiative
                </p>
                <p className="pb-4">
                  Our Project is dedicated to creating technologically advanced
                  vertical farms that produce fresh, nutritious products while
                  minimizing environmental effects
                </p>
                <p className="pb-4">Total Investment Needed: 1,250,000 Naira</p>
                <Link
                  className="text-black bg-emerald-300 p-1.5 rounded-md"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="w-full pb-8">
              <Link
                className="bg-green-400 container ml-96 p-2 rounded-lg mb-8"
                href="/projects"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p>jbfciwebfc</p>
        </div>
      </div>
    </>
  );
};

export default Home;
