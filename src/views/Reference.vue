<template>
    <div>
        <TwoDivide columnLayout="1fr 3fr" bgLeft="#ddd">
            <template #left>
                <div id="file-hierarchy">
                    <Folder v-for="folder in references" :name="folder.name" />
                </div>
            </template>

            <template #right>
                <div id="md-viewer">
                    <h1>Markdown test</h1>
                    this is some text
                    <ul>
                        <li>This</li>
                        <li>is</li>
                        <li>a</li>
                        <li>list</li>
                    </ul>
                </div>
            </template>
        </TwoDivide>
        
    </div>
</template>

<script>
import Section from "../components/Section.vue";
import TwoDivide from "../components/TwoDivide.vue";
import Folder from "../components/project-specific/folder.vue";

export default {
    components: {
        Section,
        TwoDivide,
        Folder
    },
    
    data() {
        return {
            references: []
        }
    },

    mounted() {
        const files = require.context("@/assets/markdown", true, /.\.md/).keys().map(file => file.split('/').filter(folder => folder != '.'));
    
        
        files.forEach(file => {
            const currScope = this.references;

            currScope.push({
                name: file[0]
            })
            /*
            file.forEach(pathPart => {
                if (!(pathPart in currScope.content))
                    currScope[pathPart] = {

                    }
            });*/
        });
    }
}
</script>

<style scoped lang="scss">
#file-hierarchy {
    height: calc(100vh - 286px);
}

#md-viewer {
    text-align: center;

    ul {
        li {
            text-align: left;
        }
        padding-left: 32vw;
    }
}
</style>