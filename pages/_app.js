import React, { createRef } from "react";
import App from "next/app";

import HomeLayout from "../components/HomeLayout";

import "../styles/index.scss";

class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
    };

    this.cursor = createRef();
    this.cursorAlt = createRef();
    this.cursorTrailing = createRef();
    this.cursorTrailing2 = createRef();

    this.animationFrame = null;
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
    this.moveCursor();
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    cancelAnimationFrame(this.animationFrame);
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    this.setState({
      mouseX: clientX,
      mouseY: clientY,
    });
  };

  moveCursor = () => {
    const { mouseX, mouseY, trailingX, trailingY } = this.state;
    const diffX = mouseX - trailingX;
    const diffY = mouseY - trailingY;

    this.setState(
      {
        trailingX: trailingX + diffX / 10,
        trailingY: trailingY + diffY / 10,
      },
      () => {
        this.cursor.current.style.transform = `translate3d(
            calc(-50% + ${mouseX}px), 
            calc(-50% + ${mouseY}px), 
            0)`;
        this.cursorAlt.current.style.transform = `translate3d(
            calc(-50% + ${mouseX}px), 
            calc(-50% + ${mouseY}px), 
            0)`;
        this.cursorTrailing.current.style.transform = `translate3d(
            calc(-50% + ${trailingX}px), 
            calc(-50% + ${trailingY}px), 
            0)`;
        this.cursorTrailing2.current.style.transform = `translate3d(
            calc(-50% + ${trailingX}px), 
            calc(-50% + ${trailingY}px), 
            0)`;
        this.animationFrame = requestAnimationFrame(this.moveCursor);
      }
    );
  };
  render() {
    // we retrieve coordinates from state
    const { Component, pageProps, router } = this.props;
    return (
      <div onMouseMove={(e) => this.handleMouseMove(e)} className="app">
        <HomeLayout>
          <Component {...pageProps} key={router.route} />
        </HomeLayout>

        <div className="cursor" ref={this.cursor}>
            <div className="cursor--inner"></div>
        </div>
        <div className="cursor cursor__alt" ref={this.cursorAlt}></div>
        <div className="cursor-2" ref={this.cursorTrailing}></div>
        <div className="cursor-3" ref={this.cursorTrailing2}></div>
      </div>
    );
  }
}

export default MyApp;
