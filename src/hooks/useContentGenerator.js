"use client";

import { useState } from "react";
import { generateContentMock } from "../services/mockApi";
import toast from "react-hot-toast";

export const useContentGenerator = () => {
  const [topic, setTopic] = useState("");
  const [generatedContent, setGeneratedContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedSection, setCopiedSection] = useState(null);

  const generateContent = async () => {
    if (!topic.trim()) {
      toast.error("Please enter a topic");
      return;
    }

    setIsLoading(true);
    setGeneratedContent(null);

    try {
      const content = await generateContentMock(topic);
      setGeneratedContent(content);
      toast.success("Content generated successfully!");
    } catch (error) {
      console.error("Error generating content:", error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (content, section) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedSection(section);
      toast.success(`${section} copied to clipboard!`);
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (err) {
      console.error("Copy error:", err);
      toast.error("Failed to copy. Please try again.");
    }
  };

  const downloadContent = () => {
    if (!generatedContent) return;

    const content = `Title: ${generatedContent.title}\n\nMeta Description: ${generatedContent.metaDescription}\n\nTags: ${generatedContent.tags.join(", ")}\n\n${generatedContent.fullContent}`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic.replace(/\s+/g, "-").toLowerCase()}-blog-content.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Content downloaded successfully!");
  };

  return {
    topic,
    setTopic,
    generatedContent,
    isLoading,
    copiedSection,
    generateContent,
    copyToClipboard,
    downloadContent,
  };
};
