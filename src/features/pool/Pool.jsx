import { useDispatch, useSelector } from "react-redux";
import { Lane } from "../../common/lane/Lane";
import { PoolFrame, PoolLanes } from "./pool.styles";
import { removeTask, selectTaskByQuery } from "../../services/tasksSlice";

export const Pool = () => {

    const swimmer = undefined;
    const tasks = useSelector(state => selectTaskByQuery(state));

    const dispatch = useDispatch();

    return (
        <PoolFrame>
            <PoolLanes>
                {tasks.map((task) =>
                    <Lane key={task.content} index={task.content} onClick={() => dispatch(removeTask(task.id))}>
                        {swimmer ? swimmer : null}
                    </Lane>
                )}
            </PoolLanes>
        </PoolFrame>
    );
}