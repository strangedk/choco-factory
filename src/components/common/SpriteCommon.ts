import * as PIXI from 'pixi.js';
import ResourceService from "../../resources/ResourceService";
import SequenceItem from '../../services/SequenceItem';

class SpriteCommon extends PIXI.Sprite {
    public seq?: SequenceItem;

    private defaultX: number = 0;
    private defaultY: number = 0;
    
    constructor(resourceName: string) {
        super();

        this.texture = ResourceService.getTexture(resourceName);
    }

    public saveDefaults = () => {
        this.defaultX = this.x;
        this.defaultY = this.y;
    }

    public restoreDefaults = () => {
        this.x = this.defaultX;
        this.y = this.defaultY;
    }
}

export default SpriteCommon;