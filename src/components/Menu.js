import React from "react";
import { Collapse } from "antd-mobile";

function Menu() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Collapse.Panel key="1" title="OUR SIGNATURE DISH">
        <h1>1</h1>
      </Collapse.Panel>
      <Collapse.Panel key="2" title="Biriyani">
        <h1>2</h1>
      </Collapse.Panel>
      <Collapse.Panel key="3" title="CHINESE STARTER (VEG)">
        <h1>3</h1>
      </Collapse.Panel>
      <Collapse.Panel key="4" title="CHINESE STARTER  (NON-VEG )">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="5" title="CHINESE STARTER (FISH) ">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="6" title="CHINESE MAIN-COURSE (veg)">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="7" title="CHINESE RICE">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="4" title="Semester-4">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="4" title="Semester-4">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="4" title="Semester-4">
        <h1>4</h1>
      </Collapse.Panel>
      <Collapse.Panel key="4" title="Semester-4">
        <h1>4</h1>
      </Collapse.Panel>
    </Collapse>
  );
}

export default Menu;
