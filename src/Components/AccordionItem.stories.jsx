import { AccordionItem } from './AccordionItem';

const meta = {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;

// Default / Collapsed State Story
export const Default = {
  args: {
    title: 'What is a Design Engineer?',
    content: 'A Design Engineer sits at the intersection of UX/UI design and software engineering, translating design intent into high-performance interactive code.',
  },
};

// Custom Content Story
export const CustomContent = {
  args: {
    title: 'Why use Tailwind CSS with Storybook?',
    content: 'Tailwind maps Figma Auto-Layout parameters directly to utility classes, making component documentation precise and clean.',
  },
};