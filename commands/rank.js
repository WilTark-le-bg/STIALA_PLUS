module.exports = [{
    name: "rankpanel",
    code: `
    $title[1;<:devicon:1212721933980930138> Ouvrez un ticket pour vous faire rank]
    $description[1;**Clickez sur le boutton ci-dessous pour devenir membre de la communauté Staff de Kayde.**]
    $color[1;DarkPurple]
    $addButton[1;Créer un ticket;2;support]
    $onlyPerms[manageguild;<a:redno:1212839352212914178> Vous n'avez pas la permission d'utiliser cette commande.]
    `
},{
    name: "support",
    type: "interaction",
    prototype: "button",
    code: `
    $setChannelVar[user;$authorID;$channelID[rank-$username]]
    $setChannelVar[id;$channelID[rank-$username];$channelID[rank-$username]]
    $interactionReply[<:checkmarkblue:1212483942439977000> | Ticket Ouvert, <@$authorID>!;;;;all;true;false]
    $channelSendMessage[$channelID[rank-$username];<@$authorID>]
    $newTicket[rank-$username;
        {newEmbed:{title:✉ | Ticket}{description:<:modicon:1212721922031357973> **Attendez que le support vous réponde.**}{color:DarkPurple}}
        {actionRow:{button:🔒 Fermer:danger:cmdclose:false}}
        ;$getVar[category]]
        $onlyIf[$channelExists[rank-$username]==false;{
    Vous avez déjà un ticket ouvert.
   {ephemeral}
{interaction}}]
`
},{
    name: "cmdclose",
    type: "interaction",
    prototype: "button",
    code: `
    $sendDm[<:devicon:1212721933980930138> Votre ticket (#$channelName) a été fermé sur Kayde. (Fermé par <@$authorID>);$getChannelVar[user;$channelID[rank-$username]]] $closeTicket    
    `
}]