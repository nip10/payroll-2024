export const pensions_1 = {
  incomeType: "Pensões",
  context: "Não casado ou casado dois titulares",
  periods: [
    {
      period: {
        start: new Date(2024, 0, 1),
        end: new Date(2024, 7, 31),
      },
      brackets: [
        { remuneracaoMensalMax: 820, taxaMarginalMax: 0, parcelaAbate: 0 },
        {
          remuneracaoMensalMax: 838.62,
          taxaMarginalMax: 0.1325,
          parcelaAbate: (R: number) => 0.1325 * 2.6 * (1199.43 - R),
        },
        {
          remuneracaoMensalMax: 935.4,
          taxaMarginalMax: 0.18,
          parcelaAbate: (R: number) => 0.18 * 1.4 * (1437.65 - R),
        },
        {
          remuneracaoMensalMax: 944.79,
          taxaMarginalMax: 0.186,
          parcelaAbate: 132.18,
        },
        {
          remuneracaoMensalMax: 1434,
          taxaMarginalMax: 0.265,
          parcelaAbate: 206.82,
        },
        {
          remuneracaoMensalMax: 1816.07,
          taxaMarginalMax: 0.268,
          parcelaAbate: 211.12,
        },
        {
          remuneracaoMensalMax: 2035.71,
          taxaMarginalMax: 0.3275,
          parcelaAbate: 319.18,
        },
        {
          remuneracaoMensalMax: 2278.21,
          taxaMarginalMax: 0.37,
          parcelaAbate: 405.7,
        },
        {
          remuneracaoMensalMax: 3364.36,
          taxaMarginalMax: 0.435,
          parcelaAbate: 553.79,
        },
        {
          remuneracaoMensalMax: 5771.64,
          taxaMarginalMax: 0.45,
          parcelaAbate: 604.26,
        },
        {
          remuneracaoMensalMax: 6178.86,
          taxaMarginalMax: 0.48,
          parcelaAbate: 777.41,
        },
        {
          remuneracaoMensalMax: 18150.29,
          taxaMarginalMax: 0.505,
          parcelaAbate: 931.89,
        },
        {
          remuneracaoMensalMax: Infinity,
          taxaMarginalMax: 0.53,
          parcelaAbate: 1385.65,
        },
      ],
    },
    {
      period: {
        start: new Date(2024, 8, 1),
        end: new Date(2024, 9, 31),
      },
      brackets: [
        { remuneracaoMensalMax: 820, taxaMarginalMax: 0, parcelaAbate: 0 },
        { remuneracaoMensalMax: 937, taxaMarginalMax: 0, parcelaAbate: 0 },
        { remuneracaoMensalMax: 993, taxaMarginalMax: 0, parcelaAbate: 0 },
        { remuneracaoMensalMax: 1105, taxaMarginalMax: 0, parcelaAbate: 0 },
        { remuneracaoMensalMax: 1202, taxaMarginalMax: 0, parcelaAbate: 0 },
        {
          remuneracaoMensalMax: 1819,
          taxaMarginalMax: 0.0375,
          parcelaAbate: 45.075,
        },
        {
          remuneracaoMensalMax: 2053,
          taxaMarginalMax: 0.08,
          parcelaAbate: 122.383,
        },
        {
          remuneracaoMensalMax: 2278,
          taxaMarginalMax: 0.1065,
          parcelaAbate: 176.787,
        },
        {
          remuneracaoMensalMax: 3364,
          taxaMarginalMax: 0.2175,
          parcelaAbate: 429.645,
        },
        {
          remuneracaoMensalMax: 5775,
          taxaMarginalMax: 0.45,
          parcelaAbate: 1211.775,
        },
        {
          remuneracaoMensalMax: 18150,
          taxaMarginalMax: 0.505,
          parcelaAbate: 1529.4,
        },
        {
          remuneracaoMensalMax: Infinity,
          taxaMarginalMax: 0.53,
          parcelaAbate: 1983.15,
        },
      ],
    },
    {
      period: {
        start: new Date(2024, 10, 1),
        end: new Date(2024, 11, 31),
      },
      brackets: [
        { remuneracaoMensalMax: 820, taxaMarginalMax: 0, parcelaAbate: 0 },
        {
          remuneracaoMensalMax: 937,
          taxaMarginalMax: 0.13,
          parcelaAbate: (R: number) => 0.13 * 2.6 * (1193.51 - R),
        },
        {
          remuneracaoMensalMax: 993,
          taxaMarginalMax: 0.165,
          parcelaAbate: (R: number) => 0.165 * 1.35 * (1476.15 - R),
        },
        {
          remuneracaoMensalMax: 1105,
          taxaMarginalMax: 0.175,
          parcelaAbate: 117.95,
        },
        {
          remuneracaoMensalMax: 1202,
          taxaMarginalMax: 0.25,
          parcelaAbate: 200.85,
        },
        {
          remuneracaoMensalMax: 1819,
          taxaMarginalMax: 0.26,
          parcelaAbate: 212.86,
        },
        {
          remuneracaoMensalMax: 2053,
          taxaMarginalMax: 0.325,
          parcelaAbate: 331.12,
        },
        {
          remuneracaoMensalMax: 2278,
          taxaMarginalMax: 0.355,
          parcelaAbate: 392.72,
        },
        {
          remuneracaoMensalMax: 3364,
          taxaMarginalMax: 0.435,
          parcelaAbate: 574.96,
        },
        {
          remuneracaoMensalMax: 5775,
          taxaMarginalMax: 0.45,
          parcelaAbate: 625.42,
        },
        {
          remuneracaoMensalMax: 18150,
          taxaMarginalMax: 0.505,
          parcelaAbate: 943.05,
        },
        {
          remuneracaoMensalMax: Infinity,
          taxaMarginalMax: 0.53,
          parcelaAbate: 1396.81,
        },
      ],
    },
  ],
};
