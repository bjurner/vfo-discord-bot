import {ENV} from '../../../environment/environment';
import BehaviourSupplier from '../behaviour-supplier';
import {Supplier} from '../supplier-decorator';

@Supplier()
export class StartBehaviourSupplier implements BehaviourSupplier {
   
    supplyBehaviour() {

        ENV.CLIENT.on('ready', () => {
            console.log("Connected as " + ENV.CLIENT.user.tag)
            ENV.CLIENT.guilds.forEach((guild) => {
              console.log("- " + guild.name)

              // List all channels
              guild.channels.forEach((channel) => {
                console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
              })
            })

            

        });

        console.log("Start Behavior Ready");
    }


}
