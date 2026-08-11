// Props for components that accept child nodes
export type HeaderProps = {
  children: React.ReactNode;
};

export type LogoProps = {
  src: string;
  alt: string;
};

export type NavbarProps = {
  display?: string;
  children: React.ReactNode;
};

export type MainProps = {
  children: React.ReactNode;
};

export type FooterProps = {
  children: React.ReactNode;
};

export type ContainerProps = {
  padding?: string;
  bgColor?: string;
  children?: React.ReactNode;
};

export type WrapperProps = {
  padding?: string;
  bgColor?: string;
  children: React.ReactNode;
};

export type UnorderedListProps = {
  margin?: string;
  padding?: string;
  display?: string;
  gap?: string;
  children: React.ReactNode;
};

export type ListItemProps = {
  children?: React.ReactNode;
};

export type AnchorLinkProps = {
  href: string;
  children?: React.ReactNode;
  newTab?: boolean;
};

export type ButtonProps = {
  textValue: string;
  disabled?: boolean;
  count?: number;
};

export type CardProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
  children?: React.ReactNode;
};
