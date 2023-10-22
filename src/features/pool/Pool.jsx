import { Lane } from "../../common/lane/Lane";
import { PoolFrame, PoolLanes } from "./pool.styles";

export const Pool = () => {

    const descrition = [
        'first', 'second', 'third', 'fourth', 'fifth'
    ];

    return (
        <PoolFrame>
            <PoolLanes>
                {descrition.map((item) =>
                    <Lane key={item}>
                        {item}
                    </Lane>
                )}
            </PoolLanes>
        </PoolFrame>
    );
}