import { NavbarContent, Tabs, Tab } from "@heroui/react";
import { JSX } from "react";

interface TabItem {
  key: string;
  title: string;
  icon: JSX.Element;
}

export default function DashboardDesktopTabs({ tabs }: { tabs: TabItem[] }) {
  return (
    <NavbarContent className="hidden gap-4 md:flex" justify="center">
      <Tabs aria-label="Dashboard options">
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            title={
              <div className="flex items-center gap-2">
                {tab.icon}
                <span>{tab.title}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </NavbarContent>
  );
}
