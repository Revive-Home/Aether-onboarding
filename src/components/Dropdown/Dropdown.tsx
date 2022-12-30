import { Fragment } from "react";
import { Menu } from "@headlessui/react";

export interface DropdownProps {}

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Dropdown = ({}: DropdownProps): JSX.Element => {
  return (
    <Menu>
      <Menu.Button className="bg-white font-bold">Options</Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
