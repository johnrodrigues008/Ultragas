function CardMob() {




      quant();

      function addStyle(styles) {
            var css = document.createElement("style");
            css.type = "text/css";

            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));

            document.getElementsByTagName("head")[0].appendChild(css);
      }
      var styles = `

  
  
      }
      `;

      addStyle(styles);
}
$(window).ready(CardMob);

/* $(document).ready(CardMob); */
/* window.addEventListener("load", function () {
  CardMob();
}); */