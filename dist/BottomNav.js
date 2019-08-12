import React from 'react';

const BottomNav = ({
  nextLesson,
  current,
  lessons
}) => {
  const finalLesson = current === lessons.length - 1;
  let bottomText = '';

  if (!finalLesson) {
    bottomText = 'Siguiente lección: ' + lessons[current + 1].title;
  } else {
    bottomText = 'Felicidades Completaste el Curso!';
  }

  return React.createElement("div", {
    className: "cr-content-end"
  }, React.createElement("p", null, bottomText), !finalLesson && React.createElement("button", {
    className: "boton",
    onClick: () => nextLesson(current)
  }, "next"));
};

export default BottomNav;