import styled from "styled-components";
import Badge from "../../atoms/Badge";

const BadgeIconButtonWrapper = styled.span<{ size: number | string }>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: -10px;
`;

type BadgeIconButton = {
  icon: React.ReactNode;
  badgeContent?: number;
  badgeBackgroundColor: string;
  size?: number | string;
};

/**
 * 배지가 달린 아이콘 버튼
 */
const BadgeIconButton = ({
  icon,
  size = "24px",
  badgeContent,
  badgeBackgroundColor,
}: BadgeIconButton) => {
  return (
    <BadgeIconButtonWrapper size={size}>
      {icon}
      {badgeContent && (
        <BadgeWrapper data-testid="badge-wrapper">
          <Badge
            content={`${badgeContent}`}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconButtonWrapper>
  );
};

export default BadgeIconButton;
