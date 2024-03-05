import React from "react";

import { AcademicCapIcon } from "@heroicons/react/24/solid";

export interface IIconImportSingle {}

function IconImportSingle({}: IIconImportSingle) {
  const Comp = AcademicCapIcon;
  return <Comp className="h-6 w-6" />;
}

export { IconImportSingle };
