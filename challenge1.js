const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMImark = massMark/(heightMark * heightMark);

const BMIjohn = massJohn/(heightJohn * heightJohn);

const markHigherBMI = BMImark > BMIjohn;


console.log(BMImark, BMIjohn, markHigherBMI);
