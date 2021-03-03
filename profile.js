const app = {
    data() {
        return {
            firstname: 'Chananan',
            lastname: 'Likitsarawit',
            id: '62130500111',
            university: 'KMUTT',
            faculty: 'School of Infomation Technology',
            major: 'Information Technology',
            city: 'Bangkok Thailand',
            image: './images/image.jpg',
        }
    }
}

mountApp = Vue.createApp(app).mount('#app')