import {ConfigInterface} from '../base-types';
import {FutureFlagOptions} from '../../future/flags';

import {check} from './check';
import {request} from './request';
import {cancel} from './cancel';
import {subscriptions} from './subscriptions';
import {ShopifyBilling} from './types';

export {ShopifyBilling} from './types';

export function shopifyBilling<Future extends FutureFlagOptions>(
  config: ConfigInterface,
): ShopifyBilling<Future> {
  return {
    check: check(config),
    request: request(config),
    cancel: cancel(config),
    subscriptions: subscriptions(config),
  };
}
