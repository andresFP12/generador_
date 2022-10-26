const FormGenerar = document.querySelector('#FormGenerarTarjeta')
const NameStudent = document.querySelector('#Name')
const Msg = document.querySelector('#Aprendizaje')

FormGenerar.addEventListener('submit', (e) => {

    e.preventDefault()    
    RenderCard(NameStudent.value, Msg.value)
})

function RenderCard(Name, Message)
{
    document.querySelector('#Student').innerHTML = Name
    document.querySelector('#Aprendido').innerHTML = Message
    ClearInputs()
}

function ClearInputs()
{
    NameStudent.value = ''
    Msg.value = ''
}