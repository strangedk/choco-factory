import * as PIXI from 'pixi.js';
import Game from "./Game";
import ResourceService from "./resources/ResourceService";

const options: object = {
  width: 1920,
  height: 829,
  antialias: true,
  transparent: true,
};

const app: PIXI.Application = new PIXI.Application(options);

const init = () => {
  ResourceService.init(() => {
    const game: Game = new Game(app);
    app.stage.addChild(game);
  });
}

init();

document.body.appendChild(app.view);