class SequenceItem {
    constructor (
        public name: string,
        public type: 'slide' | 'action',
        public next?: SequenceItem,
        public nextStage: boolean = false) {
            // -
    }
}

export default SequenceItem;