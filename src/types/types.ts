export type HeaderProps = {
  children: React.ReactNode;
};

export type LogoProps = {
  src: string;
  alt: string;
  href: string;
  newTab?: boolean;
};

export type NavbarProps = {
  $color?: string;
  $display?: string;
  children: React.ReactNode;
};

export type NavbarLinkProps = {
  to: string;
  end?: boolean;
  children: React.ReactNode;
};

export type MainProps = {
  children: React.ReactNode;
};

export type CountdownProps = {
  label: string;
  targetDate: string;
};

export type ContentWrapperProps = {
  title: string;
  description: string;
  showTitle?: boolean;
  children?: React.ReactNode;
};

export type UnorderedListProps = {
  $display?: string;
  $gap?: string;
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

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type GoalData = {
  id: string;
  title: string;
  byline: string;
  description: string;
  color: string;
  icon: string;
  image_url: string;
  video_url: string;
};

export type GoalCardProps = Pick<GoalData, "id" | "title" | "color" | "icon">;

export type GoalIconProps = Pick<GoalData, "icon">;

export type GoalDetailProps = {
  goal: GoalData;
};

export type GoalNavigationProps = {
  previousGoal: GoalData | null;
  nextGoal: GoalData | null;
};
