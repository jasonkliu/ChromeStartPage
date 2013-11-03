ChromeStartPage
===============

Custom start page and new tab page for Google Chrome.

How to add to Chrome:
* Go to chrome://extensions/ and check "Load unpacked extension". Now navigate to this folder.

* In addition, drag the 'newtab.html' file into Chrome. Then go to chrome://settings/ and click "Open a specific 
page or set of pages" under "On startup". Now click "Use current pages" to set the homepage.

* Uninstallation is the reverse of installation; change your home page back and uninstall the extension.

* If you need an 'imperial' clock (12:34pm, etc) delete 'clock.js' and rename 'clock_imperial.js' to 'clock.js'.


How to add to Firefox (doesn't require extension):
* Drag 'newtab_firefox.html' into Firefox. Then go to Options and under Home Page, click "Use Current Page".
* NOTE: Firefox doesn't like gradients so the background is slightly modified from the Chrome version.

* Open a new tab and type about:config in the address bar. Search for "browser.newtab.url".

* Double click on it and copy the home page url from Options into the field. 

* Uninstallation is the reverse of installation; change your home page back and fix about:config.

* If you need an 'imperial' clock (12:34pm, etc) delete 'clock.js' and rename 'clock_imperial.js' to 'clock.js'.
