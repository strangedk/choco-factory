import { Point } from "pixi.js";
import ResourceList from "../resources/ResourceList";

class PositionService {
    private static _instance = new PositionService();
    public static get instance() { return PositionService._instance; } 

    private _actionPositionByName = {
        [ResourceList.S1_ACTION_1]: new Point(70,480),
        [ResourceList.S1_ACTION_2]: new Point(360,120),
        [ResourceList.S1_ACTION_3]: new Point(70,320),
        [ResourceList.S1_ACTION_4]: new Point(250,30),
        [ResourceList.S1_ACTION_5]: new Point(60,30),

        [ResourceList.S2_ACTION_1]: new Point(128,360),
        [ResourceList.S2_ACTION_2]: new Point(20,150),
        [ResourceList.S2_ACTION_3]: new Point(336,110),
        [ResourceList.S2_ACTION_4]: new Point(220,40),

        [ResourceList.S3_ACTION_1]: new Point(128,380),
        [ResourceList.S3_ACTION_2]: new Point(286,280),
        [ResourceList.S3_ACTION_3]: new Point(40,180),
        [ResourceList.S3_ACTION_4]: new Point(150,20),

        [ResourceList.S4_ACTION_1]: new Point(20,20),
        [ResourceList.S4_ACTION_2]: new Point(273,260),
        [ResourceList.S4_ACTION_3]: new Point(160,430),
        [ResourceList.S4_ACTION_4]: new Point(20,290),
        [ResourceList.S4_ACTION_5]: new Point(282,30),        
        [ResourceList.S4_ACTION_6]: new Point(200,15),

        [ResourceList.S5_ACTION_1]: new Point(128,150),
        [ResourceList.S5_ACTION_2]: new Point(90,360),

        [ResourceList.S6_ACTION_1]: new Point(128,150),
        [ResourceList.S6_ACTION_2]: new Point(90,360),

        [ResourceList.S7_ACTION_1]: new Point(148,310),
        [ResourceList.S7_ACTION_2]: new Point(138,40),

        [ResourceList.S8_ACTION_1]: new Point(240,100),

        [ResourceList.S9_ACTION_1]: new Point(240,100),

        [ResourceList.S10_ACTION_1]: new Point(220,100),

        [ResourceList.S11_ACTION_1]: new Point(100,200),
    }

    public get actionPositionByName() {
        return this._actionPositionByName;
    }
}

export default PositionService;