import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { toggleProductAvailability } from "../../_components/_actions/products";

export const ActiveToggleDropdownItem = ({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenu
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase);
        });
      }}
    ></DropdownMenu>
  );
};

export const DeleteDropdownItem = () => {
  return <div>ActiveToggleDropdownItem</div>;
};
