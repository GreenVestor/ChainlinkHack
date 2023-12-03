import Image from "next/image";
import greenImage from "../../../../public/homePosts/greentech.jpg";

const solar = () => {
  return (
    <>
      <div className="w-full h-fit bg-slate-200 pb-9">
        <div className="container pt-12 mx-auto text-2xl grid place-items-center text-black font-normal tracking-wide">
          {/* <p className="pb-6">Solar Harvest Energy Park</p> */}
          <div className=" grid place-items-center mb-6 container mx-auto px-4 pt-3 bg-white rounded-2xl">
            <div className="flex flex-row m-8">
              <Image className="w-96 h-96 rounded-lg" src={greenImage} alt="" />
              <div className="text-black ml-8 my-12">
                <p className="underline font-bold">
                  Project Title: Green Tech Urban Farm Initiative
                </p>
                <br />
                <p className="mb-1.5 underline">Details</p>
                <p className="text-lg text-justify">
                  Our Project is dedicated to creating technologically advanced
                  vertical farms that produce fresh, nutritious products while
                  minimizing environmental effects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-green-400 rounded-xl grid place-items-center pt-4">
          <p className="underline">Project Budget</p>
          <div className="flex flex-row text-lg mt-4 gap-x-4 mb-4">
            <div>
              <p>Total Capital Needed</p>
              <p>1,250,000 NGN</p>
            </div>
            <div>
              <p>Capital Generated</p>
              <p>1,000,000 NGN</p>
            </div>
          </div>
          <p className="underline">Investor Returns</p>
          <p className="text-base pb-4 px-24 mt-4 text-justify">
            Investors in Green Tech Urban Farm Initiative have the potential to earn an
            estimated annual return of 8-10%. As the energy park becomes fully
            operational, investors will recieve regular dividend payment based
            on their contributions
          </p>
        </div>
      </div>
    </>
  );
};

export default solar;
