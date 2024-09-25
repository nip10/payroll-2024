export const pensions_2 = {
  incomeType: "Pensões",
  context: "Casado, único titular",
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
          parcelaAbate: (R: number) => 0.1325 * 2.6 * (1272 - R),
        },
        {
          remuneracaoMensalMax: 935.4,
          taxaMarginalMax: 0.18,
          parcelaAbate: (R: number) => 0.18 * 1.4 * (1512.57 - R),
        },
        {
          remuneracaoMensalMax: 944.79,
          taxaMarginalMax: 0.18,
          parcelaAbate: 145.44,
        },
        {
          remuneracaoMensalMax: 1434,
          taxaMarginalMax: 0.182,
          parcelaAbate: 147.34,
        },
        {
          remuneracaoMensalMax: 1816.07,
          taxaMarginalMax: 0.214,
          parcelaAbate: 193.23,
        },
        {
          remuneracaoMensalMax: 2035.71,
          taxaMarginalMax: 0.235,
          parcelaAbate: 231.36,
        },
        {
          remuneracaoMensalMax: 2278.21,
          taxaMarginalMax: 0.257,
          parcelaAbate: 276.15,
        },
        {
          remuneracaoMensalMax: 3364.36,
          taxaMarginalMax: 0.3275,
          parcelaAbate: 436.77,
        },
        {
          remuneracaoMensalMax: 5771.64,
          taxaMarginalMax: 0.367,
          parcelaAbate: 569.67,
        },
        {
          remuneracaoMensalMax: 6178.86,
          taxaMarginalMax: 0.421,
          parcelaAbate: 881.34,
        },
        {
          remuneracaoMensalMax: 18150.29,
          taxaMarginalMax: 0.474,
          parcelaAbate: 1208.82,
        },
        {
          remuneracaoMensalMax: Infinity,
          taxaMarginalMax: 0.53,
          parcelaAbate: 2225.24,
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
        { remuneracaoMensalMax: 1141, taxaMarginalMax: 0, parcelaAbate: 0 },
        { remuneracaoMensalMax: 1487, taxaMarginalMax: 0, parcelaAbate: 0 },
        {
          remuneracaoMensalMax: 1834,
          taxaMarginalMax: 0.03,
          parcelaAbate: 44.61,
        },
        {
          remuneracaoMensalMax: 2250,
          taxaMarginalMax: 0.056,
          parcelaAbate: 92.29,
        },
        {
          remuneracaoMensalMax: 3153,
          taxaMarginalMax: 0.0852,
          parcelaAbate: 157.99,
        },
        {
          remuneracaoMensalMax: 3382,
          taxaMarginalMax: 0.1631,
          parcelaAbate: 403.69,
        },
        {
          remuneracaoMensalMax: 6025,
          taxaMarginalMax: 0.3452,
          parcelaAbate: 1019.54,
        },
        {
          remuneracaoMensalMax: 18168,
          taxaMarginalMax: 0.435,
          parcelaAbate: 1560.45,
        },
        {
          remuneracaoMensalMax: Infinity,
          taxaMarginalMax: 0.53,
          parcelaAbate: 3286.41,
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
          parcelaAbate: (R: number) => 0.13 * 2.6 * (1264.3 - R),
        },
        {
          remuneracaoMensalMax: 993,
          taxaMarginalMax: 0.13,
          parcelaAbate: (R: number) => 0.13 * 1.713 * (1436.41 - R),
        },
        {
          remuneracaoMensalMax: 1141,
          taxaMarginalMax: 0.13,
          parcelaAbate: 99.18,
        },
        {
          remuneracaoMensalMax: 1487,
          taxaMarginalMax: 0.165,
          parcelaAbate: 139.11,
        },
        {
          remuneracaoMensalMax: 1834,
          taxaMarginalMax: 0.2,
          parcelaAbate: 191.17,
        },
        {
          remuneracaoMensalMax: 2250,
          taxaMarginalMax: 0.224,
          parcelaAbate: 235.17,
        },
        {
          remuneracaoMensalMax: 3153,
          taxaMarginalMax: 0.284,
          parcelaAbate: 370.16,
        },
        {
          remuneracaoMensalMax: 3382,
          taxaMarginalMax: 0.3263,
          parcelaAbate: 503.37,
        },
        {
          remuneracaoMensalMax: 6025,
          taxaMarginalMax: 0.3452,
          parcelaAbate: 567.54,
        },
        {
          remuneracaoMensalMax: 18168,
          taxaMarginalMax: 0.435,
          parcelaAbate: 1108.45,
        },
        {
          remuneracaoMensalMax: Infinity,
          taxaMarginalMax: 0.53,
          parcelaAbate: 2834.4,
        },
      ],
    },
  ],
};
