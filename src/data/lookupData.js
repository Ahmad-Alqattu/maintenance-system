export const lookupCategories = [
  { value: 'assetTypes', label: 'أنواع الأصول' },
  { value: 'departments', label: 'الإدارات' },
  { value: 'locations', label: 'المواقع' },
  { value: 'suppliers', label: 'الموردين' }
];

export const lookups = {
  assetTypes: [
    { id: 1, code: 'BLDG', nameAr: 'مباني', nameEn: 'Buildings' },
    { id: 2, code: 'VEH', nameAr: 'مركبات', nameEn: 'Vehicles' },
    { id: 3, code: 'EQUIP', nameAr: 'معدات', nameEn: 'Equipment' }
  ],
  departments: [
    { id: 1, code: 'HR', nameAr: 'الموارد البشرية', nameEn: 'Human Resources' },
    { id: 2, code: 'IT', nameAr: 'تقنية المعلومات', nameEn: 'Information Technology' }
  ],
  locations: [
    { id: 1, code: 'HQ', nameAr: 'المقر الرئيسي', nameEn: 'Headquarters' },
    { id: 2, code: 'BR1', nameAr: 'الفرع الأول', nameEn: 'Branch 1' }
  ]
};

export const mainCategories = [
  { value: 'assetConstants', label: 'ثوابت الأصول' },
  { value: 'systemConstants', label: 'ثوابت النظام' },
  { value: 'administrativeConstants', label: 'الثوابت الإدارية' }
];

export const assetConstantsSubCategories = [
  { value: 'assetTypes', label: 'أنواع الأصول' }
];