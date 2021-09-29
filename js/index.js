Vue.createApp({
    data() {
        return {
            words: [],
            word: "",
            showwords: false
        }
    },
    methods: {
        addWord(word) {
                console.log("addword() runs " + word);
                this.words.push(word);
                this.words.push(word.toLowerCase())
                this.words.push(word.toUpperCase())
        },
        show()
        {
            console.log("show() runs ");
            this.showwords = true;
        },
        clear(){
            console.log("Clear ");
            this.words.length = 0;
            this.showWords = false;
        }
    }
}).mount("#app")