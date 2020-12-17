import * as PIXI from 'pixi.js';
import Slide from '../components/slides/Slide';
import SequenceService from '../services/SequenceService';
import Actions from '../components/actions/Actions';
import SequenceItem from '../services/SequenceItem';

class GameScreen extends PIXI.Container {
    private static SLIDE_DELAY: number = 2500;
    private readonly ss = SequenceService.instance;

    private readonly actions: Actions = new Actions();
    private readonly slide: Slide = new Slide();

    private currentStageIndex: number = 0;
    private currentStepIndex: number = 0;

    constructor(private app: PIXI.Application) {
        super();
        this.start();
    }

    public start = () => {
        this.addElements();
        this.arrangeElements();
        this.addEvents();

        this.setStage(this.currentStageIndex);
        this.process(this.currentStep);

        console.table({
            'window.chcocoDelay':'(ms) Delay between slides and half of the value for animations.',
            'window.slideCompleted()': 'Will invoked at the last slide.',
        });
    }

    done = () => {
        console.info('Invoke window.slideCompleted() now');
        const global = window as any;
        global.slideCompleted && global.slideCompleted();
    }

    public animate = (delta: number = 0) => {
        // -
    }

    private setStage = (stageIndex: number) => {
        this.currentStepIndex = 0;

        this.slide.setStage(stageIndex);
        this.actions.setStage(stageIndex);
    }

    private process = (seq: SequenceItem) => {
        if (!seq.nextStage && !seq.next) {
            this.processSlide(seq);
            this.done();
        } else if (seq.type === 'action') {
            // now
            this.processAction(seq)?.once('pointerdown', () => this.process(this.next()));
        } else if (seq.type === 'slide') {
            // now
            this.processSlide(seq);
            // after
            const w = window as any;
            setTimeout(() => this.process(this.next()), !!w.chocoDelay ? w.chocoDelay : GameScreen.SLIDE_DELAY);
        }
    }

    private processSlide = (seq: SequenceItem) => {
        this.slide.set(seq);
    }

    private processAction = (seq: SequenceItem) => {
        return this.actions.set(seq);
    }

    private next = (): SequenceItem => {
        if (this.currentStep.next && !this.currentStep.nextStage) {

            this.currentStepIndex++;
            return this.currentStep;

        } else if (this.currentStep.next && this.currentStep.nextStage) {

            this.currentStageIndex++;
            this.setStage(this.currentStageIndex);            
            return this.currentStep;

        } else if (!!this.currentStep.next) {
            
            return this.currentStep;

        } else {
            return this.currentStep;
        }        
    }

    private get currentStep(): SequenceItem {
        return this.currentStage[this.currentStepIndex];
    }

    private get currentStage(): Array<SequenceItem> {
        return this.ss.PACKS[this.currentStageIndex];
    }

    private addElements = () => {
        this.addChild(this.slide);
        this.addChild(this.actions);
    }

    private arrangeElements = () => {
        this.actions.x = 1390;
        this.actions.y = 170;
    }

    private addEvents = () => {
    }
}

export default GameScreen;