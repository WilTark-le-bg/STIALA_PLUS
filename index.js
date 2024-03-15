//modules nodejs-----------------------------------------------------------------
const { AoiClient, LoadCommands } = require("aoi.js");
const fs = require('fs');
const { Panel } = require("@akarui/aoi.panel");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

//config .json-----------------------------------------------------------------
let configt = fs.readFileSync('config.json');
let token = JSON.parse(configt);


//config aoijs-----------------------------------------------------------------
const client = new AoiClient({
  token: token.token,
  prefix: "$",
  intents: ["MessageContent", "Guilds", "GuildMessages"], // Default Intents
  events: ["onMessage", "onInteractionCreate"], // Default Events
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here", // Don't change anything here if you're not sure what you're doing.
  }
 });

const voice = new AoiVoice(client, {
  searchOptions: {
  soundcloudClientId: "Soundcloud ID", // optional
  youtubegl: "US",
  },
  requestOptions: {
  offsetTimeout: 0,
  soundcloudLikeTrackLimit: 200,
  },
  });

//loader cmds-----------------------------------------------------------------
client.loadCommands("./commands/", true);
require("./handler/variables.js")(client)

//aoi.panel-----------------------------------------------------------------
const panel = new Panel({
  port: 25302,
  client: client,
});
panel.loadAPI({
  auth: "Authentication key here (random string)", // no spaces, keep it only alphanumeric...
});
panel.loadGUI({
  username: [token.userp],
  password: [token.passwordp],
});



const app = panel.app;
app.get("/status", (req, res) => {
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><link rel="stylesheet" href="https://extensions.aoijs.org/assets/onbot.css" /><div><div class="on"></div><h1>the bot is online</h1></div></html>');
})
app.get("/example", (req, res) => {
res.send("This is an example page.");
})


//info connect-----------------------------------------------------------------
client.status({
  name: "stiala plus soon..",
  type: "STREAMING",
  time: 25,
  URL: "https://twitch.tv/discord",
});

client.readyCommand({
  channel: token.channelId, 
  code: `
    $title[<:tik:1040670506199810068> Bot allumé !]
    $description[### info:
    - Ping: $ping 
**Nodejs-modules:**
- aoijs: 
> version: v6.7.1
     - aoi.panel:
> version: v0.0.9 
> Port: 25302
     - aoi.db:
     - aoi.music:
> version: v2.3.2
     - aoi.canvas:
> version: v1.2.6
- serveur: kasycorp
    ]
    $image[https://cdn.discordapp.com/attachments/1020016533029797909/1217908147356696616/Sans_titre_115_20240314195152.png]
    $color[0099ff] 
  `
});

const karl = "token is " + token.token;
console.log(karl);