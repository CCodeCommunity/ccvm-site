<template>
    <div>
        <Section backgroundColor="white" :padding="200">
            <img src="@/assets/ccvm-black.png" style="width: 40vw" />
            <br /><br /><br /><br />
            The lightweight, easy to use, virtual programming ecosystem
        </Section>

        <Section backgroundColor="#eee" type="diagonal" :padding="150">
            <div style="text-align: left; padding: 0 20px">
                <h1>Introduction</h1>
                <p>
                    CCVM is a virtual programming ecosystem designed
                    by Luc de Wit for creating software on a virtual
                    machine. It contains a wide variety of tools to
                    help with this like an assembler, a disassembler,
                    And a compiler for an intermediate language.
                </p>

                <p>
                    This is why CCVM is an excellent tool for learning
                    how low level virtual systems work, or for creating
                    your own language based on the CC Virtual Machine.
                </p>
            </div>
        </Section>

        <Section backgroundColor="white" :padding="50">
            <h1>Work in progress</h1>
            <TwoDivide>
                <template #left>
                    <img src="@/assets/wip.png" style="width: 40vw">
                </template>

                <template #right>
                    <p>
                        Both the CCVM products and this website are still
                        under heavy development and may change. Since we
                        currently have a very limited team, help from open
                        source contributers are very welcome.
                    </p>

                    <p>
                        If you are willing to contribute to the project, take
                        contact with an admin in the <a href="https://discord.gg/z2ADrMGmUf">CCVM discord server</a>
                    </p>
                </template>
            </TwoDivide>
        </Section>
    </div>
</template>

<script>
import Section from "../components/Section.vue";
import TwoDivide from "../components/TwoDivide.vue";

export default {
    components: {
        Section,
        TwoDivide
    }
}
</script>