function CardMob() {

      function addStyle(styles) {
            var css = document.createElement("style");
            css.type = "text/css";

            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));

            document.getElementsByTagName("head")[0].appendChild(css);
      }
      var styles = `
            .wpforms-page.wpforms-page-1 {
                  display: block!important;
            }

            .wpforms-page.wpforms-page-2 {
                  display: block!important;
            }

            .wpforms-page.wpforms-page-3 {
                  display: block!important;
            }

            .wpforms-page.wpforms-page-4.last {
                  display: block!important;
            }

            .wpforms-submit-container {
                  display: block!important;
            }


      `;

      addStyle(styles);
}

CardMob();