const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    //비밀번호를 안전하게 암호화 보관 후 사용
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    //mongoose method save() 함수 는 문서를 데이터베이스에 저장하는 데 사용
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //findOne은 find 메서드에서 조회할때 가장 첫번째 배열 데이터 한개만 조회하고 싶을때 사용
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    //compare을 통하여 입력한 pw와 저장된 pw의 일치 여부 판단
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    //user 안에 수많은 객체들중 _doc를 선택하여 원하는 객체만 가져옴
    //password의 표시를 방지하기 위해 ...others만 표기
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
