"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import blogData from "@/data/blogData.json";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  isFeatured: boolean;
  date: string;
  author: string;
}

export function BlogSectionInHomepage() {
  const featuredBlogs = blogData.blogPosts.filter(
    (blogPost: Blog) => blogPost.isFeatured,
  );
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 py-20">
          Recent Posts
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-20 justify-center items-center">
        {featuredBlogs.map((blogPost: Blog) => (
          <CardContainer key={blogPost.id} className="inter-var mx-3">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-center text-xs py-3 max-w-sm mt-2 dark:text-neutral-300"
              >
                {blogPost.date} by {blogPost.author}
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white text-center"
              >
                {blogPost.title}
              </CardItem>

              <CardItem translateZ="100" className="w-full py-6 mt-4">
                <Image
                  src={blogPost.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 py-6 text-center text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {blogPost.description}
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <Link href={blogPost.slug} className="mx-auto">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mx-auto"
                  >
                    Read Full Post
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/blog">
          <button className="p-[3px] my-7 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View All Posts
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
