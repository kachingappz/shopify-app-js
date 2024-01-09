/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/

import {Session} from '../../../../lib/session/session';
import {queueMockResponse} from '../../../../lib/__tests__/test-helper';
import {testConfig} from '../../../../lib/__tests__/test-config';
import {ApiVersion} from '../../../../lib/types';
import {shopifyApi} from '../../../../lib';

import {restResources} from '../../2024-01';

describe('PaymentTransaction resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const session = new Session({
    id: '1234',
    shop: domain,
    state: '1234',
    isOnline: true,
  });
  session.accessToken = 'this_is_a_test_token';

  it('test_1', async () => {
    const shopify = shopifyApi(
      testConfig({apiVersion: ApiVersion.January24, restResources}),
    );

    queueMockResponse(JSON.stringify({"transactions": [{"id": 699519475, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-50.00", "fee": "0.00", "net": "-50.00", "source_id": 460709370, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2024-01-03T09:28:43-05:00", "adjustment_order_transactions": []}, {"id": 77412310, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "50.00", "fee": "0.00", "net": "50.00", "source_id": 374511569, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2024-01-03T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 1006917261, "type": "refund", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-3.45", "fee": "0.00", "net": "-3.45", "source_id": 1006917261, "source_type": "Payments::Refund", "source_order_id": 217130470, "source_order_transaction_id": 1006917261, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 777128868, "type": "refund", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-8.05", "fee": "0.00", "net": "-8.05", "source_id": 777128868, "source_type": "Payments::Refund", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 758509248, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-1.50", "fee": "-0.25", "net": "-1.75", "source_id": 764194150, "source_type": "charge", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 746296004, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "10.00", "fee": "2.00", "net": "8.00", "source_id": 746296004, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 890672011, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 515523000, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.65", "net": "10.85", "source_id": 1006917261, "source_type": "Payments::Refund", "source_order_id": 217130470, "source_order_transaction_id": 1006917261, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 482793472, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "0.45", "fee": "0.00", "net": "0.45", "source_id": 204289877, "source_type": "charge", "source_order_id": 217130470, "source_order_transaction_id": 567994517, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 382557793, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "0.20", "fee": "0.00", "net": "0.20", "source_id": 204289877, "source_type": "charge", "source_order_id": 217130470, "source_order_transaction_id": 567994517, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 365577382, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-3.45", "fee": "0.00", "net": "-3.45", "source_id": 1006917261, "source_type": "Payments::Refund", "source_order_id": 217130470, "source_order_transaction_id": 1006917261, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 201521674, "type": "refund", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-2.00", "fee": "0.00", "net": "-2.00", "source_id": 971443537, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 461790020, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 188711209, "type": "capture", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-11.37", "fee": "0.00", "net": "-11.37", "source_id": 188711209, "source_type": "charge", "source_order_id": 923751907, "source_order_transaction_id": 972637531, "processed_at": "2024-01-02T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 977134221, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "15.00", "net": "-115.00", "source_id": 297752803, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 774282320, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "15.00", "net": "-115.00", "source_id": 46484353, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 726130462, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-11.50", "fee": "15.00", "net": "-26.50", "source_id": 598735659, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 590656313, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "15.00", "net": "-115.00", "source_id": 297752803, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 585267611, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-50.00", "fee": "0.00", "net": "-50.00", "source_id": 46484353, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 295058327, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "-15.00", "net": "115.00", "source_id": 297752803, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 144665135, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "2.83", "fee": "-15.00", "net": "17.83", "source_id": 297752803, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2023-12-23T09:28:43-05:00", "adjustment_order_transactions": null}, {"id": 1039379438, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-10.00", "fee": "0.00", "net": "-10.00", "source_id": 98265485, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 996672915, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 996672915, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 911614749, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 31693764, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 843310825, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.63", "net": "10.87", "source_id": 843310825, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 841651232, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 841651232, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 777723124, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 777723124, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 744334347, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 14450113, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": [{"id": 348327371, "amount": "11.50", "order": {"id": 625362839, "name": "#1001"}}]}, {"id": 717600021, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 717600021, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 645292099, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 717600021, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 637679484, "type": "SHOPIFY_COLLECTIVE_DEBIT_REVERSAL", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "1.00", "fee": "0.00", "net": "1.00", "source_id": 637679484, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 620327031, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.63", "net": "10.87", "source_id": 620327031, "source_type": "charge", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 524892362, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 87730317, "source_type": "adjustment", "source_order_id": 625362839, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": [{"id": 348327371, "amount": "11.50", "order": {"id": 625362839, "name": "#1001"}}]}, {"id": 510004917, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 504962724, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 504303358, "type": "seller_protection_credit_reversal", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 504303358, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 459441379, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 14450113, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": [{"id": 348327371, "amount": "11.50", "order": {"id": 625362839, "name": "#1001"}}]}, {"id": 427940661, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "150.00", "fee": "0.00", "net": "150.00", "source_id": 427940661, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 400852343, "type": "reserve", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-42.00", "fee": "0.00", "net": "-42.00", "source_id": null, "source_type": null, "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 381560291, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-150.00", "fee": "0.00", "net": "-150.00", "source_id": 381560291, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 357948134, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "10.00", "fee": "0.46", "net": "9.54", "source_id": 971443537, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 461790020, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 344667176, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.50", "fee": "0.50", "net": "100.00", "source_id": 291591126, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 316417004, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.50", "net": "11.00", "source_id": 316417004, "source_type": "charge", "source_order_id": 753768948, "source_order_transaction_id": 316417004, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 294868963, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 294868963, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 268738895, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "1000.00", "fee": "0.00", "net": "1000.00", "source_id": 60315799, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 250467535, "type": "reserve", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "42.00", "fee": "0.00", "net": "42.00", "source_id": null, "source_type": null, "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 217609728, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.00", "net": "11.50", "source_id": 930299385, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 348327371, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 193054836, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.50", "net": "11.00", "source_id": 193054836, "source_type": "charge", "source_order_id": 753768948, "source_order_transaction_id": 192808135, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 138130604, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "150.00", "fee": "0.00", "net": "150.00", "source_id": 138130604, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 117567798, "type": "SHOPIFY_COLLECTIVE_DEBIT_REVERSAL", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "1.00", "fee": "0.00", "net": "1.00", "source_id": 117567798, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 105879119, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 105879119, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": []}, {"id": 103606837, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 103606837, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00", "adjustment_order_transactions": null}, {"id": 567994517, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.65", "net": "10.85", "source_id": 204289877, "source_type": "charge", "source_order_id": 217130470, "source_order_transaction_id": 567994517, "processed_at": "2014-01-21T13:05:38-05:00", "adjustment_order_transactions": null}]}));

    await shopify.rest.PaymentTransaction.transactions({
      session: session,
      payout_id: "623721858",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2024-01/shopify_payments/balance/transactions.json',
      query: 'payout_id=623721858',
      headers,
      data: undefined
    }).toMatchMadeHttpRequest();
  });

});
