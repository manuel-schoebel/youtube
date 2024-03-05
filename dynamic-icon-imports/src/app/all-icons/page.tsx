import { Button } from "../Button";
import { IconImportAll } from "../IconImportAll";

export default function Page() {
  console.log("render all-icons page");
  return (
    <Button>
      <IconImportAll icon="AcademicCapIcon" /> Hello All
    </Button>
  );
}
