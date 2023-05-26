function CardMob() {
      
      /* Variaveis das partes do formulario que estão com o display block */
      var wpformsPage1 = document.querySelector('.wpforms-page .wpforms-page-1');
      var wpformsPage2 = document.querySelector('.wpforms-page .wpforms-page-2');
      var wpformsPage3 = document.querySelector('.wpforms-page .wpforms-page-3');
      var wpformsPage4 = document.querySelector('.wpforms-page .wpforms-page-4 .last');


      function addStyle(styles) {
            var css = document.createElement("style");
            css.type = "text/css";

            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));

            document.getElementsByTagName("head")[0].appendChild(css);
      }
      var styles = `
            .wpforms-page.wpforms-page-1 {
                  display: none!important;
            }

            .wpforms-page.wpforms-page-2 {
                  display: none!important;
            }

            .wpforms-page.wpforms-page-3 {
                  display: none!important;
            }

            .wpforms-page.wpforms-page-4.last {
                  display: none!important;
            }

            .wpforms-submit-container {
                  display: none!important;
            }

      
      `;

      addStyle(styles);
}

CardMob();