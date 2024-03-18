const express = require ('express');
const router = express.Router();
const SaloonformenModelImageonly = require("../model/saloonformenImageSchema");
const SaloonformenModelDataeonly = require("../model/saloonformenDATASchema");

const cors = require('cors')
router.use(cors());
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });




// router.post("/images", upload.fields([
//   { name: 'logo', maxCount: 1 },
//   { name: 'stars', maxCount: 1 },
//   { name: 'genderimage', maxCount: 1 },
//   { name: 'locationimage', maxCount: 1 }
// ]), async (req, res) => {
//   try {
//       const logoFile = req.files['logo'][0];
//       const starsFile = req.files['stars'][0];
//       const genderImageFile = req.files['genderimage'][0];
//       const locationImageFile = req.files['locationimage'][0];
      
//       // Create new instances of SaloonformenModelImageonly for each uploaded image
//       const logoSaloon = new SaloonformenModelImageonly({
//           logo: {
//               data: fs.readFileSync("uploads/" + logoFile.filename),
//               contentType: "image/png",
//           }
//       });
//       const starsSaloon = new SaloonformenModelImageonly({
//           stars: {
//               data: fs.readFileSync("uploads/" + starsFile.filename),
//               contentType: "image/png",
//           }
//       });
//       const genderImageSaloon = new SaloonformenModelImageonly({
//           genderimage: {
//               data: fs.readFileSync("uploads/" + genderImageFile.filename),
//               contentType: "image/png",
//           }
//       });
//       const locationImageSaloon = new SaloonformenModelImageonly({
//           locationimage: {
//               data: fs.readFileSync("uploads/" + locationImageFile.filename),
//               contentType: "image/png",
//           }
//       });

//       // Save each instance separately
//       await logoSaloon.save();
//       await starsSaloon.save();
//       await genderImageSaloon.save();
//       await locationImageSaloon.save();

//       console.log("All images are saved successfully.");
//       res.status(200).send("All images are saved successfully.");
//   } catch (error) {
//       console.error("Error occurred while saving images:", error);
//       res.status(500).send("An error occurred while saving images.");
//   }
// });
  



//actual

  // router.post("/images", upload.fields([
  //   { name: 'logo', maxCount: 1 },
  //   { name: 'stars', maxCount: 1 },
  //   { name: 'genderimage', maxCount: 1 },
  //   { name: 'locationimage', maxCount: 1 }
    
  // ]), (req, res) => {
  //   const logoFile = req.files['logo'][0];
  //   const starsFile = req.files['stars'][0];
  //   const genderImageFile = req.files['genderimage'][0];
  //   const locationImageFile = req.files['locationimage'][0];
    

  //    const newsaloon =  SaloonformenModelImageonly({
      
  //   logo: {
  //       data: fs.readFileSync("uploads/" + logoFile.filename),
  //       contentType: "image/png",
  //     },
  //     stars:{
  //       data: fs.readFileSync("uploads/" + starsFile.filename),
  //       contentType: "image/png",
  //     },
  //      genderimage:{
  //     data: fs.readFileSync("uploads/" + genderImageFile.filename),
  //       contentType: "image/png",
  //     },
  //     locationimage:{
  //       data: fs.readFileSync("uploads/" + locationImageFile.filename),
  //       contentType: "image/png",
  //     }
  //   });
  //   newsaloon.save()
  //     .then((res) => {
  //       console.log("image is saved");
  //     })
  //     .catch((err) => {
  //       console.log(err, "error has occur");
  //     });
  //     res.json({response:newsaloon});
  // });

  
  router.post("/images", upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'stars', maxCount: 1 },
    { name: 'genderimage', maxCount: 1 },
    { name: 'locationimage', maxCount: 1 }
    
  ]), (req, res) => {
    const logoFile = req.files['logo'][0];
    const starsFile = req.files['stars'][0];
    const genderImageFile = req.files['genderimage'][0];
    const locationImageFile = req.files['locationimage'][0];
    

     const newsaloon =  SaloonformenModelImageonly({
      
    logo: {
        data: fs.readFileSync("uploads/" + logoFile.filename),
        contentType: "image/png",
      },
      stars:{
        data: fs.readFileSync("uploads/" + starsFile.filename),
        contentType: "image/png",
      },
       genderimage:{
      data: fs.readFileSync("uploads/" + genderImageFile.filename),
        contentType: "image/png",
      },
      locationimage:{
        data: fs.readFileSync("uploads/" + locationImageFile.filename),
        contentType: "image/png",
      },
      heading:req.body.heading,
      status:req.body.status,
      closingtime:req.body.closingtime,
      reviews:req.body.reviews,
      gender:req.body.gender,
      locationdetails:req.body.locationdetails,
      GENDER: req.body.GENDER,
      LOCATION: req.body.LOCATION,
      RATINGS: req.body.RATINGS,
      HOURS: req.body.HOURS,
    });
    newsaloon.save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.json({response:newsaloon});
  });

  
    router.get('/images',async (req,res)=>{
    const allData = await SaloonformenModelImageonly.find()
    console.log(allData,"alldata")
    res.json({saloonformen:allData})
  })


   router.post('/data',async (req,res)=>{
    const newsaloondata = SaloonformenModelDataeonly({heading:req.body.heading,status:req.body.status,closingtime:req.body.closingtime,
      reviews:req.body.reviews,gender:req.body.gender,locationdetails:req.body.locationdetails});

      newsaloondata.save().then((res)=>{
        console.log(res,"image is saved pro max")
      }).catch((err) => {
        console.log(err, "error has occur");
      })
      res.json({newsaloondata:newsaloondata})
  })

  router.get('/data',async (req,res)=>{
    const allData = await SaloonformenModelDataeonly.find()
    res.json({saloonformen:allData})
  })

  module.exports = router;