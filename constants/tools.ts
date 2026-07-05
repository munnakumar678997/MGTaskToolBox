export type Tool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  route: string;
  category: ToolCategory;
};

export type ToolCategory =
  | 'Calculator'
  | 'Converter'
  | 'Text'
  | 'Generator'
  | 'Utility';

export const ALL_TOOLS: Tool[] = [
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Simple aur scientific calculator',
    icon: '🧮',
    route: '/tools/calculator',
    category: 'Calculator',
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Length, weight, temperature convert karo',
    icon: '📐',
    route: '/tools/unit-converter',
    category: 'Converter',
  },
  {
    id: 'text-tools',
    name: 'Text Tools',
    description: 'Text uppercase, lowercase, word count',
    icon: '✍️',
    route: '/tools/text-tools',
    category: 'Text',
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Strong password banao',
    icon: '🔐',
    route: '/tools/password-generator',
    category: 'Generator',
  },
];

export const CATEGORIES: ToolCategory[] = [
  'Calculator',
  'Converter',
  'Text',
  'Generator',
  'Utility',
];
