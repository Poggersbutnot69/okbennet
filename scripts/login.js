function check(form) {
    username = new Array("schoolsucks", "admin2", "members");
    password = new Array("poggers", "admin2", "members");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('https://mmwmathfree29102818102817192819261947.netlify.app')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0')/* The Administrator homepage*/
		alert("Incorrect Password")
		location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0')
	}
	else {
		alert("Incorrect Username or Password")
		location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0')/*The rick roll*/
	}
}
