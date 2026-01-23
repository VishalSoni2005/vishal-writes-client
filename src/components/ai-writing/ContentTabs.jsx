"use client";

import { useState } from "react";
import ContentCard from "./ContentCard";

const ContentTabs = ({ content, copiedSection, onCopy }) => {
  const [activeTab, setActiveTab] = useState("preview");

  const tabs = [
    { id: "preview", label: "Preview", icon: "📄" },
    { id: "elements", label: "Elements", icon: "#️⃣" },
    { id: "outline", label: "Outline", icon: "📋" },
    { id: "raw", label: "Raw Text", icon: "📝" },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>
      <div className="relative border-0 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden">
        <div className="p-8">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 border-b border-grey">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-t-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-white text-black border-b-2 border-purple-600"
                    : "text-black/60 hover:text-black"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {/* Preview Tab */}
            {activeTab === "preview" && (
              <div className="border-2 border-grey/50 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-grey to-grey/50 border-b border-grey/50 p-6">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-black">
                    <span>📄</span>
                    Content Preview
                  </h3>
                </div>
                <div className="p-8 prose prose-lg prose-gray max-w-none">
                  <div
                    style={{ whiteSpace: "pre-wrap" }}
                    className="text-black/80 whitespace-pre-wrap"
                  >
                    {content.fullContent}
                  </div>
                </div>
              </div>
            )}

            {/* Elements Tab */}
            {activeTab === "elements" && (
              <div className="grid gap-6 md:grid-cols-2">
                <ContentCard
                  title="Blog Title"
                  icon="⚡"
                  content={content.title}
                  backgroundColor="bg-gradient-to-r from-purple-50 to-pink-50"
                  onCopy={() => onCopy(content.title, "Title")}
                  isCopied={copiedSection === "Title"}
                />
                <ContentCard
                  title="Meta Description"
                  icon="⭐"
                  content={content.metaDescription}
                  backgroundColor="bg-gradient-to-r from-blue-50 to-cyan-50"
                  onCopy={() =>
                    onCopy(content.metaDescription, "Meta Description")
                  }
                  isCopied={copiedSection === "Meta Description"}
                />
                <ContentCard
                  title="Introduction"
                  icon="🧠"
                  content={content.introduction}
                  backgroundColor="bg-gradient-to-r from-emerald-50 to-teal-50"
                  onCopy={() => onCopy(content.introduction, "Introduction")}
                  isCopied={copiedSection === "Introduction"}
                />
                <ContentCard
                  title="Tags"
                  icon="#️⃣"
                  content={content.tags}
                  backgroundColor="bg-gradient-to-r from-pink-50 to-rose-50"
                  onCopy={() => onCopy(content.tags.join(", "), "Tags")}
                  isCopied={copiedSection === "Tags"}
                />
                <ContentCard
                  title="Category"
                  icon="✨"
                  content={content.category}
                  backgroundColor="bg-gradient-to-r from-indigo-50 to-purple-50"
                  onCopy={() => onCopy(content.category, "Category")}
                  isCopied={copiedSection === "Category"}
                />
              </div>
            )}

            {/* Outline Tab */}
            {activeTab === "outline" && (
              <div className="border-2 border-grey/50 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-grey to-grey/50 border-b border-grey/50 p-6">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-black">
                    <span>📋</span>
                    Content Outline
                  </h3>
                </div>
                <div className="p-8 space-y-4">
                  {content.outline.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-r from-grey to-grey/50 rounded-lg hover:shadow-md transition-all"
                    >
                      <span className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-black/80 leading-relaxed pt-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Raw Text Tab */}
            {activeTab === "raw" && (
              <div className="border-2 border-grey/50 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-grey to-grey/50 border-b border-grey/50 p-6">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-black">
                    <span>📝</span>
                    Raw Text
                  </h3>
                </div>
                <div className="p-8">
                  <textarea
                    readOnly
                    value={content.fullContent}
                    className="w-full h-96 p-4 border border-grey rounded-lg font-mono text-sm text-black/80 bg-grey/30 resize-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTabs;
