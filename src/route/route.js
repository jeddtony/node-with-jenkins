
const router = require('express').Router();

router.get('/', async (req, res) => {
    // console.log('here');
    return res.status(200).json({
        message: "My Rule-Validation API",
        status: "success",
        data: {
          name: "Jedidiah Anthony",
          github: "@jeddtony",
          email: "jedidiahanthony@gmail.com",
          mobile: "08132387257",
          twitter: "@JeddTony",
        },
      });
});


module.exports = router;