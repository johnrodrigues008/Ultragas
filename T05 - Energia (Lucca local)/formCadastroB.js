// ULTRA - Formulario de cadastro na primeira dobra, versao B (dois passos)

function formsB() {

  let containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');
  
  // Função para o html
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  mobile ? containerIniciar = document.querySelector('.et_pb_section.et_pb_section_2.et_pb_with_background.et_section_regular') : containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');

  containerIniciar.innerHTML = `
    <div class="rck-section">
      <div class="rck-container">
      <div class="rck-box-text">
        <h2><strong>Ultragaz Energia Inteligente:</strong> a solução para <strong>reduzir</strong> sua
          conta de luz
          em
          <strong>até 20% todos os meses!</strong>
        </h2>

        <ul>
          <li>Com uso de fontes renováveis</li>
          <li>Escolha inteligente de energia elétrica</li>
          <li>100% digital para aderir</li>
        </ul>
      </div>

      <!-- Etapa 1 -->
      <form class="rck-box-form" id="rck-box-form">
        
        <h2>
          <strong>Cadastre-se agora</strong> e garanta todos os benefícios da <strong>Ultragaz Energia
          Inteligente!</strong>
        </h2>

        <div class="rck-box-form-etp">
          <div class="form-etp">
            <p class="form-etp-one">1</p>
            Dados pessoais
          </div>
          <div class="form-etp">
            <p class="form-etp-two">2</p>
            Informações
          </div>
        </div>
        
        <div class="rck-box-form-name">
          <input type="text" id="wpforms-651-field_1" placeholder="Nome: ">
          <input type="text" id="wpforms-651-field_2" placeholder="Sobrenome: ">
        </div>

        <div class="rck-box-form-contact">
          <input type="email" id="wpforms-651-field_3" placeholder="Email: ">
          <input type="tel" id="wpforms-651-field_35" placeholder="Telefone: (  )" class="rck-box-form-contact-tel">
        </div>

        <!-- Radio e empresa -->

        <div class="rck-box-form-ass">
          <label for="">Assinatura para:</label>
          <div class="rck-box-form-ass-check">
            <input type="radio" name="assinatura" id="wpforms-651-field_11_1">Minha casa
            <input type="radio" name="assinatura" id="wpforms-651-field_11_2">Minha empresa
          </div>
        </div>

        <!-- Link já configurado -->
        <a class="rck-next" id="rck-next">
          AVANÇAR 
          <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13_755)">
            <path d="M17.9624 33.9811C21.3209 33.9811 24.6041 32.9852 27.3966 31.1193C30.1891 29.2534 32.3657 26.6013 33.6509 23.4984C34.9362 20.3955 35.2725 16.9812 34.6172 13.6871C33.962 10.3931 32.3447 7.36738 29.9699 4.99253C27.595 2.61767 24.5693 1.00038 21.2752 0.345155C17.9812 -0.310066 14.5669 0.0262175 11.464 1.31148C8.3611 2.59674 5.70901 4.77326 3.8431 7.56579C1.97719 10.3583 0.981262 13.6414 0.981262 17C0.981262 21.5037 2.77034 25.8229 5.95492 29.0075C9.1395 32.1921 13.4587 33.9811 17.9624 33.9811ZM15.7735 7.32075L25.4528 17.1121L15.7548 26.6979L13.3775 24.2832L20.6607 17.0798L13.3588 9.69811L15.7735 7.32075Z"
              fill="white" />
            </g>
            <defs>
            <clipPath id="clip0_13_755">
              <rect width="33.9623" height="33.9623" fill="white" transform="translate(0.981262 0.0188599)" />
            </clipPath>
            </defs>
          </svg>

        </a>

        <p>
          *Atualmente disponível para os estados de GO, MG, MT, MS, PR, RS e SC. Se seu estado ainda
          não está na lista, avisaremos assim que o serviço estiver disponível.
        </p>

      </form>

      <!-- Etapa 2 -->
      <form class="rck-box-form-next" id="rck-box-form-next">
        <h2><strong>Cadastre-se agora</strong> e garanta todos os benefícios da <strong>Ultragaz Energia
            Inteligente!</strong>
        </h2>

        <div class="rck-box-form-etp">
          <div class="form-etp">
            <p class="form-etp-one">1</p>
            Dados pessoais
          </div>
          <div class="form-etp">
            <p class="form-etp-two">2</p>
            Informações
          </div>
        </div>

        <div class="rck-box-form-est">
          <label for="">Estado: </label>

          <select id="wpforms-651-field_34">
            <option value="" class="placeholder" disabled="" selected="selected">Selecione seu
            Estado</option>
            <option value="ACRE - AC">ACRE - AC</option>
            <option value="ALAGOAS - AL">ALAGOAS - AL</option>
            <option value="AMAPÁ - AP">AMAPÁ - AP</option>
            <option value="AMAZONAS - AM">AMAZONAS - AM</option>
            <option value="BAHIA - BA">BAHIA - BA</option>
            <option value="CEARÁ - CE">CEARÁ - CE</option>
            <option value="DISTRITO FEDERAL - DF">DISTRITO FEDERAL - DF</option>
            <option value="ESPÍRITO SANTO - ES">ESPÍRITO SANTO - ES</option>
            <option value="GOIÁS - GO">GOIÁS - GO</option>
            <option value="MARANHÃO - MA">MARANHÃO - MA</option>
            <option value="MATO GROSSO - MT">MATO GROSSO - MT</option>
            <option value="MATO GROSSO DO SUL - MS">MATO GROSSO DO SUL - MS</option>
            <option value="MINAS GERAIS - MG">MINAS GERAIS - MG</option>
            <option value="PARÁ - PA">PARÁ - PA</option>
            <option value="PARAÍBA - PB ">PARAÍBA - PB </option>
            <option value="PARANÁ - PR">PARANÁ - PR</option>
            <option value="PERNAMBUCO - PE">PERNAMBUCO - PE</option>
            <option value="PIAUÍ - PI">PIAUÍ - PI</option>
            <option value="RIO DE JANEIRO - RJ">RIO DE JANEIRO - RJ</option>
            <option value="RIO GRANDE DO NORTE - RN">RIO GRANDE DO NORTE - RN</option>
            <option value="RIO GRANDE DO SUL - RS">RIO GRANDE DO SUL - RS</option>
            <option value="RONDÔNIA - RO">RONDÔNIA - RO</option>
            <option value="RORAIMA - RR">RORAIMA - RR</option>
            <option value="SANTA CATARINA - SC">SANTA CATARINA - SC</option>
            <option value="SÃO PAULO - SP">SÃO PAULO - SP</option>
            <option value="SERGIPE - SE">SERGIPE - SE</option>
            <option value="TOCANTINS - TO">TOCANTINS - TO</option>
          </select>
        </div>

        <div class="rck-box-form-dist">
          <label for="">Distribuidora: </label>

          <select id="wpforms-651-field_6">
            <option value="" class="placeholder" disabled="" selected="selected">Selecione sua
            distribuidora
            </option>
            <option value="CELESC - SC">CELESC - SC</option>
            <option value="CEMIG - MG">CEMIG - MG</option>
            <option value="COPEL - PR">COPEL - PR</option>
            <option value="EQUATORIAL - GO">EQUATORIAL - GO</option>
            <option value="ENERGISA - MS">ENERGISA - MS</option>
            <option value="ENERGISA - MT">ENERGISA - MT</option>
            <option value="ENERGISA SUL SUDESTE - MG">ENERGISA SUL SUDESTE - MG</option>
            <option value="LIGHT - RJ">LIGHT - RJ</option>
            <option value="RGE - RS">RGE - RS</option>
            <option value="Outra">Outra</option>
          </select>

        </div>

        <div class="rck-box-form-cust">
          <label class="rck-box-form-cust-label" for="wpforms-651-field_16">Seu custo mensal:
          </label>

          <select id="wpforms-651-field_16" class="rck-box-form-cust-select"
            name="wpforms[fields][16]" required="required">
            <option value="" class="placeholder" disabled="" selected="selected">Selecione
            </option>
            <option value="Menor que R$150">Menor que R$150</option>
            <option value="R$150 a R$300">R$150 a R$300</option>
            <option value="R$300 a R$500">R$300 a R$500</option>
            <option value="R$500 a R$700">R$500 a R$700</option>
            <option value="R$700 a R$1.000">R$700 a R$1.000</option>
            <option value="R$1.000 a R$2.000">R$1.000 a R$2.000</option>
            <option value="R$2.000 a R$5.000">R$2.000 a R$5.000</option>
            <option value="R$5.000 a R$10.000">R$5.000 a R$10.000</option>
            <option value="R$10.000 a R$20.000">R$10.000 a R$20.000</option>
            <option value="R$20.000 a R$30.000">R$20.000 a R$30.000</option>
            <option value="R$30.000 a R$50.000">R$30.000 a R$50.000</option>
            <option value="Maior que R$50.000">Maior que R$50.000</option>
          </select>
        </div>

  <!-- Criar um click para adicionar a conta de luz -->
        <div class="rck-box-form-send">
          <div class="rck-send-opt">
            <div class="blocoExemp" id="AnexaLuz">
            <svg viewBox="0 0 44 44">
              <g fill="#909090">
                <path d="m43.666 12.886-12.552-12.552c-0.214-0.214-0.5042-0.33422-0.8071-0.33422h-22.555c-4.274 0-7.7511 3.4771-7.7511 7.7511v28.498c0 4.274 3.4771 7.7511 7.7511 7.7511h28.498c4.274 0 7.7511-3.4771 7.7511-7.7511v-22.556c-2e-4 -0.3027-0.1206-0.5929-0.3346-0.8069zm-12.408-9.1799 9.0357 9.0357h-9.0357v-9.0357zm4.9913 38.011h-28.498c-3.0152 0-5.4684-2.4531-5.4684-5.4684v-28.498c0-3.0152 2.4531-5.4684 5.4684-5.4684h21.224v11.601c0 0.6302 0.5111 1.1414 1.1413 1.1414h11.601v21.224c2e-4 3.0153-2.4529 5.4684-5.4682 5.4684z"></path>
                <path d="m19.75 9.9675c-1.1161-1.116-2.5998-1.7307-4.1781-1.7307s-3.0621 0.61461-4.1781 1.7307c-1.1161 1.116-1.7307 2.5998-1.7307 4.1781s0.61457 3.062 1.7307 4.178l11.706 11.706c1.5136 1.5134 3.9757 1.513 5.4889 0 1.5133-1.5134 1.5133-3.9755 0-5.4889l-11.59-11.59c-0.4457-0.4457-1.1686-0.4457-1.6141 0-0.4457 0.4457-0.4457 1.1683 0 1.614l11.59 11.59c0.6232 0.6232 0.6232 1.6375 0 2.2606-0.6232 0.6232-1.6373 0.6232-2.2606 0l-11.706-11.705c-0.685-0.685-1.062-1.5956-1.062-2.564 0-0.9687 0.3772-1.8793 1.062-2.5641 1.414-1.4139 3.7142-1.4139 5.1281 0l12.265 12.265c2.2003 2.2003 2.2003 5.7805 0 7.9809-1.0658 1.0658-2.483 1.6528-3.9903 1.6528-1.5074 0-2.9245-0.587-3.9904-1.6528l-9.4299-9.4302c-0.4457-0.4457-1.1686-0.4457-1.6141 0-0.4457 0.4457-0.4457 1.1684 0 1.614l9.43 9.43c1.497 1.4971 3.4874 2.3215 5.6044 2.3215s4.1075-0.8244 5.6044-2.3215c1.4968-1.497 2.3214-3.4873 2.3214-5.6045 0-2.117-0.8244-4.1076-2.3214-5.6044l-12.265-12.265z"></path>
              </g>
            </svg>

            Enviar conta de luz <strong> (opcional) </strong>
            </div>

            <div class="blocoExemp" id="AnexaIde">
            <svg viewBox="0 0 44 44">
              <g fill="#909090">
                <path d="m43.666 12.886-12.552-12.552c-0.214-0.214-0.5042-0.33422-0.8071-0.33422h-22.555c-4.274 0-7.7511 3.4771-7.7511 7.7511v28.498c0 4.274 3.4771 7.7511 7.7511 7.7511h28.498c4.274 0 7.7511-3.4771 7.7511-7.7511v-22.556c-2e-4 -0.3027-0.1206-0.5929-0.3346-0.8069zm-12.408-9.1799 9.0357 9.0357h-9.0357v-9.0357zm4.9913 38.011h-28.498c-3.0152 0-5.4684-2.4531-5.4684-5.4684v-28.498c0-3.0152 2.4531-5.4684 5.4684-5.4684h21.224v11.601c0 0.6302 0.5111 1.1414 1.1413 1.1414h11.601v21.224c2e-4 3.0153-2.4529 5.4684-5.4682 5.4684z"></path>
                <path d="m19.75 9.9675c-1.1161-1.116-2.5998-1.7307-4.1781-1.7307s-3.0621 0.61461-4.1781 1.7307c-1.1161 1.116-1.7307 2.5998-1.7307 4.1781s0.61457 3.062 1.7307 4.178l11.706 11.706c1.5136 1.5134 3.9757 1.513 5.4889 0 1.5133-1.5134 1.5133-3.9755 0-5.4889l-11.59-11.59c-0.4457-0.4457-1.1686-0.4457-1.6141 0-0.4457 0.4457-0.4457 1.1683 0 1.614l11.59 11.59c0.6232 0.6232 0.6232 1.6375 0 2.2606-0.6232 0.6232-1.6373 0.6232-2.2606 0l-11.706-11.705c-0.685-0.685-1.062-1.5956-1.062-2.564 0-0.9687 0.3772-1.8793 1.062-2.5641 1.414-1.4139 3.7142-1.4139 5.1281 0l12.265 12.265c2.2003 2.2003 2.2003 5.7805 0 7.9809-1.0658 1.0658-2.483 1.6528-3.9903 1.6528-1.5074 0-2.9245-0.587-3.9904-1.6528l-9.4299-9.4302c-0.4457-0.4457-1.1686-0.4457-1.6141 0-0.4457 0.4457-0.4457 1.1684 0 1.614l9.43 9.43c1.497 1.4971 3.4874 2.3215 5.6044 2.3215s4.1075-0.8244 5.6044-2.3215c1.4968-1.497 2.3214-3.4873 2.3214-5.6045 0-2.117-0.8244-4.1076-2.3214-5.6044l-12.265-12.265z"></path>
              </g>
            </svg>
            Enviar doc. de identificação <strong> (opcional) </strong>
            </div>
          </div>
          <!-- termos ok -->
          <div class="rck-send-terms">
            <div class="rck-send-terms-t">
            <input type="checkbox" id="wpforms-651-field_18_1">
            <label for="">Concordo com os <a href="#">Termos de Uso.</a></label>
            </div>

            <div class="rck-send-terms-act">
            <input type="checkbox" name="" id="wpforms-651-field_29_1">
            <label for="">Aceito receber conteúdo da Ultragaz Energia sobre produtos
                          disponíveis, via e-mail, celular e/ou Whatsapp.</label>
            </div>

          </div>
        </div>

        <div class="rck-buttons">
          <a class="rck-next" id="rck-prev">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13_1181)">
              <path d="M12.6617 24.6368C10.2411 24.6368 7.87485 23.919 5.86219 22.5742C3.84953 21.2294 2.28085 19.3179 1.35452 17.0816C0.428196 14.8452 0.185827 12.3844 0.658064 10.0103C1.1303 7.63622 2.29593 5.45548 4.00756 3.74385C5.71919 2.03222 7.89994 0.866588 10.274 0.39435C12.6481 -0.0778866 15.1089 0.164483 17.3453 1.09081C19.5816 2.01714 21.4931 3.58581 22.8379 5.59847C24.1827 7.61114 24.9005 9.97738 24.9005 12.398C24.9005 15.6439 23.6111 18.7569 21.3158 21.0521C19.0206 23.3474 15.9076 24.6368 12.6617 24.6368ZM14.2393 5.42187L7.26317 12.4788L14.2528 19.3876L15.9662 17.6472L10.717 12.4555L15.9796 7.1353L14.2393 5.42187Z"
                fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_13_1181">
                <rect width="24.4776" height="24.4776" fill="white" transform="matrix(-1 0 0 1 24.9005 0.15918)" />
              </clipPath>
            </defs>
            </svg>
            ANTERIOR

          </a>
          
          <a class="rck-next" id="rck-next-enviar">
            ENVIAR
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13_1176)">
              <path d="M13.0498 24.6368C15.4704 24.6368 17.8367 23.919 19.8493 22.5742C21.862 21.2294 23.4307 19.3179 24.357 17.0816C25.2833 14.8452 25.5257 12.3844 25.0534 10.0103C24.5812 7.63622 23.4156 5.45548 21.7039 3.74385C19.9923 2.03222 17.8116 0.866588 15.4375 0.39435C13.0634 -0.0778866 10.6026 0.164483 8.36621 1.09081C6.12986 2.01714 4.21842 3.58581 2.8736 5.59847C1.52878 7.61114 0.810989 9.97738 0.810989 12.398C0.810989 15.6439 2.10043 18.7569 4.39565 21.0521C6.69087 23.3474 9.80386 24.6368 13.0498 24.6368ZM11.4722 5.42187L18.4483 12.4788L11.4588 19.3876L9.74532 17.6472L14.9945 12.4555L9.73186 7.1353L11.4722 5.42187Z"
                fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_13_1176">
                <rect width="24.4776" height="24.4776" fill="white" transform="translate(0.810989 0.15918)" />
              </clipPath>
            </defs>
            </svg>

          </a>
        </div>

        <p>*Atualmente disponível para os estados de GO, MG, MT, MS, PR, RS e SC. Se seu estado ainda
          não está na lista, avisaremos assim que o serviço estiver disponível.</p>

      </form>

      </div>

    </div>
  `;

  /* Variaveis e funçoes de movimentação dos blocos */
  var rckNext = document.getElementById('rck-next');
  rckNext.addEventListener('click', () => {
    document.getElementById("rck-box-form").style.display = "none";
    document.getElementById("rck-box-form-next").style.display = "flex";
  });

  var rckNext = document.getElementById('rck-prev');
  rckNext.addEventListener('click', () => {
    document.getElementById("rck-box-form-next").style.display = "none";
    document.getElementById("rck-box-form").style.display = "flex";
  });

  // funcao de ligacao entre os forms
  function connectForms() {

  // Definir mobile e desktop

    let containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');

    // Função para o html
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    mobile ? containerIniciar = document.querySelector('.et_pb_section.et_pb_section_2.et_pb_with_background.et_section_regular') : containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');

//--- Elementos do NOVO FORMS:

    let newForm = document.querySelector("#rck-box-form");
    let newFormNext = document.querySelector("#rck-box-form-next");

  // newForm
    // dados pessoais
    let inputNome = newForm.querySelector("#wpforms-651-field_1");
    let inputSobrenome = newForm.querySelector("#wpforms-651-field_2");
    
    let inputEmail = newForm.querySelector("#wpforms-651-field_3");
    let inputTelefone = newForm.querySelector("#wpforms-651-field_35");
    
    let inputCasa = newForm.querySelector("#wpforms-651-field_11_1");
    let inputEmpresa = newForm.querySelector("#wpforms-651-field_11_2");

  // newFormNext

    // local e custo
    let selectEstado = newFormNext.querySelector("#wpforms-651-field_34");
    let selectDistribuidora = newFormNext.querySelector("#wpforms-651-field_6");
    let selectCusto = newFormNext.querySelector("#wpforms-651-field_16");

    // acordos
    let inputTermosDeUso = newFormNext.querySelector("#wpforms-651-field_18_1");
    let inputReceberConteudo = newFormNext.querySelector("#wpforms-651-field_29_1");



  // BOTAO ENVIAR
    let btnSubmit = newFormNext.querySelector('#rck-next-enviar');


//---- FORMS ORIGINAL
    let originalForm = document.querySelector('form#wpforms-form-651');

    // armazenando todos os inputs e selects em uma lista
    var inputs = [inputNome, inputSobrenome, inputEmail, inputTelefone, inputCasa,
      inputEmpresa, inputTermosDeUso, inputReceberConteudo];

    var selects = [selectEstado, selectDistribuidora, selectCusto];

    // vinculando campos
    vincularInputs(inputs, originalForm);
    vincularSelects(selects, originalForm);

    function vincularInputs(inputs, form) {
      inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        form[input.id].value = input.value;
      });
      });
    }

    function vincularSelects(selects, form) {
      selects.forEach(function (select) {
      select.addEventListener('change', function () {
        form[select.id].value = select.value;
      });
      });
    }

  //---- Adicionar o arquivo
    let AnexaLuz = document.querySelector('#AnexaLuz');
    AnexaLuz.addEventListener('click', ()=>{
      document.querySelector("#wpforms-651-field_39-container .wpforms-uploader.dz-clickable").click();

      console.log('Luz');
    });


    let AnexaIde = document.querySelector('#AnexaIde');
    AnexaIde.addEventListener('click', () => {
      document.querySelector("#wpforms-651-field_40-container .wpforms-uploader.dz-clickable").click();

      console.log('Identidade');
    });

    // vinculando submit
    btnSubmit.addEventListener('click', function () {
      originalForm.submit();
    });

  

  }

  document.body.classList.add("optimize");

  connectForms();
}

window.addEventListener("DOMContentLoaded", formsB());