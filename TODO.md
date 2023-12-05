[] Logging in main folders
[] Session creation and replacing local storage with session
[] Stripe products
[] Google Tag Script
[] Add prettier

Friday: 

[] Fixing funnel
[] Fix video component
[] Add subscription

Looks like you have an order in progress
Button 1 text: start over
button 2: change color: registate color + text: start over


### Funnel
1. Stripe registered agent fee: recurring fee 45/year (start this fee after 1 year).

Product: LLC Gold, LLC Premium etc are one time fee.

Bookkeeping-essential: same for all the states 200
Office-space:  ONLY FOR DELAWARE + 250/month (recurring fee).


### Notes:
1. Main page:
   1. 80 percent problem
2. Stripe'e product eklenecek: 
   1. Registered Agent: 8.99 /month, 75 usd/yearly
      1. All for every state
      2. Will be free for first year and then recurring 
   2. Expedited EIN 
      1. 75 usd - Amerika  SSN olmayan
      2. 750 usd - Amerika SSN olan
3. Expedited EIN upsell page (in funnel)
    1. Automated word document sending by email to customer.
4. Video component old guy:
    1. Remove it 
    2. 60 day money back guarantee: put * and write (except state fee)
5. Support buisness component:
   1. Compact design of cards. 
   2. Fix broken stuff there.
   3. Each card is a funnel page.


## 29 - November - 2023 
1. Remove the Your buisness your shield component.
2. Add a new page before review and company name for upsells. 
   1. Compliance reminder:
      1. Only will be added for silver packet.
      2. Wont be shown on upsell page if a person has selected gold, plat package.
      3. State doesn't matter (need to confirm).
   2. EIN 
      1. Will be shown for all the packages.
      2. Expediated EIN (Fast processing time)
      3. 750 USD. 
      4. State doesn't matter.
   3. Virtual Mailbox 
      1. Only in delaware.
      2. Show redirection link in review.
   4. Office Space
      1. Only in delaware.
      2. 250 USD/month.
   5. Aposittle
      1. Only in delaware
   6. Doing Buisness As (will talk later)
   
   Upsell products on same page or different pages? (Talk with Cihan abi)


## For verfication of user:
1. to verify the user get the cookie from session api on backed and check for user prevlige
   access. If the user has access then execute the specific code else return 404
   that says not found. CHeck on the front end route for the user's access to a specific 
   feature if he doesn't have access then redirect to 404 page.
   
