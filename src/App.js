import "./styles.css";
import { BottomSheet } from "@cred/neopop-web/lib/components";
import { useState } from "react";

export default function App() {
  const [isOpen, setOpen] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(true)} type="button">
        Save
      </button>
      <BottomSheet open={isOpen} handleClose={handleClose}>
        <div className="padding">
          <p className="py-1 text-gray-500">
            Where should we send the discount code to.
          </p>
          <input
            placeholder="example@email.com"
            type="email"
            className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-2xl focus:outline-none text-md"
          />
          <button className="w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-2xl bg-yellow-600 text-white outline-none focus:outline-none">
            GET DISCOUNT
          </button>

          <div className="flex">
            <input
              placeholder="example@email.com"
              type="email"
              className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-2xl focus:outline-none text-md"
            />
            <button className="w-15 ml-1 mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-2xl bg-yellow-600 text-white outline-none focus:outline-none">
              GET
            </button>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}
