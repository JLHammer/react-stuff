export type ThemeData = {
  id: number;
  title: string;
  slug: string;
};

export type ThemeGoalData = {
  id: number;
  title: string;
  byline: string;
  color: string;
  icon: string;
};

export type ThemeGoalDetailData = ThemeGoalData & {
  description: string;
  video_url: string;
};
