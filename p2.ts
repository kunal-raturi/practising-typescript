//objects
type patient = {
  name: string;
  age: number;
  disease: string;
  healthInsurance: boolean;
};
const patient1: patient = {
  name: "kunal",
  age: 26,
  disease: "poor vision",
  healthInsurance: false,
};

console.log(patient1.disease);
