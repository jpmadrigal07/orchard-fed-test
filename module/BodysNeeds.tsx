"use client"
import Image from "next/image";
import Image1 from "@/assets/component-01/Image-01.jpg"
import Image2 from "@/assets/component-01/Image-02.jpg"
import Image3 from "@/assets/component-01/Image-03.jpg"
import { useState } from "react";
import ImageModal, { T_Image } from "@/components/ImageModal";

const BodysNeeds = () => {
  const [modal, setModal] = useState<{ isOpen: boolean, image: T_Image | null }>({ isOpen: false, image: null });
  return (
    <section className="lg:h-screen lg:flex lg:justify-center lg:items-center p-4 lg:p-0">
      <div className="min-h-80 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setModal({ isOpen: true, image: 'Image1' })}
            >
              <Image
                width={300}
                height={300}
                src={Image1}
                alt="Family, Walking Father and Son"
                className="block h-full w-full object-cover"
              />
            </button>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => setModal({ isOpen: true, image: 'Image2' })}
              >
                <Image
                  width={300}
                  height={300}
                  src={Image2}
                  alt="Kitchen, Vegetables, Fruits, Foods"
                  className="block h-full w-full object-cover"
                />
              </button>
              <button
                type="button"
                onClick={() => setModal({ isOpen: true, image: 'Image3' })}
              >
                <Image
                  width={300}
                  height={300}
                  src={Image3}
                  alt="Asparagus, Vegetables, Food"
                  className="block h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
          <div className="leading-8">
            <h1 className="uppercase text-2xl font-light">Answer your body&apos;s needs</h1>
            <hr className="mt-2" />
            <p className="mt-6 font-thin">The way ingredients are sourced affects the
              way we nourish our bodies. Author Mark
              Schatzer believes our body naturally devolops
              an appetite for the foods and nutrients it needs
              to be healthy, but that artificial flavourings are
              getting in the way. This can be reversed by
              focusing on high-quality ingredients and being
              mindful as your appetite guides you to
              consume according to your body&apos;s needs.</p>
            <div className="mt-8">
              <h4 className="uppercase text-fire-engine-red font-medium">Be Mindful</h4>
              <p className="mt-2 font-semibold">Sourcing local or organic food is a good way to start being more mindful about what you&apos;re cooking and eating.</p>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modal.isOpen}
        setIsOpen={() => {
          setModal({
            isOpen: false,
            image: modal.image
          })
        }}
        image={modal.image}
      />
    </section>
  )
}

export default BodysNeeds