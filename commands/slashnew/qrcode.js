module.exports = {
    name: "createqr",
    description: "Crée un qrcode.",
    code: `
    Slash "qrcode" command have been created successfully!
    $createApplicationCommand[$guildID;qrcode;Crée un qrcode..;true;true;slash;[{
        "name": "lien",
        "description": "lien ou text",
        "required": true,
        "type": 3
    }]]
    `
  }