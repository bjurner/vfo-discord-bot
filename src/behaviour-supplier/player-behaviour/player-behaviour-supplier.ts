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

        ENV.CLIENT.on('message', (message: any) => {
            if (message.content == ENV.PREFIX + ' status') {
               // message.reply("i have no status for you");
               message.reply("\nUsername: " + testPlayer.username);
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