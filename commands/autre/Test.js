const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

const bot = new AoiClient({
    token: "",
    prefix: "+",
    intents: ["Guilds", "GuildMessages", "MessageContent", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate",],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const voice = new AoiVoice(bot, {
searchOptions: {
soundcloudClientId: "Soundcloud ID", // optional
youtubegl: "US",
},
requestOptions: {
offsetTimeout: 0,
soundcloudLikeTrackLimit: 200,
},
});

bot.status({
    name: "Neco BETA",
    type: "PLAYING",
    time: 12
  
});


bot.command({
  name: "rejoindre",
  code: `$joinvc`
  
});

bot.command({
name: "jouer",
code: `
$deletecommand 
$title[Son joué : $message (Envoie .infomusique pour connaitre le nom exact)]
$color[#F9826D]
$playTrack[$message[1] $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8];youtube]
$joinVC`
});

bot.command({
    name: "infomusique",
    code: `
Nom de la musique : $songInfo[title]

Durée : $math[$songInfo[duration]/60] Seconds ($math[$songInfo[duration]/60/60/60] minutes)

Arstist/e : $songInfo[artist]

URL : <https://www.youtube.com/watch?v=$songInfo[id]>`})



bot.command({
  name: "passer",
  code: `$skipTrack $title[↪️ Musique passée.]`
});

bot.command({
   name: "volume",
   code: ` $volume[$message]
$title[🔊 Volume Réglé Sur $message]
$description[Ce n'est pas permanent, si le bot quitte et reviens en vocal, le volume se remettera a 100.]
$footer[Neco] $color[#F9826D]`,
});

bot.command({
    name: "repeter",
    code: `$loopMode[song]
$title[🔁 Musique actuelle désormais jouée en boucle ]`});

bot.command({
    name: "stop",
    code: `$loopMode[none] $title[➡️ La musique actuelle n'est plus jouée en boucle.]`});



bot.command({
    name: `leave`,
    code: `$leaveVC $title[🔇 Le vocal a été quitté! Au revoir 💝]`});

bot.command({
    name: "viporder",
    code: `
$onlyForChannels[1173553198162792448;You can only execute this command in the <#1173553198162792448> channel.
]

$deletecommand
$channelSendMessage[1173559262992138271;<@$authorID> Has ordered $message ||<@967883624135397442>||]
$title[<:VIP:1173549615333769257>** $username , Your order has been delivered!**<:VIP:1173549615333769257>]
$deleteIn[5]
`})

bot.command({
    name: "blacklist",
    code: `
$title[⚠️**BLACKLIST**⚠️]
$description[
*BLACKLIST IS THE UNFINDABLE ACCOUNTS. DO NOT ASK FOR THEM IN ANY WAY.*
<a:wall:1175566370277171293> SPOTIFY
<a:wall:1175566370277171293> PLAYSTATION NETWORK (Psn)
]`})

bot.command({
    name: "bl",
    code:`$onlyForRoles[1173414003360411778;blud is not admin😳]
$ban[$guildID;$mentioned[1]]
banned the fuck out of <@$mentioned[1]>
`})

bot.command({
    name: "wipe",
    code:`$onlyPerms[managemessages; You do not have enough stinky mod power to use this command.]
    $clear[$channelID;99] 
    $title[<:8508delete:1196525059557302272> Wiped channel. <:8508delete:1196525059557302272>] $footer[neco bot - still under developement]
    $deletecommand $deleteIn[3] $suppressErrors`})

bot.command({
    name: "title",
    code: `$createApplicationCommand[global;makeembed;Create an embedded message;true;slash;[
    {
        "name": "title",
        "description": "The title of the embed",
        "required": true,
        "type": 3
    },
    {
        "name": "description",
        "description": "The description of the embed",
        "required": false,
        "type": 3
    },
    {
        "name": "footer",
        "description": "The footer of the embed",
        "required": false,
        "type": 3
    },
    {
        "name": "bigimage",
        "description": "(LINK) The big image of the embed",
        "required": false,
        "type": 3
    },
    {
        "name": "color",
        "description": "(say the color like: red or blue)",
        "required": false,
        "type": 3
    }
    ]]

    seon-ok
    seon-ok`,
})

bot.command({
    name: "no",
    code: `$deleteApplicationCommand[global;$getApplicationCommandID[global;makeembed]]

bot.command({
    name: "makeembed",
    prototype: "slash",
    type: "interaction",
    code: `$interactionReply[Hello, world!;;;;;false]
 $interactionReply[If the color code doesnt work, you should try these : 
White
Aqua
Green
Blue
Yellow
Purple
LuminousVividPink
Fuchsia
Gold
Orange
Red
Grey
Navy
DarkAqua
DarkGreen
DarkBlue
DarkPurple
DarkVividPink
DarkGold
DarkOrange
DarkRed
DarkGrey
DarkerGrey;;;;true]`
})