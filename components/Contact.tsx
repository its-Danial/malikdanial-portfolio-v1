import { FC } from "react";
import { BiMailSend } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";

import ContactCard from "./ContactCard";
import ContactInput from "./ContactInput";

type ContactProps = {};

const Contact: FC<ContactProps> = (props) => {
  return (
    <div id="contact" className="w-full min-h-screen h-full relative z-40 mt-12 sm:mt-5">
      <div className="p-6 md:px-24 md:py-14 space-y-10">
        <h2 className=" font-mono text-center mx-auto text-2xl text-blue-800 dark:text-brightBlue">
          05. <span className="text-gray-700 dark:text-slate-200">What&apos;s next?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Note: Cards */}
          <div className="flex flex-col mt-6 w-full md:w-[28%]">
            <h3 className="text-center text-lg mb-6 dark:text-brightBlue">Contact me on</h3>
            <div className="flex flex-col space-y-4">
              <ContactCard
                icon={<BiMailSend size={40} className="dark:text-gray-400" />}
                appName="Email"
                detail="itsmalikdanial@gmail.com"
              />
              <ContactCard
                icon={<BsWhatsapp size={40} className="dark:text-gray-400" />}
                appName="WhatsApp"
                detail="+8618240333193"
              />
              <ContactCard
                icon={<BsMessenger size={40} className="dark:text-gray-400" />}
                appName="Messenger"
                detail="user.fb/1231"
              />
            </div>
          </div>
          {/* Note: Text */}
          <div className="flex flex-col mt-6 w-full md:w-[40%]">
            <h3 className="text-center text-lg mb-6 dark:text-brightBlue">Write to me</h3>
            <div className="flex flex-col space-y-14">
              <ContactInput type="text" label="Name" placeholder="Enter your name" />
              <ContactInput type="text" label="Email" placeholder="Enter your email" />
              <ContactInput type="textarea" label="Message" placeholder="Enter your message" />
              <button className="md:w-1/2 flex flex-row items-center justify-center px-4 py-2.5 text-base rounded-md border-2  border-blue-600 dark:border-brightBlue font-mono text-blue-600 dark:text-brightBlue/90 dark:hover:bg-brightBlue/20 hover:bg-blue-600/10">
                Send message
                <FiSend size={23} className="ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
