"use client";

const LoadingState = () => {
  return (
    <div className="text-center py-20">
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="relative w-32 h-32 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            <div
              className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-pink-600 rounded-full animate-spin"
              style={{ animationDirection: "reverse" }}
            ></div>
          </div>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-black mb-4">
        Crafting Your Masterpiece
      </h3>
      <p className="text-xl text-black/60 animate-pulse">
        Our AI is weaving words into compelling content...
      </p>
      <div className="flex justify-center space-x-2 mt-6">
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingState;
