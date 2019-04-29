import {StaticBehaviourSupplier} from './static-behaviour/static-behaviour-supplier';

/**
 * Specify implementations of {@link BehaviourSupplier} here.
 */
export default class BehaviourSupplierModule {
    public static initialize() {
        StaticBehaviourSupplier
    }
}
