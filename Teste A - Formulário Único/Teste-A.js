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

            /* Style do html */

            .rck-section {
            background-image: url(img/Plano-de-fundo-ultragaz.webp);
            background-size: cover;
            padding: 0 20px 20px;
            color: #4E4E4E;
            border: #909090;
            height: 100vh;
            }
            .rck-section .rck-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            }
            .rck-section .rck-container .rck-box-text {
            color: #000FFF;
            width: 100%;
            max-width: 500px;
            }
            .rck-section .rck-container .rck-box-text h2 {
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            }
            .rck-section .rck-container .rck-box-text h2 strong {
            font-weight: 700;
            }
            .rck-section .rck-container .rck-box-text ul {
            display: none;
            }
            .rck-section .rck-container .rck-box-form {
            background: #FFFFFF;
            padding: 5px 20px;
            border-radius: 23px;
            width: 100%;
            max-width: 500px;
            }
            .rck-section .rck-container .rck-box-form h2 {
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            color: #4E4E4E;
            }
            .rck-section .rck-container .rck-box-form h2 strong {
            color: #000FFF;
            font-weight: 700;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-name input {
            width: 100%;
            height: 35px;
            margin-bottom: 20px;
            border: none;
            border-bottom: 1px solid #909090;
            font-size: 14px;
            font-weight: 700;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-contact input {
            width: 100%;
            height: 35px;
            margin-bottom: 20px;
            border: none;
            border-bottom: 1px solid #909090;
            font-size: 14px;
            font-weight: 700;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-contact .rck-box-form-contact-tel {
            margin-bottom: 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass {
            text-align: center;
            margin: 20px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass label {
            margin: 10px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass .rck-box-form-ass-check {
            display: flex;
            align-items: center;
            justify-content: space-between;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass .rck-box-form-ass-check input {
            background: red;
            width: 20px;
            height: 20px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-est {
            width: 100%;
            display: flex;
            align-items: center;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-est select {
            width: 100%;
            border: 1px solid #909090;
            color: #4E4E4E;
            border-radius: 6px;
            padding: 2px;
            margin-left: 10px;
            font-size: 18px;
            font-weight: 500;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-dist {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 20px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-dist select {
            width: 100%;
            border: 1px solid #909090;
            color: #4E4E4E;
            border-radius: 6px;
            padding: 2px;
            margin-left: 10px;
            font-size: 18px;
            font-weight: 500;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-cust {
            width: 100%;
            display: flex;
            align-items: center;
            margin: 20px 0;
            font-size: 12px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-cust select {
            width: 60%;
            border: 1px solid #909090;
            color: #4E4E4E;
            border-radius: 6px;
            padding: 2px;
            margin-left: 10px;
            font-size: 18px;
            font-weight: 500;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send {
            margin-bottom: 20px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-opt {
            display: flex;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-opt .blocoExemp {
            width: 100%;
            height: 50px;
            margin: 20px 0;
            border-radius: 5px;
            border: 1px solid #909090;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-opt .blocoExemp:nth-child(1) {
            margin-right: 20px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms {
            display: flex;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-t {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-t label {
            font-size: 12px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-act {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-act label {
            font-size: 6px;
            text-align: center;
            }
            .rck-section .rck-container .rck-box-form button {
            width: 100%;
            height: 50px;
            background: linear-gradient(180deg, rgba(0, 255, 255, 0.42) 0%, rgba(0, 15, 255, 0.42) 100%), #000FFF;
            border-radius: 9px;
            color: #fff;
            font-weight: 700;
            font-size: 22px;
            border: none;
            }
            .rck-section .rck-container .rck-box-form p {
            text-align: center;
            font-size: 10px;
            }

            @media only screen and (min-width: 992px) {
            .rck-section {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            }
            .rck-section .rck-container {
            display: flex;
            flex-direction: row;
            }
            .rck-section .rck-container .rck-box-text h2 {
            font-size: 40px;
            text-align: start;
            width: 100%;
            max-width: 420px;
            }
            .rck-section .rck-container .rck-box-text ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #000FFF;
            width: 100%;
            max-width: 410px;
            padding: 10px;
            border-radius: 10px;
            }
            .rck-section .rck-container .rck-box-form {
            background: #FFFFFF;
            padding: 5px 40px;
            border-radius: 23px;
            width: 100%;
            max-width: 500px;
            }
            .rck-section .rck-container .rck-box-form h2 {
            font-size: 20px;
            margin: 10px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-name {
            display: flex;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-name input {
            width: 100%;
            margin-bottom: 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-name input:nth-child(2) {
            margin-left: 20px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-contact input {
            margin-bottom: 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass {
            text-align: center;
            margin: 0;
            display: flex;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-dist {
            margin: 10px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-cust {
            margin: 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-cust .rck-box-form-cust-label {
            font-size: 16px;
            width: 40%;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-cust .rck-box-form-cust-select {
            width: 90%;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send {
            margin: 0;
            margin-bottom: 10px;
            display: flex;
            padding: 10px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-opt {
            display: flex;
            border-right: 1px solid #4E4E4E;
            width: 100%;
            padding-right: 10px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-opt .blocoExemp {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-opt .blocoExemp:nth-child(1) {
            margin-right: 10px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 0 0 10px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-t {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 5px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-act {
            width: 100%;
            display: flex;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-send .rck-send-terms .rck-send-terms-act label {
            font-size: 9px;
            text-align: start;
            }
            }
            @media only screen and (min-width: 1400px) {
            .rck-section .rck-container {
            display: flex;
            justify-content: space-evenly;
            }
            .rck-section .rck-container .rck-box-text h2 {
            font-size: 47px;
            text-align: start;
            width: 100%;
            max-width: 100%;
            }
            .rck-section .rck-container .rck-box-form h2 {
            font-size: 24px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-name {
            margin: 20px 0;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-name input {
            font-size: 20px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-contact input {
            font-size: 18px;
            margin-bottom: 20px;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass {
            margin: 10px 0;
            display: flex;
            align-items: center;
            }
            .rck-section .rck-container .rck-box-form .rck-box-form-ass input {
            font-size: 18px;
            margin: 20px 10px;
            }
            }

      `;

      
      

      // Função para o html
      var containerIniciar = document.querySelector('.et_pb_section.et_pb_section_1.et_pb_with_background.et_section_regular');
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

                        <form class="rck-box-form">
                              <h2><strong>Cadastre-se agora</strong> e garanta todos os benefícios da <strong>Ultragaz Energia
                                          Inteligente!</strong></h2>

                              <div class="rck-box-form-name">
                                    <input type="text" id="wpforms-651-field_1" placeholder="Nome: ">
                                    <input type="text" id="wpforms-651-field_2" placeholder="Sobrenome: ">
                              </div>

                              <div class="rck-box-form-contact">
                                    <input type="email" id="wpforms-651-field_3" placeholder="Email: ">
                                    <input type="tel" id="wpforms-651-field_35" placeholder="Telefone: ( )" class="rck-box-form-contact-tel">
                              </div>

                              <div class="rck-box-form-ass">
                                    <label for="">Assinatura para:</label>
                                    <div class="rck-box-form-ass-check">
                                          <input type="radio" name="" id="wpforms-651-field_11_1">Minha casa
                                          <input type="radio" name="" id="wpforms-651-field_11_2">Minha empresa
                                    </div>
                              </div>

                              <div class="rck-box-form-est">
                                    <label for="">Estado: </label>

                                    <select id="wpforms-651-field_34" name="newform-select-estado" required="required">
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

                                    <select id="wpforms-651-field_6" name="newform-select-distribuidora" required="required">
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

                                    <select id="wpforms-651-field_16" name="newform-select-custo" required="required">
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

                              <div class="rck-box-form-send">
                                    <div class="rck-send-opt">
                                          <div class="blocoExemp"></div>
                                          <div class="blocoExemp"></div>
                                    </div>

                                    <div class="rck-send-terms">
                                          <div class="rck-send-terms-t">
                                                <input type="checkbox" name="" id="wpforms-651-field_18_1">
                                                <label for="">Concordo com os <a href="#">Termos de Uso.</a></label>
                                          </div>

                                          <div class="rck-send-terms-act">
                                                <input type="checkbox" name="" id="wpforms-651-field_29_1">
                                                <label for="">Aceito receber conteúdo da Ultragaz Energia sobre produtos
                                                      disponíveis, via meios
                                                      de contato inseridos por mim ativamente, tais como e-mail, celular e
                                                      Whatsapp.</label>
                                          </div>

                                    </div>
                              </div>

                              <button type="submit">QUERO ECONOMIZAR</button>

                              <p>*Atualmente disponível para os estados de GO, MG, MT, MS, PR, RS e SC. Se seu estado ainda
                                    não está na lista, avisaremos assim que o serviço estiver disponível.</p>

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

            // vinculando submit
            btnSubmit.addEventListener('click', function () {
                  originalForm.submit();
            });

      }

      function addStyle(styles) {
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
      addStyle(styles);
      connectForms();
}

window.addEventListener("DOMContentLoaded", formsA());