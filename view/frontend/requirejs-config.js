var config = {
    map: {
        '*': {
            mage2tvjs_coffee: "Mage2tv_Js/js/requirejs-example"
        }
    },
    config: {
      mixins: {
          'Magento_Checkout/js/checkout-data': {
              'Mage2tv_Js/js/checkout-data-mixin': true
          }
      }
    }
};