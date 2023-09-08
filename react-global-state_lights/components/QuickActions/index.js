import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleAction }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleAction(true);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAction(false);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
