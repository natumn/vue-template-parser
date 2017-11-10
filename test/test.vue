<template>
    <p>{{ test }}</p>
    <othercomponent></othercomponent>
</template>
<script>
import othercomponent from './OtherComponent.vue';

export default {
    data() {
        return {
            test: 'test file',
        };
    },
    component: {
        othercomponent,
    },
};
</script>
<css>
</css>