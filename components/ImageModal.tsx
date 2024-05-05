import { Dispatch, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import Image1 from "@/assets/component-01/Image-01@2x.jpg"
import Image2 from "@/assets/component-01/Image-02@2x.jpg"
import Image3 from "@/assets/component-01/Image-03@2x.jpg"

export type T_Image = 'Image1' | 'Image2' | 'Image3';

export default function ImageModal({ isOpen, setIsOpen, image }: { isOpen: boolean, setIsOpen: Dispatch<boolean>, image: T_Image | null }) {
  const IMAGES = {
    "Image1": Image1,
    "Image2": Image2,
    "Image3": Image3,
  }
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-night bg-opacity-85 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-screen h-screen">
                <div className="flex justify-end p-4">
                  <button
                    type="button"
                    className="hover:text-fire-engine-red"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="md:flex md:justify-center md:items-center md:min-h-screen md:w-full">
                  <Image
                    width={300}
                    height={300}
                    src={IMAGES[image as T_Image]}
                    alt="Family, Walking Father and Son"
                    className="block h-full w-full md:w-96 object-cover"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
