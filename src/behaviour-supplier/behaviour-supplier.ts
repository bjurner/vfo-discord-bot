/**
 * A base class that every supplier should implement, remember to annotate the implementation with {@link Supplier}.
 */
export default interface BehaviourSupplier {
    supplyBehaviour: () => void
}
