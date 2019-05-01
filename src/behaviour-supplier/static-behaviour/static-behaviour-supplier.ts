import * as fs from 'fs';
import {StaticMessage} from './static-message';
import {ENV} from '../../../environment/environment';
import BehaviourSupplier from '../behaviour-supplier';
import {Supplier} from '../supplier-decorator';

@Supplier()
export class StaticBehaviourSupplier implements BehaviourSupplier {
    file = fs.readFileSync(ENV.RESOURCES_PATH + 'static-behaviours.json');
    messages: Array<StaticMessage> = JSON.parse(this.file.toString());

    supplyBehaviour() {
        this.messages.forEach((staticMessage) => {
            ENV.CLIENT.on('message', (message: any) => {
                if (message.content == ENV.PREFIX + ' ' + staticMessage.onMessage) {
                    message.reply(staticMessage.response);
                }
            });
        });
    }
}
