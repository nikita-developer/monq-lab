<template>
    <form class="form">
        <div class="form__item">
            <p class="form__subtitle">Company Title</p>
            <div class="form__fields">
                <input
                    type="text"
                    class="form__field field"
                    placeholder="Default"
                    v-model="сompany"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">First Day</p>
            <div class="form__fields">
                <Dropdown
                    v-model="firstDayDefault"
                    :options="firstDayFull"
                    class="form__field select"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Container Width</p>
            <div class="form__fields">
                <Dropdown
                    v-model="containerWidthDefault"
                    :options="containerWidthFull"
                    class="form__field select"
                />
            </div>
        </div>
        <div class="form__item">
            <p class="form__subtitle">Homepage</p>
            <div class="form__fields">
                <Dropdown
                    v-model="homepageDefault"
                    :options="homepageFull"
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
                    v-model="indentSize"
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
                        v-model="PersonalCode1"
                    />
                    -
                    <input
                        type="text"
                        class="form__number field"
                        v-model="PersonalCode2"
                    />
                    -
                    <input
                        type="text"
                        class="form__number field"
                        v-model="PersonalCode3"
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
            сompany: 'Star and Moon',
            firstDayDefault: 'Monday',
            firstDayFull: ['Monday', 'Sunday', 'System'],
            containerWidthDefault: 'Fixed',
            containerWidthFull: ['Fixed', 'Absolute', 'Relative'],
            homepageDefault: 'Starred Projects',
            homepageFull: ['Starred Projects', 'Projects', 'About'],
            indentSize: 'Default',
            PersonalCode1: 1234,
            PersonalCode2: 4321,
            PersonalCode3: 5678,
            radio: 'Light',
        }
    },
    methods: {
        thems() {
            this.radio == 'Dark'
                ? document.body.classList.add('dark')
                : document.body.classList.remove('dark')

            localStorage.setItem(
                'monq-lab',
                JSON.stringify({
                    сompany: this.сompany,
                    firstDayDefault: this.firstDayDefault,
                    firstDayFull: this.firstDayFull,
                    containerWidthDefault: this.containerWidthDefault,
                    containerWidthFull: this.containerWidthFull,
                    homepageDefault: this.homepageDefault,
                    homepageFull: this.homepageFull,
                    indentSize: this.indentSize,
                    PersonalCode1: this.PersonalCode1,
                    PersonalCode2: this.PersonalCode2,
                    PersonalCode3: this.PersonalCode3,
                    radio: this.radio,
                })
            )
        },

        localStorageOperations() {
            if (localStorage.getItem('monq-lab')) {
                this.сompany = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).сompany
                this.firstDayDefault = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).firstDayDefault
                this.firstDayFull = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).firstDayFull
                this.containerWidthDefault = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).containerWidthDefault
                this.containerWidthFull = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).containerWidthFull
                this.homepageDefault = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).homepageDefault
                this.homepageFull = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).homepageFull
                this.indentSize = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).indentSize
                this.PersonalCode1 = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).PersonalCode1
                this.PersonalCode2 = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).PersonalCode2
                this.PersonalCode3 = JSON.parse(
                    localStorage.getItem('monq-lab')
                ).PersonalCode3
                this.radio = JSON.parse(localStorage.getItem('monq-lab')).radio
            }
        },
    },
    mounted() {
        this.radio == 'Dark'
            ? document.body.classList.add('dark')
            : document.body.classList.remove('dark')
    },
    beforeMount() {
        this.localStorageOperations()
    },
}
</script>

<style lang="scss" scoped>
@import 'styles/main';
</style>
