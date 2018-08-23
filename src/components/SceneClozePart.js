import * as PIXI from 'pixi.js'
class SceneClozePart extends PIXI.Container{
  constructor(stage){
    super();
    this.stage = stage;
    this.on('added',this.addedToStage,this);
  }
  addedToStage(){
    var ball = new PIXI.Graphics();
    ball.beginFill(0xff0000);
    ball.drawCircle(0,0,100);
    ball.endFill();
    this.addChild(ball)


  }

}
export default SceneClozePart;
