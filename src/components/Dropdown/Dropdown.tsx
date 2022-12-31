import { Fragment } from "react";
import { Menu } from "@headlessui/react";

export interface DropdownProps {
  list: Record<string, any>[];
}

const Dropdown = ({ list }: DropdownProps): JSX.Element => {
  return (
    <Menu>
      <Menu.Button className="bg-white font-bold">Options</Menu.Button>
      <Menu.Items>
        {list.map((item) => (
          <Menu.Item key={item.href} as={Fragment}>
            {({ active }) => (
              <a
                href={item.href}
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {item.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
