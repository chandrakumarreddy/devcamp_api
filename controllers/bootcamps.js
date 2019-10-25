//@desc     GET all bootcamps
//@route    /api/v1/bootcamps
//access    PUBLIC
exports.getBootcamps = (req, res) => {
  res.status(200).send(`GET all Bootcamps`);
};

//@desc     GET single bootcamp
//@route    /api/v1/bootcamps/:id
//access    PUBLIC
exports.getBootcamp = (req, res) => {
  res.status(200).send(`GET single Bootcamps ${req.params.id}`);
};

//@desc     create new bootcamp
//@route    /api/v1/bootcamps
//access    PRIVATE
exports.createBootcamp = (req, res) => {
  res.status(200).send(`create new Bootcamp`);
};

//@desc     update a bootcamp
//@route    /api/v1/bootcamps/:id
//access    PRIVATE
exports.updateBootcamp = (req, res) => {
  res.status(200).send(`Update Bootcamp ${req.params.id}`);
};

//@desc     delete a bootcamp
//@route    /api/v1/bootcamps/:id
//access    PRIVATE
exports.deleteBootcamp = (req, res) => {
  res.status(200).send(`delete Bootcamp ${req.params.id}`);
};
