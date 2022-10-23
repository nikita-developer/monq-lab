<template>
    <div class="preferences">
        <h1 class="preferences__title">Preferences</h1>
        <p class="preferences__description">
            On this page you can configure the main system parameters available
            for customization
        </p>
        <Form></Form>
    </div>
</template>

<script>
import Form from '../Form/Form.vue'
export default {
    components: { Form },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
