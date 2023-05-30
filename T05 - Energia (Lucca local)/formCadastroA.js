// ULTRA - Formulario de cadastro na primeira dobra, versao A (passo unico)

function formsA() {

  let containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');
  
  // Função para o html
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  mobile ? containerIniciar = document.querySelector('.et_pb_section.et_pb_section_2.et_pb_with_background.et_section_regular') : containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');

  containerIniciar.innerHTML = `
    <div class="rck-section">
    <div class="rck-container wpforms-container-full">
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
      <form class="rck-box-form wpforms-form">
        <h2><strong>Cadastre-se agora</strong> e garanta todos os benefícios da <strong>Ultragaz Energia
          Inteligente!</strong>
        </h2>
        <div class="rck-box-form-name">
          <div id="wpforms-651-field_1-container" class="wpforms-field wpforms-field-text" data-field-id="1" style="
            ">
            <label class="wpforms-field-label" for="wpforms-651-field_1"> Nome <span class="wpforms-required-label">*</span></label>
            <input type="text" id="wpforms-651-field_1" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][1]" placeholder="Digite o seu primeiro nome" required="">
          </div>
          <div id="wpforms-651-field_2-container" class="wpforms-field wpforms-field-text" data-field-id="2">
            <label class="wpforms-field-label" for="wpforms-651-field_2">Sobrenome <span class="wpforms-required-label">*</span></label>
            <input type="text" id="wpforms-651-field_2" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][2]" placeholder="Digite o seu sobrenome" required="">
          </div>
        </div>
        <div class="rck-box-form-contact">
          <div id="wpforms-651-field_3-container" class="wpforms-field wpforms-field-email wpforms-has-error flex-row" data-field-id="3">
            <label class="wpforms-field-label" for="wpforms-651-field_3">E-mail <span class="wpforms-required-label">*</span></label>
            <input type="email" id="wpforms-651-field_3" class="wpforms-field-large wpforms-field-required wpforms-error" name="wpforms[fields][3]" placeholder="Digite seu melhor e-mail" spellcheck="false" required="" aria-invalid="true">
          </div>
          <div id="wpforms-651-field_35-container" class="wpforms-field wpforms-field-text flex-row" data-field-id="35">
            <label class="wpforms-field-label" for="wpforms-651-field_35">Telefone <span class="wpforms-required-label">*</span></label>
            <input type="text" id="wpforms-651-field_35" class="wpforms-field-large wpforms-field-required wpforms-masked-input wpforms-valid" data-rule-inputmask-incomplete="1" data-inputmask-mask="(99) 9999-9999[9]" name="wpforms[fields][35]" placeholder="(XX) XXXX-XXXX" required="" inputmode="text" aria-invalid="false">
          </div>
        </div>
        <div class="rck-box-form-ass">
          <label class="wpforms-field-label" for="">Assinatura para <span class="wpforms-required-label">*</span></label>
          <div class="rck-box-form-ass-check">
            <input type="radio" name="assinatura" id="wpforms-651-field_11_1" required checked>Minha casa
            <input type="radio" name="assinatura" id="wpforms-651-field_11_2" required>Minha empresa
          </div>
        </div>
        <div class="rck-box-form-est">
          <label class="wpforms-field-label" for="wpforms-651-field_34">Estado <span class="wpforms-required-label">*</span></label>
          <select id="wpforms-651-field_34" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][34]" required="required">
            <option value="" class="placeholder" disabled="" selected="selected">Selecione seu Estado</option>
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
          <label class="wpforms-field-label" for="wpforms-651-field_6">Distribuidora <span class="wpforms-required-label">*</span></label>
          <select id="wpforms-651-field_6" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][6]" required="required">
            <option value="" class="placeholder" disabled="" selected="selected">Selecione sua distribuidora</option>
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
          <label class="wpforms-field-label" for="wpforms-651-field_16">Custo Mensal <span class="wpforms-required-label">*</span></label>
          <select id="wpforms-651-field_16" class="wpforms-field-large wpforms-field-required" name="wpforms[fields][16]" required="required">
            <option value="" class="placeholder" disabled="" selected="selected">Selecione</option>
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
            <option value=""></option>
          </select>
        </div>
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
          <div class="rck-send-terms">
            <div class="rck-send-terms-t">
              <input type="checkbox" name="" id="wpforms-651-field_18_1" required>
              <label for="">Concordo com os <a href="#">Termos de Uso.</a></label>
            </div>
            <div class="rck-send-terms-act">
              <input type="checkbox" name="" id="wpforms-651-field_29_1" required>
              <label for="">Aceito receber conteúdo da Ultragaz Energia sobre produtos
              disponíveis, via e-mail, celular e/ou Whatsapp.</label>
            </div>
          </div>
        </div>
        <button type="submit" id="btnSubmit-rck-form">QUERO ECONOMIZAR</button>
        <p>*Atualmente disponível para os estados de GO, MG, MT, MS, PR, RS e SC. Se seu estado ainda
          não está na lista, avisaremos assim que o serviço estiver disponível.
        </p>
      </form>
    </div>
  </div>
  `;

  // funcao de ligacao entre os forms
  function connectForms() {
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
    let btnSubmit = newForm.querySelector('button');

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
    });


    let AnexaIde = document.querySelector('#AnexaIde');
    AnexaIde.addEventListener('click', () => {
      document.querySelector("#wpforms-651-field_40-container .wpforms-uploader.dz-clickable").click();
    });

    // vinculando submit
    btnSubmit.addEventListener('click', function () {
      originalForm.submit();
    });

  }

  document.body.classList.add("optimize");
  
  connectForms();
}

window.addEventListener("DOMContentLoaded", formsA());