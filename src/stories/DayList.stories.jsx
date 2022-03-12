import React from "react";

import DayList from "../components/DayList";
import { action } from "@storybook/addon-actions";
import "../index.scss";

export default {
  title: "DayList",
  component: DayList,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <DayList setDay={action("setDay")} {...args} />;

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

export const Monday = Template.bind({});
Monday.args = { day: "Monday", days };
export const Tuesday = Template.bind({});
Tuesday.args = { day: "Tuesday", days };
