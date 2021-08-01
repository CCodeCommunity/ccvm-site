<template>
    <div>
        <Section backgroundColor="white">
            <h1>CCVM Products</h1>
        </Section>

        <Section backgroundColor="#eee" type="diagonal" :padding="150">
            <TwoDivide>
                <template #left>
                    <img src="@/assets/ccsdk.png" style="width: 30vw;">
                </template>

                <template #right>
                    <h3><b>CCDK</b></h3>
                    <p>
                        The CC Development kit is a group of executables
                        which let you develop your software for ccvm.
                    </p>
                    
                    <p>
                        This Development kit includes:
                        <ul>
                            <li>CCVM</li>
                            <li>CCA</li>
                            <li>CCD</li>
                        </ul>
                    </p>

                    <p>
                        <button>Download</button>
                    </p>
                </template>
            </TwoDivide>
        </Section>

        <Section backgroundColor="white" :padding="150">
            <TwoDivide>
                <template #left>
                    <img src="@/assets/ccvm-black.png" style="width: 30vw;" />
                </template>

                <template #right>
                    <h3><b>CCVM</b></h3>

                    <p>
                        The CC virtual machine, which you can use to
                        run .ccb binaries.
                    </p>

                    <p>
                        <button>Download</button>
                        <button>Repository</button>
                    </p>
                </template>
            </TwoDivide>
        </Section>

        <Section backgroundColor="#eee" type="diagonal" :padding="150">
            <TwoDivide>
                <template #left>
                    <img src="@/assets/ccb.png" style="width: 30vw;" />
                </template>

                <template #right>
                    <h3><b>CCA</b></h3>
                    <p>
                        The CC Assembler, used to assemble .cca assembly
                        codes into .ccb binary executables.
                    </p>

                    <p>
                        <button>Download</button>
                        <button>Repository</button>
                    </p>
                </template>
            </TwoDivide>
        </Section>

        <Section backgroundColor="white" :padding="150">
            <TwoDivide>
                <template #left>
                </template>

                <template #right>
                    <h3><b>CCD</b></h3>

                    <p>
                        The CC Disassembler, used to disassemble .ccb binaries
                        into .cca assembly codes.
                    </p>

                    <p>
                        <button>Download</button>
                        <button>Repository</button>
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

<style>
</style>