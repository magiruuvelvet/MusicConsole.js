/* Music Console
 * @commands.js
 *
 * Commands
 *
 */

const termformat = require('utils/termformat.js');

const n_cmd = global.settings.commands();

function cmd(name)
{
    return "../commands/" + name + ".js";
}

const commands = [
    new (require(cmd("audio")))       (n_cmd.audio),
    new (require(cmd("video")))       (n_cmd.video),
    new (require(cmd("module")))      (n_cmd.module),
    new (require(cmd("search")))      (n_cmd.search),
    new (require(cmd("browse")))      (n_cmd.browse),
    new (require(cmd("random")))      (n_cmd.random),
    new (require(cmd("shuffle")))     (n_cmd.shuffle),
    new (require(cmd("repeat")))      (n_cmd.repeat),
    new (require(cmd("history")))     (n_cmd.history),
    new (require(cmd("statistics")))  (n_cmd.statistics),
    new (require(cmd("rescan")))      (n_cmd.rescan),
    new (require(cmd("playlist")))    (n_cmd.playlist),
    new (require(cmd("plistfile")))   (n_cmd.plistfile),
    new (require(cmd("clear")))       (n_cmd.clear),
    new (require(cmd("exit")))        (n_cmd.exit)
];

// check if all commands are valid
for (const i of commands)
{
    if (!i.m_valid)
    {
        console.error(termformat.ansi.bold + termformat.foreground.rgb(195, 0, 0)
            + "FATAL:" + termformat.ansi.reset + " "
            + "One or more commands contains spaces, this behavior is not supported!");
        console.error("Please fix this before you continue using this program.");
        global.process_cleanup_and_exit(2);
    }
}

// check command list for duplicate names
for (let i = 0; i < commands.length; i++)
{
    for (let j = 0; j < commands.length; j++)
    {
        if (i != j && commands[i].m_name != '' && commands[j].m_name != '' && commands[i].m_name == commands[j].m_name)
        {
            // terminate program when command list has duplicates
            // i will not support this behavior and the user should
            // not do this in the first place anyway
            console.error(termformat.ansi.bold + termformat.foreground.rgb(195, 0, 0)
                + "FATAL:" + termformat.ansi.reset + " "
                + "The command list has duplicates, this behavior is not supported!");
            console.error("Please fix this before you continue using this program.");
            global.process_cleanup_and_exit(2);
        }
    }
}

// remove 'exit' command from the main list and return it separately
module.exports = {
    "commands": commands,
    "exit": commands.pop()
};
