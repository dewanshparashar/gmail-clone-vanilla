//a function which

class EmailGenerator {
  //the base values, which will seed the email data randomly
  seederValues = {
    time: Date.now(),
    senders: [
      { id: "dewansh@gmail.com", name: "Dewansh" },
      { id: "elon@tesla.com", name: "Elon musk" },
      { id: "tim@apple.com", name: "Tim Cook" },
    ],
    opened: [true, false],
    starred: [true, false],
    important: [true, false],
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    attachmentType: ["pdf", "txt", "xlsx", "ppt"],
    attachmentFl: [true, false],
  };

  //function to generate random values from the seed
  generate = function (filename = "emails", length = 50) {
    var seederValues = this.seederValues;
    var data = [];
    var subjectLength = 50;
    var contentLength = 50;
    var attachmentNameLength = 10;

    for (var i = 0; i < length; i++) {
      var time = seederValues.time - i * 3600 - Math.floor(Math.random() * 600); //each email is 1hr+-10mins ago compared to previous
      var opened = seederValues.opened[Math.round(Math.random())]; //any of the 2 values [0,1]
      var starred = seederValues.starred[Math.round(Math.random())]; //any of the 2 values [0,1]
      var important = seederValues.important[Math.round(Math.random())]; //any of the 2 values [0,1]
      var attachmentFl = seederValues.attachmentFl[Math.round(Math.random())]; //any of the 2 values [0,1]
      var attachmentType, attachmentName;

      //   only if the attachment came out to be true, generate a valid attachment file
      if (attachmentFl) {
        //choose any out of the 4 random extensions
        attachmentType =
          seederValues.attachmentType[Math.round(Math.random()) * 4];

        //generate a random 10letter name for the attatchment
        var attNameStart = Math.round(Math.random() * 700);
        attachmentName = seederValues.text.slice(
          attNameStart,
          attNameStart + attachmentNameLength
        );
      }

      var sender = seederValues.senders[Math.round(Math.random() * 3)]; // any of the 3 values [0,1,2]

      //generate random substrings of specified length from the seeder Lorem ipsum text
      var subStart = Math.round(Math.random() * 700);
      var conStart = Math.round(Math.random() * 700);
      var subject = seederValues.text.slice(subStart, subStart + subjectLength);
      var content = seederValues.text.slice(conStart, conStart + contentLength);

      var email = {
        timestamp: time,
        sender: sender,
        properties: {
          opened: opened,
          starred: starred,
          important: important,
        },
        subject: subject,
        content: content,
        attachmentFl: attachmentFl,
        attachments: !attachmentFl
          ? []
          : [
              {
                type: attachmentType,
                name: attachmentName + "." + attachmentType,
              },
            ],
      };

      //push this complete email DTO to the data
      data.push(email);
    }

    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(data));
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", filename + ".json");
    dlAnchorElem.click();
  };
}

var emailGenerator = new EmailGenerator();
