<template>
    <div>
        <TwoDivide columnLayout="1fr 3fr" bgLeft="#f5f5f5">
            <template #left>
                <div id="file-hierarchy">
                    <Folder v-for="folder in references" :name="folder.name" :nodetype="folder.type" :content="folder.content" @open="openFile" />
                </div>
            </template>

            <template #right>
                <div id="md-viewer">
                    <vue-markdown :source="content" />
                </div>
            </template>
        </TwoDivide>
    </div>
</template>

<script>
// Components
import Section from "../components/Section.vue";
import TwoDivide from "../components/TwoDivide.vue";
import Folder from "../components/project-specific/folder.vue";

// Libraries
import VueMarkdown from "vue-markdown-render";

export default {
    components: {
        Section,
        TwoDivide,
        Folder,
        VueMarkdown
    },
    
    data() {
        return {
            references: [],
            content: "",
            cache: {}
        }
    },

    mounted() {
        const files = require.context("@/assets/markdown", true, /.\.md/).keys().map(file => file.split('/').filter(folder => folder != '.'));
        
        console.clear();
        
        files.forEach(file => {
            let currScope = this.references;
            let depth = 0;

            file.forEach(pathPart => {
                // If the current path part does not exist within the currScope
                if (!currScope.some(x => x.name == pathPart)) {
                    // add it
                    currScope.push({
                        name: pathPart,
                        type: depth == file.length - 1 ? "file" : "folder",
                        content: depth == file.length - 1 ? "this is a test" : []
                    });
                }

                // Move the scope
                currScope = currScope.find(x => x.name === pathPart).content;

                // Increment the depth
                ++depth;
            });
        });

        console.log(JSON.stringify(this.references, null, 2));
    },

    methods: {
        openFile(file) {
            let url = new URL(window.location);
            url.searchParams.set('file', file.replace(/\//g, '-').replace(/\<[0-9]+\>/g, ''));
            url.search = url.searchParams;
            url = url.toString();
            history.pushState({}, null, url);
            console.log(url);

            // Look in cache
            if (file in this.cache) {
                this.content = this.cache[file];
            } else {
                fetch('/markdown/' + file)
                    .then(response => {
                        return response.body.getReader().read();
                    }).then(val => {
                        this.content = new TextDecoder().decode(val.value);
                        this.cache[file] = this.content;
                    });
            }
        }
    }
};
</script>

<style scoped lang="scss">
#file-hierarchy {
    height: calc(100vh - 240px);
    overflow-y: auto;
}

#md-viewer {
    text-align: left;
    padding: 20px 50px;
}
</style>