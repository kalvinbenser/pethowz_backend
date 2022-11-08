const ABOUT_US=require('./about-us-masters.schema');
const ADMIN_TERMS_AND_CONDITION=require('./admin-terms-and-condition.schema');
const AMENITY_MASTERS=require('./amenities-masters.schema');
const OPTIONS_APPLICABLE=require('./options-applicable.schema');
const PET_CATEGORY=require('./pet-category.schema');
const PRIVACY_POLICY=require('./privacy-policy-masters.schema');
const SERVICE_MASTERS=require('./service-masters.schema');
const TERMS_AND_CONDITION=require('./terms-and-condition.schema');
const VENUE_MASTERS=require('./venue-masters.schema');

const PET_SERVICE=require('./MAIN/pet-service.schema');
const PET_SPACE=require('./MAIN/pet-space.schema');
const ADMIN_LOGIN=require('./MAIN/admin-login-masters.schema')


//main
const BOOKING = require("./MAIN/booking.schema");
const PET_SPACE_BOOK=require("./MAIN/pet-space-book.schema")
const PET_SERVICE_BOOK=require("./MAIN/pet-service-book.schema")
const REGISTRATION = require("./MAIN/registration.schema");
const SELF_DESCRIPTION = require("./MAIN/self-description.schema");
const SERVICE_SLOT=require('./MAIN/service-slot.schema')



module.exports = { PET_CATEGORY , ABOUT_US , ADMIN_TERMS_AND_CONDITION , AMENITY_MASTERS , OPTIONS_APPLICABLE , PRIVACY_POLICY ,
    SERVICE_MASTERS , TERMS_AND_CONDITION , VENUE_MASTERS ,  PET_SERVICE , PET_SPACE, BOOKING, REGISTRATION, SELF_DESCRIPTION ,ADMIN_LOGIN,SERVICE_SLOT,PET_SPACE_BOOK,PET_SERVICE_BOOK};
