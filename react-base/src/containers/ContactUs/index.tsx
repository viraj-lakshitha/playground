import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "Viraj Lakshitha",
  email: "viraj@me.com",
  message:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  domain: "",
  isSubscribed: false,
};

const ContactUs: FC = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string()
          .min(50, "Must be 50 characters or greater")
          .max(250, "Must be 250 characters or less")
          .required("Required"),
        domain: Yup.string().required("Required"),
        isSubscribe: Yup.bool(),
      }),
      onSubmit: (values) => {
        setTimeout(() => console.log(values), 5000);
      },
      validateOnChange: false, // Remove onChange validations
    });

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex flex-col items-center justify-center">
      <div
        id="contact-us-container"
        className="bg-white rounded-lg p-8 w-[500px]"
      >
        <h1 className="font-semibold text-3xl text-center">Contact Us</h1>
        <p className="text-xs text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border text-sm border-gray-400 px-1 py-2 rounded-md"
              placeholder="Viraj Lakshitha"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <label className="text-xs text-red-500">{errors.name}</label>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text" // formik will take care of errors
              onChange={handleChange}
              value={values.email}
              className="border text-sm border-gray-400 px-1 py-2 rounded-md"
              placeholder="reachoutviraj@gmail.com"
            />
            {errors.email && (
              <label className="text-xs text-red-500">{errors.email}</label>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="domain" className="text-sm">
              Domain
            </label>
            <select
              id="domain"
              name="domain"
              onChange={handleChange}
              value={values.domain}
              className="border text-sm border-gray-400 px-1 py-2 rounded-md"
            >
              <option>Engineering</option>
              <option>Computer Software</option>
              <option>Data Science</option>
              <option>Business Intelligence</option>
            </select>
            {errors.domain && (
              <label className="text-xs text-red-500">{errors.domain}</label>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              className="border text-sm border-gray-400 px-1 py-2 rounded-md"
              placeholder="Hello! Good to see you"
            />
            {errors.message && (
              <label className="text-xs text-red-500">{errors.message}</label>
            )}
          </div>
          <div className="flex gap-1">
            <input
              id="isSubscribe"
              type="checkbox"
              className="border text-sm border-gray-400 px-1 py-2 rounded-md"
              name="isSubscribe"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="isSubscribe" className="text-sm">
              Subscribe to weekly news letters
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 py-3 min-w-full text-white rounded-md"
          >
            {isSubmitting ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
