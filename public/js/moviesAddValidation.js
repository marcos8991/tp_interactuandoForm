console.log('moviesAddValidator.js exito');
const $ = id => document.getElementById(id);

const validation = (id, texto) => {
    if(!$(id).value) {
        $(id).classList.add('is-invalid')
        $('error-' + id).innerText = texto
    } else {
        $(id).classList.remove('is-invalid');
        $(id).classList.add('is-valid');
        $('error-' + id).innerText = null;
    }
}

window.addEventListener('load', () => {
    let error = [];

    $('title').focus()    

    $('title').addEventListener('blur', function (e) {
        validation('title', 'El título es obligatorio')
        error.push('El título es obligatorio');
    })

    $('rating').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value:
                validation('rating', 'Ingrese la calificación')
                error.push('Ingrese la calificación');
                break;
            case this.value < 0 || this.value > 10:
                this.classList.add('is-invalid')
                $('error-rating').innerText = 'Debe ingresar un número entre 0 y 10'
                error.push('Debe ingresar un número entre 0 y 10');
                break;

            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                $('error-rating').innerText = null
                break;
        }        
    })

    $('awards').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value:
                validation('awards', 'El premio es obligatorio')
                error.push('El premio es obligatorio');
                break;
            case this.value < 0 || this.value > 10:
                this.classList.add('is-invalid')
                $('error-awards').innerText = 'Debe ingresar un número entre 0 y 10'
                error.push('Debe ingresar un número entre 0 y 10');
                break;

            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                $('error-awards').innerText = null
                break;
        }
    })

    $('release_date').addEventListener('blur', function (e) {
        validation('release_date', 'Ingrese fecha de estreno')
        error.push('Ingrese fecha de estreno');
    })

    $('length').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value:
                validation('length', 'La duración es obligatoria')
                error.push('La duración es obligatoria');
                break;
            case this.value < 60 || this.value > 360:
                this.classList.add('is-invalid')
                $('error-length').innerText = 'Debe ingresar un número entre 60 y 360'
                error.push('Debe ingresar un número entre 60 y 360');
                break;

            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                $('error-length').innerText = null
                break;
        }
    })
    $('genre').addEventListener('blur', function (e) {
        validation('genre', 'Ingrese el género')
        error.push('Ingrese el género');
    })

    const formulario = $('form-add-movies');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault()

        for (let i = 0; i < this.elements.length -1; i++) {
            if(this.elements[i].classList.contains('is-invalid') || !this.elements[i].value){
                this.elements[i].classList.add('is-invalid') 

                let errorList = document.getElementById('listado-errores');
                errorList.classList.add('alert-warning');
                errorList.innerHTML = '';
                for (let i = 0; i < error.length; i++) {
                    errorList.innerHTML += `<li >  ${error[i]} </li>`;
                };

                $('error-msg').innerText = 'Los campos señalados son obligatorios'
            }              
        }   
        !error && this.submit()
    })
})