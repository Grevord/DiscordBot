const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const field = require("./botConfig/commands.json");

const prefix = "g.";

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    message.delete();
    
    if (command === "ping") {
        message.delete();
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`TG PD je t'ai répondu en ${timeTaken} millisecondes alors fait pas chier`);
    }
    else if(command === "avatar"){
        message.delete();
        message.reply(message.author.displayAvatarURL() + "  La prochaine fois perd pas ta PP bolos");
    }
    else if (command === 'yea') {
        message.delete();
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new Discord.MessageEmbed()
          // Set the title of the field
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(args[0])
          // Set the color of the embed
          .setColor(0xff0000)
          .setFooter(args[2])
          // Set the main content of the embed
          .setDescription("a /br a");
          
        // Send the embed to the same channel as the message
        message.channel.send(embed);
      }
      else if( command === "info"){
        message.delete();
        const page = args[0]
        const embed = new Discord.MessageEmbed()
        // Set the title of the field
        
        .setTitle("Liste des commandes")
        // Set the color of the embed
        .setColor(0xff0000)
        .addFields(field.commands)
        // Set the main content of the embed
        .setDescription("g.");
        
      // Send the embed to the same channel as the message
      message.channel.send(embed);
      }
      else{
          message.reply(` La commande g.${command} n'existe pas `).then(async(element) => {
             await sleep(10000);
             element.delete();
          })
      }
});   

client.login(config.BOT_TOKEN);

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   