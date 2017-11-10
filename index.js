'use strict';

const babylon = require('babylon');

class VueFile {
    constructor() {
        this.fs = require("fs");
    }

    get() {
        this.fs.readFile('./test/test.vue', "utf8", (err, files) => {
            if (err) {
                return err;
            }
            this.files = files;
            console.log(files);
        });
    }
};

class Script extends VueFile {
    //TODO: script部分を取得する。
    get() {
        // TODO: <script>の < と </script> の >と文字数を取得する。
        // return startScriptStr, endScriptStr;

        // TODO: sssとessを元にscript部分を取得する。
        //return script
        this.script = scriptStr.substring(startScriptStr, endScriptStr);
    }

    //TODO: scriptをparseする。
    parser() {
        this.parsedScript = babylon.parse(this.script);
    }
}

class Template extends VueFile {
    //TODO: template部分を取得する。
    get() {
        // TODO: <template>の < と </template> の >と文字数を取得する。
    }
    parser() {
        //TODO: htmlタグとカスタムタグの使い分け。
    }
}

const vueFile = new VueFile();
vueFile.get();
