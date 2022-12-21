function onHandleSubmitFormSignup(e) {
    e.preventDefault();
    const email = document.getElementById('email_input_signup').value;
    const password = document.getElementById('password_input_signup').value;
    const surnames = document.getElementById('surname_input_signup').value;
    const dates = document.getElementById("date_select_signup").value;
    const name = document.getElementById("name_input_signup").value;
    if (!email || !password || !surnames || !name || !dates)
        window.alert('No puede haber campos en blanco')
    else
        window.alert(`Usuario creado \nNombre: ${name} \nApellidos: ${surnames} \nEmail: ${email} \nPassword: ${password} \nFechas: ${dates}`)
}

function onHandleSubmitFormLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email_input_login').value;
    const password = document.getElementById('password_input_login').value;
    if (!email || !password)
        window.alert('No puede haber campos en blanco')
    else
        window.alert(`Bienvenido, Email: ${email} \nPassword: ${password}`)
}