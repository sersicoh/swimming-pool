import { LaneDescription, LaneFrame } from "./lane.styles";

export const Lane = ({ children }) => {
    return (
        <LaneFrame>
            <LaneDescription>{children}</LaneDescription>
        </LaneFrame>
    );
}