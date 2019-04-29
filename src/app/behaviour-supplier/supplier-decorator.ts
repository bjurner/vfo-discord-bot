/**
 * Use this decorator on a class that implements {@link BehaviourSupplier}, and then specify the implemented class itself in {@link BehaviourSupplierModule.initialize}.
 *
 * It will call the {@link BehaviourSupplier.supplyBehaviour} for you.
 */
export function Supplier() {
    return function(target: any) {
        new target().supplyBehaviour();
    };
}
