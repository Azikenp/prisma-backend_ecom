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
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase);
        });
      }}
    >
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenu>
  );
};

export const DeleteDropdownItem = ({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenu
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
        });
      }}
    >
      Delete
    </DropdownMenu>
  );
};
