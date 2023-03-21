//1) 
let indice = 13
let soma = 0
let k = 0

for(let k = 0; k < indice; k++){
    k = k + 1
    soma = soma + k
}
console.log(soma);    //return soma

/*------------------------------------------------------------------------------------------------------------------*/
// 2) 
//iniciais
let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = "";

//numero informado no código
let nInformado = 11;

//escrita da sequencia de cada numero
fibonacci += numA + " " + numB;


//contador da sequencia de cada numero contido nela
for(let count = 1; count <= nInformado; count++){
    numC = numA + numB
    fibonacci += " " + numC
    numA = numB;
    numB = numC;
};

//se o numero informado pertence ou nao a sequencia
if(fibonacci.includes(nInformado)){
    console.log(`A sequência inclui o número informado: ${nInformado}`);
} else {
    console.log(`A sequência não inclui o número informado: ${nInformado}`);
}

//log da sequencia de fibonacci do numero informado
console.log(fibonacci);    


/*------------------------------------------------------------------------------------------------------------------*/
//3)

const data = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

//coloquei o json no mongoDB e fiz as buscas pelo filter { field: 'value' }
//onde { valor: { $lt: 2000 }} - sendo que observei os valores mais baixos
console.log(data[13].valor); 

//onde { valor: { $gt: 48000 }} - observei os valores mais altos
console.log(data[15].valor);


/*------------------------------------------------------------------------------------------------------------------*/
// 4)

let saopaulo = 67836.43;
let rio = 36678.66;
let minas = 29229.88;
let esanto = 27165.48;
let outros = 19849.53;



function percentualCadaEstado(){
    let somaTotal = 0;
    
    somaTotal += saopaulo + rio + minas + esanto + outros;
    console.log(somaTotal);

    let pctTotal = 100;

    let pctSp = (saopaulo * pctTotal / somaTotal).toFixed(0);
    let pctRio = (rio * pctTotal / somaTotal).toFixed(0);
    let pctMinas = (minas * pctTotal / somaTotal).toFixed(0);
    let pctEsanto = (esanto * pctTotal / somaTotal).toFixed(0);
    let pctOutros = (outros * pctTotal / somaTotal).toFixed(0);

    console.log(pctSp);
    console.log(pctRio);
    console.log(pctMinas);
    console.log(pctEsanto);
    console.log(pctOutros);

}
percentualCadaEstado()



/*------------------------------------------------------------------------------------------------------------------*/
// 5) reverter a string
let str = 'winter';

function reverterString(string){

    let newStr = '';

    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    };
    console.log(newStr);    //return newStr
};

reverterString(str)
