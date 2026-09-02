export const toHexColor = (color: string) =>
  color.startsWith("#") ? color : `#${color}`;
