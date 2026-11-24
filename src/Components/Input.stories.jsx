import { fn } from "storybook/test";
import { Search, User } from "lucide-react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "number", "tel", "email", "search"],
    },
    value: { control: "text" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    leadingIcon: { control: false },
    trailing: { control: false },
    onChange: { control: false },
  },
  args: {
    label: "Username",
    placeholder: "Enter your username",
    onChange: fn(),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};

export const WithLeadingIcon = {
  args: {
    label: "Search",
    placeholder: "Search by name",
    leadingIcon: Search,
  },
};

export const WithValue = {
  args: {
    label: "Full Name",
    value: "John Doe",
  },
};

export const Password = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helperText: "Use at least 8 characters",
  },
};

export const WithHelperText = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "name@example.com",
    helperText: "We'll only use this for account updates",
    leadingIcon: User,
  },
};

export const Error = {
  args: {
    label: "Username",
    value: "john",
    error: "This username is already taken",
  },
};

export const Disabled = {
  args: {
    label: "Username",
    value: "John",
    disabled: true,
    helperText: "This field cannot be edited",
  },
};

export const ReadOnly = {
  args: {
    label: "Account ID",
    value: "USR-1024",
    readOnly: true,
  },
};
