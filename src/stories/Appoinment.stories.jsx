import React, { Fragment } from "react";

import Appointment from "../components/Appointment";
import Header from "../components/Appointment/Header";
import Empty from "../components/Appointment/Empty";
import Show from "../components/Appointment/Show";
import Confirm from "../components/Appointment/Confirm";
import Status from "../components/Appointment/Status";
import Error from "../components/Appointment/Error";
import Create from "../components/Appointment/Form";
import Edit from "../components/Appointment/Form";
import { action } from "@storybook/addon-actions";
import "../index.scss";

export default {
  title: "Appointment",
  component: Appointment,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <Appointment {...args} />;

export const Default = Template.bind({});
export const Appointment_With_Time = Template.bind({});
Appointment_With_Time.args = { time: "12pm" };
export const Header_ = () => <Header time="12pm" />;

export const Empty_ = () => <Empty onAdd={action("onAdd")} />;

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png",
};

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
];

export const Show_ = () => (
  <Show
    nt="Lydia Miller-Jones"
    interviewer={interviewer}
    onEdit={action("onEdit")}
    onDelete={action("onDelete")}
  />
);

export const Confirm_ = () => (
  <Confirm
    message="Delete the appointment?"
    onConfirm={action("onConfirm")}
    onCancel={action("onCancel")}
  />
);

export const Status_Delete = () => <Status message="Deleting" />;

export const Status_Save = () => <Status message="Saving" />;

export const Error_ = () => (
  <Error message="Could not delete appointment" onClose={action("onClose")} />
);

export const Form_Edit = () => (
  <Edit
    name="Caitlin Ing"
    interviewers={interviewers}
    interviewer={2}
    onSave={action("onSave")}
    onCancel={action("onCancel")}
  />
);

export const Form_Create = () => (
  <Create
    interviewers={interviewers}
    onSave={action("onSave")}
    onCancel={action("onCancel")}
  />
);

export const Appointment_Empty = () => (
  <Fragment>
    <Appointment id={1} time="12pm" />
    <Appointment id="last" time="1pm" />
  </Fragment>
);

export const Appointment_Booked = () => (
  <Fragment>
    <Appointment
      id={1}
      time="12pm"
      interview={{ student: "Lydia Miller-Jones", interviewer }}
    />
    <Appointment id="last" time="1pm" />
  </Fragment>
);
