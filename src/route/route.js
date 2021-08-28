
const router = require('express').Router();

router.get('/', async (req, res) => {
    // console.log('here');
    return res.status(200).json({
        message: "My Rule-Validation API",
        status: "success",
        data: {
          name: "Jed Tony",
          github: "@jeddtony",
          email: "jedtony@gmail.com",
          mobile: "",
          twitter: "@JeddTony",
        },
      });
});


module.exports = router;