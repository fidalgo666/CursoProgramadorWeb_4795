// ALGO PARECIDO A ESTO

function validateEmailField(event) {
    var inputNode = event.target
  
    if (
      !inputNode.value ||
      inputNode.value.indexOf('@') === -1 ||
      inputNode.value.indexOf('.') === -1
    ) {
      inputNode.classList.remove('is-valid')
      inputNode.classList.add('is-invalid')
    } else {
      inputNode.classList.remove('is-invalid')
      inputNode.classList.add('is-valid')
    }
  
    validateSubmitButton()
  }