import { PageNotFoundItem } from "@/components";
import LayoutPageNotFound from "@/layouts/LayoutPageNotFound";

export default function PageNotFound() {
  return (
    <LayoutPageNotFound title="404 | Page Not Found">
      <PageNotFoundItem />
    </LayoutPageNotFound>
  );
}
