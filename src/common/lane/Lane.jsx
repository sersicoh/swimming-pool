
import { Button, ButtonContainer, LaneDescription, LaneFrame, LaneTitle } from "./lane.styles";

export const Lane = ({ index, children, onClick }) => {

    return (
        <LaneFrame>
            <LaneTitle>{`${index}:`}</LaneTitle>
            <LaneDescription>{children}</LaneDescription>
            <ButtonContainer>
                <Button
                    remove
                    onClick={onClick}>
                    🗑
                </Button>
            </ButtonContainer>
        </LaneFrame>
    );
}