module.exports = {
    name: "qrcode",
    category: "Utilities",
    description: "Crée un qrcode.",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed: {title:un qrcode a été crée}{description:lien ou text#COLON#\n$slashOption[lien]}{image:https://api.qrserver.com/v1/create-qr-code/?size=$slashOption[taille]x$slashOption[taille]&data=$slashOption[lien]}{color:0099ff}};;;everyone;true]`
}