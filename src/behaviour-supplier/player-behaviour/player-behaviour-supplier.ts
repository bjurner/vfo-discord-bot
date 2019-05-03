import {ENV} from '../../../environment/environment';
import BehaviourSupplier from '../behaviour-supplier';
import {Supplier} from '../supplier-decorator';
import {Player} from './player';

@Supplier()
export class PlayerBehaviourSupplier implements BehaviourSupplier {
   
    supplyBehaviour() {

    	var testPlayer = new Player();
    	testPlayer.discordId = "399246217726394370";
    	testPlayer.username = "bjurner";
    	testPlayer.lvl = 42;
    	testPlayer.totalRP = 142;
    	testPlayer.abyssKills = 242;
    	testPlayer.dailyButrals = 342;

        ENV.CLIENT.on('message', (message: any) => {
            // channel id for #bot-spam, only spam here
            if (message.channel.id != "567477008397762600") {
              return;
            }

            // will return the players data
            if (message.content == ENV.PREFIX + ' status') {
               // message.reply("i have no status for you");
               message.channel.send("DiscordName: " + message.author +
               				"\nUsername: " + testPlayer.username +
              				"\nLevel: " + testPlayer.lvl +
              				"\nBank RP: " + testPlayer.totalRP +
              				"\nAbyss Kills: " + testPlayer.abyssKills +
              				"\nMax Daily Brutals: " + testPlayer.dailyButrals);
            }
        });

        console.log("Player Behavior Ready");
    }


}

/**

It shows :

Username:
LvL:
Total Bank:

Abyss kills:
Brutal kills:.......

*/