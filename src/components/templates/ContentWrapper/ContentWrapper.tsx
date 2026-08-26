import { useEffect, useRef } from "react";
import type { ContentWrapperProps } from "./ContentWrapper.types";
import { GoalIcon } from "../../atoms/GoalIcon/GoalIcon";
import {
  ContentWrapperTitleBar,
  ContentWrapperTitleBarInner,
  ContentWrapperIcon,
  ContentWrapperTitle,
  ContentWrapperContent,
} from "./ContentWrapper.styled";

export const ContentWrapper = ({
  title,
  description,
  color,
  icon,
  children,
}: ContentWrapperProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description);
    titleRef.current?.focus();
  }, [title, description]);

  return (
    <>
      <ContentWrapperTitleBar $color={color}>
        <ContentWrapperTitleBarInner>
          {icon && (
            <ContentWrapperIcon aria-hidden="true">
              <GoalIcon icon={icon} />
            </ContentWrapperIcon>
          )}
          <ContentWrapperTitle ref={titleRef} tabIndex={-1}>
            {title}
          </ContentWrapperTitle>
        </ContentWrapperTitleBarInner>
      </ContentWrapperTitleBar>
      <ContentWrapperContent>{children}</ContentWrapperContent>
    </>
  );
};
