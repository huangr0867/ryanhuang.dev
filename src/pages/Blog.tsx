import { useTheme } from "../components/ThemeContext";
import BlogsIntro from "../components/blogsPage/BlogsIntro";
// import Template from "../components/blogsPage/blogs/Template";
import BlogBox from "../components/blogsPage/blogs/BlogBox";

function Blog() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <div className="column">
        <BlogsIntro />
        Currently in-progress...
        <BlogBox
          title="Brown Oscar Documentation"
          description="Scripts/Commands for OSCAR"
          date="June 19, 2024"
          tags={["#Computing"]}
          link="oscar"
        />
        <BlogBox title="In Progress" description="" date="" tags={[]} link="" />
        <BlogBox title="In Progress" description="" date="" tags={[]} link="" />
        <BlogBox title="In Progress" description="" date="" tags={[]} link="" />
        <BlogBox title="In Progress" description="" date="" tags={[]} link="" />
        <BlogBox title="In Progress" description="" date="" tags={[]} link="" />
        <BlogBox title="In Progress" description="" date="" tags={[]} link="" />
        {/* <Template /> */}
      </div>
    </div>
  );
}

export default Blog;
