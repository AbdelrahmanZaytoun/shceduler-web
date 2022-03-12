import React from "react";

import InterviewerListItem from "../components/InterviewerListItem";
import { action } from "@storybook/addon-actions";
import "../index.scss";

export default {
  title: "InterviewerListItem",
  component: InterviewerListItem,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <InterviewerListItem {...args} />;

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png",
};

export const Unselected = Template.bind({});
Unselected.args = {
  id: interviewer.id,
  name: interviewer.name,
  avatar: interviewer.avatar,
};
export const Selected = Template.bind({});
Selected.args = {
  id: interviewer.id,
  name: interviewer.name,
  avatar: interviewer.avatar,
  selected: true,
};
export const Clickable = () => (
  <InterviewerListItem
    id={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    setInterviewer={(event) => action("setInterviewer")(interviewer.id)}
  />
);
