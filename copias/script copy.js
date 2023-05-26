function CardMob() {

      

      /* Variaveis das partes do formulario que estão com o display block */
      var wpformsPage1 = document.querySelector('.wpforms-page .wpforms-page-1');
      var wpformsPage2 = document.querySelector('.wpforms-page .wpforms-page-2');
      var wpformsPage3 = document.querySelector('.wpforms-page .wpforms-page-3');
      var wpformsPage4 = document.querySelector('.wpforms-page .wpforms-page-4 .last');

      /* Container que vai ficar todo o conteudo, topo da pagina */
      var etPbTextInnerP = document.querySelector('#inicial');

      /* Substituição do conteudo que estava dentro da div com id 'inicial' */
      etPbTextInnerP.innerHTML = `
            <div class="rck-forms-container">
                  <div class="rck-box-text">
                        <h2><strong>Ultragaz Energia Inteligente:</strong> a solução para <strong>reduzir</strong> sua conta de luz em
                              <strong>até 20% todos os meses!</strong></h2>
                        
                        <ul class="rck-box-text-list">
                              <li>Com uso de fontes renováveis</li>
                              <li>Escolha inteligente de energia elétrica</li>
                              <li>100% digital para aderir</li>
                        </ul>
                  </div>
                  <div class="rck-box-form" id="rck-box-form">
                        
                  </div>
            </div>
      `;

      /* Adicionando a parte que vai ficar o formulario a uma função */
      var rckBoxForm = document.getElementById('rck-box-form');

      /* Variave que contem a classe de todo o formulario */
      var formTd = document.querySelector('.et_pb_column.et_pb_column_1_2.et_pb_column_11.et_pb_css_mix_blend_mode_passthrough.et-last-child');
      
      /* Adicionando o formulario na classe rck-box-form */
      rckBoxForm.appendChild(formTd)


      function addStyle(styles) {
            var css = document.createElement("style");
            css.type = "text/css";

            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));

            document.getElementsByTagName("head")[0].appendChild(css);
      }
      var styles = `
.wpforms-page.wpforms-page-1 {
      display: block !important;
}

.wpforms-page.wpforms-page-2 {
      display: block !important;
}

.wpforms-page.wpforms-page-3 {
      display: block !important;
}

.wpforms-page.wpforms-page-4.last {
      display: block !important;
}

.wpforms-submit-container {
      display: block !important;
}

/*  */
div.et_pb_section.et_pb_section_1 {
      background-image: none !important;
      display: flex;
      justify-content: center;
      align-items: center;
}


/* TEste */
#inicial {
      display: flex;
      justify-content: center;
      background-image: url('https://energia.ultragaz.com.br/wp-content/uploads/2023/05/Plano-de-fundo-ultragaz.webp');
      background-size: cover;
}

.rck-forms-container {
      width: 100%;
      max-width: 1400px;
      display: flex;
}

.rck-box-text {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

}

.rck-box-text h2 {
      font-size: 50px;
      width: 75%;
      line-height: 70px;
      margin-bottom: 50px;
}

.rck-box-text-list {
      border: 2px solid #000FFF;
      border-radius: 20px;
      padding: 20px 20% !important;
      line-height: 26px;
}

.rck-box-form {
      width: 100%;
      height: auto;
}

.et_pb_with_border {
      border: none!important;
}

.et_pb_with_border .et_pb_column_1_2 .et_pb_column .et_pb_column_10 .et_pb_css_mix_blend_mode_passthroug{
      margin: 0;
      padding: 0;
}

.et_pb_column_10 {
      border-right-width: 2px;
      border-right-color: #d0d5dd;
      padding-right: 0!important;
}

.et_pb_with_border .et_pb_row .et_pb_row_6{
      display: flex;
      justify-content: center;
}

.et_pb_gutters3 .et_pb_column_1_2,
.et_pb_gutters3.et_pb_row .et_pb_column_1_2 {
      width: 100%!important;
}

div.wpforms-container-full .wpforms-form .wpforms-pagebreak-left {
      text-align: left;
      display: none!important;
}
.et_pb_row .et_pb_column.et-last-child,
.et_pb_row .et_pb_column:last-child,
.et_pb_row_inner .et_pb_column.et-last-child,
.et_pb_row_inner .et_pb_column:last-child {
      margin-right: 0!important;
      background: #fff!important;
}

#wpforms-submit-651.wpforms-submit.botao_enviar_form {
      float: none !important;
      margin-top: 0 !important;
}
      `;

      addStyle(styles);
}

CardMob();