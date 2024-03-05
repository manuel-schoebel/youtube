"use client";
import { Button } from "./Button";
import { IIconNames, IconImportAll } from "./IconImportAll";

export interface IModalButtonBlockClient {
  text: string;
  ctaText: string;
  ctaIcon: IIconNames;
}

export function AlertComponent({
  ctaIcon,
  text,
  ctaText,
}: IModalButtonBlockClient) {
  function handleClick() {
    alert(text);
  }

  return (
    <>
      <Button onClick={handleClick}>
        <IconImportAll icon={ctaIcon} /> {ctaText}
      </Button>
    </>
  );
}
