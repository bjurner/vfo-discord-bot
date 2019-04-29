import {ENV} from '../resources/environment';
import BehaviourSupplierModule from './behaviour-supplier/behaviour-supplier.module';

BehaviourSupplierModule.initialize();

ENV.CLIENT.login(ENV.SECRET);
