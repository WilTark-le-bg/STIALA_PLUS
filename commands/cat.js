module.exports = [
  {
       name: "cat",
    code: `
    $sendCanvas[cat]
    $canvasBuilder[
        {settings:cat:512:512}
        {image:url:$replaceText[$nonEscape[$get[url]];:;&COLON&]:0:0}
        {shadow:7.5:#FFFFFF}
        {addfont:Futura:./Futura.ttf}
        {text:Meow &COLON&3:100px Futura::center:400}
        {stroketext:Meow &COLON&3:100px Futura:#FFFFFF:center:400:1}
    ]
    $let[url;$jsonRequest[https://ild.vercel.app/api/cat;image]]
    `
  },
];
