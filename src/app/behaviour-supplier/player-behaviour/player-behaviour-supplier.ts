import * as fs from 'fs';
import {ENV} from '../../../resources/environment';
import {Supplier} from '../supplier-decorator';
import {BehaviourSupplier} from '../behaviour-supplier';
import {Player} from './player';

@Supplier()
export class PlayerBehaviourSupplier implements BehaviourSupplier {
    //var testPlayer = new Player(username: "BJURN");
    supplyBehaviour() {
        ENV.CLIENT.on('message', (message: any) => {
            if (message.content == ENV.PREFIX + ' status') {
                message.reply("");
            }
        });
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