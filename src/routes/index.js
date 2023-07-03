const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
  res.json({"title": "REST API with NodeJS"})
});

router.get('/test', (req,res) => {
  const data = {
    "name": "Alexis",
    "website": "martdevelopersolutions.com"
  }
  res.json(data)
});

module.exports = router;