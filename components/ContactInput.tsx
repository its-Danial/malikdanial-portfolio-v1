import { FC } from "react";

type ContactInputProps = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
};

const ContactInput: FC<ContactInputProps> = (props) => {
  return (
    <div className="relative">
      {props.type === "text" ? (
        <input
          type="text"
          id="floating_outlined"
          name={props.name}
          className="block px-6 py-5 text-lg w-full text-md text-gray-600 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-brightBlue focus:outline-none focus:ring-1 focus:border-blue-600 peer"
          placeholder={props.placeholder}
        />
      ) : (
        <textarea
          id="floating_outlined"
          name={props.name}
          rows={6}
          className="block resize-none px-6 py-5 text-lg w-full text-md text-gray-600 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-gray-200 dark:border-gray-600 dark:focus:border-brightBlue focus:outline-none focus:ring-1 focus:border-blue-600 peer"
          placeholder={props.placeholder}
        />
      )}

      <label
        htmlFor="floating_outlined"
        className="absolute text-xl text-gray-500 dark:text-gray-400 transform scale-75 top-0 z-10 origin-[0] bg-eggshell dark:bg-gray-900 px-1 peer-focus:text-blue-600 dark:peer-focus:text-brightBlue -translate-y-1/2 left-6"
      >
        {props.label}
      </label>
    </div>
  );
};
export default ContactInput;
