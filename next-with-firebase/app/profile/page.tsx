"use client";
import { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Field, Input } from "@fluentui/react-components";
import { getAuth, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "@/firebase.config";

const Profile: FC = () => {
  const validationSchema = Yup.object().shape({
    displayName: Yup.string().required("Display name required"),
    photoUrl: Yup.string()
      .required("Photo URL required")
      .matches(/^(https?:\/\/)[^\s$.?#].[^\s]*$/, "Photo URL is not valid"),
    email: Yup.string()
      .required("Email address field required")
      .email("Email address field should be valid"),
  });

  const profileForm = useFormik({
    initialValues: {
      displayName: "",
      photoUrl: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      const { currentUser } = getAuth();
      if (currentUser) {
        updateProfile(currentUser, {
          displayName: profileForm.values.displayName,
          photoURL: profileForm.values.photoUrl,
        }).then(() => {
          sendEmailVerification(currentUser);
          window.location.reload();
        })
        .catch(console.error)
      }
    },
  });

  useEffect(() => {
    onAuthStateChanged(auth, (ctx) => {
      const { displayName, email, photoURL, emailVerified } = ctx ?? {};
      profileForm.setValues({
        displayName: displayName ?? "",
        email: email ?? "",
        photoUrl: photoURL ?? "",
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-12 gap-1 pt-5">
      <div className="col-start-3 col-end-11 flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Profile Details</h1>
        <form className="w-[300px] gap-2" onSubmit={profileForm.handleSubmit}>
          <Field
            label={"Display Name"}
            validationMessage={
              profileForm.errors.displayName
                ? profileForm.errors.displayName
                : ""
            }
            validationState={profileForm.errors.displayName ? "error" : "none"}
          >
            <Input
              name="displayName"
              value={profileForm.values.displayName}
              onChange={profileForm.handleChange}
            />
          </Field>

          <Field
            label={"Photo URL"}
            validationMessage={
              profileForm.errors.photoUrl ? profileForm.errors.photoUrl : ""
            }
            validationState={profileForm.errors.photoUrl ? "error" : "none"}
          >
            <Input
              name="photoUrl"
              value={profileForm.values.photoUrl}
              onChange={profileForm.handleChange}
            />
          </Field>

          <Field
            label={"Email"}
            validationMessage={
              profileForm.errors.email ? profileForm.errors.email : ""
            }
            validationState={profileForm.errors.email ? "error" : "none"}
          >
            <Input
              name="email"
              value={profileForm.values.email}
              onChange={profileForm.handleChange}
              readOnly
            />
          </Field>

          <div className="mt-3 flex justify-center">
            <Button type="submit" appearance="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
