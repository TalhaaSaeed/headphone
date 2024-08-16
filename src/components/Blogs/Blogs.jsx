import { UpdateFollower } from "react-mouse-follower";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";

const BlogsData = [
  {
    id: 1,
    title: "How To Choose The Best Headphones",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita cum fugiat velit similique nobis?",
    link: "#",
    image: Blogs1,
  },
  {
    id: 2,
    title: "The Best Headphones Of 2021",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita cum fugiat velit similique nobis?",
    link: "#",
    image: Blogs2,
  },
  {
    id: 3,
    title: "The Best Headphones Under $100",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita cum fugiat velit similique nobis?",
    link: "#",
    image: Blogs3,
  },
  {
    id: 4,
    title: "The Best Headphones For Gaming",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita cum fugiat velit similique nobis?",
    link: "#",
    image: Blogs4,
  },
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container p-14">
          <h1 className="text-3xl font-bold text-center font-poppins p-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => {
              return (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "Read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                  key={data.id}
                >
                  <div className="flex flex-col items-center gap-6 justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300">
                    <img src={data.image} alt={data.title} className="" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2">{data.desc}</p>
                      <a
                        href={data.link}
                        className="text-blue-500 hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
