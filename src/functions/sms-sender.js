const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "42a4ca73",
    apiSecret: "ha7di7p5FJ47LroN"
  })

  const from = "Orly"
  
  const sendSms = (to,text) => {
    let receiver = `+63${to}`
    vonage.message.sendSms(from, receiver, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
  }

  export default sendSms

  