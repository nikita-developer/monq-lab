<template>
    <form class="form">
        <div class="form__item">
            <p class="form__subtitle">Company Title</p>
            <div class="form__fields">
                <input
                    type="text"
                    class="form__field field"
                    value="Star and Moon"
                    placeholder="Default"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">First Day</p>
            <div class="form__fields">
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    placeholder="Monday"
                    class="form__field select"
                    :class="select2"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Container Width</p>
            <div class="form__fields">
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    placeholder="Fixed"
                    class="form__field select"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Homepage</p>
            <div class="form__fields">
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    placeholder="Starred Projects"
                    class="form__field select"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Indent Size</p>
            <div class="form__fields">
                <input
                    type="text"
                    class="form__field field"
                    placeholder="Default"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Personal Code</p>
            <div class="form__fields">
                <div class="form__wrap-code">
                    <input
                        type="text"
                        class="form__number field"
                        value="1645"
                    />
                    -
                    <input
                        type="text"
                        class="form__number field"
                        value="1566"
                    />
                    -
                    <input
                        type="text"
                        class="form__number field"
                        value="1249"
                    />
                </div>
                <p class="form__info">12 digits</p>
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Theme</p>
            <div class="form__fields">
                <div class="form__radio radio">
                    <label>
                        <input
                            type="radio"
                            name="theme"
                            value="Light"
                            v-model="radio"
                        />
                        <div class="radio__info">Light</div>
                    </label>
                </div>
                <div class="form__radio radio">
                    <label>
                        <input
                            type="radio"
                            name="theme"
                            value="Dark"
                            v-model="radio"
                        />
                        <div class="radio__info">Dark</div>
                    </label>
                </div>
            </div>
        </div>
        <div class="form__item">
            <div class="form__buttons">
                <button
                    @click.prevent="thems"
                    class="form__button button button--primary"
                >
                    Apply and Save
                </button>
                <button class="form__button button">Cancel</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            radio: 'Light',
            selectedCity: null,
            cities: ['Monday', 'Sunday', 'System'],
        }
    },
    methods: {
        thems() {
            this.radio == 'Dark'
                ? document.body.classList.toggle('dark')
                : document.body.classList.remove('dark')
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
