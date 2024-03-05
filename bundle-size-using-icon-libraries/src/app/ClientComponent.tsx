"use client";
import React from "react";
import { Button } from "./Button";
import { IconImportAll } from "./IconImportAll";

function ClientComponent({}) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <>
      <Button onClick={handleClick}>
        <IconImportAll icon="AcademicCapIcon" /> With Icon
      </Button>
    </>
  );
}

export { ClientComponent };
