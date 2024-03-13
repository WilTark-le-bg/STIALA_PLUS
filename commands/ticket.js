module.exports = [{
    name: "ticketpanel",
    code: `
    
    $title[1;<:devicon:1212721933980930138> Contacter l'équipe Kayde]
    $description[1;**Clickez sur le boutton ci-dessous pour contacter le support.**
Raisons de la création d'un ticket : 
- Abus de la part d'un staff
- Plainte envers un membre de la communauté]
    $color[1;DarkPurple]
    $addButton[1;Créer un ticket;2;support2]
    $onlyPerms[manageguild;<a:redno:1212839352212914178> Vous n'avez pas la permission d'utiliser cette commande.]
    `
},{
    name: "support2",
    type: "interaction",
    prototype: "button",
    code: `
    $setChannelVar[user;$authorID;$channelID[support-$username]]
    $setChannelVar[id;$channelID[support-$username];$channelID[support-$username]]
    $interactionReply[<:checkmarkblue:1212483942439977000> | Ticket Ouvert, <@$authorID>!;;;;all;true;false]
    $newTicket[support-$username;
        {newEmbed:{title:✉ | Ticket}{description:<@$authorID><:modicon:1212721922031357973> **Attendez que le support vous réponde.**}{color:DarkPurple}}
        {actionRow:{button:🔒 Fermer:danger:cmdclose2:false}}
        ;$getVar[category]]
        $onlyIf[$channelExists[support-$username]==false;{
    Vous avez déjà un ticket ouvert.
   {ephemeral}
{interaction}}]
`
},{
    name: "cmdclose2",
    type: "interaction",
    prototype: "button",
    code: `
$closeTicket
$wait[3s]
$interactionReply[Le ticket est en train d'être supprimé...]
    $sendDm[<:devicon:1212721933980930138> Votre ticket ($channelName) a été fermé sur Kayde. (Fermé par <@$authorID>);$getChannelVar[user;$channelID[support-$username]]] 
    `
}]