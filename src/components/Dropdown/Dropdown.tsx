import { Fragment } from "react";
import { Menu } from "@headlessui/react";

export interface DropdownProps {
  className?: string;
  list: Record<string, any>[];
}

export const Dropdown = ({ className, list }: DropdownProps): JSX.Element => {
  const classes = `${className} h-full font-bold border-2 border-green rounded-lg px-8 py-3 transition-all ease-in-out text-green bg-white hover:text-greenDark hover:border-greenDark`;

  return (
    <Menu>
      <Menu.Button
        className={classes}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        Options
      </Menu.Button>
      <Menu.Items className="py-1 w-56">
        {list.map((item, i) => (
          <Menu.Item key={item.href} as={Fragment}>
            {({ active }) => (
              <a
                href={item.href}
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                } block px-4 py-2 text-sm`}
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${i}`}
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
