import * as PIXI from 'pixi.js';
import ResourceList from '../../resources/ResourceList';
import PositionService from '../../services/PositionService';
import SequenceItem from '../../services/SequenceItem';
import SequenceService from '../../services/SequenceService';
import SpriteCommon from '../common/SpriteCommon';
import gsap from 'gsap';

class Actions extends PIXI.Sprite {   
    private readonly ss = SequenceService.instance;
    private readonly ps = PositionService.instance;

    private readonly wrapper: PIXI.Container = new PIXI.Container();
    private readonly bg: PIXI.Graphics = new PIXI.Graphics();
    private readonly arrow: SpriteCommon = new SpriteCommon(ResourceList.ARROW);

    private currentStage: SequenceItem[] = [];

    private W: number = 490;
    private H: number = 580;

    constructor() {
        super();

        this.arrow.anchor.set(1,0.5);

        this.interactive = true;

        this.bg.beginFill(0x1e71b8);
        this.bg.drawRoundedRect(0,0,this.W,this.H,20);
        this.bg.alpha = 0.7;
        this.bg.endFill();

        this.addChild(this.bg);
        this.addChild(this.wrapper);        
    };

    public setStage = (stageIndex: number) => {

        this.clear();
        this.currentStage = this.ss.PACKS[stageIndex];
        gsap.to(this.bg, {alpha: 0.7});        

        this.getActions().forEach(a => {
            const action = new SpriteCommon(a.name);
            action.x = this.ps.actionPositionByName[a.name].x;
            action.y = this.ps.actionPositionByName[a.name].y;
            action.interactive = false;
            action.buttonMode = false;
            action.name = a.name;
            action.seq = a;
            this.wrapper.addChild(action);
        });

        return this;
    }

    public set = (seq: SequenceItem): PIXI.DisplayObject | null => {        
        let result: PIXI.DisplayObject | null = null;
        this.wrapper.children.forEach(c => {
            if (seq.name === c.name) {
                result = c;
                c.interactive = true;
                c.buttonMode = true;
                c.once('pointerdown', () => this.byebye(c));
                this.highlight(c);
            }
        });
        return result;
    }

    private highlight = (c: any) => {
        gsap.fromTo(c, {y: c.y - 5},{y: c.y + 5, yoyo: true, repeat: -1});

        this.addChild(this.arrow);        
        this.arrow.x = this.wrapper.x + c.x - 50;
        this.arrow.y = this.wrapper.y + c.y + 60;
        this.arrow.rotation = Math.random() / 4;

        gsap.to(this.arrow, {x:this.arrow.x + 50, y: this.arrow.y + this.arrow.rotation * 20, yoyo: true, repeat: -1});
    }

    private byebye = (c: PIXI.DisplayObject) => {
        gsap.killTweensOf(this.arrow);
        gsap.killTweensOf(c);
        this.removeChild(this.arrow);

        // Snickers
        if (c.name === ResourceList.S11_ACTION_1) {
            gsap.to(this.bg, {alpha: 0});
            gsap.to(c, {x: -700, y: c.y+100});
            gsap.to(c.scale, {x: 2, y: 2});
            return;
        } 

        // All
        const w = window as any;
        const delay = !!w.chocoDelay ? w.chocoDelay/1000/2 : (1.75);

        gsap.to(c, {x: -500, y: 440, alpha: 0, duration: delay, onComplete: () => {
            this.wrapper.removeChild(c);
            if (!!!this.wrapper.children.length) {
                gsap.to(this.bg, {alpha: 0});
            }
        }});
    }

    private clear = () => {
        if (this.wrapper.children.length) {
            this.wrapper.removeChildren();
        }
    }

    private getActions = () => {
        return this.currentStage.filter(si => si.type == 'action');
    }
}

export default Actions;