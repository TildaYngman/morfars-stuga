import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function BookingInformationComponent({
  temp,
  closeModal,
  isOpenInfo,
}) {
  const BookingInformationArr = [];

  temp.forEach((item) => {
    if (item.category === "Bokningsinformation")
      BookingInformationArr.push(item);
  });

  return (
    <Transition appear show={isOpenInfo} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto bg-black-opacity-400 h-full w-full"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          {/* This makes it close when clicking outside of the Modal */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {/* This makes adds transition when open/close*/}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-end">
                <button
                  className=" flex justify-center text-xl font-extrabold w-10"
                  onClick={() => closeModal()}
                >
                  X
                </button>
              </div>
              <h1 className="text-2xl font-bold mb-5">Bokningsinformation</h1>
              {BookingInformationArr.map((item) => {
                return (
                  <div className="my-2 " key={item._id}>
                    <h3 className="mb-2 text-lg font-semibold">
                      {item.question}
                    </h3>
                    <p>{item.answer}</p>
                  </div>
                );
              })}
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => closeModal()}
              >
                Stäng
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
