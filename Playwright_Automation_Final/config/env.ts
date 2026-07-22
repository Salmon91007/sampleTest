import dotenv from "dotenv";

dotenv.config();

export const Environment = {
    BASE_URL: process.env.BASE_URL!,
    // CARD_NUMBER: "4024007153361885",
    // CARD_EXPIRY: "12/30",
    // CARD_CVV: "123",

    // ADDRESS: "Hyderabad",
    // CITY: "Hyderabad",
    // STATE: "Telangana",
    // ZIP: "50000",
    // COUNTRY: "INDIA"

    CARD_NUMBER: process.env.CARD_NUMBER,
    CARD_EXPIRY: "12/30",
    CARD_CVV: "123",

    ADDRESS: "Hyderabad",
    CITY: "Hyderabad",
    STATE: "Telangana",
    ZIP: "50000",
    COUNTRY: "INDIA"
};