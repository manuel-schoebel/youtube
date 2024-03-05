import React from "react";
import { IIconNames, IconImportAll } from "./IconImportAll";
import { AlertComponentClient } from "./AlertComponentClient";

export interface IAlertComponentServer {
  text: string;
  ctaText: string;
  ctaIcon: IIconNames;
}

function AlertComponentServer({ ctaIcon }: IAlertComponentServer) {
  return (
    <>
      <AlertComponentClient
        ctaIcon={<IconImportAll icon={ctaIcon} />}
        ctaText="Click me!"
        text="Some alert text"
      />
    </>
  );
}

export { AlertComponentServer };
