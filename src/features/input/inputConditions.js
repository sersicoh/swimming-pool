export const InputConditions = () => {
  if (value.startsWith(laneVariable)) {
    if (tasks.filter((task) => task.content === value).length === 0) {
      dispatch(
        addTask({
          content: value,
          done: false,
          id: nanoid(),
        })
      );
    } else {
      alert("Taki tor już istnieje");
    }
  } else if (value.startsWith("<ZAW")) {
    if (tasks.filter((task) => task.content === value).length === 0) {
      dispatch(
        addTask({
          content: value,
          done: false,
          id: nanoid(),
        })
      );
    } else {
      alert("Taki zawodnik już został przypisany");
    }
  } else {
    alert("Nieprawidłowa wartość");
  }
};
