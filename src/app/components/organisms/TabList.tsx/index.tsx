import { Fragment } from "react";
import Tab from "../../molecule/Tab";

const TabList = () => {
  const tabs = [
    { name: "모두", src: "/" },
    { name: "의류", src: "/search" },
    { name: "책", src: "/search/book" },
    { name: "신발", src: "/search/shoes" },
  ];
  return (
    <Fragment>
      {tabs.map((t, i) => {
        return <Tab key={t.name} name={t.name} src={t.src} />;
      })}
    </Fragment>
  );
};

export default TabList;
