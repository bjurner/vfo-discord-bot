import {ENV} from './environment/environment';
import BehaviourSupplierModule from './src/behaviour-supplier/behaviour-supplier.module';

BehaviourSupplierModule.initialize();

ENV.CLIENT.login(ENV.SECRET);
