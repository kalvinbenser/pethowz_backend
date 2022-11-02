 const MESSAGE={
    BOOKING_SUCCESS: 'Your booking has been posted successfully',
    REGISTRATION_SUCCESS: 'Registered successfully',
    SUCCESS: 'SUCCESS',
    UPDATED: 'Updated Successfully',
    DETAILS_FETCH_FAILED: 'No details found',
    INVALID_DATA: 'Invalid Request',
    INVALID_ID: 'Invalid ID/params',
  };
  const REQUIRED = ` is required `;
  const isActive = `isActive`;
  const REQUIRED_STATEMENTS={
    PET_CATEGORY: `Pet category${REQUIRED}`,
    PET_CAT_ID: `Pet category ID${REQUIRED}`,
    VENUE: `Venue${REQUIRED}`,
    VENUE_ID: `Venue ID${REQUIRED}`,
    AMENITIES: `AMENITY${REQUIRED}`,
    AMENITY_ID: `AMENITY ID${REQUIRED}`,
    IS_ACTIVE: `${isActive}${REQUIRED}`,
    OP_APPLICABLE: `Options Applicable${REQUIRED}`,
    OPTIONS_ID: `Options Id${REQUIRED}`,
    //pet service
    SERVICE_ID: `Service ID${REQUIRED}`,
    USER_ID: `User ID${REQUIRED}`,
  };

  module.exports={MESSAGE,REQUIRED_STATEMENTS}
  