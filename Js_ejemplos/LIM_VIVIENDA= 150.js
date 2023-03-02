LIM_VIVIENDA= 150
IMPUESTO= 750

let PFINAL
let desc


FPAGO=7

if(FPAGO>=1&&FPAGO<=3){
    console.log('Pago en periodo 1')
        desc=(IMPUESTO*0.10)
        console.log(desc)
    PFINAL=(IMPUESTO-desc)
    console.log(PFINAL)
        
    
} else if(FPAGO>=4&& FPAGO<=5){
    console.log('Pago en periodo 2')
      desc=(IMPUESTO*0.05)
        console.log(desc)
    PFINAL=(IMPUESTO-desc)
    console.log(PFINAL)
}else{
    console.log('Pago en periodo 3')
      desc=(IMPUESTO*0.03)
       console.log(desc)
   PFINAL=(IMPUESTO-desc)
   console.log(PFINAL)
}