import React, { FC, useEffect, useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import ContactCard from "./ContactCard";
import ContactInput from "./ContactInput";
import Alert from "./Alert";

type ContactProps = {};

const Contact: FC<ContactProps> = (props) => {
  const [isSending, setIsSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");

  const contactFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSending(true);

    const contactData = {
      // @ts-ignore
      user_name: event.target.user_name.value,
      // @ts-ignore
      user_email: event.target.user_email.value,
      // @ts-ignore
      message: event.target.message.value,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    }).then((res) => {
      console.log("Response received");
      setIsSending(false);
      if (res.status === 200) {
        console.log("Response succeeded!");
        setShowAlert(true);
        setAlertType("success");
      } else {
        setShowAlert(true);
        setAlertType("error");
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <div id="contact" className="w-full min-h-screen h-full relative z-40 mt-12 sm:mt-5">
      <div className="p-6 md:px-24 md:py-14 space-y-10">
        <h2 className=" font-mono text-center mx-auto text-2xl text-blue-800 dark:text-brightBlue">
          05. <span className="text-gray-700 dark:text-slate-200">What&apos;s next?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Note: Cards */}
          {/* <div className="flex flex-col mt-6 w-full md:w-[28%]">
            <h3 className="text-center text-lg mb-6 dark:text-brightBlue">Contact me on</h3>
            <div className="flex flex-col space-y-4">
              <ContactCard
                icon={<BiMailSend size={40} className="dark:text-gray-400" />}
                appName="Email"
                detail="itsmalikdanial@gmail.com"
                link="mailto:itsmalikdanial@gmail.com"
              />
              <ContactCard
                icon={<BsWhatsapp size={40} className="dark:text-gray-400" />}
                appName="WhatsApp"
                detail="+8618240333193"
                link="https://wa.me/8618240333193"
              />
              <ContactCard
                icon={<BsMessenger size={40} className="dark:text-gray-400" />}
                appName="Messenger"
                detail="m.me/danial.azhar"
                link="https://m.me/danial.azhar/"
              />
            </div>
          </div> */}
          {/* Note: Text */}
          <div className="flex flex-col mt-6 w-full md:w-[40%]">
            <h3 className="text-center text-lg mb-6 dark:text-brightBlue">Write to me</h3>
            <form onSubmit={contactFormSubmitHandler} className="flex flex-col space-y-14">
              <ContactInput type="text" label="Name" name="user_name" placeholder="Enter your name" />
              <ContactInput type="text" label="Email" name="user_email" placeholder="Enter your email" />
              <ContactInput type="textarea" label="Message" name="message" placeholder="Enter your message" />
              <div className="w-full flex justify-center">
                <button
                  disabled={isSending}
                  type="submit"
                  value="Send"
                  className={`md:w-1/2 flex flex-row gap-3 items-center justify-center px-4 py-2.5 text-base rounded-md border-2 border-blue-600 dark:border-brightBlue font-mono text-blue-600 dark:text-brightBlue/90 dark:hover:bg-brightBlue/20 hover:bg-blue-600/10 ${
                    isSending && "opacity-50"
                  }`}
                >
                  Send message
                  {!isSending ? (
                    <FiSend size={23} className="" />
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-[23px] h-[23px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 dark:fill-brightBlue"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Note: Alert */}
      {showAlert && <Alert type={alertType} />}
    </div>
  );
};
export default Contact;
