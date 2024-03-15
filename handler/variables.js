module.exports = (client) => {
  client.variables({
    cash: 0,
    bank: 0,
    level: 0,
    exp: 0,
    maxexp: 0,
    welcomer: false,
    welcomertype: "message",
    welcomerchannel: "0000",
    welcomermessage: "Welcome To The Guild, {user.mention}!",
    welcomerembedsmessage: {"title": "{guild.name}", "description": "Welcome To The Server, {user.mention}!", "color": "White", "image": ""}
  }, "main"); // The label "main" here is the table of the variable, do not change it unless you're sure what you're doing.
};
