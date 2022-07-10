import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeroImage } from "../../Components/HeroImage";

export default {
  title: "Test/HeroImage",
  component: HeroImage,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HeroImage>;

const Template: ComponentStory<typeof HeroImage> = () => <HeroImage />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "HeroImage",
};
