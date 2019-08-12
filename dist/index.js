import React from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import './index.css';

const Test = () => React.createElement("div", null, "Test Correcto!!");

class ClassRoom extends React.Component {
  constructor(props) {
    super(props);
    this.lessons = this.props.lessons;
    this.state = {
      currentLesson: 0,
      lessons: this.lessons
    };
    this.nextLesson = this.nextLesson.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  nextLesson(currentIndex) {
    let {
      lessons
    } = this.state;
    lessons[currentIndex].comp = true;
    this.setState({
      currentLesson: currentIndex + 1,
      lessons
    });
  }

  navigate(lesson) {
    if (!lesson === typeof Number) {
      console.log('Error la leccion debe de ser de tipo Number pero es ' + typeof lesson);
      return;
    } //cambia la lession a la que se selecciona


    this.setState({
      currentLesson: lesson
    });
  }

  render() {
    console.log('classroom state', this.state);
    const {
      lessons,
      currentLesson
    } = this.state;
    const {
      navigate,
      nextLesson
    } = this;
    const View = lessons[currentLesson].view;
    return React.createElement("div", {
      className: "clas-room"
    }, React.createElement(Navbar, {
      lessons: lessons,
      navigate: navigate
    }), React.createElement("div", {
      className: "cr-content"
    }, React.createElement(View, null), React.createElement(BottomNav, {
      lessons: lessons,
      nextLesson: nextLesson,
      current: currentLesson
    })));
  }

}

;
export default ClassRoom;
export { Test };