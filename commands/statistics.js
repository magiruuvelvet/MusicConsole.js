/* Music Console
 * @CmdStatistics.js
 *
 * Command: statistics
 * prints results about the media library
 *
 */

const tilde = require('utils/home-tilde.js');

const Command = require('sys/command.js');

function CmdStatistics(name)
{
    Command.call(this, name);
}

CmdStatistics.prototype = Object.create(Command.prototype);
CmdStatistics.prototype = {

execute: function(args)
{
    console.log(

        " ┌──── " + global.ansi.style.bold + "Library Paths" + global.ansi.style.reset + '\n' +
        " │" + '\n' +
        " ├─ Root Path:        " + tilde(global.medialib.path()) + '\n' +
        " ├─ Cache Path:       " + tilde(global.medialib.cachePath()) + '\n' +
        " │" + '\n' +
        " ├──── " + global.ansi.style.bold + "Media Types" + global.ansi.style.reset + '\n' +
        " │" + '\n' +
        " ├─ Audio: " + global.medialib.mediaTypes(global.MediaType.Audio) + '\n' +
        " ├─ Video: " + global.medialib.mediaTypes(global.MediaType.Video) + '\n' +
        " ├─ Module Tracker: " + global.medialib.mediaTypes(global.MediaType.ModuleTracker) + '\n' +
        " │" + '\n' +
        " ├──── " + global.ansi.style.bold + "Counters" + global.ansi.style.reset + '\n' +
        " │" + '\n' +
        " ├─ # of audio files:       " + global.medialib.count(global.MediaType.Audio) + '\n' +
        " ├─ # of video files:       " + global.medialib.count(global.MediaType.Video) + '\n' +
        " ├─ # of mod files:         " + global.medialib.count(global.MediaType.ModuleTracker) + '\n' +
        " │" + '\n' +
        " ├─ # of total media files: " + global.medialib.count() + '\n' +
        " │" + '\n' +
        ""
    );
}

} // prototype

module.exports = CmdStatistics;
