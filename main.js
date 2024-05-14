const elsPaymentPeriodRadio=document.querySelectorAll('[name="payment-period"]');
const elPricingNumber=document.querySelectorAll('.pricing-number');

elsPaymentPeriodRadio.forEach(function(elsPaymentPeriodRadio){
  elsPaymentPeriodRadio.addEventListener('change', function(){
    const period=elsPaymentPeriodRadio.value;

    if(period==='annual'){
      elPricingNumber.forEach(function(elPrice){
        elPrice.textContent=elPrice.closest('.pricing').dataset.paymentAnnual;
      })
    }else{
      elPricingNumber.forEach(function(elPrice){
        elPrice.textContent=elPrice.closest('.pricing').dataset.paymentMonthly;
      });

    }
  });
});