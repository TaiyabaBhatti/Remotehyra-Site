import React, { useEffect, useState } from "react";
import { blogPost } from "../../../data/blogPostData";
import { useParams } from "react-router-dom";
import HeroContainer from "../../Common/HeroContainer";
import PageTag from "../../Common/PageTag";
import BlogHeroContainer from "./BlogHeroContainer";
import Wrapper from "../../../components/ui/Wrapper";
import BlogContent from "./BlogContent";

export default function BlogDetailedPage() {
  const { blogid } = useParams();
  const [pageData, setPageData] = useState();

  useEffect(() => {
    setPageData(blogPost.find((blog, index) => blog.id === blogid));
  }, [blogid]);

  return (
    <>
      {pageData && (
        <>
          <BlogHeroContainer
            title={pageData.title}
            date={pageData.date}
            tag={pageData.tag}
            writer={pageData.data.writer}
          />

          <section>
            <Wrapper>
              <article className="space-y-10 shadow-gray-300 rounded-md overflow-y-hidden shadow-2xl p-8">
                <BlogContent />
              </article>
            </Wrapper>
          </section>
        </>
      )}
    </>
  );
}
