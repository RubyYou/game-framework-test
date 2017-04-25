import "reflect-metadata";

import PIXI = require('pixi.js');

import { Context, MVCSBundle } from "robotlegs";
import { ContextView, PixiBundle } from "robotlegs-pixi";

import { MyConfig } from "./config";
import { CircleView } from "./view/CircleView";

class Main {

    stage: PIXI.Container;
    renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;
    context: Context;

    constructor () {
        this.renderer = PIXI.autoDetectRenderer(800, 600, {});
        this.stage = new PIXI.Container();

        this.context = new Context();
        this.context.install(MVCSBundle, PixiBundle).
            configure(new ContextView((<any>this.renderer).plugins.interaction)).
            configure(MyConfig).
            initialize();

        this.stage.addChild(new CircleView())

        document.body.appendChild(this.renderer.view);
    }

    render = () => {
        this.renderer.render(this.stage);
        window.requestAnimationFrame(this.render);
    }

}

let main = new Main();
main.render();