const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();
const jwt = require("jsonwebtoken")
const { User, School, Rate, Event } = require("./models")
class Controller {
  static async gsign(req, res) {
    try {
      let { google_token } = req.headers

      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.CLIENT_ID
      });
      const payload = ticket.getPayload();
      let data = await User.findOne({
        where: {
          email: payload.email
        }
      })
      if (data) {
        let access_token = jwt.sign({
          id: data.id,
          email: data.email,
        }, process.env.SECRET)
        res.status(200).json({
          access_token,
          user: {
            email: data.email,
            username: data.username,
            status: data.status,
            otp: "123456",
            school_slug: data.school_slug
          }
        })
      } else {
        let data = await User.create({
          email: payload.email,
          phone_number: req.body.phone_number,
          otp: "123456",
          avatar: "https://naturalhistory.si.edu/sites/default/files/styles/profile/public/media/image/staff-avatar-vz-mammals.png.webp?itok=OnIdZ9o5",
          status: false,
          school: "SMKN 61 JAKARTA",
          school_slug: "SMKN_61_JAKARTA"
        })
        let access_token = jwt.sign({
          id: data.id,
          email: data.email,
        }, process.env.SECRET)
        res.status(201).json({
          access_token,
          user: {
            email: data.email,
            username: "Anon" + data.id,
            otp: "123456",
            school_slug: req.body.school_slug,
            status: data.status
          }
        })
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error"
      })
    }

  }
  static async readEvent(req, res) {
    try {
      let data = await Event.findAll()
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error"
      })
    }

  }
  static async readSchoolSlug(req, res) {
    try {
      let school = await School.findOne({
        where: {
          slug: req.params.slug
        },
      })

      let comments = await Rate.findAll()
      let groups = {}
      comments.forEach(element => {
        if (!groups[element.category]) {
          groups[element.category] = []
        }
        groups[element.category].push(element)
      });
      let ratings = {}
      for (const key in groups) {
        console.log(key);
        ratings[key] = {
          total: 0,
          length: groups[key].length
        }
        for (let i = 0; i < groups[key].length; i++) {
          ratings[key].total += groups[key][i].star
        }
        ratings[key].average = ratings[key].total / ratings[key].length
        ratings[key].percentage = ratings[key].average / 5 * 100
      }
      let schoolnya = school.dataValues
      let data = { ...schoolnya, ratings, comments, groups }
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({
        message: "Internal server error"
      })
    }

  }
  static async createSchoolRate(req, res) {
    try {
      let { username, star, slug, category, comment } = req.body
      let data = await Rate.create({ username, star, slug, category, comment })
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({
        message: "Internal server error"
      })
    }
  }
  static async readMySchoolRate(req, res) {
    try {
      let { email } = req.headers
      let data = await Rate.findAll({
        where: {
          email
        }
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({
        message: "Internal server error"
      })
    }
  }
}

module.exports = Controller