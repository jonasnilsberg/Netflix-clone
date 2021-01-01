import React from "react";
import { OptForm } from "../components";

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Title>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Title>
      <OptForm.Form>
        <OptForm.Input
          name="email"
          type="email"
          placeholder="Email address"
        ></OptForm.Input>
        <OptForm.SubmitButton>GET STARTED</OptForm.SubmitButton>
      </OptForm.Form>
    </OptForm>
  );
}
