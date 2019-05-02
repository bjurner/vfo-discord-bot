import * as fs from 'fs';
import {ENV} from '../../../environment/environment';
import BehaviourSupplier from '../behaviour-supplier';
import {Supplier} from '../supplier-decorator';
import {Player} from './player';

@Supplier()
export class PlayerBehaviourSupplier implements BehaviourSupplier {
   
    supplyBehaviour() {

    	var testPlayer = new Player();
    	testPlayer.username = "bjurner";
    	testPlayer.lvl = 42;
    	testPlayer.totalRP = 142;
    	testPlayer.abyssKills = 242;
    	testPlayer.dailyButrals = 342;

        ENV.CLIENT.on('message', (message: any) => {
            if (message.content == ENV.PREFIX + ' status') {
               // message.reply("i have no status for you");
               message.reply("\nUsername: " + testPlayer.username +
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