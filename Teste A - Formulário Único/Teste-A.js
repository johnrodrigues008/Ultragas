// ULTRA - Formulqrio de cadastro na primeira dobra, versao A

function formsA() {

  
  var styles = `
    .optimize .et_pb_column_10 {
      border-width: 0px;
    }

    .optimize .et_pb_column.et_pb_column_11 {
      display:none;
    }

    @media (min-width: 981px){
      .optimize .et_pb_column.et_pb_column_10 {
        margin: 0 25%;
        padding: unset;
      }
    }
  `;
    
  addStyle(styles);
  connectForms();

  // funcao de ligacao entre os forms
  function connectForms (){
    // elementos do NOVO FORMS
    let newForm = document.querySelector("form.rck-box-form");

    // dados pessoais
    let inputNome = newForm.querySelector("#wpforms-651-field_1");
    let inputSobrenome = newForm.querySelector("#wpforms-651-field_2");
    let inputEmail = newForm.querySelector("#wpforms-651-field_3");
    let inputTelefone = newForm.querySelector("#wpforms-651-field_35");

    // casa ou empresa
    let inputCasa = newForm.querySelector("#wpforms-651-field_11_1");
    let inputEmpresa = newForm.querySelector("#wpforms-651-field_11_2");

    // local e custo
    let selectEstado = newForm.querySelector("#wpforms-651-field_34");
    let selectDistribuidora = newForm.querySelector("#wpforms-651-field_6");
    let selectCusto = newForm.querySelector("#wpforms-651-field_16");

    // acordos
    let inputTermosDeUso = newForm.querySelector("#wpforms-651-field_18_1");
    let inputReceberConteudo = newForm.querySelector("#wpforms-651-field_29_1");

    // BOTAO ENVIAR
    let btnSubmit = newForm.querySelector('');

    // FORMS ORIGINAL
    let originalForm = document.querySelector('form#wpforms-form-651');
    
    // armazenando todos os inputs e selects em uma lista
    var inputs = [inputNome, inputSobrenome, inputEmail, inputTelefone, inputCasa, 
                  inputEmpresa, inputTermosDeUso, inputReceberConteudo];
    
    var selects = [selectEstado, selectDistribuidora, selectCusto];
    
    // vinculando campos
    vincularInputs(inputs, originalForm);
    vincularSelects(selects, originalForm);

    function vincularInputs(inputs, form) {
      inputs.forEach(function(input) {
        input.addEventListener('input', function() {
          form[input.id].value = input.value;
        });
      });
    }

    function vincularSelects(selects, form) {
      selects.forEach(function(select) {
        select.addEventListener('change', function() {
          form[select.id].value = select.value;
        });
      });
    }    

    // vinculando submit
    btnSubmit.addEventListener('click', function(){
      originalForm.submit();
    });

  }

  function addStyle(styles){
    document.body.classList.add("optimize");
    
    var css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(styles));
    
    var head = document.getElementsByTagName("head")[0];
    var styleSheets = head.getElementsByTagName("style");
  
    for (let i = 0; i < styleSheets.length; i++) {
      let styleSheet = styleSheets[i];
      if (styleSheet.innerHTML === css.innerHTML) {
        return;
      }
    }
    head.appendChild(css);
  }
}

  window.addEventListener("DOMContentLoaded", formsA());