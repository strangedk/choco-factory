import ResourceList from "../resources/ResourceList";
import SequenceItem from "./SequenceItem";

class SequenceService {
    private static _instance = new SequenceService();
    public static get instance(): SequenceService { return SequenceService._instance; }

    public OS1_SLIDE_0_1 = new SequenceItem(ResourceList.S1_SLIDE_0_1, 'slide');
    public OS1_ACTION_1 = new SequenceItem(ResourceList.S1_ACTION_1, 'action');
    public OS1_SLIDE_1_1 = new SequenceItem(ResourceList.S1_SLIDE_1_1, 'slide');
	public OS1_ACTION_2 = new SequenceItem(ResourceList.S1_ACTION_2, 'action');
    public OS1_SLIDE_2_1 = new SequenceItem(ResourceList.S1_SLIDE_2_1, 'slide');
	public OS1_ACTION_3 = new SequenceItem(ResourceList.S1_ACTION_3, 'action');
    public OS1_SLIDE_3_1 = new SequenceItem(ResourceList.S1_SLIDE_3_1, 'slide');
	public OS1_ACTION_4 = new SequenceItem(ResourceList.S1_ACTION_4, 'action');
    public OS1_SLIDE_4_1 = new SequenceItem(ResourceList.S1_SLIDE_4_1, 'slide');
	public OS1_ACTION_5 = new SequenceItem(ResourceList.S1_ACTION_5, 'action');
    public OS1_SLIDE_5_1 = new SequenceItem(ResourceList.S1_SLIDE_5_1, 'slide');
    public OS1_SLIDE_5_2 = new SequenceItem(ResourceList.S1_SLIDE_5_2, 'slide');
    public OS2_SLIDE_0_1 = new SequenceItem(ResourceList.S2_SLIDE_0_1, 'slide');
	public OS2_ACTION_1 = new SequenceItem(ResourceList.S2_ACTION_1, 'action');
    public OS2_SLIDE_1_1 = new SequenceItem(ResourceList.S2_SLIDE_1_1, 'slide');
	public OS2_ACTION_2 = new SequenceItem(ResourceList.S2_ACTION_2, 'action');
    public OS2_SLIDE_2_1 = new SequenceItem(ResourceList.S2_SLIDE_2_1, 'slide');
	public OS2_ACTION_3 = new SequenceItem(ResourceList.S2_ACTION_3, 'action');
    public OS2_SLIDE_3_1 = new SequenceItem(ResourceList.S2_SLIDE_3_1, 'slide');
	public OS2_ACTION_4 = new SequenceItem(ResourceList.S2_ACTION_4, 'action');
    public OS2_SLIDE_4_1 = new SequenceItem(ResourceList.S2_SLIDE_4_1, 'slide');
    public OS2_SLIDE_4_2 = new SequenceItem(ResourceList.S2_SLIDE_4_2, 'slide');
    public OS2_SLIDE_4_3 = new SequenceItem(ResourceList.S2_SLIDE_4_3, 'slide');
    public OS2_SLIDE_4_4 = new SequenceItem(ResourceList.S2_SLIDE_4_4, 'slide');
    public OS2_SLIDE_5_1 = new SequenceItem(ResourceList.S2_SLIDE_5_1, 'slide');
    public OS3_SLIDE_0_1 = new SequenceItem(ResourceList.S3_SLIDE_0_1, 'slide');
	public OS3_ACTION_1 = new SequenceItem(ResourceList.S3_ACTION_1, 'action');
    public OS3_SLIDE_1_1 = new SequenceItem(ResourceList.S3_SLIDE_1_1, 'slide');
	public OS3_ACTION_2 = new SequenceItem(ResourceList.S3_ACTION_2, 'action');
    public OS3_SLIDE_2_1 = new SequenceItem(ResourceList.S3_SLIDE_2_1, 'slide');
	public OS3_ACTION_3 = new SequenceItem(ResourceList.S3_ACTION_3, 'action');
    public OS3_SLIDE_3_1 = new SequenceItem(ResourceList.S3_SLIDE_3_1, 'slide');
	public OS3_ACTION_4 = new SequenceItem(ResourceList.S3_ACTION_4, 'action');
    public OS3_SLIDE_4_1 = new SequenceItem(ResourceList.S3_SLIDE_4_1, 'slide');
    public OS3_SLIDE_5_1 = new SequenceItem(ResourceList.S3_SLIDE_5_1, 'slide');
    public OS3_SLIDE_5_2 = new SequenceItem(ResourceList.S3_SLIDE_5_2, 'slide');
    public OS4_SLIDE_0_1 = new SequenceItem(ResourceList.S4_SLIDE_0_1, 'slide');
	public OS4_ACTION_1 = new SequenceItem(ResourceList.S4_ACTION_1, 'action');
    public OS4_SLIDE_1_1 = new SequenceItem(ResourceList.S4_SLIDE_1_1, 'slide');
	public OS4_ACTION_2 = new SequenceItem(ResourceList.S4_ACTION_2, 'action');
    public OS4_SLIDE_2_1 = new SequenceItem(ResourceList.S4_SLIDE_2_1, 'slide');
	public OS4_ACTION_3 = new SequenceItem(ResourceList.S4_ACTION_3, 'action');
    public OS4_SLIDE_3_1 = new SequenceItem(ResourceList.S4_SLIDE_3_1, 'slide');
	public OS4_ACTION_4 = new SequenceItem(ResourceList.S4_ACTION_4, 'action');
    public OS4_SLIDE_4_1 = new SequenceItem(ResourceList.S4_SLIDE_4_1, 'slide');
	public OS4_ACTION_5 = new SequenceItem(ResourceList.S4_ACTION_5, 'action');
    public OS4_SLIDE_5_1 = new SequenceItem(ResourceList.S4_SLIDE_5_1, 'slide');
	public OS4_ACTION_6 = new SequenceItem(ResourceList.S4_ACTION_6, 'action');
    public OS4_SLIDE_6_1 = new SequenceItem(ResourceList.S4_SLIDE_6_1, 'slide');
    public OS4_SLIDE_6_2 = new SequenceItem(ResourceList.S4_SLIDE_6_2, 'slide');
    public OS4_SLIDE_6_3 = new SequenceItem(ResourceList.S4_SLIDE_6_3, 'slide');
    public OS4_SLIDE_6_4 = new SequenceItem(ResourceList.S4_SLIDE_6_4, 'slide');
    public OS5_SLIDE_0_1 = new SequenceItem(ResourceList.S5_SLIDE_0_1, 'slide');
	public OS5_ACTION_1 = new SequenceItem(ResourceList.S5_ACTION_1, 'action');
    public OS5_SLIDE_1_1 = new SequenceItem(ResourceList.S5_SLIDE_1_1, 'slide');
	public OS5_ACTION_2 = new SequenceItem(ResourceList.S5_ACTION_2, 'action');
    public OS5_SLIDE_2_1 = new SequenceItem(ResourceList.S5_SLIDE_2_1, 'slide');
    public OS6_SLIDE_0_1 = new SequenceItem(ResourceList.S6_SLIDE_0_1, 'slide');
	public OS6_ACTION_1 = new SequenceItem(ResourceList.S6_ACTION_1, 'action');
    public OS6_SLIDE_1_1 = new SequenceItem(ResourceList.S6_SLIDE_1_1, 'slide');
	public OS6_ACTION_2 = new SequenceItem(ResourceList.S6_ACTION_2, 'action');
    public OS6_SLIDE_2_1 = new SequenceItem(ResourceList.S6_SLIDE_2_1, 'slide');
    public OS7_SLIDE_0_1 = new SequenceItem(ResourceList.S7_SLIDE_0_1, 'slide');
	public OS7_ACTION_1 = new SequenceItem(ResourceList.S7_ACTION_1, 'action');
    public OS7_SLIDE_1_1 = new SequenceItem(ResourceList.S7_SLIDE_1_1, 'slide');
	public OS7_ACTION_2 = new SequenceItem(ResourceList.S7_ACTION_2, 'action');
    public OS7_SLIDE_2_1 = new SequenceItem(ResourceList.S7_SLIDE_2_1, 'slide');
    public OS8_SLIDE_0_1 = new SequenceItem(ResourceList.S8_SLIDE_0_1, 'slide');
	public OS8_ACTION_1 = new SequenceItem(ResourceList.S8_ACTION_1, 'action');
    public OS8_SLIDE_1_1 = new SequenceItem(ResourceList.S8_SLIDE_1_1, 'slide');
    public OS9_SLIDE_0_1 = new SequenceItem(ResourceList.S9_SLIDE_0_1, 'slide');
	public OS9_ACTION_1 = new SequenceItem(ResourceList.S9_ACTION_1, 'action');
    public OS9_SLIDE_1_1 = new SequenceItem(ResourceList.S9_SLIDE_1_1, 'slide');
    public OS10_SLIDE_0_1 = new SequenceItem(ResourceList.S10_SLIDE_0_1, 'slide');
    public OS10_ACTION_1 = new SequenceItem(ResourceList.S10_ACTION_1, 'action');
    public OS10_SLIDE_1_1 = new SequenceItem(ResourceList.S10_SLIDE_1_1, 'slide');
    public OS10_SLIDE_1_2 = new SequenceItem(ResourceList.S10_SLIDE_1_2, 'slide');
    public OS10_SLIDE_1_3 = new SequenceItem(ResourceList.S10_SLIDE_1_3, 'slide');	
    public OS11_SLIDE_0_1 = new SequenceItem(ResourceList.S11_SLIDE_0_1, 'slide');
    public OS11_ACTION_1 = new SequenceItem(ResourceList.S11_ACTION_1, 'action');
    public OS11_SLIDE_1_1 = new SequenceItem(ResourceList.S11_SLIDE_1_1, 'slide');

    public S1 = [
        this.OS1_SLIDE_0_1,
        this.OS1_ACTION_1,
        this.OS1_SLIDE_1_1,
        this.OS1_ACTION_2,
        this.OS1_SLIDE_2_1,
        this.OS1_ACTION_3,
        this.OS1_SLIDE_3_1,
        this.OS1_ACTION_4,
        this.OS1_SLIDE_4_1,
        this.OS1_ACTION_5,
        this.OS1_SLIDE_5_1,
        this.OS1_SLIDE_5_2,];

    public S2 = [
        this.OS2_SLIDE_0_1,
        this.OS2_ACTION_1,
        this.OS2_SLIDE_1_1,
        this.OS2_ACTION_2,
        this.OS2_SLIDE_2_1,
        this.OS2_ACTION_3,
        this.OS2_SLIDE_3_1,
        this.OS2_ACTION_4,
        this.OS2_SLIDE_4_1,
        this.OS2_SLIDE_4_2,
        this.OS2_SLIDE_4_3,
        this.OS2_SLIDE_4_4,
        this.OS2_SLIDE_5_1,];

    public S3 = [
        this.OS3_SLIDE_0_1,
        this.OS3_ACTION_1,
        this.OS3_SLIDE_1_1,
        this.OS3_ACTION_2,
        this.OS3_SLIDE_2_1,
        this.OS3_ACTION_3,
        this.OS3_SLIDE_3_1,
        this.OS3_ACTION_4,
        this.OS3_SLIDE_4_1,
        this.OS3_SLIDE_5_1,
        this.OS3_SLIDE_5_2,
    ];

    public S4 = [
        this.OS4_SLIDE_0_1,
        this.OS4_ACTION_1,
        this.OS4_SLIDE_1_1,
        this.OS4_ACTION_2,
        this.OS4_SLIDE_2_1,
        this.OS4_ACTION_3,
        this.OS4_SLIDE_3_1,
        this.OS4_ACTION_4,
        this.OS4_SLIDE_4_1,
        this.OS4_ACTION_5,
        this.OS4_SLIDE_5_1,
        this.OS4_ACTION_6,
        this.OS4_SLIDE_6_1,
        this.OS4_SLIDE_6_2,
        this.OS4_SLIDE_6_3,
        this.OS4_SLIDE_6_4,
    ];

    public S5 = [
        this.OS5_SLIDE_0_1,
        this.OS5_ACTION_1,
        this.OS5_SLIDE_1_1,
        this.OS5_ACTION_2,
        this.OS5_SLIDE_2_1,
    ];

    public S6 = [
        this.OS6_SLIDE_0_1,
        this.OS6_ACTION_1,
        this.OS6_SLIDE_1_1,
        this.OS6_ACTION_2,
        this.OS6_SLIDE_2_1,
    ];

    public S7 = [
        this.OS7_SLIDE_0_1,
        this.OS7_ACTION_1,
        this.OS7_SLIDE_1_1,
        this.OS7_ACTION_2,
        this.OS7_SLIDE_2_1,
    ];

    public S8 = [
        this.OS8_SLIDE_0_1,
        this.OS8_ACTION_1,
        this.OS8_SLIDE_1_1,
    ];

    public S9 = [
        this.OS9_SLIDE_0_1,
        this.OS9_ACTION_1,
        this.OS9_SLIDE_1_1,
    ];

    public S10 = [
        this.OS10_SLIDE_0_1,
        this.OS10_ACTION_1,
        this.OS10_SLIDE_1_1,
        this.OS10_SLIDE_1_2,
        this.OS10_SLIDE_1_3,
    ];

    public S11 = [
        this.OS11_SLIDE_0_1,
        this.OS11_ACTION_1,
        this.OS11_SLIDE_1_1,
    ];

    public PACKS = [ this.S1,this.S2,this.S3,this.S4,this.S5,this.S6,this.S7,this.S8,this.S9,this.S10,this.S11 ];

    constructor() {
        this.OS1_SLIDE_0_1.next = this.OS1_ACTION_1;
        this.OS1_ACTION_1.next = this.OS1_SLIDE_1_1;
        this.OS1_SLIDE_1_1.next = this.OS1_ACTION_2;
        this.OS1_ACTION_2.next = this.OS1_SLIDE_2_1;
        this.OS1_SLIDE_2_1.next = this.OS1_ACTION_3;
        this.OS1_ACTION_3.next = this.OS1_SLIDE_3_1;
        this.OS1_SLIDE_3_1.next = this.OS1_ACTION_4;
        this.OS1_ACTION_4.next = this.OS1_SLIDE_4_1;
        this.OS1_SLIDE_4_1.next = this.OS1_ACTION_5;
        this.OS1_ACTION_5.next = this.OS1_SLIDE_5_1;
        this.OS1_SLIDE_5_1.next = this.OS1_SLIDE_5_2;
        this.OS1_SLIDE_5_2.next = this.OS2_SLIDE_0_1;
        this.OS1_SLIDE_5_2.nextStage = true;

        this.OS2_SLIDE_0_1.next = this.OS2_ACTION_1;
        this.OS2_ACTION_1.next = this.OS2_SLIDE_1_1;
        this.OS2_SLIDE_1_1.next = this.OS2_ACTION_2;
        this.OS2_ACTION_2.next = this.OS2_SLIDE_2_1;
        this.OS2_SLIDE_2_1.next = this.OS2_ACTION_3;
        this.OS2_ACTION_3.next = this.OS2_SLIDE_3_1;
        this.OS2_SLIDE_3_1.next = this.OS2_ACTION_4;
        this.OS2_ACTION_4.next = this.OS2_SLIDE_4_1;
        this.OS2_SLIDE_4_1.next = this.OS2_SLIDE_4_2;
        this.OS2_SLIDE_4_2.next = this.OS2_SLIDE_4_3;
        this.OS2_SLIDE_4_3.next = this.OS2_SLIDE_4_4;
        this.OS2_SLIDE_4_4.next = this.OS2_SLIDE_5_1;
        this.OS2_SLIDE_5_1.next = this.OS3_SLIDE_0_1;
        this.OS2_SLIDE_5_1.nextStage = true;

        this.OS3_SLIDE_0_1.next = this.OS3_ACTION_1;
        this.OS3_ACTION_1.next = this.OS3_SLIDE_1_1;
        this.OS3_SLIDE_1_1.next = this.OS3_ACTION_2;
        this.OS3_ACTION_2.next = this.OS3_SLIDE_2_1;
        this.OS3_SLIDE_2_1.next = this.OS3_ACTION_3;
        this.OS3_ACTION_3.next = this.OS3_SLIDE_3_1;
        this.OS3_SLIDE_3_1.next = this.OS3_ACTION_4;
        this.OS3_ACTION_4.next = this.OS3_SLIDE_4_1;
        this.OS3_SLIDE_4_1.next = this.OS3_SLIDE_5_1;
        this.OS3_SLIDE_5_1.next = this.OS3_SLIDE_5_2;
        this.OS3_SLIDE_5_2.next = this.OS4_SLIDE_0_1;
        this.OS3_SLIDE_5_2.nextStage = true;

        this.OS4_SLIDE_0_1.next = this.OS4_ACTION_1;
        this.OS4_ACTION_1.next = this.OS4_SLIDE_1_1;
        this.OS4_SLIDE_1_1.next = this.OS4_ACTION_2;
        this.OS4_ACTION_2.next = this.OS4_SLIDE_2_1;
        this.OS4_SLIDE_2_1.next = this.OS4_ACTION_3;
        this.OS4_ACTION_3.next = this.OS4_SLIDE_3_1;
        this.OS4_SLIDE_3_1.next = this.OS4_ACTION_4;
        this.OS4_ACTION_4.next = this.OS4_SLIDE_4_1;
        this.OS4_SLIDE_4_1.next = this.OS4_ACTION_5;
        this.OS4_ACTION_5.next = this.OS4_SLIDE_5_1;
        this.OS4_SLIDE_5_1.next = this.OS4_ACTION_6;
        this.OS4_ACTION_6.next = this.OS4_SLIDE_6_1;
        this.OS4_SLIDE_6_1.next = this.OS4_SLIDE_6_2;
        this.OS4_SLIDE_6_2.next = this.OS4_SLIDE_6_3;
        this.OS4_SLIDE_6_3.next = this.OS4_SLIDE_6_4;
        this.OS4_SLIDE_6_4.next = this.OS5_SLIDE_0_1;
        this.OS4_SLIDE_6_4.nextStage = true;

        this.OS5_SLIDE_0_1.next = this.OS5_ACTION_1;
        this.OS5_ACTION_1.next = this.OS5_SLIDE_1_1;
        this.OS5_SLIDE_1_1.next = this.OS5_ACTION_2;
        this.OS5_ACTION_2.next = this.OS5_SLIDE_2_1;
        this.OS5_SLIDE_2_1.next = this.OS6_SLIDE_0_1;
        this.OS5_SLIDE_2_1.nextStage = true;

        this.OS6_SLIDE_0_1.next = this.OS6_ACTION_1;
        this.OS6_ACTION_1.next = this.OS6_SLIDE_1_1;
        this.OS6_SLIDE_1_1.next = this.OS6_ACTION_2;
        this.OS6_ACTION_2.next = this.OS6_SLIDE_2_1;
        this.OS6_SLIDE_2_1.next = this.OS7_SLIDE_0_1;
        this.OS6_SLIDE_2_1.nextStage = true;

        this.OS7_SLIDE_0_1.next = this.OS7_ACTION_1;
        this.OS7_ACTION_1.next = this.OS7_SLIDE_1_1;
        this.OS7_SLIDE_1_1.next = this.OS7_ACTION_2;
        this.OS7_ACTION_2.next = this.OS7_SLIDE_2_1;
        this.OS7_SLIDE_2_1.next = this.OS8_SLIDE_0_1;
        this.OS7_SLIDE_2_1.nextStage = true;

        this.OS8_SLIDE_0_1.next = this.OS8_ACTION_1;
        this.OS8_ACTION_1.next = this.OS8_SLIDE_1_1;
        this.OS8_SLIDE_1_1.next = this.OS9_SLIDE_0_1;
        this.OS8_SLIDE_1_1.nextStage = true;

        this.OS9_SLIDE_0_1.next = this.OS9_ACTION_1;
        this.OS9_ACTION_1.next = this.OS9_SLIDE_1_1;
        this.OS9_SLIDE_1_1.next = this.OS10_SLIDE_0_1;
        this.OS9_SLIDE_1_1.nextStage = true;

        this.OS10_SLIDE_0_1.next = this.OS10_ACTION_1;
        this.OS10_ACTION_1.next = this.OS10_SLIDE_1_1;
        this.OS10_SLIDE_1_1.next = this.OS10_SLIDE_1_2;
        this.OS10_SLIDE_1_2.next = this.OS10_SLIDE_1_3;
        this.OS10_SLIDE_1_3.next = this.OS11_SLIDE_0_1;
        this.OS10_SLIDE_1_3.nextStage = true;

        this.OS11_SLIDE_0_1.next = this.OS11_ACTION_1;
        this.OS11_ACTION_1.next = this.OS11_SLIDE_1_1;
        this.OS11_SLIDE_1_1.next = undefined;
        this.OS11_SLIDE_1_1.nextStage = false;
    }
}

export default SequenceService;