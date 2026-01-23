"use client";

const ContentCard = ({
  title,
  content,
  icon,
  backgroundColor,
  onCopy,
  isCopied,
}) => {
  return (
    <div
      className={`border-2 border-grey/50 hover:border-purple-300/50 transition-all duration-300 rounded-2xl overflow-hidden group bg-white`}
    >
      <div className={`${backgroundColor} border-b border-grey/50`}>
        <div className="p-6 flex items-center justify-between">
          <h3 className="text-lg flex items-center space-x-2 font-bold text-black">
            <span>{icon}</span>
            <span>{title}</span>
          </h3>
          <button
            onClick={onCopy}
            className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
          >
            {isCopied ? "✓" : "📋"}
          </button>
        </div>
      </div>
      <div className="p-6">
        {Array.isArray(content) ? (
          <div className="flex flex-wrap gap-3">
            {content.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium shadow-sm tag"
              >
                #{item}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-black/80 leading-relaxed text-base whitespace-pre-wrap">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
