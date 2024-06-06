const Subject = require("../model/2022.module.model");

const createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body)
    await subject.save()
    res.status(200).json(subject);
  } catch (err) {
    res.status(400).json({ message: "Error ", err });
  }
};

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll()
    res.status(200).json(subjects)
  } catch (err) {
    res.status(400).json({ message: "Error ", err });
  }
};