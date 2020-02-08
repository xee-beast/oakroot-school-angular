"use strict";
import { environment } from "src/environments/environment";

const environmentConfig = environment;

export const SERVER_URL: string = environmentConfig.backendUrl;

// User/Account
export const LOGIN_API: string = SERVER_URL + "auth/login";
export const FORGOT_PASSWORD: string = SERVER_URL + "auth/reset-password";
export const RESET_PASSWORD: string = SERVER_URL + "auth/user-reset-password";

// User Profile
export const PROFILE_UPDATE: string = SERVER_URL + "ApplicationUsers/update-user";
export const PROFILE_UPDATE_PASSWORD: string = SERVER_URL + "admin/users/change-password";


// User
export const GET_USERS: string = SERVER_URL + "admin/users/listing";


// Country
export const GET_COUNTRIES: string = SERVER_URL + "admin/countries/all";

// Cuisine
export const GET_CUSINES: string = SERVER_URL + "admin/cuisines/all";

// Restaurant
export const GET_RESTAURANTS: string = SERVER_URL + "admin/restaurant-types/all";



// TAGS
export const GET_TAGS: string = SERVER_URL + "admin/brand/get-tags";


// Groups
export const GET_ALL_GROUPS: string = SERVER_URL + "admin/groups";
export const GET_ONE_GROUPS: string = SERVER_URL + "admin/group";
export const DELETE_GROUP: string = SERVER_URL + "admin/group";
export const STORE_GROUP: string = SERVER_URL + "admin/groups";
export const UPDATE_GROUP: string = SERVER_URL + "admin/group";
export const STAUTS_GROUP: string = SERVER_URL + "admin/group/status";

// Brands
export const GET_ALL_BRANDS: string = SERVER_URL + "admin/brands";
export const GET_ONE_BRAND: string = SERVER_URL + "admin/brand";
export const DELETE_BRAND: string = SERVER_URL + "admin/brand";
export const STAUTS_BRAND: string = SERVER_URL + "admin/brand/status";
export const STORE_BRAND: string = SERVER_URL + "admin/brands";
export const UPDATE_BRAND: string = SERVER_URL + "admin/brand";

// Branches
export const GET_ALL_BRANCHES: string = SERVER_URL + "admin/branches";
export const GET_ONE_BRANCH: string = SERVER_URL + "admin/branch";
export const DELETE_BRANCH: string = SERVER_URL + "admin/branch";
export const STAUTS_BRANCH: string = SERVER_URL + "admin/branch/status";
export const STORE_BRANCH: string = SERVER_URL + "admin/branches";
export const UPDATE_BRANCH: string = SERVER_URL + "admin/branch";
export const GET_USER_BRANDS: string = SERVER_URL + "admin/brands/all";



// Employees
export const GET_ALL_EMPLOYEES: string = SERVER_URL + "admin/employees";
export const GET_ONE_EMPLOYEE: string = SERVER_URL + "admin/employee";
export const DELETE_EMPLOYEE: string = SERVER_URL + "admin/employee";
export const STAUTS_EMPLOYEE: string = SERVER_URL + "admin/employee/status";
export const IMPORT_EMPLOYEE: string = SERVER_URL + "admin/employee/upload";
export const DOWNLOAD_EMPLOYEE_SHEET: string = SERVER_URL + "admin/employee/import/download";
export const STORE_EMPLOYEE: string = SERVER_URL + "admin/employees";
export const UPDATE_EMPLOYEE: string = SERVER_URL + "admin/employee";
export const GET_USER_BRANCHES: string = SERVER_URL + "admin/branches/all";

// Cuisines
export const GET_ALL_CUISINES: string = SERVER_URL + "admin/cuisines/all";
export const DELETE_CUISINE: string = SERVER_URL + "admin/cuisines";
export const STORE_CUISINE: string = SERVER_URL + "admin/cuisines";
export const UPDATE_CUISINE: string = SERVER_URL + "admin/cuisines";


// Restaurant types
export const GET_ALL_RESTAURANT_TYPES: string = SERVER_URL + "admin/restaurant-types/all";
export const DELETE_RESTAURANT_TYPE: string = SERVER_URL + "admin/restaurant-types";
export const STORE_RESTAURANT_TYPE: string = SERVER_URL + "admin/restaurant-types";
export const UPDATE_RESTAURANT_TYPES: string = SERVER_URL + "admin/restaurant-types";

// Currencies
export const GET_ALL_CURRENCIES: string = SERVER_URL + "admin/currency/all";
export const DELETE_CURRENCY: string = SERVER_URL + "admin/currency";
export const STORE_CURRENCY: string = SERVER_URL + "admin/currency";
export const UPDATE_CURRENCY: string = SERVER_URL + "admin/currency";


// Users
export const GET_ALL_USERS: string = SERVER_URL + "admin/users";
export const GET_ONE_USER: string = SERVER_URL + "admin/users";
export const DELETE_USER: string = SERVER_URL + "admin/users";
export const STAUTS_USER: string = SERVER_URL + "admin/users/status";
export const STORE_USER: string = SERVER_URL + "admin/users";
export const UPDATE_USER: string = SERVER_URL + "admin/users";
