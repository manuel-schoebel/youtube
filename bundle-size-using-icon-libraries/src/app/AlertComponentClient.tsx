"use client";
import React, { ReactElement } from "react";
import { Button } from "./Button";

export interface IAlertComponentClient {
  text: string;
  ctaText: string;
  ctaIcon: ReactElement;
}

function AlertComponentClient({
  ctaIcon,
  text,
  ctaText,
}: IAlertComponentClient) {
  function handleClick() {
    alert(text);
  }

  return (
    <>
      <Button onClick={handleClick}>
        {ctaIcon} {ctaText}
      </Button>
    </>
  );
}

export { AlertComponentClient };
