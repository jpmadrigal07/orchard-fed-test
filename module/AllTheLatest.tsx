"use client"
import Image from "next/image";
import Link from "next/link";

const LATEST_ARTICLE = [
  {
    imagePath: "/Image-01.jpg",
    imageAlt: "Food",
    title: "Summer lunch menu by Mark Best",
    description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    link: "/blog/summer-lunch-menu-by-mark-best"
  },
  {
    imagePath: "/Image-02.jpg",
    imageAlt: "Food",
    title: "A traditional christmas eve, Mark Best Style",
    description: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    link: "/blog/a-traditional-christmas-eve-mark-best-style"
  },
  {
    imagePath: "/Image-03.jpg",
    imageAlt: "Food",
    title: "Taking taste further",
    description: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    link: "/blog/taking-taste-further"
  },
];

const AllTheLatest = () => {
  return (
    <section className="lg:h-screen lg:flex lg:justify-center lg:items-center mt-16 lg:mt-0 p-4 lg:p-0">
      <div className="min-h-80 max-w-6xl">
        <h2 className="font-thin text-4xl uppercase text-center">All the latest from AEG</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          {LATEST_ARTICLE.map((item) => {
            return (
              <div key={item.title}>
                <div className="h-72 border-b-4 border-fire-engine-red">
                  <Image
                    width={300}
                    height={300}
                    src={item.imagePath}
                    alt={item.imageAlt}
                    className="block h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h4 className="capitalize font-semibold">{item.title}</h4>
                  <p className="mt-4 mb-6 font-thin text-sm leading-7 text-gray-400">{item.description}</p>
                  <Link href="#" onClick={() => console.log(item.link)} className="mt-10 uppercase font-semibold pb-1 border-b-2 border-fire-engine-red">Read More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default AllTheLatest