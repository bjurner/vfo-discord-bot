import {StaticBehaviourSupplier} from './static-behaviour/static-behaviour-supplier';
import {PlayerBehaviourSupplier} from './player-behaviour/player-behaviour-supplier';

/**
 * Specify implementations of {@link BehaviourSupplier} here.
 */
export default class BehaviourSupplierModule {
    public static initialize() {
        StaticBehaviourSupplier
        PlayerBehaviourSupplier
    }
}
