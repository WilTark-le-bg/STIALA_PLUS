module.exports = [
    {
        name: "jouer",
        code: `
        $deletecommand 
        $title[Son joué : $message]
        $color[#F9826D]
        $playTrack[$message[1] $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8];youtube]
        $joinVC`
        }
]