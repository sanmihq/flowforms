import {
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
} from "@heroui/react";
import { Eye } from "lucide-react";
import { IconWrapper } from "../shared/IconWrapper";

interface DashboardHeaderActionsProps {
  isMenuOpen: boolean;
  isLoaded: boolean;
}

export default function DashboardHeaderActions({
  isMenuOpen,
  isLoaded,
}: DashboardHeaderActionsProps) {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Button size="sm" isIconOnly variant="bordered" className="md:hidden">
          <IconWrapper icon={Eye} />
        </Button>
        <Button
          variant="bordered"
          className="hidden md:inline-flex"
          startContent={<IconWrapper icon={Eye} />}
        >
          Preview
        </Button>
      </NavbarItem>
      <NavbarItem>
        <Button color="primary" size="sm" className="md:hidden">
          Publish
        </Button>
        <Button color="primary" className="hidden md:inline-flex">
          Publish
        </Button>
      </NavbarItem>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
    </NavbarContent>
  );
}
