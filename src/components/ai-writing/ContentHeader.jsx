"use client";

const ContentHeader = ({ topic, onCopyAll, onDownload, copiedSection }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
      <div className="relative border-0 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5"></div>
        <div className="relative p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg">
                ✅
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-1">
                  Content Ready! 🎉
                </h3>
                <p className="text-black/60 text-lg">
                  Your complete blog post for{" "}
                  <span className="font-semibold text-purple-600">{topic}</span>
                  is ready
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={onDownload}
                className="border-2 border-black hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 rounded-xl px-6 py-3 bg-white text-black font-medium flex items-center justify-center gap-2"
              >
                📥 Download
              </button>
              <button
                onClick={onCopyAll}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3 text-white font-medium flex items-center justify-center gap-2"
              >
                {copiedSection === "Full Content" ? "✓ Copied!" : "📋 Copy All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
