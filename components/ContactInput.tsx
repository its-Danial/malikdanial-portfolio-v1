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
          className="text-md peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-6 py-5 text-lg text-gray-600 focus:border-blue-600 focus:outline-none focus:ring-1 dark:border-gray-600 dark:text-gray-200 dark:focus:border-brightBlue"
          placeholder={props.placeholder}
        />
      ) : (
        <textarea
          id="floating_outlined"
          name={props.name}
          rows={6}
          className="text-md peer block w-full resize-none appearance-none rounded-lg border border-gray-300 bg-transparent px-6 py-5 text-lg text-gray-600 focus:border-blue-600 focus:outline-none focus:ring-1 dark:border-gray-600 dark:text-gray-200 dark:focus:border-brightBlue"
          placeholder={props.placeholder}
        />
      )}

      <label
        htmlFor="floating_outlined"
        className="absolute top-0 left-6 z-10 origin-[0] -translate-y-1/2 scale-75 transform bg-eggshell px-1 text-xl text-gray-500 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 dark:peer-focus:text-brightBlue"
      >
        {props.label}
      </label>
    </div>
  );
};
export default ContactInput;
