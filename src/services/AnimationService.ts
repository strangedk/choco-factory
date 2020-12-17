import SpriteCommon from "../components/common/SpriteCommon";
class AnimationService {   
    private static _instance = new AnimationService();
    public static get instance() { return AnimationService._instance; } 

    constructor() {
        
    }
}

export default AnimationService;