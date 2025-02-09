// src/i18n/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { mainCategories } from '../data/lookupData';

const resources = {
  en: {
    translation: {
      dashboard: {
        sections: {
          assets: "Fixed Assets",
          maintenance: "Maintenance Requests",
          operations: "Operations"
        },
        stats: {
          totalAssetValue: "Total Asset Value",
          brokenAssets: "Broken Assets Count",
          activeAssets: "Active Assets Count",
          totalAssets: "Total Municipal Assets",
          maintenanceCosts: "Monthly Maintenance Costs",
          inProgressRequests: "In-Progress Requests",
          openRequests: "Open Requests",
          totalRequests: "Total Requests",
          operationalCosts: "Total Operational Costs",
          activeOperations: "Active Operations",
          systemCount: "System Count",
          totalUnits: "Total Operation Units"
        }
      },
      menu: {
        home: { title: 'Home' },
        assets: { title: 'Fixed Assets' },
        'assets-register': { title: 'Asset Registration' },
        'assets-evaluate': { title: 'Asset Evaluation' },
        'assets-replacement': { title: 'Assets Replacement' },
        'assets-reports': { title: 'Asset Reports' },
        maintenance: { title: 'Maintenance' },
        'maintenance-plans': { title: 'Maintenance Plans' },
        'maintenance-schedule': { title: 'Maintenance Schedule' },
        'maintenance-log': { title: 'Maintenance Log' },
        operations: { title: 'Operations' },
        'operations-plans': { title: 'Operation Plans' },
        'operations-schedules': { title: 'Operation Schedules' },
        'operations-reports': { title: 'Operation Reports' },
        reports: { title: 'Reports' },
        'reports-performance': { title: 'Performance Reports' },
        'reports-cost': { title: 'Cost Reports' },
        'reports-status': { title: 'Status Reports' },
        settings: { title: 'Settings' },
        lookups: { title: 'Lookups' }
      },

      // Screen-specific translations
      common: {
        search: "Search",
        systemTitle: "Maintenance and Operations System",
        expand: "Expand",
        collapse: "Collapse",
        save: "Save",
        cancel: "Cancel",
        enable: "Enable",
        selectFromList: "Select from list",
        selectOrSearch: "Select or search",
        noResult: "No result found",
        edit: "Edit",
        delete: "Delete",
        add: "Add",
        select: "Select",
        filter: "Filter"
      },

      labels: {
        name: "Name",
        code: "Code",
        date: "Date",
        status: "Status",
        type: "Type",
        category: "Category",
        subCategory: "Sub Category",
        description: "Description",
        location: "Location",
        department: "Department",
        notes: "Notes",
        // Asset Specific
        assetNumber: "Asset Number",
        serialNumber: "Serial Number",
        purchaseDate: "Purchase Date",
        warrantyEnd: "Warranty End Date",
        currentValue: "Current Value",
        supplier: "Supplier",
        model: "Model",
        quantity: "Quantity",
        unit: "Unit",
        detailedCategory: "Detailed Category",
        gisCode: "GIS Code",
        administrativeDependency: "Administrative Dependency",
        replacementReason: "Replacement Reason",
        replacementDate: "Replacement Date",
        assetToReplace: "Asset to Replace",
        newAsset: "New Asset",


        // Financial
        originalValue: "Original Value",
        fundingSource: "Funding Source",
        additionalCosts: "Additional Costs",
        ownershipType: "Ownership Type",
        additionalNotes: "Additional Notes",
        // Operational
        operationType: "Operation Type",
        planType: "Plan Type",
        frequency: "Frequency",
        assignedTeam: "Assigned Team",
        estimatedCost: "Estimated Cost",
        warrantyStatus: "Warranty Status",
        defaultAge: "Default Age",
        acquisitionDate: "Acquisition Date",
        costCenter: "Cost Center",
        remainingLifespan: "Estimated Remaining Lifespan",
        estimatedValue: "Estimated Value",
        acquisitionCost: "Acquisition Cost",
        depreciationMethod: "Depreciation Method",
        depreciationRate: "Depreciation Rate %",
        accumulatedDepreciation: "Accumulated Depreciation",
        expectedUnits: "Expected Total Units",
        bookValue: "Book Value",
        currency: "Currency",
        acquisitionMethod: "Acquisition Method",
        assetStatus: "Asset Status",
        nameAr: "Name (Arabic)",
        nameEn: "Name (English)",
        selectCategory: "Select Category",
        addNew: "Add New",
        actions: "Actions",
        exportToExcel: "Export to Excel",
        mainCategory: "Main Category",


      },

      validation: {
        required: "This field is required",
        invalid: "Invalid value",
        minLength: "Minimum length is {{length}} characters",
        maxLength: "Maximum length is {{length}} characters"
      },

      messages: {
        saveSuccess: "Saved successfully",
        saveFailed: "Save failed",
        deleteSuccess: "Deleted successfully"
      },

      titles: {
        pageTitles: {
          assetManagement: "Asset Management",
          maintenance: "Maintenance",
          operations: "Operations",
          reports: "Reports",
          lookupManagement: "Lookup Management",
          settings: "Settings",
          assetReplacement: "Asset Replacement"

        },
        sections: {
          depreciation: "Depreciation",
          basicInfo: "Basic Information",
          details: "Details",
          history: "History",
          attachments: "Attachments",
          settings: "Settings",
          summary: "Summary",
          technicalDetails: "Technical Details",
          financialDetails: "Financial Details",
          administrativeDetails: "Administrative Details",
          acquisition: "Acquisition",
          assetTypeFormTitle: "Assets Types Form",

        }
      },

      fileUpload: {
        dragDrop: "Drag and drop files here",
        or: "or",
        browse: "Browse Files",
        supportedFormats: "Supported formats: JPG, PNG, SVG, ZIP",
        attachments: "Attachments",
      },
    }
  },

  ar: {
    translation: {
      dashboard: {
        sections: {
          assets: "الأصول الثابتة",
          maintenance: "طلبات الصيانة",
          operations: "عمليات التشغيل"
        },
        stats: {
          totalAssetValue: "قيمة الأصول الإجمالية",
          brokenAssets: "عدد الأصول المعطلة",
          activeAssets: "عدد الأصول النشطة",
          totalAssets: "إجمالي عدد الأصول في البلدية",
          maintenanceCosts: "إجمالي تكاليف الصيانة لهذا الشهر",
          inProgressRequests: "عدد الطلبات قيد التنفيذ",
          openRequests: "عدد الطلبات المفتوحة",
          totalRequests: "إجمالي عدد طلبات الصيانة",
          operationalCosts: "إجمالي التكاليف التشغيلية",
          activeOperations: "عدد الطلبات قيد التنفيذ",
          systemCount: "عدد أنظمة التشغيل",
          totalUnits: "إجمالي عدد وحدات التشغيل"

        }
      },
      menu: {
        home: { title: 'الرئيسية' },
        assets: { title: 'الأصول الثابتة' },
        'assets-register': { title: 'تسجيل الأصول' },

        'assets-evaluate': { title: 'تقييم الأصول' },
        'assets-replacement': {title:'استبدال الأصل'},
        'assets-reports': { title: 'تقارير الأصول' },
        maintenance: { title: 'الصيانة' },
        'maintenance-plans': { title: 'خطط الصيانة' },
        'maintenance-schedule': { title: 'جدول الصيانة' },
        'maintenance-log': { title: 'سجل الصيانة' },
        operations: { title: 'العمليات' },
        'operations-plans': { title: 'خطط العمليات' },
        'operations-schedules': { title: 'جداول العمليات' },
        'operations-reports': { title: 'تقارير العمليات' },
        reports: { title: 'التقارير' },
        'reports-performance': { title: 'تقارير الأداء' },
        'reports-cost': { title: 'تقارير التكلفة' },
        'reports-status': { title: 'تقارير الحالة' },
        settings: { title: 'الإعدادات' },
        lookups: { title: 'الثوابت' }

      },
      common: {
        search: "بحث",
        systemTitle: "نظام الصيانة والتشغيل",
        expand: "توسيع",
        collapse: "طي",
        save: "حفظ",
        cancel: "إلغاء",
        enable: "تفعيل",
        selectFromList: "اختر من القائمة",
        selectOrSearch: "اختر أو ابحث",
        noResult: "لا توجد نتائج",
        edit: "تعديل",
        delete: "حذف",
        add: "إضافة",
        select: "اختيار",
        filter: "تصفية"
      },

      labels: {
        name: "الاسم",
        code: "الرمز",
        date: "التاريخ",
        status: "الحالة",
        type: "النوع",
        category: "الفئة",
        subCategory: "الفئة الفرعية",
        description: "الوصف",
        location: "الموقع",
        department: "القسم",
        notes: "ملاحظات",
        // Asset Specific
        assetCode: "كود الأصل",
        assetNumber: "رقم الأصل",
        serialNumber: "الرقم التسلسلي",
        purchaseDate: "تاريخ الشراء",
        warrantyEnd: "تاريخ انتهاء الضمان",
        currentValue: "القيمة الحالية",
        supplier: "المورد",
        model: "موديل",
        quantity: "الكمية",
        unit: "وحدة القياس",
        detailedCategory: "الفئة التفصيلية",
        replacementReason: "سبب الاستبدال",
        replacementDate: "تاريخ الاستبدال",
        assetToReplace: "الأصل المراد استبداله",
        newAsset: "الأصل الجديد",
        gisCode: "كود GIS",
        administrativeDependency: "التبعية الإدارية",

        // Financial
        originalValue: "القيمة الأصلية",
        fundingSource: "مصدر التمويل",
        additionalCosts: "التكاليف الإضافية",

        ownershipType: "نوع الملكية",
        additionalNotes: "ملاحظات إضافية",
        // Operational
        operationType: "نوع العملية",
        planType: "نوع الخطة",
        frequency: "التكرار",
        assignedTeam: "الفريق المكلف",
        estimatedCost: "التكلفة التقديرية",
        warrantyStatus: "حالة الضمان",
        defaultAge: "العمر الافتراضي",
        warrantyDuration: "مدة الضمان",
        acquisitionDate: "تاريخ الحيازة",
        costCenter: "مركز التكلفة",
        remainingLifespan: "العمر الانتاجي المقدر",
        estimatedValue: "القيمة التقديرية",
        acquisitionCost: "تكلفة الحيازة",
        depreciationMethod: "طريقة الإهلاك",
        depreciationRate: "معدل الإهلاك %",
        accumulatedDepreciation: "الإهلاك المتراكم",
        expectedUnits: "الإجمالي المتوقع للوحدات المنتجة",
        bookValue: "القيمة الدفترية",
        currency: "العملة",
        acquisitionMethod: "الموازنة",
        assetStatus: "حالة الأصل",
        nameAr: "الاسم (عربي)",
        nameEn: "الاسم (انجليزي)",
        selectCategory: "اختر الفئة",
        addNew: "إضافة جديد",
        actions: "إجراءات",
        exportToExcel: "تصدير إلى Excel",
        mainCategory: "الفئة الرئيسية",

      },

      validation: {
        required: "هذا الحقل مطلوب",
        invalid: "قيمة غير صحيحة",
        minLength: "الحد الأدنى للطول هو {{length}} حرف",
        maxLength: "الحد الأقصى للطول هو {{length}} حرف"
      },

      messages: {
        saveSuccess: "تم الحفظ بنجاح",
        saveFailed: "فشل الحفظ",
        deleteSuccess: "تم الحذف بنجاح"
      },

      // Global titles for all pages
      titles: {
        pageTitles: {
          assetManagement: "إدارة الأصول",
          maintenance: "الصيانة",
          operations: "العمليات",
          reports: "التقارير",
          settings: "الإعدادات",
          lookupManagement: "إدارة الثوابت",
          assetReplacement: "استبدال الأصل"


        },
        sections: {
          depreciation: "الإهلاك",
          basicInfo: "المعلومات الأساسية",
          details: "التفاصيل",
          technicalDetails: "التفاصيل الفنية",
          financialDetails: "التفاصيل المالية",
          administrativeDetails: "التفاصيل الإدارية",
          history: "السجل",
          attachments: "المرفقات",
          settings: "الإعدادات",
          summary: "الملخص",
          acquisition: "الحيازة",
          assetTypeForm: "أنواع الأصول"

        }
      },

      fileUpload: {
        dragDrop: "اسحب وأفلت الملفات هنا",
        or: "أو",
        browse: "تصفح الملفات",
        supportedFormats: "الصيغ المدعومة: JPG, PNG, SVG, ZIP",
        attachments: "المرفقات"
      },
    }
  }

};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;