export const TAX_TABLES = {
    FY_2023_24: [
        { min: 0, max: 18200, base: 0, rate: 0 },
        { min: 18201, max: 45000, base: 0, rate: 0.16 },
        { min: 45001, max: 120000, base: 5092, rate: 0.3 },
        { min: 120001, max: 180000, base: 29467, rate: 0.37 },
        { min: 180001, max: Infinity, base: 51667, rate: 0.45 },
    ],

    FY_2024_25: [
        { min: 0, max: 20000, base: 0, rate: 0 },
        { min: 20001, max: 50000, base: 0, rate: 0.15 },
        { min: 50001, max: 130000, base: 4500, rate: 0.28 },
        { min: 130001, max: 200000, base: 26100, rate: 0.35 },
        { min: 200001, max: Infinity, base: 56100, rate: 0.45 },
    ]
};