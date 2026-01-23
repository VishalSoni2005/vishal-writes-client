"use client";

import { useContentGenerator } from "@/hooks/useContentGenerator";
import TopicInput from "@/components/ai-writing/TopicInput";
import ContentTabs from "@/components/ai-writing/ContentTabs";
import LoadingState from "@/components/ai-writing/LoadingState";
import ContentHeader from "@/components/ai-writing/ContentHeader";

export default function AIWritingPage() {
  const {
    topic,
    setTopic,
    generatedContent,
    isLoading,
    copiedSection,
    generateContent,
    copyToClipboard,
    downloadContent,
  } = useContentGenerator();

  return (
    // <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
    <main className="h-cover bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 via-pink-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/15 via-indigo-200/15 to-purple-200/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/20 via-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Particles */}
        <div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-pink-400/40 rounded-full animate-ping"
          style={{ animationDelay: "0.7s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-full p-8 shadow-2xl">
                <div className="text-5xl">🧠</div>
              </div>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-black">Generate</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Amazing Content
              </span>
            </h2>

            <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into captivating blog posts with our
              AI-powered content generator.
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Professional, SEO-optimized, and ready to publish.
              </span>
            </p>
          </div>

          {/* Input Section */}
          <div className="mb-16">
            <TopicInput
              topic={topic}
              setTopic={setTopic}
              onGenerate={generateContent}
              isLoading={isLoading}
            />
          </div>

          {/* Loading State */}
          {isLoading && <LoadingState />}

          {/* Generated Content */}
          {!isLoading && generatedContent && (
            <div className="space-y-8">
              <ContentHeader
                topic={topic}
                onCopyAll={() =>
                  copyToClipboard(generatedContent.fullContent, "Full Content")
                }
                onDownload={downloadContent}
                copiedSection={copiedSection}
              />
              <ContentTabs
                content={generatedContent}
                copiedSection={copiedSection}
                onCopy={copyToClipboard}
              />
            </div>
          )}

          {/* Empty State */}
          {/* {!isLoading && !generatedContent && <EmptyState />} */}
        </div>
      </div>
    </main>
  );
}
