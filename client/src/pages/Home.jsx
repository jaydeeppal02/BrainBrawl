import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Main box */}

      <div className="grid grid-cols-12 gap-6 p-6">

  {/* Filter Section */}
  <div className="col-span-12 md:col-span-4 lg:col-span-3">
    <div className="p-5 rounded-xl border border-[#667761] bg-white shadow-sm">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#667761]">
          Filters
        </h2>

        <button className="text-sm text-gray-500 hover:text-[#667761]">
          Clear All
        </button>
      </div>

      {/* Technology */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">
          Technology
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="javascript"
              className="w-4 h-4 accent-[#667761]"
            />
            <span className="text-gray-600">HTML</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="html"
              className="w-4 h-4 accent-[#667761]"
            />
            <span className="text-gray-600">CSS</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="css"
              className="w-4 h-4 accent-[#667761]"
            />
            <span className="text-gray-600">JavaScript</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="react"
              className="w-4 h-4 accent-[#667761]"
            />
            <span className="text-gray-600">React.js</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value="node"
              className="w-4 h-4 accent-[#667761]"
            />
            <span className="text-gray-600">Node.js</span>
          </label>

        </div>
      </div>

      {/* Difficulty */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">
          Difficulty
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="difficulty"
              value="easy"
              className="accent-[#667761]"
            />
            <span className="text-gray-600">Easy</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="difficulty"
              value="medium"
              className="accent-[#667761]"
            />
            <span className="text-gray-600">Medium</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="difficulty"
              value="hard"
              className="accent-[#667761]"
            />
            <span className="text-gray-600">Hard</span>
          </label>

        </div>
      </div>

     
      
      {/* Apply Button */}
      <button
        className="w-full py-2.5 rounded-lg bg-[#667761] text-white font-semibold
                   hover:bg-[#556451] transition duration-200"
      >
        Apply Filters
      </button>

    </div>
  </div>


  {/* Quiz Questions Section */}
  <div className="col-span-12 md:col-span-8 lg:col-span-9">

    <div className="flex items-center justify-between mb-5">
      <div>
        <h2 className="text-2xl font-bold text-[#667761]">
          Quiz Questions
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Test your knowledge and improve your skills
        </p>
      </div>

      <span className="px-3 py-1 rounded-full bg-[#e8eddf] text-[#667761] text-sm font-medium">
        10 Questions
      </span>
    </div>

    {/* Question Card */}
    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">

      <p className="text-sm text-[#667761] font-semibold mb-2">
        Question 1
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-5">
        Which keyword is used to declare a variable in JavaScript?
      </h3>

      <div className="space-y-3">

        <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#667761] hover:bg-[#e8eddf] transition">
          A. variable
        </button>

        <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#667761] hover:bg-[#e8eddf] transition">
          B. let
        </button>

        <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#667761] hover:bg-[#e8eddf] transition">
          C. define
        </button>

        <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#667761] hover:bg-[#e8eddf] transition">
          D. declare
        </button>

      </div>

      <div className="flex justify-end mt-6">
        <button className="px-6 py-2.5 rounded-lg bg-[#667761] text-white font-semibold hover:bg-[#556451] transition">
          Next Question
        </button>
      </div>

    </div>

  </div>

</div>
    </>
  );
};

export default Home;
