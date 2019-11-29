const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (() => {
    // grant: ban cho
    ac.grant("guest")
        .readOwn('profile')
        .updateOwn('profile');
    ac.grant("user")
        .extend('guest')
        .readAny("profile");
    ac.grant("admin")
        .extend("guest")
        .extend("user")
        .updateAny("profile")
        .deleteAny("profile");
    return ac;
})()