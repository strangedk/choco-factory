import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import SpriteCommon from '../common/SpriteCommon';
import SequenceItem from '../../services/SequenceItem';
import SequenceService from '../../services/SequenceService';

class Slide extends PIXI.Sprite {    
    constructor() {
        super();
    }

    public setStage = (stageIndex: number) => {
        //this.clear();
    }

    public set = (seq: SequenceItem) => {        
        const newSlide = new SpriteCommon(seq.name);
        newSlide.name = seq.name;
        newSlide.alpha = 0;        
        this.addChild(newSlide);

        gsap.to(newSlide,  {alpha: 1, onComplete: () => {
            this.clear(newSlide);
        }});
    }

    private clear = (exceptOf?: SpriteCommon) => {
        for (let i=0; i<this.children.length; ++i) {
            if (this.children[i].name !== exceptOf?.name)
                this.removeChild(this.children[i]);
        }
    }
}

export default Slide;