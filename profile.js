const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    id: {
        presence: true,
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}

const app = Vue.createApp({
    data() {
        return {
            image: './profile.png',
            firstname: null,
            lastname: null,
            id: null,
            gender: null,
            email: null,
            phone: null,
            errors: null,
        }
    },

    methods: {
        checkForm() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                id: this.id,
                gender: this.gender,
                email: this.email,
                phone: this.phone,
            },constraints);

            if(this.errors){
                console.log(this.errors);
            } else {
                alert("Your profile is updated successfully.")
            }
        },
    }
})

app.mount('#app')