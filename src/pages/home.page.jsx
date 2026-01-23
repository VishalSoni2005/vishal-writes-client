import React, { useEffect, useState } from "react";
import AnimationWrapper from "../common/page-animation";
import axios from "axios";
import InPageNavigation, {
  activeTabRef,
} from "../components/inpage-navigation.component";
import Loader from "../components/loader.component";
import BlogPostCard from "../components/blog-post.component";
import MinimalBlogPost from "../components/nobanner-blog-post.component";
import NaMsgData from "../components/nodata.component";
import { filterPaginationData } from "../common/filter-pagination-data";
import LoadMoreDataBtn from "../components/load-more.component";
import axiosInstance from "@/api/axios.instance";
import { BLOG_CATEGORY_LIST } from "@/constants/blogCategories";

export default function HomePage() {
  const [blogs, setBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);
  const [pageState, setPageState] = useState("home");

  const getBlogsByCategory = async ({ page = 1 }) => {
    try {
      const res = await axiosInstance.post("/search-blogs", {
        category: pageState,
        page: Number(page) || 1,
      });

      const formattedData = await filterPaginationData({
        state: blogs,
        data: res.data.blogs,
        page,
        countRoute: "/search-blogs-count",
        data_to_send: { category: pageState },
      });

      setBlogs(formattedData);
    } catch (error) {
      console.error("Error fetching blogs by category:", error);
    }
  };

  const getLatestBlogs = async ({ page = 1 }) => {
    try {
      const res = await axiosInstance.post("/latest-blogs", { page });

      const formattedData = await filterPaginationData({
        state: blogs,
        data: res.data.blogs,
        page,
        countRoute: "/all-latest-blogs-count",
      });

      setBlogs(formattedData);
    } catch (error) {
      console.error("Error fetching latest blogs:", error);
    }
  };

  const getTrendingBlogs = async () => {
    try {
      const res = await axiosInstance.get("/trending-blogs");
      setTrendingBlogs(res.data.blogs);
    } catch (error) {
      console.error("Error fetching trending blogs:", error);
    }
  };

  const filterBlogsByCategory = (e) => {
    const category = e.target.innerText.toLowerCase();

    setBlogs(null);

    if (pageState === category) {
      setPageState("home");
      return;
    }

    setPageState(category);
  };

  useEffect(() => {
    activeTabRef.current?.click();

    if (pageState === "home") {
      getLatestBlogs({ page: 1 });
    } else {
      getBlogsByCategory({ page: 1 });
    }

    if (!trendingBlogs) {
      getTrendingBlogs();
    }
  }, [pageState]);

  return (
    <AnimationWrapper>
      <section className="h-cover flex justify-center gap-10">
        {/* latest blogs */}
        <div className="w-full">
          <InPageNavigation
            defaultHidden={["trending blogs"]}
            routes={[pageState, "trending blogs"]}
          >
            <>
              {blogs == null ? (
                <Loader />
              ) : blogs.results.length ? (
                blogs.results.map((blog, i) => {
                  return (
                    <AnimationWrapper
                      transition={{ duration: 1, delay: i * 0.1 }}
                      key={i}
                    >
                      <BlogPostCard
                        content={blog}
                        author={blog.author.personal_info}
                      />
                    </AnimationWrapper>
                  );
                })
              ) : (
                <NaMsgData message={"No blog found"} />
              )}

              {/* //! complex component  */}
              <LoadMoreDataBtn
                state={blogs}
                fetchDataFn={
                  pageState == "home" ? getLatestBlogs : getBlogsByCategory
                }
              />
              {/* //* above LoadMoreDataBtn will change the page number */}
            </>

            {trendingBlogs == null ? (
              <Loader />
            ) : trendingBlogs.length ? (
              trendingBlogs.map((blog, i) => {
                return (
                  <AnimationWrapper
                    transition={{ duration: 1, delay: i * 0.1 }}
                    key={i}
                  >
                    <MinimalBlogPost blog={blog} index={i} />
                  </AnimationWrapper>
                );
              })
            ) : (
              <NaMsgData message={"No trending blog found"} />
            )}
          </InPageNavigation>
        </div>

        {/* trending blogs and filter */}
        <div className="border-1 border-grey min-w-[40%] max-w-min pl-8 pt-3 max-md:hidden lg:min-w-[400px]">
          <div className="flex flex-col gap-10">
            <div className="">
              <h1 className="mb-8 text-xl font-medium">Your Trending Blogs</h1>
              <div className="flex flex-wrap gap-3">
                {BLOG_CATEGORY_LIST.map((category, i) => (
                  <button
                    onClick={filterBlogsByCategory}
                    className={
                      `tag ` +
                      (pageState === category ? "bg-black text-white" : "")
                    }
                    key={i}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font medium mb-8 text-xl">
                Trending <i className="fi fi-rr-arrow-trend-up"></i>
              </h1>

              {trendingBlogs == null ? (
                <Loader />
              ) : trendingBlogs.length ? (
                trendingBlogs.map((blog, i) => {
                  return (
                    <AnimationWrapper
                      transition={{ duration: 1, delay: i * 0.1 }}
                      key={i}
                    >
                      <MinimalBlogPost blog={blog} index={i} />
                    </AnimationWrapper>
                  );
                })
              ) : (
                <NaMsgData message={"No trending blog found"} />
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
}
