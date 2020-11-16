const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// how do we protect this route?
router.get('/', async (req, res, next) => {
  try {
    console.log(Object.keys(User.prototype))
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
