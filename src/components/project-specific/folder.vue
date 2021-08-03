<template>
    <div id="folder">
        <div id="hoverable" :style="`margin-left: ${0 + indent * 20 }px;`" @click="toggled">
            <div id="open-indicator" :class="(open ? 'opened ' : '') + (nodetype !== 'folder' ? 'hidden ' : '')"/>
            {{ name.split('.')[0].replace(/\<[0-9]+\>/, "") }}
        </div>
        
        <span v-if="open">
            <File v-for="folder in content" :name="folder.name" :nodetype="folder.type" :content="Array.isArray(folder.content) ? folder.content : []" :indent="indent+1" @open="openFile" />
        </span>
    </div>
</template>

<script>
export default {
    name: "File",

    props: {
        name: {
            type: String,
            default: "unnamed folder"
        },

        nodetype: {
            type: String,
            default: "folder"
        },

        content: {
            type: Array,
            default: () => []
        },

        indent: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            open: false
        }
    },

    methods: {
        toggled() {
            this.open = !this.open;

            if (this.nodetype === "file")
                this.$emit('open', this.name)
        },

        openFile(file) {
            this.$emit('open', this.name + '/' + file)
        }
    }
};
</script>

<style scoped lang="scss">
#folder {
    #hoverable {
        padding: 10px;
        
        &:hover {
            background: #eee;
        }
    }
    
    #open-indicator {
        width: 10px;
        height: 10px;
        display: inline-block;
        border-bottom: 3px solid black;
        border-right: 3px solid black;
        transform: rotate(-45deg);
        margin-right: 20px;

        &.opened {
            transform: rotate(45deg); 
        }

        &.hidden {
            visibility: hidden;
        }
    }
}
</style>