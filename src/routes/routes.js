const petCategoryController = require("../controller/WEB_ADMIN/pet-category.controller");
const venueCategoryController = require("../controller/WEB_ADMIN/venue-category.controller");
//const optionsApplicableController = require("../controller/WEB_ADMIN/options-applicable.controller");
const amenitiesCategoryController = require("../controller/WEB_ADMIN/amenities-masters.controller");
const serviceMastersController = require("../controller/WEB_ADMIN/service-masters.controller");
const termsAndConditionController = require("../controller/WEB_ADMIN/terms-and-condition.controller");
const adminTermsAndConditionController = require("../controller/WEB_ADMIN/admin-terms-and-condition.controller");
const privacyPolicyController = require("../controller/WEB_ADMIN/privacy-policy-masters.controller");
const aboutUsController = require("../controller/WEB_ADMIN/about-us-masters");

const petserviceController = require("../controller/MAIN/pet-service.controller");
const petSpaceController = require("../controller/MAIN/pet-space.controller");

const bookingController = require("../controller/MAIN/booking.controller");
const selfDescriptionController = require("../controller/MAIN/self-description.controller");
const registrationController = require("../controller/MAIN/registration.controller");

const dashboardController = require("../controller/MAIN/dashboard.controller");
const searchController = require("../controller/MAIN/search.controller");
const adminLoginController = require("../controller/MAIN/admin-login-masters-controller");
const serviceSlotController = require("../controller/MAIN/service-slot.controller");
const { validate } = require("../middleware/validate");
const SCHEMA = require("../schema");
const router = require("express").Router();

//----------------------------main----------------------------------

//---------------------------------Booking-------------------------------
// --Insert Booking
router.post(
  "/createBooking",
  validate(SCHEMA.BOOKING.createBookingSchema),
  bookingController.create
);

// --Get Booking by id
router.get("/getBookingDetails/:booking_id", bookingController.findOne);
router.get("/getBookingDetails", bookingController.findAll);

// --Get all Booking by List
router.get("/getBookingList", bookingController.findAll);

// --get Booking By user Id
// router.get("/getBookingListByUserId/:user_id", bookingController.findByUserId);

//-------------------------------------------------------------
//service booking
router.get(
  "/getAllServicesBookingListAdmin",
  bookingController.getAllServicesBookingListAdmin
);
//venue booking
router.get(
  "/getAllVenueBookedListAdmin",
  bookingController.getAllVenueBookedListAdmin
);

//-------------------------------------------------------------------

//---------------------------------Pet Booking Service-------------------------------
// --Insert Pet Booking Service
router.post(
  "/createPetServiceBooking",
  validate(SCHEMA.PET_SERVICE_BOOK.createPetServiceBooking),
  bookingController.createPetServiceBooking
);

// --Get Pet Booking Service
router.get(
  "/getPetServiceBookingList",
  bookingController.getPetServiceBookingList
);

//---getAll Pet Booking Service
router.get(
  "/getPetServiceBookingListById/:booking_id",
  bookingController.getPetServiceBookingListById
);

//-------------------------------Pet Booking Space-------------------------------
// --Insert Pet Booking Space
router.post(
  "/createPetSpaceBooking",
  validate(SCHEMA.PET_SPACE_BOOK.createPetSpaceBooking),
  bookingController.createPetSpaceBooking
);

// --Get Pet Booking Space
router.get("/getPetSpaceBookingList", bookingController.getPetSpaceBookingList);

//---getbyid Pet Booking Space
router.get(
  "/getPetSpaceBookingListById/:booking_id",
  bookingController.getPetSpaceBookingListById
);
//--------------------------------Booking details in web app profile------------
router.post(
  "/getPetSpaceBookByProvider",
  validate(SCHEMA.PET_SPACE_BOOK.getPetSpaceBooking),
  bookingController.petSpaceBookByProvider
);

router.post(
  "/getPetServiceBookByProvider",
  validate(SCHEMA.PET_SERVICE_BOOK.getPetServiceBooking),
  bookingController.petServiceBookByProvider
);

router.get("/getMyPetSpaceOrders/:id", bookingController.myPetSpaceOrders);

router.get("/getMyPetServiceOrders/:id", bookingController.myPetServiceOrders);

//--------------------------------------------------------------------

//--------------------------Self Description--------------------------------
//insert self description
router.post(
  "/createSelfDescription",
  validate(SCHEMA.SELF_DESCRIPTION.createSelfDescriptionSchema),
  selfDescriptionController.create
);

// //get self description by id
router.get(
  "/getSelfDescription/:user_id",
  selfDescriptionController.findByUserId
);
router.get("/getSelfDescription", selfDescriptionController.findAll);

// //get self description by id
router.put(
  "/updateSelfDescription",
  validate(SCHEMA.SELF_DESCRIPTION.updateSelfDescriptionSchema),
  selfDescriptionController.update
);

//----------------------------Registration-----------------------------
// --create Registration
router.post(
  "/createRegistration",
  validate(SCHEMA.REGISTRATION.createRegistrationSchema),
  registrationController.create
);

// --Get Registration
router.get("/getRegistrationDetails/:user_id", registrationController.findOne);
router.get("/getRegistrationDetails", registrationController.findAll);

// --Update Registration
router.put(
  "/updateRegistrationDetails",
  validate(SCHEMA.REGISTRATION.updateRegistrationSchema),
  registrationController.update
);

//-----------------------------------------------------------------

//---------------------------Pet category-----------------------------
// --Insert Pet category
router.post(
  "/createPetCategory",
  validate(SCHEMA.PET_CATEGORY.createPetCategorySchema),
  petCategoryController.create
);

// --Get Pet category List
router.get(
  "/getAllPetCategoryList",
  petCategoryController.getAllPetCategoryList
);
router.get("/getAllPetCategoryMaster", petCategoryController.findAll);
// --Update Pet category
router.put(
  "/updatePetCategory",
  validate(SCHEMA.PET_CATEGORY.updatePetCategorySchema),
  petCategoryController.update
);

//---delete pet category list
router.delete("/deletePetCategory", petCategoryController.delete);

//------------------------------Venue Master--------------------------
// --Insert Venue Master
router.post(
  "/createVenueMaster",
  validate(SCHEMA.VENUE_MASTERS.createVenueSchema),
  venueCategoryController.create
);

// --Get Pet category List
router.get("/getAllVenueList", venueCategoryController.getAllVenueList);

router.get("/getAllVenueMasterList", venueCategoryController.findAll);

// --Update Pet category
router.put(
  "/updateVenueMaster",
  validate(SCHEMA.VENUE_MASTERS.updateVenueSchema),
  venueCategoryController.update
);

//---delete pet Category
router.delete("/deleteVenueMaster", venueCategoryController.delete);

// //----------------------------------Options Applicable------------------------------------
// // --Insert options applicable
// router.post(
//   "/createOptionsApplicableMaster",
//   validate(SCHEMA.OPTIONS_APPLICABLE.createOptionsApplicableSchema),
//   optionsApplicableController.create
// );

// // --Get options applicable List
// router.get(
//   "/getAllOptionsApplicableMasterListAdmin",
//   optionsApplicableController.findAll
// );

// // --Update options applicable
// router.put(
//   "/updateOptionsApplicableMaster/:id",
//   validate(SCHEMA.OPTIONS_APPLICABLE.updateOptionsApplicableSchema),
//   optionsApplicableController.update
// );

// //---delete options applicable
// router.delete(
//   "/deleteOptionsApplicableMaster/:id",
//   optionsApplicableController.delete
// );

//-------------------------------------Amenities Master----------------------------
// --Insert Amenities Mastere
router.post(
  "/createAmenitiesMaster",
  validate(SCHEMA.AMENITY_MASTERS.createAmenitySchema),
  amenitiesCategoryController.create
);

// --Get Amenities Master
router.get(
  "/getAllAmenitiesMasterListAdmin",
  amenitiesCategoryController.findAll
);

router.get(
  "/getAllAmenitiesList",
  amenitiesCategoryController.getAllAmenitiesList
);

// --Update Amenities Master
router.put(
  "/updateAmenitiesMaster",
  validate(SCHEMA.AMENITY_MASTERS.updateAmenitySchema),
  amenitiesCategoryController.update
);

//---delete Amenities Master
router.delete("/deleteAmenitiesMaster", amenitiesCategoryController.delete);

//---------------------------------Service Master--------------------------
// --create Service Master
router.post(
  "/createServiceMaster",
  validate(SCHEMA.SERVICE_MASTERS.createServiceMastersSchema),
  serviceMastersController.create
);

router.post(
  "/getServiceProvidersFilter",
  serviceMastersController.getServiceProvidersFilter
);

// --Get Service Master
router.get("/getAllServiceMaster", serviceMastersController.findAll);

router.get("/getServiceMasterById/:id", aboutUsController.getServiceMasterById);
router.get("/getAllServiceList", serviceMastersController.getAllServiceList);

// --Update Service Master
router.put(
  "/updateServiceMaster",
  validate(SCHEMA.SERVICE_MASTERS.updateServiceMastersSchema),
  serviceMastersController.update
);

//---delete Service Master
router.delete("/deleteServiceMaster", serviceMastersController.delete);

//----------------------------Terms and Condition-----------------------------
// --create Terms and Condition
router.post(
  "/createTermsAndCondition",
  validate(SCHEMA.TERMS_AND_CONDITION.createTermsAndConditionSchema),
  termsAndConditionController.create
);

// --Get Terms and Condition
router.get("/getTermsAndCondition", termsAndConditionController.findAll);

// --Update Terms and Condition
router.put(
  "/updateTermsAndCondition",
  validate(SCHEMA.TERMS_AND_CONDITION.updateTermsAndConditionSchema),
  termsAndConditionController.update
);

//-------------------------Admin Terms and Condition------------------------------------
// --create Terms and Condition
router.post(
  "/createAdminTermsAndCondition",
  validate(SCHEMA.ADMIN_TERMS_AND_CONDITION.createAdminTermsAndConditionSchema),
  adminTermsAndConditionController.create
);

// --Get Terms and Condition
router.get(
  "/getAdminTermsAndCondition",
  adminTermsAndConditionController.findAll
);

// --Update Terms and Condition
router.put(
  "/updateAdminTermsAndCondition",
  validate(SCHEMA.ADMIN_TERMS_AND_CONDITION.updateAdminTermsAndConditionSchema),
  adminTermsAndConditionController.update
);

//---------------------------------Privacy Policy---------------------
// --create Privacy Policy
router.post(
  "/createPrivacyPolicy",
  validate(SCHEMA.PRIVACY_POLICY.createPrivacyPolicySchema),
  privacyPolicyController.create
);

// --Get Privacy Policy
router.get("/getPrivacyPolicy", privacyPolicyController.findAll);

// --Update Privacy Policy
router.put(
  "/updatePrivacyPolicy",
  validate(SCHEMA.PRIVACY_POLICY.updatePrivacyPolicySchema),
  privacyPolicyController.update
);

//-------------------------About Us-----------------------
// --create About Us
router.post(
  "/createAboutUs",
  validate(SCHEMA.ABOUT_US.createAboutUsSchema),
  aboutUsController.create
);

// --Get About Us
router.get("/getAboutUs", aboutUsController.findAll);

// --Get By Id About Us
router.get("/getAboutUsById/:id", aboutUsController.findOne);

// --Update About Us
router.put(
  "/updateAboutUs",
  validate(SCHEMA.ABOUT_US.updateAboutUsSchema),
  aboutUsController.update
);

//---------------------------------Pet Service-------------------------------
// --Insert Pet  Service
router.post(
  "/createPetService",
  validate(SCHEMA.PET_SERVICE.createPetServiceSchema),
  petserviceController.create
);

// --Get Pet  Service
router.get("/getAllPetService", petserviceController.findAll);
router.get("/getAllPetServiceList", petserviceController.getAllPetServiceList);

router.get("/getPetServiceById/:pet_services_id", petserviceController.findOne);
router.get(
  "/getSlotByPetServiceId/:id",
  petserviceController.getSlotByPetServiceId
);
router.get(
  "/getSlotByPetSpaceId/:id",
  petserviceController.getSlotByPetSpaceId
);

router.post(
  "/getPetServicePendingList",
  petserviceController.getPetServicePendingList
);

router.get(
  "/getPetServicePendingListById/:pet_services_id",
  petserviceController.getPetServicePendingListById
);
router.get(
  "/getPetServiceMobileListById/:user_id",
  petserviceController.getPetServiceMobileListById
);

router.get(
  "/getPetServiceMobileListById/:user_id",
  petserviceController.getPetServiceMobileListById
);

// --update Pet  Service By Id
router.put(
  "/updatePetService",
  validate(SCHEMA.PET_SERVICE.updatePetServiceSchema),
  petserviceController.update
);

router.put(
  "/updateAdminApprovedPetServiceMaster",

  petserviceController.updateAdminApprovedPetServiceMaster
);

router.put("/serviceApproval", petserviceController.serviceApproval);

//---delete Pet  Service
router.delete("/deletePetService/:id", petserviceController.delete);

//-------------------------------Pet Venue-------------------------------
// --Insert Pet  Space
router.post(
  "/createPetSpace",
  validate(SCHEMA.PET_SPACE.createPetSpaceSchema),
  petSpaceController.create
);

// --Get Pet  Space
router.get("/getAllPetSpace", petSpaceController.findAll);

router.get("/getAllPetSpaceList", petSpaceController.getAllPetSpaceList);
router.get("/getPetSpaceById/:id", petSpaceController.findOne);
//pet space pending list
router.post(
  "/getPetSpacePendingList",
  petSpaceController.getPetSpacePendingList
);

router.get(
  "/getPetSpaceMobileListById/:user_id",
  petSpaceController.getPetSpaceMobileListById
);

// --update Pet  Space By Id
router.put(
  "/updatePetSpace",
  validate(SCHEMA.PET_SPACE.updatePetSpaceSchema),
  petSpaceController.update
);

router.put(
  "/updateAdminApprovedPetSpaceMaster",
  petSpaceController.updateAdminApprovedPetSpaceMaster
);

router.put("/venueApproval", petSpaceController.venueApproval);

//---delete Pet  Space
router.delete("/deletePetSpace/:id", petSpaceController.delete);

//-----------------DASHBOARD----------------------

// --Get Total venue Booking Dashboard
router.get(
  "/getTotalVenueBookingDashboard",
  dashboardController.getTotalVenueBookedDashboardListHandler
);

// --Get Total Service Booking Dashboard
router.get(
  "/getTotalServiceBookingDashboard",
  dashboardController.getTotalServicesBookingDashboardListHandler
);
// --Get Total  Booking Dashboard

router.get(
  "/getTotalBookingDashboard",
  dashboardController.getTotalBookingsDashboardHandler
);

//-----------------------------------service slot ---------------------
router.post(
  "/createServiceSlot",
  validate(SCHEMA.SERVICE_SLOT.createServiceSlotSchema),
  serviceSlotController.create
);

router.put(
  "/updateServiceSlot/:id",
  validate(SCHEMA.SERVICE_SLOT.updateServiceSlotSchema),
  serviceSlotController.update
);

router.get("/getServiceSlotList", serviceSlotController.findAll);
router.get("/getServiceSlotById/:id", serviceSlotController.findOne);

//-----------------------------------------------------------------------

//-----------------------SearchVenueAndService----------------------------------//
router.post("/searchVenueAndService", searchController.getSearchHandler);
//-----------------------------------Admin Login---------------------

router.post(
  "/createAdminLogin",
  validate(SCHEMA.ADMIN_LOGIN.createAdminLoginSchema),
  adminLoginController.create
);

//---get By Id Admin Login
router.post(
  "/getAdminLogin",
  validate(SCHEMA.ADMIN_LOGIN.getAdminLoginSchema),
  adminLoginController.getAdminLogin
);
//-------------------------------------------------
module.exports = router;
