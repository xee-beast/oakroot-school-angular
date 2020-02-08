"use strict";
import { environment } from "src/environments/environment";

const environmentConfig = environment;

export const SERVER_URL: string = environmentConfig.backendUrl;

// GENERIC Constants
export const DEFAULT_SNACKBAR_DURATION = 3000;
export const DEFAULT_LONGITUDE: any = -98.5795;
export const DEFAULT_LATITUDE: any = 39.8282;
export const DEFAULT_REDIRECTION_WAIT_TIME = 3000;
export const DEFAULT_REQUEST_LONG_TIME_INTERVAL = 3000;
export const DEFAULT_DEBOUNCE_TIME = 1000;
export const DEFAULT_SCROLL_DELAY_TIME = 500;
export const DEFAULT_SCROLL_OFFSET = 1000;
export const DEFAULT_LOGO_SIZE_BYTES = 2097152;
export const DEFAULT_SNACKBAR_LABEL = "OK";
export const DEFAULT_REMEMBER_ME_MONTHS = 2;
export const DEFAULT_SESSION_HOURS = 1;
export const DEFAULT_SORT_KEY = "createdAt";
export const DEFAULT_SORT_ORDER = "DESC";
export const DEFAULT_REQUEST_TOO_LONG_TEXT = "Your request is in progress. Don't go away!";
export const DEFAULT_INVALID_TOKEN_SERVER_RESPONSE = "Token not provided";
export const DEFAULT_INVALID_TOKEN_SIGNATURE_SERVER_RESPONSE = "Token Signature could not be verified.";
export const DEFAULT_COOKIE_ENCRYPTION_KEY = "pxMqZPuwWVyFFfCKDxXB09kgbJNdSkE0";
export const SEARCH = "q";
export const POP_UP_LARGE_WIDTH = "60%";
export const DEFAULT_UPLOAD_ICON = "/assets/images/logos/ic-upload.png";
export const DEFAULT_FLOOR_MAP_SLOT_COLOR = "#E72E74";
export const DEFAULT_ERROR_MESSAGE = "Server rejected your request. Please try again!";
export const FORM_FIELD_APPREANCE = "legacy";
export const DEFAULT_ZOOM_LEVEL = 16;
export const DEFAULT_IMAGE_WIDTH = 1024;
export const DEFAULT_IMAGE_HEIGHT = 768;

// Http Headers Constants
export const X_DEVICE_ID = "1";
export const X_DEVICE_UUID = "1234";
// Status Constant
export const STATUS = "status";
export const STATUS_BOTH = ""; 
export const STATUS_AVAILABLE = "1";
export const STATUS_OFFLINE = "1";
export const ResponseSuccess = "1";

// LOGIN page constants
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH: number = 18;
export const NAME_MAX_LENGTH = 50;
export const DESCRIPTION_MAX_LENGTH = 250;
export const MOBILE_NUMBER_MIN_LENGTH = 6;
export const MAX_AUTO_SIZE_MIN_ROWS = 5;
export const MAX_AUTO_SIZE_MAX_ROWS = 10;
export const ACCOUNT_STATUS_ACTIVE = "active";
export const ACCOUNT_STATUS_PENDING = "pending";
export const POP_UP_DEFAULT_WIDTH = "500px";
export const NUMBER_RECORDS_PER_PAGE = 15;
export const DEFAULT_PAGE_INDEX = 0;
export const SUCCESS_RESPONSE = 200;
export const SUCCESS_STATUS = "success";
export const FAILURE_RESPONSE = "0";
export const FAILURE_STATUS = "error";
export const VALID_FORM_STATE = "VALID";
export const DISABLED_FORM_STATE = "DISABLED";


// Group Constant
export const CURRENCY_LIST: any[] = [{"value":1,"name":"Albania Lek","code":"ALL"},{"value":2,"name":"Afghanistan Afghani","code":"AFN"},{"value":3,"name":"Argentina Peso","code":"ARS"},{"value":4,"name":"Aruba Guilder","code":"AWG"},{"value":5,"name":"Australia Dollar","code":"AUD"},{"value":6,"name":"Azerbaijan Manat","code":"AZN"},{"value":7,"name":"Bahamas Dollar","code":"BSD"},{"value":8,"name":"Barbados Dollar","code":"BBD"},{"value":9,"name":"Belarus Ruble","code":"BYN"},{"value":10,"name":"Belize Dollar","code":"BZD"},{"value":11,"name":"Bermuda Dollar","code":"BMD"},{"value":12,"name":"Bolivia Bol\u00edviano","code":"BOB"},{"value":13,"name":"Bosnia and Herzegovina Convertible Mark","code":"BAM"},{"value":14,"name":"Botswana Pula","code":"BWP"},{"value":15,"name":"Bulgaria Lev","code":"BGN"},{"value":16,"name":"Brazil Real","code":"BRL"},{"value":17,"name":"Brunei Darussalam Dollar","code":"BND"},{"value":18,"name":"Cambodia Riel","code":"KHR"},{"value":19,"name":"Canada Dollar","code":"CAD"},{"value":20,"name":"Cayman Islands Dollar","code":"KYD"},{"value":21,"name":"Chile Peso","code":"CLP"},{"value":22,"name":"China Yuan Renminbi","code":"CNY"},{"value":23,"name":"Colombia Peso","code":"COP"},{"value":24,"name":"Costa Rica Colon","code":"CRC"},{"value":25,"name":"Croatia Kuna","code":"HRK"},{"value":26,"name":"Cuba Peso","code":"CUP"},{"value":27,"name":"Czech Republic Koruna","code":"CZK"},{"value":28,"name":"Denmark Krone","code":"DKK"},{"value":29,"name":"Dominican Republic Peso","code":"DOP"},{"value":30,"name":"East Caribbean Dollar","code":"XCD"},{"value":31,"name":"Egypt Pound","code":"EGP"},{"value":32,"name":"El Salvador Colon","code":"SVC"},{"value":33,"name":"Euro Member Countries","code":"EUR"},{"value":34,"name":"Falkland Islands (Malvinas) Pound","code":"FKP"},{"value":35,"name":"Fiji Dollar","code":"FJD"},{"value":36,"name":"Ghana Cedi","code":"GHS"},{"value":37,"name":"Gibraltar Pound","code":"GIP"},{"value":38,"name":"Guatemala Quetzal","code":"GTQ"},{"value":39,"name":"Guernsey Pound","code":"GGP"},{"value":40,"name":"Guyana Dollar","code":"GYD"},{"value":41,"name":"Honduras Lempira","code":"HNL"},{"value":42,"name":"Hong Kong Dollar","code":"HKD"},{"value":43,"name":"Hungary Forint","code":"HUF"},{"value":44,"name":"Iceland Krona","code":"ISK"},{"value":45,"name":"India Rupee","code":"INR"},{"value":46,"name":"Indonesia Rupiah","code":"IDR"},{"value":47,"name":"Iran Rial","code":"IRR"},{"value":48,"name":"Isle of Man Pound","code":"IMP"},{"value":49,"name":"Israel Shekel","code":"ILS"},{"value":50,"name":"Jamaica Dollar","code":"JMD"},{"value":51,"name":"Japan Yen","code":"JPY"},{"value":52,"name":"Jersey Pound","code":"JEP"},{"value":53,"name":"Kazakhstan Tenge","code":"KZT"},{"value":54,"name":"Korea (North) Won","code":"KPW"},{"value":55,"name":"Korea (South) Won","code":"KRW"},{"value":56,"name":"Kyrgyzstan Som","code":"KGS"},{"value":57,"name":"Laos Kip","code":"LAK"},{"value":58,"name":"Lebanon Pound","code":"LBP"},{"value":59,"name":"Liberia Dollar","code":"LRD"},{"value":60,"name":"Macedonia Denar","code":"MKD"},{"value":61,"name":"Malaysia Ringgit","code":"MYR"},{"value":62,"name":"Mauritius Rupee","code":"MUR"},{"value":63,"name":"Mexico Peso","code":"MXN"},{"value":64,"name":"Mongolia Tughrik","code":"MNT"},{"value":65,"name":"Mozambique Metical","code":"MZN"},{"value":66,"name":"Namibia Dollar","code":"NAD"},{"value":67,"name":"Nepal Rupee","code":"NPR"},{"value":68,"name":"Netherlands Antilles Guilder","code":"ANG"},{"value":69,"name":"New Zealand Dollar","code":"NZD"},{"value":70,"name":"Nicaragua Cordoba","code":"NIO"},{"value":71,"name":"Nigeria Naira","code":"NGN"},{"value":72,"name":"Norway Krone","code":"NOK"},{"value":73,"name":"Oman Rial","code":"OMR"},{"value":74,"name":"Pakistan Rupee","code":"PKR"},{"value":75,"name":"Panama Balboa","code":"PAB"},{"value":76,"name":"Paraguay Guarani","code":"PYG"},{"value":77,"name":"Peru Sol","code":"PEN"},{"value":78,"name":"Philippines Peso","code":"PHP"},{"value":79,"name":"Poland Zloty","code":"PLN"},{"value":80,"name":"Qatar Riyal","code":"QAR"},{"value":81,"name":"Romania Leu","code":"RON"},{"value":82,"name":"Russia Ruble","code":"RUB"},{"value":83,"name":"Saint Helena Pound","code":"SHP"},{"value":84,"name":"Saudi Arabia Riyal","code":"SAR"},{"value":85,"name":"Serbia Dinar","code":"RSD"},{"value":86,"name":"Seychelles Rupee","code":"SCR"},{"value":87,"name":"Singapore Dollar","code":"SGD"},{"value":88,"name":"Solomon Islands Dollar","code":"SBD"},{"value":89,"name":"Somalia Shilling","code":"SOS"},{"value":90,"name":"South Africa Rand","code":"ZAR"},{"value":91,"name":"Sri Lanka Rupee","code":"LKR"},{"value":92,"name":"Sweden Krona","code":"SEK"},{"value":93,"name":"Switzerland Franc","code":"CHF"},{"value":94,"name":"Suriname Dollar","code":"SRD"},{"value":95,"name":"Syria Pound","code":"SYP"},{"value":96,"name":"Taiwan New Dollar","code":"TWD"},{"value":97,"name":"Thailand Baht","code":"THB"},{"value":98,"name":"Trinidad and Tobago Dollar","code":"TTD"},{"value":99,"name":"Turkey Lira","code":"TRY"},{"value":100,"name":"Tuvalu Dollar","code":"TVD"},{"value":101,"name":"Ukraine Hryvnia","code":"UAH"},{"value":102,"name":"United Kingdom Pound","code":"GBP"},{"value":103,"name":"United States Dollar","code":"USD"},{"value":104,"name":"Uruguay Peso","code":"UYU"},{"value":105,"name":"Uzbekistan Som","code":"UZS"},{"value":106,"name":"Venezuela Bol\u00edvar","code":"VEF"},{"value":107,"name":"Viet Nam Dong","code":"VND"},{"value":108,"name":"Yemen Rial","code":"YER"},{"value":109,"name":"Zimbabwe Dollar","code":"ZWD"}];

export const GROUP_STATUSES: object[] = [
  {
    value: "active", name: "Active",
  }, {
    value: "inactive", name: "Inactive",
  }
];

export const COMPANY_TYPE_LIST: object[] = [
  {
    value: 1, name: "Franchise",
  }, {
    value: 2, name: "Own Restaurant",
  }, {
    value: 3, name: "Multi Brand International Group",
  }, {
    value: 4, name: "Mono Brand International Group",
  }, {
    value: 5, name: "Multi Brand Local Group",
  }, {
    value: 6, name: "Mono Brand Local Group",
  }, {
    value: 7, name: "Other Type",
  }
];

export const PAYMENT_TYPE_LIST: object[] = [
  {
    value: 1, name: "Monthly",
  }, {
    value: 2, name: "Quarterly",
  }, {
    value: 3, name: "Bi-Yearly",
  }, {
    value: 4, name: "Yearly",
  }, {
    value: 5, name: "Contract Based",
  }
];

// Brands Cosntant

export const CUISINE_TYPE_LIST: object[] = [
  {
    value: 1, name: "American",
  }, {
    value: 2, name: "Italian",
  }, {
    value: 3, name: "Sushi",
  }, {
    value: 4, name: "Traditional",
  }
];

export const RESTAURANT_TYPE_LIST: object[] = [
  {
    value: 1, name: "Fine Dining",
  }, {
    value: 2, name: "Fast Food",
  }, {
    value: 3, name: "Diner",
  }
];

// Employees Cosntant

export const EMPLOYEE_POSITION_LIST: object[] = [
  {
    value: 1, name: "Waiter",
  }, {
    value: 2, name: "Manager",
  }
];


// ACCOUNT Constants
export const INACTIVE_ACCOUNT = 0;
export const ALL_ACCOUNT_STATUS = 0;
export const ACTIVE_ACCOUNT_STATUS = 1;
export const INACTIVE_ACCOUNT_STATUS = 2;
export const REJECTION_ACCOUNT_STATUS = 3;
export const PENDING_ACCOUNT_STATUS = 4;
export const RESET_PASSWORD_CONFIRMATION_MESSAGE = "An email has been sent to the user";

// User Constant
export const NUMBER_USER_STATUS_ACTIVE = 1;
export const STRING_USER_STATUS_ACTIVE = "Active";
export const NUMBER_USER_STATUS_INACTIVE = 2;
export const STRING_USER_STATUS_INACTIVE = "Inactive";
export const NUMBER_USER_STATUS_REJECTED = 3;
export const STRING_USER_STATUS_REJECTED = "Rejected";
export const STRING_USER_STATUS_PENDING = "Pending";

// role Constants
export const ADMIN_role = "admin";
export const SUPPER_ADMIN_role = "super-admin";
export const BRAND_OWNER_role = "brand-owner";
export const SUPPORT_TEAM_role = "support team";
export const BRAND_MANAGER_role = "brand manager";
export const LANDLORD_role = "land lord";

// Event Constants
export const ALL_EVENTS_TYPE = 0;
export const RECCURING_EVENT_TYPE = 1;
export const ONE_TIME_EVENT_TYPE = 2;
export const DIFFERENCE_BETWEEN_PUBLISH_END_DATE = 7;


// Brand Category
export const BRAND_FOOD_DRINKS_ID = 4;
export const DELIVERY_TYPES: any[] = [
  { delivery_type_id: 1, viewValue: "Dine in", description: "", placeholder: "Dine in Description" },
  { delivery_type_id: 2, viewValue: "Takeaway", description: "", placeholder: "Takeaway Description" },
  { delivery_type_id: 3, viewValue: "Delivery", description: "", placeholder: "Delivery Description" },
];
// YEARS CONSTANT
export const DEFAULT_YEARS: any[] = [
  { value: "2018", viewValue: "2018" },
  { value: "2019", viewValue: "2019" },
  { value: "2020", viewValue: "2020" },
  { value: "2021", viewValue: "2021" },
  { value: "2022", viewValue: "2022" },
  { value: "2023", viewValue: "2023" },
  { value: "2024", viewValue: "2024" },
  { value: "2025", viewValue: "2025" },
  { value: "2026", viewValue: "2026" },
  { value: "2027", viewValue: "2027" },
  { value: "2028", viewValue: "2028" },
  { value: "2029", viewValue: "2029" },
  { value: "2030", viewValue: "2030" },
];

// GENERIC ENUMS
export const STATUSES: Object[] = [
  {
    value: 1, name: "ACTIVE",
  }, {
    value: 0, name: "INACTIVE",
  }
];


export const CUSTOMER_STATUSES: Object[] = [
  {
    value: 5, name: "TBC (To be confirmed)",
  }, {
    value: 4, name: "PENDING",
  }, {
    value: 1, name: "APPROVED",
  }, {
    value: 2, name: "BLOCKED",
  }
];

export const CUSTOMER_ACCOUNT_STATUSES: Object[] = [
  {
    value: ACTIVE_ACCOUNT_STATUS, name: "APPROVED",
  }, 
  {
    value: INACTIVE_ACCOUNT_STATUS, name: "BLOCKED",
  },
  {
    value: PENDING_ACCOUNT_STATUS, name: "PENDING",
  }
];

export const GENDER: object[] = [
  {
    value: "Male", name: "Male",
  }, {
    value: "Female", name: "Female",
  }
];

export const GENDER_CRITIRIA: object[] = [
  {
    value: "Male", name: "Male",
  }, {
    value: "Female", name: "Female",
  }
  , {
    value: "Both", name: "Male & Female Both",
  }
];

export const AGE_RANGE: object[] = [
  {
    value: 2, name: "Above 21",
  }, {
    value: 1, name: "Under 21",
  }
];

export const AGE_LIMIT: object[] = [
  { value: "14", viewValue: "14" },
  { value: "15", viewValue: "15" },
  { value: "16", viewValue: "16" },
  { value: "17", viewValue: "17" },
  { value: "18", viewValue: "18" },
  { value: "19", viewValue: "19" },
  { value: "20", viewValue: "20" },
  { value: "21", viewValue: "21" },
  { value: "22", viewValue: "22" },
  { value: "23", viewValue: "23" },
  { value: "24", viewValue: "24" },
];

export const AGE_LIMIT_FILTER: object[] = [
  { value: 14, name: "14" },
  { value: 15, name: "15" },
  { value: 16, name: "16" },
  { value: 17, name: "17" },
  { value: 18, name: "18" },
  { value: 19, name: "19" },
  { value: 20, name: "20" },
  { value: 21, name: "21" },
  { value: 22, name: "22" },
  { value: 23, name: "23" },
  { value: 24, name: "24" },
];
export const USER_TYPE: Object[] = [
{value : 0, name: "Normal Users"},
{value : 1, name: "Ambassadors"}
];

export const PROFILE_IMAGE: Object[] = [
  {value : 0, name: "Without profile picture"},
];
export const CAMPAIGN_TYPES: Object[] = [
  {value : "1", name: "Impression"},
  {value : "2", name: "Duration campaigns"}
  ];

export const role: Object[] = [
  {
    "value": 1,
    "name": "Admin",
    "slug": "admin"
  },
  {
    "value": 2,
    "name": "External",
    "slug": "external"
  }, {
    "value": 3,
    "name": "Oakroot owner",
    "slug": "Oakroot_owner"
  },
  {
    "value": 4,
    "name": "Group owner",
    "slug": "group_owner"
  },
  {
    "value": 5,
    "name": "Operator",
    "slug": "operator"
  },
  {
    "value": 6,
    "name": "Brand manager",
    "slug": "brand_manager"
  }, {
    "value": 7,
    "name": "Branch manager",
    "slug": "branch_manager"
  },
  {
    "value": 8,
    "name": "Employee",
    "slug": "employee"
  },
  {
    "value": 9,
    "name": "Employee sale force",
    "slug": "employee_sale_force"
  }
];

// role constants
export const Oakroot_ADMIN_ROLE_ID = 1;
export const Oakroot_EXTERNAL_ROLE_ID = 2;
export const Oakroot_OWNER_ROLE_ID = 3;
export const Oakroot_GROUP_OWNER_ROLE_ID = 4;
export const Oakroot_OPERATOR_ROLE_ID = 5;
export const Oakroot_BRAND_MANAGER_ROLE_ID = 6;
export const Oakroot_BRANCH_MANAGER_ROLE_ID = 7;
export const Oakroot_EMPLOYEE_ROLE_ID = 8;
export const Oakroot_EMPLOYEE_SALE_FORCE_ROLE_ID = 9;

// Permission Constant
export const PERMISSION_READ = "read";
export const PERMISSION_WRITE = "write";

// BRAND Constants
export const BRAND_MAIN_IMAGE_TYPE = 1;
export const BRAND_LOGO_IMAGE_TYPE = 2;
export const BRAND_SECONDARY_IMAGE_TYPE = 3;
export const BRAND_IMAGE_SIZE = 2097152;
export const DEFAULT_COVER_PHOTO_ASPECT_RATIO: number = 1 / 1;
export const DEFAULT_IMAGE_PHOTO_ASPECT_RATIO: number = 16 / 9;
export const DEFAULT_PHOTO_ALBUM_LENGTH = 10;

// FEATURED CAMPAIGN Constants
export const CAMPAIGN_MAIN_IMAGE_TYPE = 1;

// CUSTOMER Constants
export const PROFILE_IMAGE_TYPE = 0;
export const NATIONAL_CARD_FRONT_IMAGE_TYPE = 1;
export const NATIONAL_CARD_BACK_IMAGE_TYPE = 2;
export const IDCARD_IMAGE_SIZE = 2097152;

// OFFER constants
export const OFFER_TYPES: any[] = [
  { name: "Discount Purchase on Purchase Total", id: 1 },
  { name: "Discount on Specific Item", id: 2 },
  { name: "Spending $X and get a Percentage discount on total Purchase", id: 3 },
  { name: "Spending $X and get an item free", id: 4 },
  { name: "Buy X, get X free", id: 5 },
  { name: "Buy X get Y discounted", id: 6 },
  { name: "Other", id: 7 },
  { name: "Buy X, get Y free", id: 8 },


];
export const OFFER_TYPES_FILTERS: any[] = [
  { name: "Discount Purchase on Purchase Total", value: 1 },
  { name: "Discount on Specific Item", value: 2 },
  { name: "Spending $X and get a Percentage discount on total Purchase", value: 3 },
  { name: "Spending $X and get an item free", value: 4 },
  { name: "Buy X, get X free", value: 5 },
  { name: "Buy X get Y discounted", value: 6 },
  { name: "Other", value: 7 },
  { name: "Buy X, get Y free", value: 8 },


];


export const DEFAULT_DAYS: any[] = [
  { id: 1 , value: "monday", viewValue: "Monday" },
  { id: 2 , value: "tuesday", viewValue: "Tuesday" },
  { id: 3 , value: "wednesday", viewValue: "Wednesday" },
  { id: 4 , value: "thursday", viewValue: "Thursday" },
  { id: 5 , value: "friday", viewValue: "Friday" },
  { id: 6 , value: "saturday", viewValue: "Saturday" },
  { id: 7 , value: "sunday", viewValue: "Sunday" }
];
export const OFFER_TYPE_LOYALTY_ID = 4;
export const OFFER_TYPE_SURPRISE_ID = 1;
export const OFFER_TYPE_FAMILY_ID = 3;


// BRANCH Constants
export const DEFAULT_HOURS: any[] = [
  { value: "00:00", viewValue: "00:00" },
  { value: "00:30", viewValue: "00:30" },
  { value: "01:00", viewValue: "01:00" },
  { value: "01:30", viewValue: "01:30" },
  { value: "02:00", viewValue: "02:00" },
  { value: "02:30", viewValue: "02:30" },
  { value: "03:00", viewValue: "03:00" },
  { value: "03:30", viewValue: "03:30" },
  { value: "04:00", viewValue: "04:00" },
  { value: "04:30", viewValue: "04:30" },
  { value: "05:00", viewValue: "05:00" },
  { value: "05:30", viewValue: "05:30" },
  { value: "06:00", viewValue: "06:00" },
  { value: "06:30", viewValue: "06:30" },
  { value: "07:00", viewValue: "07:00" },
  { value: "07:30", viewValue: "07:30" },
  { value: "08:00", viewValue: "08:00" },
  { value: "08:30", viewValue: "08:30" },
  { value: "09:00", viewValue: "09:00" },
  { value: "09:30", viewValue: "09:30" },
  { value: "10:00", viewValue: "10:00" },
  { value: "10:30", viewValue: "10:30" },
  { value: "11:00", viewValue: "11:00" },
  { value: "11:30", viewValue: "11:30" },
  { value: "12:00", viewValue: "12:00" },
  { value: "12:30", viewValue: "12:30" },
  { value: "13:00", viewValue: "13:00" },
  { value: "13:30", viewValue: "13:30" },
  { value: "14:00", viewValue: "14:00" },
  { value: "14:30", viewValue: "14:30" },
  { value: "15:00", viewValue: "15:00" },
  { value: "15:30", viewValue: "15:30" },
  { value: "16:00", viewValue: "16:00" },
  { value: "16:30", viewValue: "16:30" },
  { value: "17:00", viewValue: "17:00" },
  { value: "17:30", viewValue: "17:30" },
  { value: "18:00", viewValue: "18:00" },
  { value: "18:30", viewValue: "18:30" },
  { value: "19:00", viewValue: "19:00" },
  { value: "19:30", viewValue: "19:30" },
  { value: "20:00", viewValue: "20:00" },
  { value: "20:30", viewValue: "20:30" },
  { value: "21:00", viewValue: "21:00" },
  { value: "21:30", viewValue: "21:30" },
  { value: "22:00", viewValue: "22:00" },
  { value: "22:30", viewValue: "22:30" },
  { value: "23:00", viewValue: "23:00" },
  { value: "23:30", viewValue: "23:30" },
];

export const DEFAULT_DATE_FORMAT: string = "YYYY-MM-DD";
export const DEFAULT_TIME_FORMAT: string = "HH:mm:ss";
export const DEFAULT_DATETIME_FORMAT: string = "YYYY-MM-DD HH:mm:ss";
