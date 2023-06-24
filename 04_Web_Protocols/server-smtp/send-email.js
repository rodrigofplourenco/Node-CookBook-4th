const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 4321
})

transporter.sendMail(
  {
    from: 'rodrigo@rodrigo.pt',
    to: 'johndoe@example.com',
    subject: 'Hey!',
    text: 'Hello World!'
  },
  (err, info) => {
    if (err) {
      console.error(err)
    }

    console.log('Message Sent:', info)
  }
)
