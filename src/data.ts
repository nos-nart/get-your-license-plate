export const provinceSymbols = {
  'Ha Noi': {
    'Ba Dinh': '29-B1',
    'Hoan Kiem': '29-C1',
    'Hai Ba Trung': '29-D1',
    'Dong Da': '29-E1-E2',
    'Tay Ho': '29-F1',
    'Thanh Xuan': '29-G1',
    'Hoang Mai': '29-H1',
    'Long Bien': '29-K1',
    'Cau Giay': '29-P1',
    'Ha Dong': '29-T1',
    'Nam Tu Liem': '29-L1',
    'Bắc Tu Liem': '29-L5',
    'Thanh Tri': '29-M1',
    'Gia Lam': '29-N1',
    'Dong Anh': '29-S1',
    'Soc Son': '29-S6',
    'Ba Vi': '29-V1',
    'Phuc Tho': '29-V3',
    'Thach That': '29-V5',
    'Quoc Oai': '29-V7',
    'Chuong My': '29-X1',
    'Đan Phuong': '29-X3',
    'Hoai Duc': '29-X5',
    'Thanh Oai': '29-X7',
    'My Duc': '29-Y1',
    'Ung Hoa': '29-Y3',
    'Thuong Tin': '29-Y5',
    'Phu Xuyne': '29-Y7',
    'Me Linh': '29-Z1',
    'Son Tay': '29-U1',
    '9-seat cars including driver seat': '29A',
    'Truck/pickup truck': '29C',
    'Coach': '29B'
  },
  'Ho Chi Minh': {
    'Quan 1': '59-T1'
  }
} as const;

export type ProvinceType = keyof typeof provinceSymbols;
export type DistrictType = keyof typeof provinceSymbols[ProvinceType];

export const guiConfig = {
  province: 'Ha Noi',
  district: 'Ba Dinh'
}