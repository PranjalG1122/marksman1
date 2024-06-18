import React from "react";
function Courses() {
  return (
    <div className="flex flex-col items-center w-full gap-4 px-8">
      <h1 className="font-bold text-5xl text-center">Courses</h1>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 w-full">
        {[...Array(5)].map((_, i) => {
          return (
            <div className="bg-indigo-50 w-full md:max-w-xs h-[400px] flex flex-1 rounded-2xl ">
              <p className="text-center font-semibold text-2xl text-indigo-900 m-5">
                Grade-{i + 1}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Courses;
