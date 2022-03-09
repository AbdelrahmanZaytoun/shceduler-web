import React from "react";

import DayListItem from "../components/DayListItem";
import { action } from "@storybook/addon-actions";
import "../index.scss";

export default {
  title: "DayListItem",
  component: DayListItem,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <DayListItem {...args} />;

export const Unselected = Template.bind({});
Unselected.args = { name: "Monday", spots: 5 };
export const Selected = Template.bind({});
Selected.args = { name: "Monday", spots: 5 };
export const Full = Template.bind({});
Full.args = { name: "Monday", spots: 0 };
export const Clickable = Template.bind({});
Clickable.args = { name: "Tuesday", spots: 5, setDay: action("setDay") };
