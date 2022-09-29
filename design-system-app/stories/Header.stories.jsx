import React from "react";

import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Header {...args} />;

export const Connected = Template.bind({});
Connected.args = {
  user: {
    address: "0x123",
  },
};

export const UnConnected = Template.bind({});
UnConnected.args = {};
