const { AoiClient, LoadCommands } = require("aoi.js");
const fs = require('fs');
const { Panel } = require("@akarui/aoi.panel");
let configt = fs.readFileSync('config.json');
let token = JSON.parse(configt);
let pkgr = fs.readFileSync('package.json');
let pkge = JSON.parse(pkgr);
const client = new AoiClient({
  token: token.token,
  prefix: "$",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
      },

  },
});
const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands/", true);

const panel = new Panel({
  port: 25302,
  client: client,
});
client.status({
  name: "stiala plus soon..",
  type: "STREAMING",
  time: 25,
  URL: "https://twitch.tv/discord",
});
panel.loadAPI({
  auth: "Authentication key here (random string)", // no spaces, keep it only alphanumeric...
});
const karl = "token is " + token.token;
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
client.variables({
membres: 0,
role: "",
emoji: "",
msg: "",
chnl: "",
id: "",
user: "",
category: "1030353877054263307",
channel: "1026572494611689482",
setup: "true",
});
console.log(karl);

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