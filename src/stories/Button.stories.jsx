import React from "react";

import Button from "../components/Button";
import { action } from "@storybook/addon-actions";
import "../index.scss";

export default {
  title: "Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Base = Template.bind({});
Base.args = { text: "Base" };
export const Confirm = Template.bind({});
Confirm.args = { confirm: true, text: "Confirm" };
export const Danger = Template.bind({});
Danger.args = { danger: true, text: "Cancel" };
export const Clickable = Template.bind({});
Clickable.args = { onClick: action("button-clicked"), text: "Clickable" };
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  onClick: action("button-clicked"),
  text: "Disabled",
};
