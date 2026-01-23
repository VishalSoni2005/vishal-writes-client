"use client";

const TopicInput = ({ topic, setTopic, onGenerate, isLoading }) => {
  return (
    <section className="py-16">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
        <div className="relative border-0 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-6 items-end">
              <div className="flex-1 space-y-3">
                <label className="text-lg font-semibold text-black flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    💡
                  </div>
                  What is your topic today?
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Machine Learning, Sustainable Living, Digital Art, Cooking..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="input-box h-16 text-lg pl-16 group-hover:shadow-xl transition-all duration-300"
                    onKeyPress={(e) => e.key === "Enter" && onGenerate()}
                    disabled={isLoading}
                  />
                  <div className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    ✨
                  </div>
                </div>
              </div>

              <div className="lg:w-auto w-full">
                <button
                  onClick={onGenerate}
                  disabled={isLoading}
                  className="btn-dark w-full lg:w-auto h-16 px-10 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="relative">
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                      <span>Creating Magic...</span>
                    </>
                  ) : (
                    <>
                      🚀
                      <span>Generate Content</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicInput;
