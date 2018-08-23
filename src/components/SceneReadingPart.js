import * as PIXI from 'pixi.js'
class SceneClozePart extends PIXI.Container{
  constructor(stage){
    super();
    this.stage = stage;
    this.on('added',this.addedToStage,this);
  }
  addedToStage(){
    var ball = new PIXI.Graphics();
    ball.beginFill(0x00ff00);
    ball.drawRect(0,0,300,200);
    ball.endFill();
    this.addChild(ball)


  }

}
export default SceneClozePart;
