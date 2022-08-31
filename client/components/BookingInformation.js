import { useState, Fragment } from "react";
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
        className="fixed inset-0 z-10 overflow-y-auto"
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
                className=" w-24 p-2 flex justify-center items-center m-auto text-xl bg-primary-orange-800 text-primary-white rounded-lg shadow-md"
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

// <div className="relative">
// <div className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/30 h-full z-50">
//   <div className=" bg-slate-200 m-4 p-4 flex flex-col shadow-lg rounded-md h-5/6">
//     <div className="flex justify-end">
//       <button
//         className=" flex justify-center text-xl font-extrabold w-10"
//         onClick={() => setShowInfo(false)}
//       >
//         X
//       </button>
//     </div>
//     <h1 className="text-2xl font-bold mb-5">Bokningsinformation</h1>
//     {BookingInformationArr.map((item) => {
//       return (
//         <div className="my-2 " key={item._id}>
//           <h3 className="mb-2 text-lg font-semibold">{item.question}</h3>
//           <p>{item.answer}</p>
//         </div>
//       );
//     })}
//     <button
//       className=" w-24 p-2 flex justify-center items-center m-auto text-xl bg-primary-orange-800 text-primary-white rounded-lg shadow-md"
//       onClick={() => setShowInfo(false)}
//     >
//       Stäng
//     </button>
//   </div>
// </div>
// </div>
