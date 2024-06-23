const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {

    // async introduction(request) {
    //   return Response.menu.fromArrayOfString(
    //     f("intro", [request.name])
    //   );
    // }

    async centimeter(request) {
      return this.reply(`▱▰▱「 CENTIMETER -V.1 」▱▰▱\n╭──────────────────\n│ Botname : _Centigram_\n│ Owner : _GreenLeaf_\n│ Pengguna : _${request.name}_\n│ Game : _Brave Nine_\n╰──────────────────\n┏❐ HERO META ❐\n┃⭔.mythic\n┃⭔.exalted\n┃⭔.legend\n┃⭔.fifeStar\n┗❐\n┏❐ LIST MENU ❐\n┃⭔.general\n┃⭔.special\n┃⭔.update\n┗❐\n▬▭▬▭▬▭▬▭▬▭\n「 RUNTIME BOT 」\n00 Menit, 00 Detik\n▬▭▬▭▬▭▬▭▬▭▬▭`)
    }

    async mythic(request) {
      return this.reply("⭔ Iselok, Eda")
    }
  
    async exalted(request) {
      return this.reply("⭔ Pyran")
    }
  
    async legend(request) {
      return this.reply("⭔ Indra, Enma, Venus")
    }
  
    async fifeStar(request) {
      return this.reply("⭔ Hero Tolol")
    }
  
    async general(request) {
      return this.reply("⭔ Maaf, Sistem Sedang Maintenance Karena Developer Sedang Ngopi...")
    }
  
    async special(request) {
      return this.reply("⭔ Maaf, Sistem Sedang Maintenance Karena Developer Sedang Ngopi...")
    }
  
    async update(request) {
      return this.reply("⭔ Maaf, Sistem Sedang Maintenance Karena Developer Sedang Ngopi...")
    }
}