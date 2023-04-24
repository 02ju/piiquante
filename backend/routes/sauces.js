const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.js');
const multer = require('../middleware/multer-config.js');

const saucesCtrl = require('../controllers/sauces.js');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, multer, saucesCtrl.createSauces);
router.get('/:id', auth, saucesCtrl.getOneSauces);
router.put('/:id', auth, multer, saucesCtrl.modifySauces);
router.delete('/:id', auth, saucesCtrl.deleteSauces); 

router.post('/ok', auth, multer, saucesCtrl.createSauce);

module.exports = router;

/* avant auth
router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing); 
*/
