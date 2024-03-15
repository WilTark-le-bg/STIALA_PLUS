module.exports = [
    {
        name: "sup",
    code: `
  $title[
    $me
  ]
  $description[
  \`\`\`$ping ms\`\`\`
  par $username]
  $updateCommands
  `
},
{
  name: "ping",
  category: "Utilities",
  description: "ping.",
  type: "interaction",
  prototype: "slash",
  code: `$updateCommands $interactionReply[;{newEmbed: {title:pong!le server a repondu en }{description:\`\`\`$ping ms\`\`\`\npar $username}{color:0099ff}};;;everyone;]`
}
]