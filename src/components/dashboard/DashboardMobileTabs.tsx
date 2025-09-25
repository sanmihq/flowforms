import { Tabs, Tab } from "@heroui/react";
import { JSX } from "react";

interface TabItem {
  key: string;
  title: string;
  icon: JSX.Element;
}

export default function DashboardMobileTabs({ tabs }: { tabs: TabItem[] }) {
  return (
    <div className="w-full border-b border-gray-200 bg-white md:hidden">
      <div className="mx-auto w-full max-w-lg p-2">
        <Tabs
          size="sm"
          aria-label="Dashboard options"
          className="flex justify-around"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.key}
              title={
                <div className="flex items-center gap-1">
                  {tab.icon}
                  <span>{tab.title}</span>
                </div>
              }
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
