import Navbar from "@/components/Navbar";

export default function Quiz({ params }: { params: { quizId: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <Navbar />
      <div className="w-full px-4 lg:px-lg py-lg flex flex-col lg:flex-row justify-start items-start gap">
        <div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-8">
          <div className="text-black text-3xl lg:text-4xl font-normal font-['Inter'] mb-4">
            Chapter 1: Numbers
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="w-full p-4 bg-slate-400 rounded-lg flex justify-center items-center">
              <div className="text-black text-lg lg:text-xl font-normal font-['Inter'] text-center">
                Hint: look at the number of berries
              </div>
            </div>
            <img
              className="w-full max-w-xs lg:max-w-sm mx-auto"
              src="https://via.placeholder.com/276x355"
              alt="Hint"
            />
          </div>
        </div>
        <div className="w-full lg:flex-1 p-lg lg:p-lg flex flex-col justify-start items-start gap-4">
          <div className="w-full text-center text-black text-2xl lg:text-3xl  font-semibold font-['Inter']">
            Course Challenge
          </div>
          <div className="w-full text-black text-lg lg:text-xl font-medium font-['Inter'] mb-4">
            A mother bear has 42 berries and her baby bear collected 44 berries.
            Who collected more berries?
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white flex items-center gap-4 p-2 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-white rounded-full border border-black flex justify-center items-center">
                <div className="text-center text-black text-sm font-semibold">
                  1
                </div>
              </div>
              <div className="text-black text-lg font-normal">
                The mother bear
              </div>
            </div>
            <div className="bg-white flex items-center gap-4 p-2 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-indigo-400 rounded-full border border-black flex justify-center items-center">
                <div className="text-center text-black text-sm font-semibold">
                  1
                </div>
              </div>
              <div className="text-black text-lg font-normal">
                The baby bear
              </div>
            </div>
            <div className="bg-white flex items-center gap-4 p-2 rounded-lg shadow-md">
              <div className="w-6 h-6 bg-white rounded-full border border-black flex justify-center items-center">
                <div className="text-center text-black text-sm font-semibold">
                  1
                </div>
              </div>
              <div className="text-black text-lg font-normal">
                They both have the same number of berries
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col justify-items-end  items-start gap-8">
          <div className="text-black text-2xl lg:text-3xl font-normal">
            Questions Attempted
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-indigo-400 rounded-lg border-2 border-indigo-700"></div>
            <div className="w-8 h-8 bg-indigo-400 rounded-lg border-2 border-indigo-700"></div>
            <div className="w-8 h-8 bg-slate-50 rounded-lg border-2 border-slate-300"></div>
            <div className="w-8 h-8 bg-slate-50 rounded-lg border-2 border-slate-300"></div>
            <div className="w-8 h-8 bg-slate-50 rounded-lg border-2 border-slate-300"></div>
            <div className="w-8 h-8 bg-slate-50 rounded-lg border-2 border-slate-300"></div>
          </div>
          <div className="w-full p-4 bg-white flex justify-center items-center">
            <button className="px-8 py-4 bg-indigo-500 rounded-full text-white text-lg lg:text-xl font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
