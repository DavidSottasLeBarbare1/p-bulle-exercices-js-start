/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  //Attributes
  width; //Window's size
  height; //Window's width

  //Custom constructor
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  //Attributes
  x; //Window's x position
  y; //Window's y position

  //Custom constructor
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  //Attributes
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();

  resize(givenSize) {
    //If height or width is lower than one, set it to one
    if (givenSize.height < 1) {
      givenSize.height = 1;
    }

    if (givenSize.width < 1) {
      givenSize.width = 1;
    }

    //If the x position + the width is higher than the screen width, changing the width to the right size
    if (this.position.x + givenSize.width > this.screenSize.width) {
      givenSize.width = this.screenSize.width - this.position.x;
    }

    //If the y position + the height is higher than the screen height, changing the height to the right size
    if (this.position.y + givenSize.height > this.screenSize.height) {
      givenSize.height = this.screenSize.height - this.position.y;
    }

    //Resizing to the correct size
    this.size.resize(givenSize.width, givenSize.height);
  }

  move(givenPosition) {
    //If x or y is lower than zero, set it to zero
    if (givenPosition.x < 0) {
      givenPosition.x = 0;
    }

    if (givenPosition.y < 0) {
      givenPosition.y = 0;
    }

    //If the x position + the width is higher than the screen width, changing the width position to the right coords
    if (givenPosition.x + this.size.width > this.screenSize.width) {
      givenPosition.x = this.screenSize.width - this.size.width;
    }

    //If the y position + the height is higher than the screen height, changing the height position to the right coords
    if (givenPosition.y + this.size.height > this.screenSize.height) {
      givenPosition.y = this.screenSize.height - this.size.height;
    }

    //Moving to the correct location
    this.position.move(givenPosition.x, givenPosition.y);
  }
}

export function changeWindow(givenProgramWindow) {
  //Changing the window's attributes to the correct size / position
  givenProgramWindow.size.width = 400;
  givenProgramWindow.size.height = 300;
  givenProgramWindow.position.x = 100;
  givenProgramWindow.position.y = 150;

  //Returning the ProgramWindow
  return givenProgramWindow;
}
