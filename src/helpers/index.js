import Vue from 'vue'

Vue.use(Login)

export function Login(email, password) {

    // this will be called only after form is valid. You can do api call here to login

    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer '+this.token,

        },
        body: JSON.stringify({
            email: email,
            password: password,

        }),

    }).then((response) => {
        // console.log(response);
        if (response.ok) {
            return response.json();
        }



    }).then((datas) => {

            //if(datas.status=="true"){
            localStorage["token"] = datas.data.token;
            localStorage["user"] = datas.data.user;


            this.$router.push('/home');

            // }





        }


    ).catch((error) => {
        //console.log(error);
    });





}